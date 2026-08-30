import { AuditChecklist } from "@/components/audit-checklist";

export const metadata = { title: "Accessibility Audit | SAHAY" };

export default function AuditPage() { return <div className="page inner-page"><header className="page-header"><p className="eyebrow">QUALITY CHECK</p><h1>Accessibility audit</h1><p>Use this checklist to review the experience from the perspective of a wide range of people. Complete checks as you test them.</p></header><AuditChecklist /></div>; }
