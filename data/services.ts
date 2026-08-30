export type ServiceGuide = {
  slug: string;
  category: "benefits" | "documents" | "healthcare" | "travel" | "government" | "digital";
  title: string;
  shortTitle: string;
  summary: string;
  whatIsIt: string;
  whoMightNeedIt: string;
  documents: { name: string; explanation: string }[];
  terms: { term: string; source: string; simple: string; why: string }[];
  steps: { title: string; body: string; note?: string; term?: string }[];
  sourceLabel: string;
};

export const services: ServiceGuide[] = [
  {
    slug: "senior-citizen-benefits",
    category: "benefits",
    title: "Senior Citizen Benefits",
    shortTitle: "Benefits guidance",
    summary: "Understand how to look for benefits and prepare before using an official service.",
    whatIsIt: "This guide helps you get ready to explore public benefits that may be relevant to older adults. It does not decide eligibility or submit an application.",
    whoMightNeedIt: "Anyone who wants a calm starting point before checking a government benefit service.",
    documents: [
      { name: "Identity document", explanation: "A document that helps show who you are, such as an Aadhaar card, passport, or driving licence." },
      { name: "Bank details", explanation: "Information about your bank account. Only enter it on a verified official website." },
      { name: "Address proof", explanation: "A document that shows where you live, if the official service asks for it." },
    ],
    terms: [
      { term: "Self-attested", source: "Submit self-attested proof of identity.", simple: "Make a copy of your ID and sign the copy yourself.", why: "Your signature shows that you confirm the copy is yours." },
      { term: "Eligibility", source: "Check eligibility before applying.", simple: "This means checking whether a service is meant for someone in your situation.", why: "Official rules decide who can receive a benefit." },
    ],
    steps: [
      { title: "Before you start", body: "Gather the documents you already have. You do not need to upload anything to SAHAY.", note: "Keep originals safe. Use copies only when the official service asks for them." },
      { title: "Understand the service", body: "Read the official service description slowly. Look for who it is for and what it asks you to do.", term: "Eligibility" },
      { title: "Check the official website", body: "Use the official government portal to find the current rules. SAHAY cannot confirm requirements, fees, or deadlines." },
      { title: "Apply when ready", body: "Complete the task on the official website or get support from an authorised local help centre if you prefer." },
    ],
    sourceLabel: "Government of India portal (verify the relevant service before continuing)",
  },
  {
    slug: "aadhaar-services",
    category: "documents",
    title: "Aadhaar-related Services",
    shortTitle: "Aadhaar guidance",
    summary: "Prepare to understand an Aadhaar-related task without sharing your personal details here.",
    whatIsIt: "A calm, demonstration guide to help you recognise common steps in an identity-document service.",
    whoMightNeedIt: "Someone who wants to understand an online identity-document task before opening the official site.",
    documents: [
      { name: "Your Aadhaar details", explanation: "Keep your own document nearby. SAHAY never asks you to enter the number." },
      { name: "Mobile phone", explanation: "Some official services may use a code sent to a registered mobile number." },
      { name: "Supporting document", explanation: "Use only the documents the official service currently requests." },
    ],
    terms: [
      { term: "OTP", source: "Enter the OTP sent to your mobile phone.", simple: "An OTP is a one-time code sent to you to confirm it is really you.", why: "It helps protect your account. Never share it with another person." },
      { term: "Registered mobile number", source: "Use your registered mobile number.", simple: "This is the phone number already linked with your official record.", why: "The official service may send a security code to that number." },
    ],
    steps: [
      { title: "Decide what you need", body: "Name the task in simple words, such as checking a document detail or finding an update option." },
      { title: "Open the official service", body: "Check the website address carefully before you type any details.", term: "OTP" },
      { title: "Read each screen", body: "Move one screen at a time. Stop if an instruction feels unclear and use Explain this." },
      { title: "Keep a record", body: "After completing an official task, save any reference number only in a secure place." },
    ],
    sourceLabel: "Government of India portal (use the verified Aadhaar service link from there)",
  },
  {
    slug: "public-healthcare",
    category: "healthcare",
    title: "Public Healthcare Schemes",
    shortTitle: "Healthcare guidance",
    summary: "Understand how to explore a public healthcare service with confidence.",
    whatIsIt: "This is a plain-language starting point for finding current information about a public healthcare service.",
    whoMightNeedIt: "People who want to understand where to look before they use an official healthcare website or centre.",
    documents: [
      { name: "Identity document", explanation: "Bring or keep ready an accepted identity document if the official service requests one." },
      { name: "Relevant medical papers", explanation: "Only share information directly with an authorised healthcare provider or official service." },
      { name: "Contact information", explanation: "A phone number or address may help an official provider contact you." },
    ],
    terms: [
      { term: "Beneficiary", source: "Search for a beneficiary record.", simple: "A beneficiary is a person who may receive help from a programme.", why: "The official service uses this word to describe the person receiving support." },
      { term: "Empanelled", source: "Choose an empanelled hospital.", simple: "This means a hospital that has been approved to take part in that programme.", why: "The programme may have a list of approved providers." },
    ],
    steps: [
      { title: "Name your health task", body: "For example: find a scheme, understand a hospital list, or learn where to ask a question." },
      { title: "Find current official information", body: "Rules and services can change. Use an official source or an authorised healthcare centre for the latest details." },
      { title: "Prepare questions", body: "Write down what you want to know. This can make a call or visit less stressful." },
      { title: "Ask for trusted support", body: "For medical advice, talk to a qualified healthcare professional. SAHAY is not medical advice." },
    ],
    sourceLabel: "Government of India portal (verify current healthcare information)",
  },
  {
    slug: "railway-ticket-booking",
    category: "travel",
    title: "Railway Ticket Booking",
    shortTitle: "Travel guidance",
    summary: "A simple way to prepare for booking a train ticket online.",
    whatIsIt: "This guide explains the kind of choices you may see when booking travel. It does not book tickets or confirm availability.",
    whoMightNeedIt: "Anyone who would like to understand an online travel booking before they start.",
    documents: [
      { name: "Travel details", explanation: "Know your starting place, destination, and preferred travel date." },
      { name: "Passenger details", explanation: "Enter only the information requested by the verified official booking site." },
      { name: "Payment method", explanation: "Use a secure, trusted payment method. Never share a card PIN or OTP." },
    ],
    terms: [
      { term: "PNR", source: "Your PNR has been generated.", simple: "A PNR is a booking reference number for your journey.", why: "It helps the official service find your booking." },
      { term: "Waitlist", source: "Your ticket is waitlisted.", simple: "This usually means the seat is not confirmed yet.", why: "Check the official service for the current booking status and rules." },
    ],
    steps: [
      { title: "Plan the journey", body: "Write down where you are travelling from, where you are going, and the date." },
      { title: "Use a verified booking site", body: "Check the website address before signing in or paying. Avoid links from unknown messages." },
      { title: "Review before payment", body: "Read the journey details slowly and make sure they match your plan.", term: "PNR" },
      { title: "Save the booking reference", body: "Keep the official confirmation and reference number somewhere secure." },
    ],
    sourceLabel: "Government of India portal (find the verified railway service from there)",
  },
  {
    slug: "utility-bill-payment",
    category: "digital",
    title: "Utility Bill Payment",
    shortTitle: "Bill payment guidance",
    summary: "Learn safe, steady steps for paying an essential bill online.",
    whatIsIt: "A demonstration guide for understanding a bill-payment process. Use your own provider's verified website for a real payment.",
    whoMightNeedIt: "Anyone who wants a safer checklist before making a digital payment.",
    documents: [
      { name: "Recent bill", explanation: "A recent bill may show the account or customer number requested by the provider." },
      { name: "Verified provider website", explanation: "Type the address yourself or use a trusted official source to find it." },
      { name: "Payment method", explanation: "Use a method you trust. Never disclose your PIN, password, or OTP." },
    ],
    terms: [
      { term: "Consumer number", source: "Enter your consumer number.", simple: "This is the number your utility provider uses to identify your account.", why: "It helps the provider show the correct bill." },
      { term: "Transaction reference", source: "Save your transaction reference.", simple: "This is a record number for your completed payment.", why: "It can help the provider locate the payment if you need assistance." },
    ],
    steps: [
      { title: "Check the bill", body: "Keep a recent bill with you and look for the account details the provider uses." },
      { title: "Open the verified provider site", body: "Do not rely on unexpected links in a message or email." },
      { title: "Review payment details", body: "Before you pay, check the account and amount carefully.", term: "Consumer number" },
      { title: "Keep the confirmation", body: "Save the official payment confirmation or reference number." },
    ],
    sourceLabel: "Government of India portal (verify your local utility provider)",
  },
  {
    slug: "government-certificates",
    category: "government",
    title: "Government Certificates",
    shortTitle: "Certificate guidance",
    summary: "Prepare to understand an official certificate request before you begin.",
    whatIsIt: "This demonstration guide helps you understand the kind of information an official certificate service may present. It does not issue a certificate or confirm current rules.",
    whoMightNeedIt: "Someone who wants to make sense of a government certificate task before using the relevant official portal or service centre.",
    documents: [
      { name: "Identity document", explanation: "Keep an accepted identity document ready if the official service asks for it." },
      { name: "Supporting record", explanation: "This may be a record connected to your request. Check the official service for the current document list." },
      { name: "Application reference", explanation: "If you have already started an official request, a reference number can help the service find it." },
    ],
    terms: [
      { term: "Supporting document", source: "Upload a supporting document.", simple: "This means a document that helps show the information in your request is correct.", why: "The official service may need it to check your request." },
      { term: "Application reference", source: "Keep your application reference for future use.", simple: "This is a number or code connected to your official request.", why: "It can help you check the request later with the official service." },
    ],
    steps: [
      { title: "Name the certificate", body: "Write down the exact certificate or record you need. This makes it easier to find the correct official service." },
      { title: "Check the official instructions", body: "Look for the current process and the documents the official service lists. Requirements can vary.", term: "Supporting document" },
      { title: "Prepare only what is requested", body: "Use the document list from the official service. Do not upload personal documents to SAHAY." },
      { title: "Save the official reference", body: "If you complete an official request, keep the confirmation or reference number in a secure place.", term: "Application reference" },
    ],
    sourceLabel: "Government of India portal (verify the relevant certificate service before continuing)",
  },
];

export const categoryInfo = [
  { id: "benefits", icon: "WalletCards", title: "Money & Benefits", description: "Find and understand government benefits" },
  { id: "documents", icon: "BadgeCheck", title: "Documents & ID", description: "Understand ID and document services" },
  { id: "healthcare", icon: "HeartPulse", title: "Healthcare", description: "Understand public healthcare services" },
  { id: "travel", icon: "TrainFront", title: "Travel & Transport", description: "Get help with digital travel services" },
  { id: "government", icon: "Landmark", title: "Government Services", description: "Understand government processes" },
  { id: "digital", icon: "Smartphone", title: "Digital Help", description: "Get help using digital services" },
] as const;

export const terms = services.flatMap((service) => service.terms.map((term) => ({ ...term, service: service.title })));

export const helpExamples = [
  "How do I book a train ticket?",
  "What is an OTP?",
  "What does KYC mean?",
  "Why do I need an ID?",
  "How do I know if a website is official?",
  "What is self-attested proof?",
  "How can I pay a bill safely?",
  "What does beneficiary mean?",
  "What should I keep ready before applying?",
  "What is a transaction reference?",
];
