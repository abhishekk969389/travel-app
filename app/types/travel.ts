export interface LinkItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
}

export interface SocialLink {
    platform: string;
    href: string;
    icon: string;
}

export interface PhoneContact {
    number: string;
    href: string;
}

export interface EmailContact {
    address: string;
    href: string;
}

export interface CtaButton {
    text: string;
    href: string;
}

export interface ImageInfo {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface TrustBadge {
    label: string;
    icon: string;
}

export interface TopbarData {
    contactInfo: {
        phone: PhoneContact;
        email: EmailContact;
    };
    navLinks: LinkItem[];
    socialLinks: SocialLink[];
    cta: CtaButton;
}

export interface NavbarData {
    logo: ImageInfo;
    navLinks: LinkItem[];
    cta: CtaButton;
}

export interface FooterData {
    brand: {
        logo: ImageInfo;
        description: string;
    };
    socialLinks: SocialLink[];
    quickLinks: LinkItem[];
    destinations: LinkItem[];
    services: LinkItem[];
    newsletter: {
        title: string;
        description: string;
        placeholder: string;
        buttonText: string;
    };
    trustBadges: TrustBadge[];
    bottomBar: {
        copyright: string;
        links: LinkItem[];
    };
}

export interface BannerData {
    subtitle: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    cta: CtaButton;
    backgroundImage: string;
    slidesCount: number;
}

export interface DestinationItem {
    id: string;
    name: string;
    subtitle: string;
    image: string;
    accentColor: string;
    tilt?: string;
    href: string;
}

export interface DestinationsData {
    subtitle: string;
    titlePrefix: string;
    titleHighlight: string;
    items: DestinationItem[];
}

export interface PackageItem {
    id: string;
    duration: string;
    title: string;
    subtitle: string;
    image: string;
    rating: number;
    reviewsCount: number;
    price: number;
    priceUnit: string;
    includes: string[];
    href: string;
}

export interface PackagesData {
    subtitle: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    items: PackageItem[];
    cta: CtaButton;
}

export interface WhyChooseHero {
    subtitle: string;
    headingPrefix: string;
    headingMiddle: string;
    headingHighlight: string;
    headingSuffix: string;
    description: string;
    cta: CtaButton;
    image: string;
    brushImage: string;
    watermarkText: string;
    badgeLeftLines: string[];
    badgeRightLines: string[];
}

export interface WhyChooseFeature {
    id: string;
    icon: string;
    iconBadgeText?: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    image: string;
    href: string;
}

export interface WhyChooseData {
    hero: WhyChooseHero;
    features: WhyChooseFeature[];
}

export interface AchievementItem {
    id: string;
    number: string;
    label: string;
    icon: string;
}

export interface AchievementsData {
    subtitle: string;
    headingPrefix: string;
    headingHighlight: string;
    description: string;
    image: string;
    doodleTextLines: string[];
    items: AchievementItem[];
}

export interface BlogPostItem {
    id: string;
    day: string;
    monthYear: string;
    dateBadgeGradient: string;
    readTime: string;
    category: string;
    title: string;
    image: string;
    href: string;
}

export interface BlogData {
    subtitle: string;
    headingPrefix: string;
    headingHighlight: string;
    description: string;
    cta: CtaButton;
    posts: BlogPostItem[];
}

export interface TravelAppData {
    topbar: TopbarData;
    navbar: NavbarData;
    banner: BannerData;
    destinations: DestinationsData;
    packages: PackagesData;
    whyChoose: WhyChooseData;
    achievements: AchievementsData;
    blog: BlogData;
    footer: FooterData;
}


