import { Suspense } from "react";
import { ServiceDirectory } from "@/components/service-directory";

export const metadata = { title: "Services | SAHAY" };

function DirectoryLoading() {
  return <div className="directory-loading" role="status"><span className="spin">◌</span> Preparing the service guides…</div>;
}

export default function ServicesPage() {
  return <div className="page inner-page"><header className="page-header"><p className="eyebrow">SERVICE DIRECTORY</p><h1>Find a service, without the stress.</h1><p>These are clearly labelled demonstration guides. They help you understand what to expect before you use an official website.</p></header><Suspense fallback={<DirectoryLoading />}><ServiceDirectory /></Suspense></div>;
}
