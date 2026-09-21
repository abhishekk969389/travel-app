import travelData from "./travel.json";

export type RawTravelData = typeof travelData;

const sections = travelData.TravelIndustries.sections;

export type TravelTopbarData = typeof sections.Topbar.variants.TravelTopbar1;
export type TravelNavbarData = typeof sections.Navbar.variants.TravelNavbar1;
export type TravelBannerData = typeof sections.Banner.variants.TravelBanner1;
export type TravelAboutUsData = typeof sections.AboutUs.variants.TravelAboutUs1;
export type TravelDestinationsData = typeof sections.Destinations.variants.TravelDestinations1;
export type TravelDestinationsPageData = typeof sections.Destinations.variants.TravelDestinationsPage;
export type TravelPackagesData = typeof sections.Packages.variants.TravelPackages1;
export type TravelWhyChooseUsData = typeof sections.WhyChooseUs.variants.TravelWhyChooseUs1;
export type TravelWhyChooseUsPageData = typeof sections.WhyChooseUs.variants.TravelWhyChooseUsPage;
export type TravelAchievementsData = typeof sections.Achievements.variants.TravelAchievements1;
export type TravelBlogData = typeof sections.Blog.variants.TravelBlog1;
export type TravelFooterData = typeof sections.Footer.variants.TravelFooter1;
export type TravelSubBannersData = typeof sections.SubBanners.variants.TravelSubBanners1;
export type SubBannerPageKey = keyof TravelSubBannersData;
export type TravelSubBannerItem = TravelSubBannersData[SubBannerPageKey];
export type TravelOurStoryData = typeof sections.OurStory.variants.TravelOurStory1;
export type TravelMissionData = typeof sections.Mission.variants.TravelMission1;
export type TravelAwardsData = typeof sections.Awards.variants.TravelAwards1;
export type TravelTeamData = typeof sections.Team.variants.TravelTeam1;
export type TravelGalleryData = typeof sections.Gallery.variants.TravelGallery1;
export type TravelVideoGalleryData = typeof sections.Gallery.variants.TravelVideoGallery1;
export type TravelTestimonialsData = typeof sections.Testimonials.variants.TravelTestimonials1;
export type TravelFaqData = typeof sections.FAQ.variants.TravelFAQ1;
export type TravelPartnersData = typeof sections.Partners.variants.TravelPartners1;
export type TravelContactUsData = typeof sections.ContactUs.variants.TravelContactUs1;
export type TravelContactMessageData = typeof sections.ContactUs.variants.TravelContactMessage1;
export type TravelContactLocationData = typeof sections.ContactUs.variants.TravelContactLocation1;
export type TravelPrivacyPolicyData = typeof sections.PrivacyPolicy.variants.TravelPrivacyPolicy1;
export type TravelPaymentPolicyData = typeof sections.PaymentPolicy.variants.TravelPaymentPolicy1;
export type TravelRefundPolicyData = typeof sections.RefundPolicy.variants.TravelRefundPolicy1;
export type TravelTermsConditionData = typeof sections.TermsCondition.variants.TravelTermsCondition1;
export type TravelEnquiryData = typeof sections.Enquiry.variants.TravelEnquiry1;
export type TravelSitemapData = typeof sections.Sitemap.variants.TravelSitemap1;
export type TravelServicesData = typeof sections.Services.variants.TravelServices1;
export type TravelTourPackagesPageData = typeof sections.TourPackagesPage.variants.TravelTourPackagesPage1;

// Nested helper types
export type LinkItem = TravelNavbarData["navLinks"][number];
export type SocialLink = TravelTopbarData["socialLinks"][number];
export type DestinationItem = TravelDestinationsData["items"][number];
export type DestinationCardItem = TravelDestinationsPageData["domesticDestinations"][number];
export type DestinationTagItem = DestinationCardItem["tags"][number];
export type PackageItem = TravelPackagesData["items"][number];
export type TourPackageCardItem = TravelTourPackagesPageData["packages"][number];
export type TourPackageDetails = NonNullable<TourPackageCardItem["details"]>;
export type TourPackageItineraryItem = NonNullable<TourPackageDetails["itinerary"]>[number];
export type TourPackageHighlightItem = NonNullable<TourPackageDetails["highlights"]>[number];
export type TourPackageQuickStat = NonNullable<TourPackageDetails["quickStats"]>[number];
export type TourPackageQuickInclusion = NonNullable<TourPackageDetails["quickInclusions"]>[number];
export type TourPackageRelatedItem = NonNullable<TourPackageDetails["relatedPackages"]>[number];
export type TourPackageFilterGroupItem = TravelTourPackagesPageData["filterSidebar"]["groups"][number];
export type TourPackageSortOptionItem = TravelTourPackagesPageData["sortOptions"][number];
export type WhyChooseFeature = TravelWhyChooseUsData["features"][number];
export type WhyChoosePageFeature = TravelWhyChooseUsPageData["features"][number];
export type AchievementItem = TravelAchievementsData["items"][number];
export type BlogPostItem = TravelBlogData["posts"][number];

