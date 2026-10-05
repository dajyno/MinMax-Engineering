'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface BoqRow {
  id: string;
  item: string;
  quantity: string;
  unit: string;
  specNotes: string;
}

export interface RfqFormData {
  serviceCategory: string;
  customCategory?: string;
  serviceTitle: string;
  facilityScope: string;
  customFacilityScope?: string;
  urgency: string;
  siteLocation: string;
  projectDescription: string;
  technicalSpecs: string;
  boqRows: BoqRow[];
  contactName: string;
  contactCompany: string;
  contactEmail: string;
  contactPhone: string;
  attachedFileName?: string;
  trackingId?: string;
}

interface RfqContextType {
  isOpen: boolean;
  isContactModalOpen: boolean;
  activeStep: number;
  formData: RfqFormData;
  submittedRfqId: string | null;
  openRfq: () => void;
  closeRfq: () => void;
  openContactModal: () => void;
  closeContactModal: () => void;
  openRfqWithPreset: (serviceOrProduct: string, category?: string, details?: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  updateFormData: (updates: Partial<RfqFormData>) => void;
  addBoqRow: () => void;
  removeBoqRow: (id: string) => void;
  updateBoqRow: (id: string, field: keyof BoqRow, value: string) => void;
  parseBulkBoqText: (text: string) => void;
  submitRfq: () => Promise<string>;
  resetRfq: () => void;
}

const defaultFormData: RfqFormData = {
  serviceCategory: 'Mechanical & Asset Integrity',
  customCategory: '',
  serviceTitle: 'Valve Repair, Overhaul & Recertification',
  facilityScope: 'Workshop Testing & Overhaul',
  customFacilityScope: '',
  urgency: 'Planned Turnaround Window',
  siteLocation: 'Port Harcourt / Offshore Niger Delta',
  projectDescription: '',
  technicalSpecs: '',
  boqRows: [],
  contactName: '',
  contactCompany: '',
  contactEmail: '',
  contactPhone: '',
};

const RfqContext = createContext<RfqContextType | undefined>(undefined);

export function RfqProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState<RfqFormData>(defaultFormData);
  const [submittedRfqId, setSubmittedRfqId] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const openRfq = () => {
    setIsOpen(true);
    setSubmittedRfqId(null);
  };

  const closeRfq = () => {
    setIsOpen(false);
  };

