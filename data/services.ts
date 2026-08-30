import type { Language, LocalizedText } from "./translations";
import { getLocalized, localize } from "./translations";

export type CategoryId = "benefits" | "documents" | "healthcare" | "travel" | "government" | "digital";

type LocalizedDocument = { name: LocalizedText; explanation: LocalizedText };
type LocalizedTerm = { term: string; source: LocalizedText; simple: LocalizedText; why: LocalizedText };
type LocalizedStep = { title: LocalizedText; body: LocalizedText; note?: LocalizedText; term?: string };

export type ServiceGuide = {
  slug: string;
  category: CategoryId;
  /** Kept in English because these are service names, not SAHAY UI labels. */
  title: string;
  shortTitle: LocalizedText;
  summary: LocalizedText;
  whatIsIt: LocalizedText;
  whoMightNeedIt: LocalizedText;
  documents: LocalizedDocument[];
  terms: LocalizedTerm[];
  steps: LocalizedStep[];
  sourceLabel: LocalizedText;
  sourceUrl: string;
};

export type ResolvedServiceGuide = Omit<ServiceGuide, "shortTitle" | "summary" | "whatIsIt" | "whoMightNeedIt" | "documents" | "terms" | "steps" | "sourceLabel"> & {
  shortTitle: string; summary: string; whatIsIt: string; whoMightNeedIt: string; sourceLabel: string;
  documents: { name: string; explanation: string }[];
  terms: { term: string; source: string; simple: string; why: string }[];
  steps: { title: string; body: string; note?: string; term?: string }[];
};

const L = localize;

