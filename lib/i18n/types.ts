export type Language = "id" | "en";

export interface PlanFeatureItem {
  text: string;
  included: boolean;
}

export interface PlanData {
  title: string;
  durationBadge: string;
  originalPrice: string;
  discountBadge: string;
  price: string;
  priceNote: string;
  description: string;
  ctaText: string;
  featuresTitle: string;
  features: PlanFeatureItem[];
  footerServer: string;
  footerSla: string;
  isPopular?: boolean;
}

export interface CategoryPlanGroup {
  categorySubtitle: string;
  starter: PlanData;
  growth: PlanData;
  scale: PlanData;
}

export interface ServiceCardItem {
  id: string;
  name: string;
  shortDesc: string;
  badge: string;
  features: string[];
}

export interface Translations {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    contactUs: string;
  };
  home: {
    heroTitle1: string;
    heroTitle2: string;
    heroTitle3: string;
    heroSubtitle: string;
    heroCta: string;
    trustedBy: string;
  };
  contactModal: {
    freeBadge: string;
    consultPrefix: string;
    consultFree: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    serviceLabel: string;
    serviceOptions: string[];
    needLabel: string;
    needPlaceholder: string;
    btnSubmit: string;
    btnWa: string;
    successTitle: string;
    successDesc: string;
    close: string;
  };
  conceptModal: {
    conceptPreview: string;
    keyFeatures: string;
    techStack: string;
    consultConcept: string;
    close: string;
  };
  portfolio: {
    badge: string;
    heroTitle1: string;
    heroTitle2: string;
    heroSubtitle: string;
    ctaConsult: string;
    ctaPricing: string;
    categories: Record<string, string>;
    readyToDeploy: string;
    viewDetails: string;
    emptyTitle: string;
    emptyDesc: string;
    emptyBtn: string;
    projects: Record<
      string,
      {
        title: string;
        categoryLabel: string;
        description: string;
        extraInfo: string;
        features: string[];
      }
    >;
  };
  services: {
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    selectPackage: string;
    popular: string;
    cards: ServiceCardItem[];
    tabLabels: Record<string, string>;
    plans: Record<string, CategoryPlanGroup>;
    process: {
      badge: string;
      title: string;
      subtitle: string;
      steps: { step: string; title: string; desc: string }[];
    };
    faq: {
      badge: string;
      title: string;
      subtitle: string;
      items: { q: string; a: string }[];
    };
    ctaBanner: {
      title: string;
      subtitle: string;
      btnConsult: string;
      btnPortfolio: string;
    };
  };
  about: {
    badge: string;
    heroTitle1: string;
    heroTitle2: string;
    heroSubtitle: string;
    teamPillTitle: string;
    teamPillSub: string;
    storyBadge: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    stats: {
      yearFounded: string;
      yearFoundedLabel: string;
      websitesDone: string;
      websitesDoneLabel: string;
      guarantee: string;
      guaranteeLabel: string;
    };
    principlesBadge: string;
    principlesTitle: string;
    principlesSubtitle: string;
    principles: { title: string; desc: string }[];
    processBadge: string;
    processTitle: string;
    processSubtitle: string;
    processSteps: { step: string; title: string; desc: string }[];
    teamBadge: string;
    teamTitle: string;
    teamSubtitle: string;
    teamRoles: Record<string, string>;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaBtn: string;
  };
  contact: {
    badge: string;
    heading1: string;
    heading2: string;
    subheading: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    waLabel: string;
    waPlaceholder: string;
    needLabel: string;
    needPlaceholder: string;
    needOptions: string[];
    budgetLabel: string;
    budgetPlaceholder: string;
    budgetOptions: string[];
    btnSubmit: string;
    privacyNote: string;
  };
  footer: {
    brandDesc: string;
    servicesTitle: string;
    servicesList: string[];
    contactTitle: string;
    copyright: string;
    privacyPolicy: string;
  };
}
