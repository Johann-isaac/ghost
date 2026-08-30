import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ServiceGuide } from "@/components/service-guide";

export function generateStaticParams() { return services.map((service) => ({ service: service.slug })); }

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <ServiceGuide service={service} />;
}