export interface BlogDetailPlace {
  id?: string;
  name: string;
  description: string;
  image: string;
}

export interface BlogDetailQuote {
  text: string;
  brushText?: string;
}

export interface BlogDetailsData {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  featuredImage: string;
  brushImage: string;
  brushText: string;
  locationTag: {
    title: string;
    subtitle: string;
  };
  introParagraph: string;
  section1: {
    title: string;
    content: string;
  };
  section2: {
    title: string;
    places: BlogDetailPlace[];
  };
  quote: BlogDetailQuote;
  section3: {
    title: string;
    tips: string[];
    conclusion: string;
  };
}
export type TrustBadge = TravelFooterData["trustBadges"][number];
export type BreadcrumbItem = TravelSubBannersData["about"]["breadcrumbs"][number];
export type StoryFeature = TravelOurStoryData["features"][number];
export type AwardItem = TravelAwardsData["items"][number];
export type TeamMemberItem = TravelTeamData["members"][number];
export type TeamMemberDetails = NonNullable<TeamMemberItem["details"]>;
export type TeamDestinationItem = NonNullable<TeamMemberDetails["destinations"]>[number];
export type TeamWhyTravelFeature = NonNullable<TeamMemberDetails["whyTravelFeatures"]>[number];
export type TravelPaginationData = TravelDestinationsPageData["pagination"];
export type GalleryItem = TravelGalleryData["items"][number];
export type GalleryTabItem = TravelGalleryData["tabs"][number];
export type VideoGalleryItem = TravelVideoGalleryData["items"][number];
export type TestimonialItem = TravelTestimonialsData["items"][number];
export type FaqItem = TravelFaqData["items"][number];
export type PartnerItem = TravelPartnersData["items"][number];
export type ContactCardItem = TravelContactUsData["cards"][number];
export type ContactMessageFeatureItem = TravelContactMessageData["features"][number];
export type LocationCardData = TravelContactMessageData["locationCard"];
export type LocationOfficePinData = LocationCardData["officePin"];
export type PolicyItem = TravelPrivacyPolicyData["items"][number];
export type EnquiryFeatureItem = TravelEnquiryData["features"][number];
export type EnquiryFormData = TravelEnquiryData["form"];
export type SitemapCategoryItem = TravelSitemapData["categories"][number];
export type SitemapLinkItem = SitemapCategoryItem["links"][number];
export type ServiceItem = TravelServicesData["items"][number];
export type ServiceFeature = ServiceItem["features"][number];
export type NavDropdownItem = {
  name: string;
  href: string;
};

export interface SectionProps<T> {
  data: T;
}

export const site = {
  topbar: sections.Topbar.variants.TravelTopbar1,
  navbar: sections.Navbar.variants.TravelNavbar1,
  banner: sections.Banner.variants.TravelBanner1,
  aboutUs: sections.AboutUs.variants.TravelAboutUs1,
  destinations: sections.Destinations.variants.TravelDestinations1,
  destinationsPage: sections.Destinations.variants.TravelDestinationsPage,
  packages: sections.Packages.variants.TravelPackages1,
  tourPackagesPage: sections.TourPackagesPage.variants.TravelTourPackagesPage1,
  whyChoose: sections.WhyChooseUs.variants.TravelWhyChooseUs1,
  whyChoosePage: sections.WhyChooseUs.variants.TravelWhyChooseUsPage,
  achievements: sections.Achievements.variants.TravelAchievements1,
  blog: sections.Blog.variants.TravelBlog1,
  footer: sections.Footer.variants.TravelFooter1,
  subBanners: sections.SubBanners.variants.TravelSubBanners1,
  subBanner: sections.SubBanners.variants.TravelSubBanners1.about,
  ourStory: sections.OurStory.variants.TravelOurStory1,
  mission: sections.Mission.variants.TravelMission1,
  awards: sections.Awards.variants.TravelAwards1,
  team: sections.Team.variants.TravelTeam1,
  gallery: sections.Gallery.variants.TravelGallery1,
  videoGallery: sections.Gallery.variants.TravelVideoGallery1,
  testimonials: sections.Testimonials.variants.TravelTestimonials1,
  faq: sections.FAQ.variants.TravelFAQ1,
  partners: sections.Partners.variants.TravelPartners1,
  contactUs: sections.ContactUs.variants.TravelContactUs1,
  contactMessage: sections.ContactUs.variants.TravelContactMessage1,
  contactLocation: sections.ContactUs.variants.TravelContactLocation1,
  privacyPolicy: sections.PrivacyPolicy.variants.TravelPrivacyPolicy1,
  paymentPolicy: sections.PaymentPolicy.variants.TravelPaymentPolicy1,
  refundPolicy: sections.RefundPolicy.variants.TravelRefundPolicy1,
  termsCondition: sections.TermsCondition.variants.TravelTermsCondition1,
  enquiry: sections.Enquiry.variants.TravelEnquiry1,
  sitemap: sections.Sitemap.variants.TravelSitemap1,
  services: sections.Services.variants.TravelServices1,
};

export default travelData;
