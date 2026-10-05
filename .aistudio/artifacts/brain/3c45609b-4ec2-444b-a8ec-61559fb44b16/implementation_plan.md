# Min-Max Engineering Services Ltd Corporate Platform

A modern, high-contrast corporate web platform for Min-Max Engineering Services Ltd (RC1459932), delivering an integrated digital presence for mechanical asset integrity, electrical & instrumentation, equipment procurement, technical training, and regulatory compliance verification across the Nigerian Energy, Oil & Gas, and Infrastructure sectors.

### User Review & Critical Decisions

> [!IMPORTANT]
> The architectural direction and user experience were refined through interactive clarification:

- **Confirmed Decision 1 (RFQ Experience)**: Interactive multi-step RFQ wizard with multi-item Bill of Quantities (BOQ) attachment, technical file upload simulation, and service line selection, supplemented by direct WhatsApp / telephone emergency breakdown hotline.
- **Confirmed Decision 2 (Site Architecture)**: Full dedicated Next.js App Router multi-page architecture with deep URLs (`/`, `/services`, `/procurement`, `/training-and-manpower`, `/about`, `/contact`), global sticky navigation, and a universally accessible RFQ trigger modal.
- **Confirmed Decision 3 (Visual Identity)**: Dual surface contrast hierarchy featuring dark industrial hero sections (`#0D1117`, `#161B22`), crisp high-contrast white structural cards (`#FFFFFF`), deep navy corporate anchor (`#0B2545`), industrial teal accent (`#00A896`), and safety orange CTA indicators (`#FF6B35`). No generic pill tags or mechanical code slashes.

---

### 1. Overview & Core Concept

- **What It Does**: Provides international oil companies (IOCs), national oil companies (NOCs), refineries, power utilities, and EPC contractors with a credible, compliant engineering portal. Clients can evaluate certified capabilities (NUPRC, NMDPRA, NOGIC JQS), request formal technical quotes with technical drawings, search the equipment procurement catalog, enroll staff in practical engineering training, and requisition certified technical manpower.
- **Target Audience / Persona**: 
  - *Engineering & Maintenance Directors*: Seeking valve repair (up to 400 bar hydrostatic), calibration, NDT testing, pump overhaul, and cathodic protection.
  - *Procurement Managers*: Sourcing OEM valves, actuators, carbon steel piping, and industrial tools with rapid BOQ estimation.
  - *HR & Project Leads*: Requisitioning onshore/offshore certified personnel (E&I supervisors, certified 6G welders, HSE officers) and booking practical technical workshops.
- **Key Value**: Replaces fragmented inquiries with a streamlined, compliant technical pipeline, immediate regulatory verification, and rapid turnaround for both planned turnarounds and 24/7 emergency plant call-outs.

---

### 2. User Experience & Visual Design

#### Key User Flows
1. **Interactive RFQ Workflow**: Accessible anywhere via top navigation or contextual service buttons. Step 1: Service/Procurement Line Selection; Step 2: Technical Scope & Site Location (Onshore, Offshore, Swamp, Facility); Step 3: BOQ / Specifications Attachment; Step 4: Contact details & instant RFQ generation with confirmation ID, downloadable summary, and WhatsApp handoff.
2. **Services Deep-Dive & Inspection Scopes**: Tabbed inspection breakdown across Mechanical Integrity, Electrical & Automation (PLC/DCS), Welding/Fabrication, and Specialized HVAC/Hydro-blasting, complete with testing thresholds (e.g., 400 bar hydrostatic) and standard operating procedures.
3. **Equipment Procurement & Bulk BOQ**: Live searchable and category-filtered catalog of industrial components (valves, instrumentation, carbon steel, PPE). Users can add individual items to an inquiry cart or paste an unstructured multi-line BOQ for bulk quoting.
4. **Training Enrollment & Manpower Requisition**: Interactive curriculum explorer with syllabus highlights, workshop hour requirements, and corporate team registration; paired with an onshore/offshore crew requisition form.
5. **Regulatory & Compliance Verification**: High-visibility credential bar and an interactive document verification viewer displaying NUPRC permits, NMDPRA licenses, NOGIC JQS certification, SCUML, ITF, and Tax Clearance records.

