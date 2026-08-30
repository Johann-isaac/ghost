export type Language = "en" | "ta" | "hi";

export const languages: { code: Language; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
];

export const translations = {
  en: {
    services: "Services", help: "Help", accessibility: "Accessibility", research: "Research", about: "About",
    findService: "Find a Service", howItWorks: "How SAHAY Works", simple: "Simple mode", standard: "Standard mode",
    question: "What are you trying to do?", readAloud: "Read aloud", explainThis: "Explain this",
  },
  ta: {
    services: "சேவைகள்", help: "உதவி", accessibility: "அணுகல்தன்மை", research: "ஆய்வு", about: "எங்களைப் பற்றி",
    findService: "ஒரு சேவையைக் கண்டறியவும்", howItWorks: "SAHAY எப்படி உதவுகிறது", simple: "எளிய முறை", standard: "சாதாரண முறை",
    question: "நீங்கள் என்ன செய்ய விரும்புகிறீர்கள்?", readAloud: "சத்தமாகப் படிக்கவும்", explainThis: "இதனை விளக்கவும்",
  },
  hi: {
    services: "सेवाएँ", help: "मदद", accessibility: "सुलभता", research: "शोध", about: "हमारे बारे में",
    findService: "सेवा खोजें", howItWorks: "SAHAY कैसे काम करता है", simple: "सरल मोड", standard: "सामान्य मोड",
    question: "आप क्या करना चाहते हैं?", readAloud: "ज़ोर से पढ़ें", explainThis: "इसे समझाएँ",
  },
} as const;