export const services: ServiceGuide[] = [
  {
    slug: "senior-citizen-benefits", category: "benefits", title: "Senior Citizen Benefits",
    shortTitle: L("Benefits guidance", "பயன்கள் வழிகாட்டல்", "लाभ मार्गदर्शन"),
    summary: L("Understand how to look for benefits and prepare before using an official service.", "அதிகாரப்பூர்வ சேவையைப் பயன்படுத்தும் முன் பயன்களை எவ்வாறு தேடுவது என்பதைப் புரிந்துகொள்ளுங்கள்.", "आधिकारिक सेवा का उपयोग करने से पहले लाभ खोजने और तैयारी करने का तरीका समझें।"),
    whatIsIt: L("This guide helps you get ready to explore public benefits. It does not decide eligibility or submit an application.", "பொது பயன்களை ஆராய இந்த வழிகாட்டி உங்களைத் தயார்படுத்துகிறது. இது தகுதியை முடிவு செய்யவோ விண்ணப்பத்தைச் சமர்ப்பிக்கவோாது.", "यह गाइड सार्वजनिक लाभ देखने की तैयारी में मदद करता है। यह पात्रता तय नहीं करता या आवेदन जमा नहीं करता।"),
    whoMightNeedIt: L("Anyone who wants a calm starting point before checking a government benefit service.", "அரசுப் பயன் சேவையைப் பார்ப்பதற்கு முன் அமைதியான தொடக்கத்தை விரும்புபவர்கள்.", "सरकारी लाभ सेवा देखने से पहले शांत शुरुआत चाहने वाला कोई भी व्यक्ति।"),
    documents: [
      { name: L("Identity document", "அடையாள ஆவணம்", "पहचान दस्तावेज़"), explanation: L("A document that helps show who you are, such as Aadhaar, a passport, or a driving licence.", "நீங்கள் யார் என்பதைக் காட்டும் ஆவணம்; உதாரணமாக Aadhaar, கடவுச்சீட்டு அல்லது ஓட்டுநர் உரிமம்.", "आपकी पहचान दिखाने वाला दस्तावेज़, जैसे Aadhaar, पासपोर्ट या ड्राइविंग लाइसेंस।") },
      { name: L("Bank details", "வங்கி விவரங்கள்", "बैंक विवरण"), explanation: L("Information about your bank account. Enter it only on a verified official website.", "உங்கள் வங்கிக் கணக்கு தகவல். சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ இணையதளத்தில் மட்டும் உள்ளிடவும்.", "आपके बैंक खाते की जानकारी। इसे केवल सत्यापित आधिकारिक वेबसाइट पर दर्ज करें।") },
      { name: L("Address proof", "முகவரி சான்று", "पते का प्रमाण"), explanation: L("A document that shows where you live, if the official service asks for it.", "அதிகாரப்பூர்வ சேவை கேட்டால் நீங்கள் எங்கு வசிக்கிறீர்கள் என்பதைக் காட்டும் ஆவணம்.", "यदि आधिकारिक सेवा मांगे तो आपका निवास दिखाने वाला दस्तावेज़।") },
    ],
    terms: [
      { term: "Self-attested", source: L("Submit self-attested proof of identity.", "சுய சான்றொப்பமிட்ட அடையாளச் சான்றைச் சமர்ப்பிக்கவும்.", "स्व-सत्यापित पहचान प्रमाण जमा करें।"), simple: L("Make a copy of your ID and sign the copy yourself.", "உங்கள் அடையாள அட்டையின் நகலில் நீங்களே கையொப்பமிடுங்கள்.", "अपनी ID की कॉपी बनाकर उस पर स्वयं हस्ताक्षर करें।"), why: L("Your signature shows that you confirm the copy is yours.", "அந்த நகல் உங்களுடையது என்பதை உங்கள் கையொப்பம் உறுதிப்படுத்துகிறது.", "आपका हस्ताक्षर बताता है कि आप कॉपी को अपना मानते हैं।") },
      { term: "Eligibility", source: L("Check eligibility before applying.", "விண்ணப்பிக்கும் முன் தகுதியைச் சரிபார்க்கவும்.", "आवेदन से पहले पात्रता जांचें।"), simple: L("Check whether the service is meant for someone in your situation.", "இந்த சேவை உங்கள் சூழ்நிலைக்கு பொருந்துமா என்பதைச் சரிபார்க்கவும்.", "जांचें कि यह सेवा आपकी स्थिति वाले व्यक्ति के लिए है या नहीं।"), why: L("Official rules decide who can receive a benefit.", "யார் பயன் பெறலாம் என்பதை அதிகாரப்பூர்வ விதிகள் தீர்மானிக்கின்றன.", "आधिकारिक नियम तय करते हैं कि लाभ किसे मिल सकता है।") },
    ],
    steps: [
      { title: L("Before you start", "தொடங்குவதற்கு முன்", "शुरू करने से पहले"), body: L("Gather the documents you already have. You do not need to upload anything to SAHAY.", "உங்களிடம் உள்ள ஆவணங்களைச் சேகரிக்கவும். SAHAY-இல் எதையும் பதிவேற்றத் தேவையில்லை.", "जो दस्तावेज़ आपके पास हैं उन्हें इकट्ठा करें। आपको SAHAY पर कुछ अपलोड नहीं करना है।"), note: L("Keep originals safe. Use copies only when the official service asks for them.", "அசல் ஆவணங்களைப் பாதுகாப்பாக வைத்திருங்கள். அதிகாரப்பூர்வ சேவை கேட்டால் மட்டுமே நகல்களைப் பயன்படுத்துங்கள்.", "मूल दस्तावेज़ सुरक्षित रखें। कॉपी केवल तभी उपयोग करें जब आधिकारिक सेवा मांगे।") },
      { title: L("Understand the service", "சேவையைப் புரிந்துகொள்ளுங்கள்", "सेवा समझें"), body: L("Read the official service description slowly. Look for who it is for and what it asks you to do.", "அதிகாரப்பூர்வ சேவை விளக்கத்தை மெதுவாகப் படியுங்கள். அது யாருக்கானது, என்ன செய்யச் சொல்கிறது என்பதைப் பாருங்கள்.", "आधिकारिक सेवा विवरण धीरे-धीरे पढ़ें। देखें यह किसके लिए है और आपसे क्या करने को कहता है।"), term: "Eligibility" },
      { title: L("Check the official website", "அதிகாரப்பூர்வ இணையதளத்தைச் சரிபார்க்கவும்", "आधिकारिक वेबसाइट देखें"), body: L("Use the official government portal to find current rules. SAHAY cannot confirm requirements, fees, or deadlines.", "தற்போதைய விதிகளுக்கு அதிகாரப்பூர்வ அரசு இணையதளத்தைப் பயன்படுத்துங்கள். தேவைகள், கட்டணங்கள் அல்லது காலக்கெடுவை SAHAY உறுதிப்படுத்த முடியாது.", "वर्तमान नियमों के लिए आधिकारिक सरकारी पोर्टल का उपयोग करें। SAHAY आवश्यकताओं, शुल्क या समयसीमा की पुष्टि नहीं कर सकता।") },
      { title: L("Apply when ready", "தயாரானபோது விண்ணப்பிக்கவும்", "तैयार होने पर आवेदन करें"), body: L("Complete the task on the official website or get support from an authorised local help centre if you prefer.", "அதிகாரப்பூர்வ இணையதளத்தில் பணியை முடிக்கவும் அல்லது விரும்பினால் அங்கீகரிக்கப்பட்ட உள்ளூர் உதவி மையத்தின் ஆதரவைப் பெறவும்.", "आधिकारिक वेबसाइट पर काम पूरा करें या चाहें तो अधिकृत स्थानीय सहायता केंद्र से मदद लें।") },
    ],
    sourceLabel: L("Tamil Nadu e-Sevai portal — find eligible social-security and pension services before continuing.", "தமிழ்நாடு இ-சேவை இணையதளம் — தொடர்வதற்கு முன் தகுதியான சமூகப் பாதுகாப்பு மற்றும் ஓய்வூதிய சேவைகளைக் கண்டறியவும்.", "तमिलनाडु ई-सेवई पोर्टल — आगे बढ़ने से पहले पात्र सामाजिक सुरक्षा और पेंशन सेवाएँ खोजें।"),
    sourceUrl: "https://www.tnesevai.tn.gov.in/",
  },
  {
    slug: "aadhaar-services", category: "documents", title: "Aadhaar-related Services",
    shortTitle: L("Aadhaar guidance", "Aadhaar வழிகாட்டல்", "Aadhaar मार्गदर्शन"),
    summary: L("Prepare for an Aadhaar-related task without sharing personal details here.", "இங்கே தனிப்பட்ட விவரங்களைப் பகிராமல் Aadhaar தொடர்பான பணிக்குத் தயாராகுங்கள்.", "यहाँ व्यक्तिगत जानकारी साझा किए बिना Aadhaar-संबंधित काम की तैयारी करें।"),
    whatIsIt: L("A calm demonstration guide for understanding common identity-document service steps.", "அடையாள ஆவணச் சேவையின் பொதுவான படிகளைப் புரிந்துகொள்ளும் அமைதியான விளக்க வழிகாட்டி.", "पहचान-दस्तावेज़ सेवा के सामान्य चरणों को समझने का शांत प्रदर्शन गाइड।"),
    whoMightNeedIt: L("Someone who wants to understand an online identity-document task before opening the official site.", "அதிகாரப்பூர்வ இணையதளத்தைத் திறப்பதற்கு முன் ஆன்லைன் அடையாள ஆவணப் பணியைப் புரிந்துகொள்ள விரும்புபவர்.", "आधिकारिक साइट खोलने से पहले ऑनलाइन पहचान-दस्तावेज़ काम समझना चाहने वाला व्यक्ति।"),
    documents: [
      { name: L("Your Aadhaar details", "உங்கள் Aadhaar விவரங்கள்", "आपके Aadhaar विवरण"), explanation: L("Keep your own document nearby. SAHAY never asks you to enter the number.", "உங்கள் ஆவணத்தை அருகில் வைத்திருங்கள். எண்ணை உள்ளிட SAHAY ஒருபோதும் கேட்காது.", "अपना दस्तावेज़ पास रखें। SAHAY कभी भी नंबर दर्ज करने को नहीं कहता।") },
      { name: L("Mobile phone", "கைபேசி", "मोबाइल फ़ोन"), explanation: L("Some official services may use a code sent to a registered mobile number.", "சில அதிகாரப்பூர்வ சேவைகள் பதிவுசெய்யப்பட்ட கைபேசிக்கு அனுப்பும் குறியீட்டைப் பயன்படுத்தலாம்.", "कुछ आधिकारिक सेवाएँ पंजीकृत मोबाइल नंबर पर भेजे गए कोड का उपयोग कर सकती हैं।") },
      { name: L("Supporting document", "ஆதார ஆவணம்", "सहायक दस्तावेज़"), explanation: L("Use only the documents the official service currently requests.", "அதிகாரப்பூர்வ சேவை தற்போது கேட்கும் ஆவணங்களை மட்டும் பயன்படுத்தவும்.", "केवल वे दस्तावेज़ उपयोग करें जो आधिकारिक सेवा वर्तमान में मांगती है।") },
    ],
    terms: [
      { term: "OTP", source: L("Enter the OTP sent to your mobile phone.", "உங்கள் கைபேசிக்கு அனுப்பப்பட்ட OTP-ஐ உள்ளிடவும்.", "अपने मोबाइल पर भेजा गया OTP दर्ज करें।"), simple: L("An OTP is a one-time code sent to confirm it is really you.", "OTP என்பது உண்மையில் நீங்கள் தான் என்பதை உறுதிப்படுத்த அனுப்பப்படும் ஒரு முறை குறியீடு.", "OTP एक बार उपयोग होने वाला कोड है जो यह पुष्टि करता है कि आप ही हैं।"), why: L("It helps protect your account. Never share it with another person.", "இது உங்கள் கணக்கைப் பாதுகாக்க உதவுகிறது. இதை வேறு யாருடனும் பகிர வேண்டாம்.", "यह आपके खाते की सुरक्षा में मदद करता है। इसे किसी और से साझा न करें।") },
      { term: "Registered mobile number", source: L("Use your registered mobile number.", "உங்கள் பதிவுசெய்யப்பட்ட கைபேசி எண்ணைப் பயன்படுத்தவும்.", "अपना पंजीकृत मोबाइल नंबर उपयोग करें।"), simple: L("This is the phone number already linked with your official record.", "இது உங்கள் அதிகாரப்பூர்வ பதிவுடன் ஏற்கனவே இணைக்கப்பட்ட கைபேசி எண்.", "यह वह फ़ोन नंबर है जो आपके आधिकारिक रिकॉर्ड से पहले से जुड़ा है।"), why: L("The official service may send a security code to that number.", "அதிகாரப்பூர்வ சேவை அந்த எண்ணுக்கு பாதுகாப்புக் குறியீட்டை அனுப்பலாம்.", "आधिकारिक सेवा उस नंबर पर सुरक्षा कोड भेज सकती है।") },
    ],
    steps: [
      { title: L("Decide what you need", "உங்கள் தேவையைத் தீர்மானிக்கவும்", "तय करें कि आपको क्या चाहिए"), body: L("Name the task in simple words, such as checking a document detail or finding an update option.", "ஆவண விவரத்தைச் சரிபார்த்தல் அல்லது புதுப்பிப்பு விருப்பத்தைக் கண்டறிதல் போன்ற பணியை எளிய வார்த்தைகளில் சொல்லுங்கள்.", "काम को सरल शब्दों में बताइए, जैसे दस्तावेज़ विवरण देखना या अपडेट विकल्प ढूँढना।") },
      { title: L("Open the official service", "அதிகாரப்பூர்வ சேவையைத் திறக்கவும்", "आधिकारिक सेवा खोलें"), body: L("Check the website address carefully before you type any details.", "எந்த விவரத்தையும் உள்ளிடும் முன் இணைய முகவரியை கவனமாகச் சரிபார்க்கவும்.", "कोई विवरण लिखने से पहले वेबसाइट पता ध्यान से जांचें।"), term: "OTP" },
      { title: L("Read each screen", "ஒவ்வொரு திரையையும் படிக்கவும்", "हर स्क्रीन पढ़ें"), body: L("Move one screen at a time. Stop if an instruction feels unclear and use Explain this.", "ஒரு நேரத்தில் ஒரு திரைக்கு நகருங்கள். அறிவுறுத்தல் தெளிவில்லையெனில் நின்று ‘இதனை விளக்கவும்’ என்பதைப் பயன்படுத்துங்கள்.", "एक समय में एक स्क्रीन पर जाएँ। निर्देश अस्पष्ट हो तो रुकें और ‘इसे समझाएँ’ का उपयोग करें।") },
      { title: L("Keep a record", "பதிவை வைத்திருங்கள்", "रिकॉर्ड रखें"), body: L("After an official task, save any reference number only in a secure place.", "அதிகாரப்பூர்வப் பணிக்குப் பிறகு குறிப்பு எண்ணை பாதுகாப்பான இடத்தில் மட்டும் சேமிக்கவும்.", "आधिकारिक काम के बाद संदर्भ नंबर केवल सुरक्षित जगह पर रखें।") },
    ],
    sourceLabel: L("UIDAI myAadhaar portal — use the official Aadhaar service only when you are ready.", "UIDAI myAadhaar இணையதளம் — நீங்கள் தயாராக இருக்கும்போது மட்டுமே அதிகாரப்பூர்வ Aadhaar சேவையைப் பயன்படுத்தவும்.", "UIDAI myAadhaar पोर्टल — तैयार होने पर ही आधिकारिक Aadhaar सेवा का उपयोग करें।"),
    sourceUrl: "https://myaadhaar.uidai.gov.in/",
  },
  {
    slug: "public-healthcare", category: "healthcare", title: "Public Healthcare Schemes",
    shortTitle: L("Healthcare guidance", "சுகாதார வழிகாட்டல்", "स्वास्थ्य सेवा मार्गदर्शन"),
    summary: L("Understand how to explore a public healthcare service with confidence.", "பொது சுகாதார சேவையை நம்பிக்கையுடன் எவ்வாறு ஆராய்வது என்பதைப் புரிந்துகொள்ளுங்கள்.", "सार्वजनिक स्वास्थ्य सेवा को आत्मविश्वास से कैसे देखें, यह समझें।"),
    whatIsIt: L("A plain-language starting point for finding current public healthcare information.", "தற்போதைய பொது சுகாதாரத் தகவலைக் கண்டறிய எளிய மொழியில் தொடக்கப் புள்ளி.", "वर्तमान सार्वजनिक स्वास्थ्य जानकारी खोजने का सरल शुरुआती बिंदु।"),
    whoMightNeedIt: L("People who want to know where to look before using an official healthcare website or centre.", "அதிகாரப்பூர்வ சுகாதார இணையதளம் அல்லது மையத்தைப் பயன்படுத்தும் முன் எங்கு பார்க்க வேண்டும் என அறிய விரும்புபவர்கள்.", "आधिकारिक स्वास्थ्य वेबसाइट या केंद्र का उपयोग करने से पहले कहाँ देखना है जानने वाले लोग।"),
    documents: [
      { name: L("Identity document", "அடையாள ஆவணம்", "पहचान दस्तावेज़"), explanation: L("Keep an accepted identity document ready if the official service requests one.", "அதிகாரப்பூர்வ சேவை கேட்டால் ஏற்றுக்கொள்ளப்பட்ட அடையாள ஆவணத்தைத் தயாராக வைத்திருங்கள்.", "यदि आधिकारिक सेवा मांगे तो स्वीकृत पहचान दस्तावेज़ तैयार रखें।") },
      { name: L("Relevant medical papers", "தொடர்புடைய மருத்துவ ஆவணங்கள்", "संबंधित चिकित्सा कागज़ात"), explanation: L("Share information only with an authorised healthcare provider or official service.", "அங்கீகரிக்கப்பட்ட சுகாதார வழங்குநர் அல்லது அதிகாரப்பூர்வ சேவையுடன் மட்டும் தகவலைப் பகிரவும்.", "जानकारी केवल अधिकृत स्वास्थ्य प्रदाता या आधिकारिक सेवा से साझा करें।") },
      { name: L("Contact information", "தொடர்பு தகவல்", "संपर्क जानकारी"), explanation: L("A phone number or address may help an official provider contact you.", "கைபேசி எண் அல்லது முகவரி அதிகாரப்பூர்வ வழங்குநர் உங்களைத் தொடர்புகொள்ள உதவலாம்.", "फ़ोन नंबर या पता आधिकारिक प्रदाता को आपसे संपर्क करने में मदद कर सकता है।") },
    ],
    terms: [
      { term: "Beneficiary", source: L("Search for a beneficiary record.", "பயனாளி பதிவைத் தேடுங்கள்.", "लाभार्थी रिकॉर्ड खोजें।"), simple: L("A beneficiary is a person who may receive help from a programme.", "பயனாளி என்பது ஒரு திட்டத்தில் உதவி பெறக்கூடிய நபர்.", "लाभार्थी वह व्यक्ति है जिसे किसी योजना से सहायता मिल सकती है।"), why: L("The official service uses this word for the person receiving support.", "உதவி பெறும் நபரைக் குறிக்க அதிகாரப்பூர்வ சேவை இந்தச் சொல்லைப் பயன்படுத்துகிறது.", "आधिकारिक सेवा सहायता पाने वाले व्यक्ति के लिए यह शब्द उपयोग करती है।") },
      { term: "Empanelled", source: L("Choose an empanelled hospital.", "பட்டியலிடப்பட்ட மருத்துவமனையைத் தேர்ந்தெடுக்கவும்.", "पैनल में शामिल अस्पताल चुनें।"), simple: L("This means a hospital approved to take part in that programme.", "அந்தத் திட்டத்தில் பங்கேற்க அனுமதிக்கப்பட்ட மருத்துவமனை என்று பொருள்.", "इसका मतलब उस योजना में भाग लेने के लिए स्वीकृत अस्पताल है।"), why: L("The programme may have a list of approved providers.", "திட்டத்தில் அங்கீகரிக்கப்பட்ட வழங்குநர்களின் பட்டியல் இருக்கலாம்.", "योजना में स्वीकृत प्रदाताओं की सूची हो सकती है।") },
    ],
    steps: [
      { title: L("Name your health task", "உங்கள் சுகாதாரப் பணியைச் சொல்லுங்கள்", "अपने स्वास्थ्य कार्य का नाम बताइए"), body: L("For example: find a scheme, understand a hospital list, or learn where to ask a question.", "உதாரணம்: திட்டத்தைக் கண்டறிதல், மருத்துவமனைப் பட்டியலைப் புரிந்துகொள்ளல் அல்லது எங்கு கேட்பது என அறிதல்.", "उदाहरण: योजना खोजना, अस्पताल सूची समझना या पूछने की जगह जानना।") },
      { title: L("Find current official information", "தற்போதைய அதிகாரப்பூர்வ தகவலைக் கண்டறியவும்", "वर्तमान आधिकारिक जानकारी खोजें"), body: L("Rules and services can change. Use an official source or authorised healthcare centre for the latest details.", "விதிகளும் சேவைகளும் மாறலாம். சமீபத்திய விவரங்களுக்கு அதிகாரப்பூர்வ ஆதாரம் அல்லது அங்கீகரிக்கப்பட்ட சுகாதார மையத்தைப் பயன்படுத்தவும்.", "नियम और सेवाएँ बदल सकती हैं। नवीनतम जानकारी के लिए आधिकारिक स्रोत या अधिकृत स्वास्थ्य केंद्र उपयोग करें।") },
      { title: L("Prepare questions", "கேள்விகளைத் தயாரிக்கவும்", "प्रश्न तैयार करें"), body: L("Write down what you want to know. This can make a call or visit less stressful.", "நீங்கள் தெரிந்துகொள்ள விரும்புவதை எழுதிக்கொள்ளுங்கள். இது அழைப்பு அல்லது வருகையை எளிதாக்கும்.", "जो जानना चाहते हैं उसे लिख लें। इससे कॉल या मुलाकात कम तनावपूर्ण हो सकती है।") },
      { title: L("Ask for trusted support", "நம்பகமான உதவியைக் கேளுங்கள்", "विश्वसनीय सहायता लें"), body: L("For medical advice, talk to a qualified healthcare professional. SAHAY is not medical advice.", "மருத்துவ ஆலோசனைக்கு தகுதியான சுகாதார நிபுணரிடம் பேசுங்கள். SAHAY மருத்துவ ஆலோசனை அல்ல.", "चिकित्सा सलाह के लिए योग्य स्वास्थ्य पेशेवर से बात करें। SAHAY चिकित्सा सलाह नहीं है।") },
    ],
    sourceLabel: L("Tamil Nadu CMCHIS portal — verify current scheme details and hospital information.", "தமிழ்நாடு CMCHIS இணையதளம் — தற்போதைய திட்ட விவரங்கள் மற்றும் மருத்துவமனை தகவலைச் சரிபார்க்கவும்.", "तमिलनाडु CMCHIS पोर्टल — वर्तमान योजना विवरण और अस्पताल की जानकारी सत्यापित करें।"),
    sourceUrl: "https://m.cmchistn.com/",
  },
  {
    slug: "railway-ticket-booking", category: "travel", title: "Railway Ticket Booking",
    shortTitle: L("Travel guidance", "பயண வழிகாட்டல்", "यात्रा मार्गदर्शन"),
    summary: L("A simple way to prepare for booking a train ticket online.", "ரயில் டிக்கெட்டை ஆன்லைனில் பதிவு செய்யத் தயாராகும் எளிய வழி.", "ऑनलाइन ट्रेन टिकट बुक करने की तैयारी का आसान तरीका।"),
    whatIsIt: L("This guide explains choices you may see when booking travel. It does not book tickets or confirm availability.", "பயணத்தைப் பதிவு செய்யும்போது காணக்கூடிய தேர்வுகளை இந்த வழிகாட்டி விளக்குகிறது. இது டிக்கெட் பதிவு செய்யவோ கிடைப்பை உறுதிப்படுத்தவோாது.", "यह गाइड यात्रा बुक करते समय दिखने वाले विकल्प समझाता है। यह टिकट बुक या उपलब्धता की पुष्टि नहीं करता।"),
    whoMightNeedIt: L("Anyone who wants to understand online travel booking before starting.", "ஆன்லைன் பயணப் பதிவைத் தொடங்கும் முன் புரிந்துகொள்ள விரும்புபவர்.", "ऑनलाइन यात्रा बुकिंग शुरू करने से पहले समझना चाहने वाला कोई भी व्यक्ति।"),
    documents: [
      { name: L("Travel details", "பயண விவரங்கள்", "यात्रा विवरण"), explanation: L("Know your starting place, destination, and preferred travel date.", "புறப்படும் இடம், செல்லுமிடம், விருப்பமான பயணத் தேதியை அறிந்திருங்கள்.", "अपना शुरुआती स्थान, गंतव्य और पसंदीदा यात्रा तिथि जानें।") },
      { name: L("Passenger details", "பயணி விவரங்கள்", "यात्री विवरण"), explanation: L("Enter only the information requested by the verified official booking site.", "சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ பதிவு இணையதளம் கேட்கும் தகவலை மட்டும் உள்ளிடவும்.", "केवल वही जानकारी दर्ज करें जो सत्यापित आधिकारिक बुकिंग साइट मांगे।") },
      { name: L("Payment method", "பணம் செலுத்தும் முறை", "भुगतान तरीका"), explanation: L("Use a secure payment method. Never share a card PIN or OTP.", "பாதுகாப்பான பணம் செலுத்தும் முறையைப் பயன்படுத்தவும். கார்டு PIN அல்லது OTP-ஐ பகிர வேண்டாம்.", "सुरक्षित भुगतान तरीका उपयोग करें। कार्ड PIN या OTP कभी साझा न करें।") },
    ],
    terms: [
      { term: "PNR", source: L("Your PNR has been generated.", "உங்கள் PNR உருவாக்கப்பட்டுள்ளது.", "आपका PNR बन गया है।"), simple: L("A PNR is a booking reference number for your journey.", "PNR என்பது உங்கள் பயணத்திற்கான பதிவு குறிப்பு எண்.", "PNR आपकी यात्रा का बुकिंग संदर्भ नंबर है।"), why: L("It helps the official service find your booking.", "உங்கள் பதிவைக் கண்டறிய அதிகாரப்பூர்வ சேவைக்கு இது உதவுகிறது.", "यह आधिकारिक सेवा को आपकी बुकिंग खोजने में मदद करता है।") },
      { term: "Waitlist", source: L("Your ticket is waitlisted.", "உங்கள் டிக்கெட் காத்திருப்புப் பட்டியலில் உள்ளது.", "आपका टिकट प्रतीक्षा सूची में है।"), simple: L("This usually means the seat is not confirmed yet.", "இதன் பொருள் பொதுவாக இருக்கை இன்னும் உறுதியாகவில்லை.", "इसका मतलब आम तौर पर सीट अभी पक्की नहीं है।"), why: L("Check the official service for current booking status and rules.", "தற்போதைய பதிவு நிலை மற்றும் விதிகளுக்கு அதிகாரப்பூர்வ சேவையைச் சரிபார்க்கவும்.", "वर्तमान बुकिंग स्थिति और नियमों के लिए आधिकारिक सेवा देखें।") },
    ],
    steps: [
      { title: L("Plan the journey", "பயணத்தைத் திட்டமிடுங்கள்", "यात्रा की योजना बनाएँ"), body: L("Write down where you are travelling from, where you are going, and the date.", "எங்கிருந்து புறப்படுகிறீர்கள், எங்கே செல்கிறீர்கள், தேதி என்ன என்பதை எழுதிக்கொள்ளுங்கள்.", "कहाँ से जा रहे हैं, कहाँ जा रहे हैं और तारीख लिख लें।") },
      { title: L("Use a verified booking site", "சரிபார்க்கப்பட்ட பதிவு இணையதளத்தைப் பயன்படுத்தவும்", "सत्यापित बुकिंग साइट उपयोग करें"), body: L("Check the website address before signing in or paying. Avoid links from unknown messages.", "உள்நுழைவதற்கு அல்லது பணம் செலுத்துவதற்கு முன் இணைய முகவரியைச் சரிபார்க்கவும். தெரியாத செய்திகளின் இணைப்புகளைத் தவிர்க்கவும்.", "साइन इन या भुगतान से पहले वेबसाइट पता जांचें। अनजान संदेशों के लिंक से बचें।") },
      { title: L("Review before payment", "பணம் செலுத்தும் முன் சரிபார்க்கவும்", "भुगतान से पहले जांचें"), body: L("Read journey details slowly and make sure they match your plan.", "பயண விவரங்களை மெதுவாகப் படித்து, அவை உங்கள் திட்டத்துடன் பொருந்துகிறதா என உறுதிப்படுத்தவும்.", "यात्रा विवरण धीरे-धीरे पढ़ें और सुनिश्चित करें कि वे आपकी योजना से मेल खाते हैं।"), term: "PNR" },
      { title: L("Save the booking reference", "பதிவு குறிப்பைச் சேமிக்கவும்", "बुकिंग संदर्भ सहेजें"), body: L("Keep the official confirmation and reference number somewhere secure.", "அதிகாரப்பூர்வ உறுதிப்படுத்தலையும் குறிப்பு எண்ணையும் பாதுகாப்பான இடத்தில் வைக்கவும்.", "आधिकारिक पुष्टि और संदर्भ नंबर सुरक्षित जगह पर रखें।") },
    ],
    sourceLabel: L("IRCTC official booking portal — review your journey details before payment.", "IRCTC அதிகாரப்பூர்வ முன்பதிவு இணையதளம் — பணம் செலுத்தும் முன் உங்கள் பயண விவரங்களைச் சரிபார்க்கவும்.", "IRCTC आधिकारिक बुकिंग पोर्टल — भुगतान से पहले अपनी यात्रा का विवरण जांचें।"),
    sourceUrl: "https://www.irctc.co.in/nget/train-search",
  },
  {
    slug: "utility-bill-payment", category: "digital", title: "Utility Bill Payment",
    shortTitle: L("Bill payment guidance", "பில் செலுத்தும் வழிகாட்டல்", "बिल भुगतान मार्गदर्शन"),
    summary: L("Learn safe, steady steps for paying an essential bill online.", "முக்கிய பில்லை ஆன்லைனில் பாதுகாப்பாகச் செலுத்தும் படிகளைக் கற்றுக்கொள்ளுங்கள்.", "ज़रूरी बिल का ऑनलाइन सुरक्षित भुगतान करने के चरण जानें।"),
    whatIsIt: L("A demonstration guide for understanding a bill-payment process. Use your provider's verified website for a real payment.", "பில் செலுத்தும் செயல்முறையைப் புரிந்துகொள்ளும் விளக்க வழிகாட்டி. உண்மையான கட்டணத்திற்கு உங்கள் வழங்குநரின் சரிபார்க்கப்பட்ட இணையதளத்தைப் பயன்படுத்தவும்.", "बिल भुगतान प्रक्रिया समझने का प्रदर्शन गाइड। असली भुगतान के लिए अपने प्रदाता की सत्यापित वेबसाइट उपयोग करें।"),
    whoMightNeedIt: L("Anyone who wants a safer checklist before making a digital payment.", "டிஜிட்டல் கட்டணம் செலுத்தும் முன் பாதுகாப்பான சரிபார்ப்புப் பட்டியலை விரும்புபவர்.", "डिजिटल भुगतान से पहले सुरक्षित चेकलिस्ट चाहने वाला कोई भी व्यक्ति।"),
    documents: [
      { name: L("Recent bill", "சமீபத்திய பில்", "हाल का बिल"), explanation: L("A recent bill may show the account or customer number requested by the provider.", "வழங்குநர் கேட்கும் கணக்கு அல்லது வாடிக்கையாளர் எண்ணை சமீபத்திய பில் காட்டலாம்.", "हाल का बिल प्रदाता द्वारा मांगा गया खाता या ग्राहक नंबर दिखा सकता है।") },
      { name: L("Verified provider website", "சரிபார்க்கப்பட்ட வழங்குநர் இணையதளம்", "सत्यापित प्रदाता वेबसाइट"), explanation: L("Type the address yourself or use a trusted official source to find it.", "முகவரியை நீங்களே உள்ளிடவும் அல்லது நம்பகமான அதிகாரப்பூர்வ ஆதாரத்தில் கண்டறியவும்.", "पता स्वयं लिखें या विश्वसनीय आधिकारिक स्रोत से खोजें।") },
      { name: L("Payment method", "பணம் செலுத்தும் முறை", "भुगतान तरीका"), explanation: L("Use a method you trust. Never disclose your PIN, password, or OTP.", "நம்பகமான முறையைப் பயன்படுத்தவும். PIN, கடவுச்சொல் அல்லது OTP-ஐ ஒருபோதும் தெரிவிக்க வேண்டாம்.", "विश्वसनीय तरीका उपयोग करें। अपना PIN, पासवर्ड या OTP कभी न बताएं।") },
    ],
    terms: [
      { term: "Consumer number", source: L("Enter your consumer number.", "உங்கள் நுகர்வோர் எண்ணை உள்ளிடவும்.", "अपना उपभोक्ता नंबर दर्ज करें।"), simple: L("This is the number your utility provider uses to identify your account.", "உங்கள் கணக்கை அடையாளம் காண பயன்பாட்டு வழங்குநர் பயன்படுத்தும் எண் இது.", "यह वह नंबर है जिसका उपयोग आपका उपयोगिता प्रदाता आपके खाते की पहचान के लिए करता है।"), why: L("It helps the provider show the correct bill.", "சரியான பில்லை வழங்குநர் காட்ட இது உதவுகிறது.", "यह प्रदाता को सही बिल दिखाने में मदद करता है।") },
      { term: "Transaction reference", source: L("Save your transaction reference.", "உங்கள் பரிவர்த்தனை குறிப்பைச் சேமிக்கவும்.", "अपना लेन-देन संदर्भ सहेजें।"), simple: L("This is a record number for your completed payment.", "இது உங்கள் முடிக்கப்பட்ட கட்டணத்திற்கான பதிவு எண்.", "यह आपके पूरे हुए भुगतान का रिकॉर्ड नंबर है।"), why: L("It can help the provider locate the payment if you need assistance.", "உதவி தேவைப்பட்டால் கட்டணத்தைக் கண்டறிய இது வழங்குநருக்கு உதவும்.", "मदद की ज़रूरत पर यह प्रदाता को भुगतान खोजने में मदद कर सकता है।") },
    ],
    steps: [
      { title: L("Check the bill", "பில்லைச் சரிபார்க்கவும்", "बिल जांचें"), body: L("Keep a recent bill with you and look for the account details the provider uses.", "சமீபத்திய பில்லை அருகில் வைத்துக்கொண்டு, வழங்குநர் பயன்படுத்தும் கணக்கு விவரங்களைப் பாருங்கள்.", "हाल का बिल पास रखें और प्रदाता द्वारा उपयोग किए जाने वाले खाता विवरण देखें।") },
      { title: L("Open the verified provider site", "சரிபார்க்கப்பட்ட வழங்குநர் தளத்தைத் திறக்கவும்", "सत्यापित प्रदाता साइट खोलें"), body: L("Do not rely on unexpected links in a message or email.", "செய்தி அல்லது மின்னஞ்சலில் வரும் எதிர்பாராத இணைப்புகளை நம்ப வேண்டாம்.", "संदेश या ईमेल में आए अचानक लिंक पर भरोसा न करें।") },
      { title: L("Review payment details", "கட்டண விவரங்களைச் சரிபார்க்கவும்", "भुगतान विवरण जांचें"), body: L("Before you pay, check the account and amount carefully.", "பணம் செலுத்தும் முன் கணக்கையும் தொகையையும் கவனமாகச் சரிபார்க்கவும்.", "भुगतान से पहले खाता और राशि ध्यान से जांचें।"), term: "Consumer number" },
      { title: L("Keep the confirmation", "உறுதிப்படுத்தலை வைத்திருங்கள்", "पुष्टि रखें"), body: L("Save the official payment confirmation or reference number.", "அதிகாரப்பூர்வ கட்டண உறுதிப்படுத்தல் அல்லது குறிப்பு எண்ணைச் சேமிக்கவும்.", "आधिकारिक भुगतान पुष्टि या संदर्भ नंबर सहेजें।") },
    ],
    sourceLabel: L("TANGEDCO online payment portal — confirm the account and amount before you pay.", "TANGEDCO இணையக் கட்டண இணையதளம் — பணம் செலுத்தும் முன் கணக்கையும் தொகையையும் உறுதிப்படுத்தவும்.", "TANGEDCO ऑनलाइन भुगतान पोर्टल — भुगतान से पहले खाता और राशि की पुष्टि करें।"),
    sourceUrl: "https://sbill.tangedco.org/e2e/user/login",
  },
  {
    slug: "government-certificates", category: "government", title: "Government Certificates",
    shortTitle: L("Certificate guidance", "சான்றிதழ் வழிகாட்டல்", "प्रमाणपत्र मार्गदर्शन"),
    summary: L("Prepare to understand an official certificate request before you begin.", "தொடங்கும் முன் அதிகாரப்பூர்வ சான்றிதழ் கோரிக்கையைப் புரிந்துகொள்ளத் தயாராகுங்கள்.", "शुरू करने से पहले आधिकारिक प्रमाणपत्र अनुरोध समझने की तैयारी करें।"),
    whatIsIt: L("This demonstration guide explains information an official certificate service may present. It does not issue a certificate.", "அதிகாரப்பூர்வ சான்றிதழ் சேவை வழங்கக்கூடிய தகவலை இந்த விளக்க வழிகாட்டி கூறுகிறது. இது சான்றிதழை வழங்காது.", "यह प्रदर्शन गाइड आधिकारिक प्रमाणपत्र सेवा द्वारा दी जा सकने वाली जानकारी समझाता है। यह प्रमाणपत्र जारी नहीं करता।"),
    whoMightNeedIt: L("Someone who wants to understand a certificate task before using an official portal or service centre.", "அதிகாரப்பூர்வ இணையதளம் அல்லது சேவை மையத்தைப் பயன்படுத்தும் முன் சான்றிதழ் பணியைப் புரிந்துகொள்ள விரும்புபவர்.", "आधिकारिक पोर्टल या सेवा केंद्र उपयोग करने से पहले प्रमाणपत्र कार्य समझना चाहने वाला व्यक्ति।"),
    documents: [
      { name: L("Identity document", "அடையாள ஆவணம்", "पहचान दस्तावेज़"), explanation: L("Keep an accepted identity document ready if the official service asks for it.", "அதிகாரப்பூர்வ சேவை கேட்டால் ஏற்றுக்கொள்ளப்பட்ட அடையாள ஆவணத்தைத் தயாராக வைத்திருங்கள்.", "यदि आधिकारिक सेवा मांगे तो स्वीकृत पहचान दस्तावेज़ तैयार रखें।") },
      { name: L("Supporting record", "ஆதாரப் பதிவு", "सहायक रिकॉर्ड"), explanation: L("This may be a record connected to your request. Check the official service for the current document list.", "இது உங்கள் கோரிக்கையுடன் தொடர்புடைய பதிவாக இருக்கலாம். தற்போதைய ஆவணப் பட்டியலுக்கு அதிகாரப்பூர்வ சேவையைச் சரிபார்க்கவும்.", "यह आपके अनुरोध से जुड़ा रिकॉर्ड हो सकता है। वर्तमान दस्तावेज़ सूची के लिए आधिकारिक सेवा देखें।") },
      { name: L("Application reference", "விண்ணப்ப குறிப்பு", "आवेदन संदर्भ"), explanation: L("If you have started an official request, a reference number can help the service find it.", "நீங்கள் அதிகாரப்பூர்வ கோரிக்கையைத் தொடங்கியிருந்தால், குறிப்பு எண் அதைச் சேவை கண்டறிய உதவும்.", "यदि आपने आधिकारिक अनुरोध शुरू किया है, संदर्भ नंबर सेवा को उसे खोजने में मदद कर सकता है।") },
    ],
    terms: [
      { term: "Supporting document", source: L("Upload a supporting document.", "ஆதார ஆவணத்தைப் பதிவேற்றவும்.", "सहायक दस्तावेज़ अपलोड करें।"), simple: L("This is a document that helps show the information in your request is correct.", "உங்கள் கோரிக்கையில் உள்ள தகவல் சரியானது என்பதை காட்ட உதவும் ஆவணம் இது.", "यह दस्तावेज़ बताता है कि आपके अनुरोध की जानकारी सही है।"), why: L("The official service may need it to check your request.", "உங்கள் கோரிக்கையைச் சரிபார்க்க அதிகாரப்பூர்வ சேவைக்கு இது தேவைப்படலாம்.", "आधिकारिक सेवा को आपका अनुरोध जांचने के लिए इसकी ज़रूरत हो सकती है।") },
      { term: "Application reference", source: L("Keep your application reference for future use.", "எதிர்கால பயன்பாட்டிற்காக உங்கள் விண்ணப்ப குறிப்பை வைத்திருங்கள்.", "भविष्य के उपयोग के लिए अपना आवेदन संदर्भ रखें।"), simple: L("This is a number or code connected to your official request.", "இது உங்கள் அதிகாரப்பூர்வ கோரிக்கையுடன் இணைக்கப்பட்ட எண் அல்லது குறியீடு.", "यह आपके आधिकारिक अनुरोध से जुड़ा नंबर या कोड है।"), why: L("It can help you check the request later with the official service.", "பின்னர் அதிகாரப்பூர்வ சேவையுடன் கோரிக்கையைச் சரிபார்க்க இது உதவும்.", "यह बाद में आधिकारिक सेवा के साथ अनुरोध जांचने में मदद कर सकता है।") },
    ],
    steps: [
      { title: L("Name the certificate", "சான்றிதழைக் குறிப்பிடுங்கள்", "प्रमाणपत्र का नाम बताइए"), body: L("Write down the exact certificate or record you need. This helps find the correct official service.", "உங்களுக்குத் தேவையான சரியான சான்றிதழ் அல்லது பதிவை எழுதிக்கொள்ளுங்கள். சரியான அதிகாரப்பூர்வ சேவையைக் கண்டறிய இது உதவும்.", "आपको चाहिए सटीक प्रमाणपत्र या रिकॉर्ड लिख लें। इससे सही आधिकारिक सेवा खोजने में मदद मिलेगी।") },
      { title: L("Check the official instructions", "அதிகாரப்பூர்வ அறிவுறுத்தல்களைச் சரிபார்க்கவும்", "आधिकारिक निर्देश जांचें"), body: L("Look for the current process and documents listed by the official service. Requirements can vary.", "அதிகாரப்பூர்வ சேவை பட்டியலிடும் தற்போதைய செயல்முறை மற்றும் ஆவணங்களைப் பாருங்கள். தேவைகள் மாறலாம்.", "आधिकारिक सेवा द्वारा सूचीबद्ध वर्तमान प्रक्रिया और दस्तावेज़ देखें। आवश्यकताएँ बदल सकती हैं।"), term: "Supporting document" },
      { title: L("Prepare only what is requested", "கேட்கப்பட்டதை மட்டும் தயாரிக்கவும்", "केवल मांगी गई चीज़ तैयार करें"), body: L("Use the document list from the official service. Do not upload personal documents to SAHAY.", "அதிகாரப்பூர்வ சேவையின் ஆவணப் பட்டியலைப் பயன்படுத்தவும். தனிப்பட்ட ஆவணங்களை SAHAY-இல் பதிவேற்ற வேண்டாம்.", "आधिकारिक सेवा की दस्तावेज़ सूची उपयोग करें। व्यक्तिगत दस्तावेज़ SAHAY पर अपलोड न करें।") },
      { title: L("Save the official reference", "அதிகாரப்பூர்வ குறிப்பைச் சேமிக்கவும்", "आधिकारिक संदर्भ सहेजें"), body: L("If you complete an official request, keep the confirmation or reference number in a secure place.", "அதிகாரப்பூர்வ கோரிக்கையை முடித்தால், உறுதிப்படுத்தல் அல்லது குறிப்பு எண்ணைப் பாதுகாப்பான இடத்தில் வைத்திருங்கள்.", "यदि आधिकारिक अनुरोध पूरा करें, पुष्टि या संदर्भ नंबर सुरक्षित जगह पर रखें।") },
    ],
    sourceLabel: L("Tamil Nadu e-Sevai portal — choose the relevant certificate service before continuing.", "தமிழ்நாடு இ-சேவை இணையதளம் — தொடர்வதற்கு முன் பொருத்தமான சான்றிதழ் சேவையைத் தேர்ந்தெடுக்கவும்.", "तमिलनाडु ई-सेवई पोर्टल — आगे बढ़ने से पहले संबंधित प्रमाणपत्र सेवा चुनें।"),
    sourceUrl: "https://serviceonline.gov.in/configuretn/login.do?language=en",
  },
];

export const categoryInfo = [
  { id: "benefits", icon: "WalletCards" }, { id: "documents", icon: "BadgeCheck" }, { id: "healthcare", icon: "HeartPulse" }, { id: "travel", icon: "TrainFront" }, { id: "government", icon: "Landmark" }, { id: "digital", icon: "Smartphone" },
] as const;

export function resolveService(service: ServiceGuide, language: Language): ResolvedServiceGuide {
  return {
    ...service,
    shortTitle: getLocalized(service.shortTitle, language), summary: getLocalized(service.summary, language), whatIsIt: getLocalized(service.whatIsIt, language), whoMightNeedIt: getLocalized(service.whoMightNeedIt, language), sourceLabel: getLocalized(service.sourceLabel, language),
    documents: service.documents.map((item) => ({ name: getLocalized(item.name, language), explanation: getLocalized(item.explanation, language) })),
    terms: service.terms.map((item) => ({ term: item.term, source: getLocalized(item.source, language), simple: getLocalized(item.simple, language), why: getLocalized(item.why, language) })),
    steps: service.steps.map((item) => ({ title: getLocalized(item.title, language), body: getLocalized(item.body, language), note: item.note ? getLocalized(item.note, language) : undefined, term: item.term })),
  };
}