#### Visual Identity & Design System
- **Color Discipline (60-30-10)**:
  - *60% Dominant Neutral Canvas*: Deep midnight canvas (`#0D1117` / `#161B22`) for hero/impact sections, transitioning to ultra-clean neutral slate (`#F8FAFC` / `#FFFFFF`) for content grids and data-dense tables.
  - *30% Structural Surfaces*: Deep navy (`#0B2545`), industrial borders (`#E2E8F0` / `#1E293B`), and crisp card surfaces.
  - *10% Action Accent*: Industrial Teal (`#00A896`) for active filters and verified indicators; Safety Orange (`#FF6B35`) strictly reserved for primary CTA triggers (Request a Quote, Emergency Breakdown).
- **Anti-Slop Discipline**:
  - Zero static pill badges: Metadata uses clean unboxed typography with typographic separators (`·`, `/`).
  - No fake code prefixes (`// 01 ARCHITECTURE` banned; clean editorial numbering `01. Mechanical & Asset Integrity` applied).
  - No floating watermark words or hallucinated scorecards.
- **Typography**:
  - Headings: Architectural sans-serif with tight geometric rhythm (`Syne` / `Clash Display` / `Cabinet Grotesk` aesthetic via high-impact sans styling).
  - Body: Precision geometric sans (`Plus Jakarta Sans` / `Inter`) with optimal line height (1.6) and balanced headline wraps.
  - Metrics & Technical Specs: Tabular numbers (`font-mono tabular-nums`).

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Full Multi-Page Routing vs Single-Page Anchor App**:
  - *Chosen Approach*: Dedicated Next.js App Router pages (`/`, `/services`, `/procurement`, `/training-and-manpower`, `/about`, `/contact`) with consistent shared header/footer layout and persistent interactive RFQ modal.
  - *Why*: Allows distinct indexing, clean link sharing for procurement teams and tender submissions, and focused user reading without endless vertical scrolling.
- **Decision 2: Universal RFQ Modal + In-Page Context Pre-Population**:
  - *Chosen Approach*: When a user clicks "Request Quote" on a specific valve or service card (e.g., "Hydrostatic Testing"), the global modal opens with that specific service preset automatically selected.
  - *Why*: Dramatically reduces friction for technical procurement officers while preserving a single unified RFQ submission engine.
- **Decision 3: Integrated Facility Hub with Direct Location Switcher**:
  - *Chosen Approach*: Tabbed interactive multi-facility interface detailing Head Office (Ogbogoro, Port Harcourt), Heavy Machine Workshop (Elelenwo, Port Harcourt), and Lagos Corporate Liaison Office (Ajah), including facility capabilities, maps coordinates, and operational contact lines.

---

### 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             Next.js App Router                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Top Navigation Bar (Logo | 5 Nav Links | Emergency Hotline | [Request RFQ])│
├─────────────┬──────────────┬──────────────┬──────────────────┬──────────────┤
│      /      │  /services   │ /procurement │ /training-and-   │    /about    │
│  Home Page  │   Services   │   Catalog    │     manpower     │ & Compliance │
│             │  & Standards │  & Bulk BOQ  │    & Manpower    │  & Directory │
├─────────────┴──────────────┴──────────────┴──────────────────┴──────────────┤
│              Universal Interactive RFQ Modal (Context-Aware)                │
│    Step 1: Service Lines -> Step 2: Scope & Site -> Step 3: BOQ -> Submit   │
├─────────────────────────────────────────────────────────────────────────────┤
│       Compliance Document Viewer Modal (NUPRC, NMDPRA, NOGIC JQS, etc.)     │
├─────────────────────────────────────────────────────────────────────────────┤
│           Shared Corporate Footer (Accreditations, Addresses, Links)        │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### State & Data Modeling
1. **RFQ Store / Context (`rfq-context.tsx`)**:
   - Manages modal visibility, active step, selected service line, project location, file/scope notes, and BOQ items.
   - Provides helper method `openRfqWithPreset(serviceName: string)`.
2. **Catalog & Service Data (`data/services.ts`, `data/procurement.ts`, `data/training.ts`)**:
   - Structured dataset of all mechanical, electrical, fabrication, and corrosion services with technical specifications (pressures, standards like ASME/API/ISO).
   - Equipment catalog with categories, part numbers, OEM verification, and instant quote dispatch.
   - Training curricula with durations, practical workshop hours, and target engineer levels.
3. **Compliance Registry (`data/compliance.ts`)**:
   - Official records: RC1459932, NUPRC Permits, NMDPRA licenses, NOGIC JQS Vendor Code, SCUML, NSITF, ITF.
4. **Facility Registry (`data/facilities.ts`)**:
   - Port Harcourt Head Office, Elelenwo Workshop, and Lagos Branch with addresses, telephone lines, and specialized tooling inventory.
