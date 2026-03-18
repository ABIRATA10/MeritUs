import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'or';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.dashboard': 'Dashboard',
    'nav.profile': 'Profile',
    'nav.matches': 'Matches',
    'nav.applications': 'Applications',
    'nav.saved': 'Saved',
    'nav.logout': 'Logout',
    'hero.title': 'Earn Your Future',
    'hero.subtitle': 'AI-powered platform that matches eligible students with government and private scholarships.',
    'hero.cta': 'Find Scholarships Now',
    'auth.signin': 'Sign In',
    'auth.signup': 'Sign Up',
    'auth.email': 'Email Address',
    'auth.password': 'Password',
    'auth.name': 'Full Name',
    'auth.phone': 'Phone Number',
    'auth.welcome': 'Welcome',
    'auth.create': 'Create Account',
    'dashboard.welcome': 'Welcome back',
    'dashboard.matches': 'New Matches',
    'dashboard.deadlines': 'Upcoming Deadlines',
    'dashboard.saved': 'Saved Scholarships',
    'landing.badge': 'Global Scholarship Search Engine',
    'landing.title1': 'Your Education,',
    'landing.title2': 'Fully Funded.',
    'landing.desc1': 'We use advanced AI to scan worldwide government and private databases in real-time.',
    'landing.desc2': 'Complete your profile below to unlock personalized funding opportunities.',
    'landing.f1.title': 'Global Reach',
    'landing.f1.desc': 'Access scholarships from 190+ countries instantly.',
    'landing.f2.title': 'AI Precision',
    'landing.f2.desc': 'Smart matching based on your unique story and goals.',
    'landing.f3.title': 'Career First',
    'landing.f3.desc': 'Funding that aligns with your professional dreams.',
  },
  hi: {
    'nav.dashboard': 'डैशबोर्ड',
    'nav.profile': 'प्रोफ़ाइल',
    'nav.matches': 'मैच',
    'nav.applications': 'आवेदन',
    'nav.saved': 'सहेजा गया',
    'nav.logout': 'लॉग आउट',
    'hero.title': 'अपना भविष्य संवारें',
    'hero.subtitle': 'एआई-संचालित मंच जो योग्य छात्रों को सरकारी और निजी छात्रवृत्ति से मिलाता है।',
    'hero.cta': 'अभी छात्रवृत्ति खोजें',
    'auth.signin': 'साइन इन',
    'auth.signup': 'साइन अप',
    'auth.email': 'ईमेल पता',
    'auth.password': 'पासवर्ड',
    'auth.name': 'पूरा नाम',
    'auth.phone': 'फ़ोन नंबर',
    'auth.welcome': 'स्वागत है',
    'auth.create': 'खाता बनाएं',
    'dashboard.welcome': 'वापसी पर स्वागत है',
    'dashboard.matches': 'नए मैच',
    'dashboard.deadlines': 'आगामी समय सीमा',
    'dashboard.saved': 'सहेजी गई छात्रवृत्ति',
    'landing.badge': 'वैश्विक छात्रवृत्ति खोज इंजन',
    'landing.title1': 'आपकी शिक्षा,',
    'landing.title2': 'पूरी तरह से वित्त पोषित।',
    'landing.desc1': 'हम वास्तविक समय में दुनिया भर के सरकारी और निजी डेटाबेस को स्कैन करने के लिए उन्नत एआई का उपयोग करते हैं।',
    'landing.desc2': 'व्यक्तिगत फंडिंग अवसरों को अनलॉक करने के लिए नीचे अपना प्रोफ़ाइल पूरा करें।',
    'landing.f1.title': 'वैश्विक पहुंच',
    'landing.f1.desc': '190+ देशों से तुरंत छात्रवृत्ति प्राप्त करें।',
    'landing.f2.title': 'एआई सटीकता',
    'landing.f2.desc': 'आपकी अनूठी कहानी और लक्ष्यों के आधार पर स्मार्ट मिलान।',
    'landing.f3.title': 'करियर प्रथम',
    'landing.f3.desc': 'फंडिंग जो आपके पेशेवर सपनों के साथ मेल खाती है।',
  },
  or: {
    'nav.dashboard': 'ଡ୍ୟାସବୋର୍ଡ',
    'nav.profile': 'ପ୍ରୋଫାଇଲ୍',
    'nav.matches': 'ମେଳକ',
    'nav.applications': 'ଆବେଦନ',
    'nav.saved': 'ସଂରକ୍ଷିତ',
    'nav.logout': 'ଲଗ୍ ଆଉଟ୍',
    'hero.title': 'ଆପଣଙ୍କର ଭବିଷ୍ୟତ ଗଢ଼ନ୍ତୁ',
    'hero.subtitle': 'ଏଆଇ-ଚାଳିତ ପ୍ଲାଟଫର୍ମ ଯାହା ଯୋଗ୍ୟ ଛାତ୍ରମାନଙ୍କୁ ସରକାରୀ ଏବଂ ବେସରକାରୀ ବୃତ୍ତି ସହିତ ମେଳ କରେ |',
    'hero.cta': 'ବର୍ତ୍ତମାନ ବୃତ୍ତି ଖୋଜନ୍ତୁ',
    'auth.signin': 'ସାଇନ୍ ଇନ୍',
    'auth.signup': 'ସାଇନ୍ ଅପ୍',
    'auth.email': 'ଇମେଲ୍ ଠିକଣା',
    'auth.password': 'ପାସୱାର୍ଡ',
    'auth.name': 'ପୁରା ନାମ',
    'auth.phone': 'ଫୋନ୍ ନମ୍ବର',
    'auth.welcome': 'ସ୍ୱାଗତ',
    'auth.create': 'ଆକାଉଣ୍ଟ୍ ସୃଷ୍ଟି କରନ୍ତୁ',
    'dashboard.welcome': 'ପୁନର୍ବାର ସ୍ୱାଗତ',
    'dashboard.matches': 'ନୂତନ ମେଳକ',
    'dashboard.deadlines': 'ଆଗାମୀ ସମୟସୀମା',
    'dashboard.saved': 'ସଂରକ୍ଷିତ ବୃତ୍ତି',
    'landing.badge': 'ଗ୍ଲୋବାଲ୍ ସ୍କଲାରସିପ୍ ସର୍ଚ୍ଚ ଇଞ୍ଜିନ୍',
    'landing.title1': 'ଆପଣଙ୍କର ଶିକ୍ଷା,',
    'landing.title2': 'ସମ୍ପୂର୍ଣ୍ଣ ଅର୍ଥପ୍ରାପ୍ତ |',
    'landing.desc1': 'ଆମେ ବାସ୍ତବ ସମୟରେ ବିଶ୍ୱବ୍ୟାପୀ ସରକାରୀ ଏବଂ ବେସରକାରୀ ଡାଟାବେସ୍ ସ୍କାନ୍ କରିବାକୁ ଉନ୍ନତ ଏଆଇ ବ୍ୟବହାର କରୁ |',
    'landing.desc2': 'ବ୍ୟକ୍ତିଗତ ପାଣ୍ଠି ସୁଯୋଗ ଅନଲକ୍ କରିବାକୁ ତଳେ ଆପଣଙ୍କର ପ୍ରୋଫାଇଲ୍ ସମ୍ପୂର୍ଣ୍ଣ କରନ୍ତୁ |',
    'landing.f1.title': 'ବିଶ୍ୱବ୍ୟାପୀ ପହଞ୍ଚ',
    'landing.f1.desc': '190+ ଦେଶରୁ ତୁରନ୍ତ ବୃତ୍ତି ପ୍ରାପ୍ତ କରନ୍ତୁ |',
    'landing.f2.title': 'ଏଆଇ ସଠିକତା',
    'landing.f2.desc': 'ଆପଣଙ୍କର ଅନନ୍ୟ କାହାଣୀ ଏବଂ ଲକ୍ଷ୍ୟ ଉପରେ ଆଧାର କରି ସ୍ମାର୍ଟ ମେଳକ |',
    'landing.f3.title': 'ପ୍ରଥମେ କ୍ୟାରିୟର୍',
    'landing.f3.desc': 'ପାଣ୍ଠି ଯାହା ଆପଣଙ୍କର ବୃତ୍ତିଗତ ସ୍ୱପ୍ନ ସହିତ ସମାନ |',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('meritus_language');
    return (saved as Language) || 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('meritus_language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
