import { CheckCircle2, ShieldAlert } from "lucide-react";
import { HelpAssistant } from "@/components/help-assistant";

export const metadata = { title: "Help | SAHAY" };

export default function HelpPage() {
  return <div className="page inner-page help-page"><header className="page-header"><p className="eyebrow">HELP CENTRE</p><h1>Understanding starts with a question.</h1><p>No question is too small. Use simple words and take your time.</p></header><HelpAssistant /><section id="safety" className="safety-guide"><div><p className="eyebrow warm"><ShieldAlert size={16} /> STAY SAFE ONLINE</p><h2>Good digital habits help protect you.</h2><p>SAHAY is a guide. We will never ask for a password, OTP, PIN, or bank details.</p></div><ul><li><CheckCircle2 /> Never share an OTP with a stranger.</li><li><CheckCircle2 /> Be careful with unexpected payment requests.</li><li><CheckCircle2 /> Do not click links in suspicious messages.</li><li><CheckCircle2 /> Ask a trusted person if something feels wrong.</li></ul></section></div>;
}
