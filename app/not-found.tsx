import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return <div className="page inner-page not-found"><Search size={38} /><p className="eyebrow">PAGE NOT FOUND</p><h1>Let’s find a clearer path.</h1><p>This guide is not available. You can return to the service directory and choose another option.</p><Link href="/services" className="primary-button"><ArrowLeft size={18} /> View services</Link></div>;
}