  const openRfqWithPreset = (serviceOrProduct: string, category?: string, details?: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceTitle: serviceOrProduct,
      serviceCategory: category || prev.serviceCategory,
      technicalSpecs: details || prev.technicalSpecs,
    }));
    setActiveStep(1);
    setSubmittedRfqId(null);
    setIsOpen(true);
  };

  const nextStep = () => {
    setActiveStep((curr) => Math.min(curr + 1, 4));
  };

  const prevStep = () => {
    setActiveStep((curr) => Math.max(curr - 1, 1));
  };

  const setStep = (step: number) => {
    setActiveStep(step);
  };

  const updateFormData = (updates: Partial<RfqFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const addBoqRow = () => {
    setFormData((prev) => ({
      ...prev,
      boqRows: [
        ...prev.boqRows,
        {
          id: `row-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          item: '',
          quantity: '1',
          unit: 'Units',
          specNotes: '',
        },
      ],
    }));
  };

  const removeBoqRow = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      boqRows: prev.boqRows.filter((r) => r.id !== id),
    }));
  };

  const updateBoqRow = (id: string, field: keyof BoqRow, value: string) => {
    setFormData((prev) => ({
      ...prev,
      boqRows: prev.boqRows.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    }));
  };

  const parseBulkBoqText = (text: string) => {
    const lines = text.split('\n').filter((l) => l.trim().length > 0);
    const parsedRows: BoqRow[] = lines.map((line, idx) => {
      // Split by tab, comma or pipe if formatted, otherwise entire line as item
      const parts = line.split(/[|\t,]/).map((p) => p.trim());
      if (parts.length >= 3) {
        return {
          id: `parsed-${Date.now()}-${idx}`,
          item: parts[0] || 'Unspecified Item',
          quantity: parts[1] || '1',
          unit: parts[2] || 'Units',
          specNotes: parts[3] || '',
        };
      }
      return {
        id: `parsed-${Date.now()}-${idx}`,
        item: line.trim(),
        quantity: '1',
        unit: 'Lot',
        specNotes: 'Bulk parsed from procurement schedule',
      };
    });

    if (parsedRows.length > 0) {
      setFormData((prev) => ({
        ...prev,
        boqRows: [...prev.boqRows.filter((r) => r.item.trim() !== ''), ...parsedRows],
      }));
    }
  };

  const submitRfq = async (): Promise<string> => {
    // Generate deterministic tracking code: MM-RFQ-2026-XXXX
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    const trackingCode = `MM-RFQ-2026-${randomHex}`;

    setFormData((prev) => ({ ...prev, trackingId: trackingCode }));
    setSubmittedRfqId(trackingCode);

    // Persist to local storage for user recall
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('mm_rfq_history');
        const history = stored ? JSON.parse(stored) : [];
        history.unshift({
          trackingCode,
          date: new Date().toISOString(),
          ...formData,
        });
        localStorage.setItem('mm_rfq_history', JSON.stringify(history.slice(0, 10)));
      }
    } catch {
      // ignore storage errors
    }

    // Transmit structured RFQ to Formspree endpoint: https://formspree.io/f/xbgdjroe
    try {
      const activeBoqItems = formData.boqRows.filter((r) => r.item.trim() !== '');
      const boqSummary =
        activeBoqItems.length > 0
          ? activeBoqItems
              .map(
                (r, i) =>
                  `${i + 1}. Item: ${r.item} | Qty: ${r.quantity} ${r.unit} | Specs: ${r.specNotes || 'N/A'}`
              )
              .join('\n')
          : 'None specified';

      const payload = {
        _subject: `[Min-Max RFQ] ${formData.serviceTitle || 'Engineering Requisition'} - ${formData.contactCompany || formData.contactName} [${trackingCode}]`,
        tracking_code: trackingCode,
        client_name: formData.contactName,
        company: formData.contactCompany,
        email: formData.contactEmail,
        phone: formData.contactPhone,
        service_category:
          formData.serviceCategory === 'Other' && formData.customCategory
            ? `Other: ${formData.customCategory}`
            : formData.serviceCategory,
        service_title: formData.serviceTitle,
        facility_scope:
          formData.facilityScope === 'Other' && formData.customFacilityScope
            ? `Other: ${formData.customFacilityScope}`
            : formData.facilityScope,
        site_location: formData.siteLocation || 'Port Harcourt',
        urgency: formData.urgency,
        project_description: formData.projectDescription || 'None provided',
        technical_specs: formData.technicalSpecs || 'Standard OEM/API specifications',
        bill_of_quantities: boqSummary,
        attached_file_reference: formData.attachedFileName || 'No file attached',
        submitted_at: new Date().toISOString(),
      };

      await fetch('https://formspree.io/f/xbgdjroe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error('Formspree RFQ submission error:', err);
    }

    return trackingCode;
  };

  const resetRfq = () => {
    setFormData(defaultFormData);
    setActiveStep(1);
    setSubmittedRfqId(null);
  };

  return (
    <RfqContext.Provider
      value={{
        isOpen,
        isContactModalOpen,
        activeStep,
        formData,
        submittedRfqId,
        openRfq,
        closeRfq,
        openContactModal,
        closeContactModal,
        openRfqWithPreset,
        nextStep,
        prevStep,
        setStep,
        updateFormData,
        addBoqRow,
        removeBoqRow,
        updateBoqRow,
        parseBulkBoqText,
        submitRfq,
        resetRfq,
      }}
    >
      {children}
    </RfqContext.Provider>
  );
}

export function useRfq() {
  const context = useContext(RfqContext);
  if (!context) {
    throw new Error('useRfq must be used within an RfqProvider');
  }
  return context;
}
