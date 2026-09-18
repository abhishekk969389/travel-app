import travelData from "./travel.json";

export type RawTravelData = typeof travelData;

const sections = travelData.TravelIndustries.sections;

export type TravelTopbarData = typeof sections.Topbar.variants.TravelTopbar1;
export type TravelNavbarData = typeof sections.Navbar.variants.TravelNavbar1;
export type TravelBannerData = typeof sections.Banner.variants.TravelBanner1;
export type TravelAboutUsData = typeof sections.AboutUs.variants.TravelAboutUs1;
export type TravelDestinationsData = typeof sections.Destinations.variants.TravelDestinations1;
export type TravelPackagesData = typeof sections.Packages.variants.TravelPackages1;
export type TravelWhyChooseUsData = typeof sections.WhyChooseUs.variants.TravelWhyChooseUs1;
export type TravelAchievementsData = typeof sections.Achievements.variants.TravelAchievements1;
export type TravelBlogData = typeof sections.Blog.variants.TravelBlog1;
export type TravelFooterData = typeof sections.Footer.variants.TravelFooter1;
export type TravelSubBannersData = typeof sections.SubBanners.variants.TravelSubBanners1;
export type SubBannerPageKey = keyof TravelSubBannersData;
export type TravelSubBannerItem = TravelSubBannersData[SubBannerPageKey];
export type TravelOurStoryData = typeof sections.OurStory.variants.TravelOurStory1;
export type TravelMissionData = typeof sections.Mission.variants.TravelMission1;
export type TravelAwardsData = typeof sections.Awards.variants.TravelAwards1;

// Nested helper types
export type LinkItem = TravelNavbarData["navLinks"][number];
export type SocialLink = TravelTopbarData["socialLinks"][number];
export type DestinationItem = TravelDestinationsData["items"][number];
export type PackageItem = TravelPackagesData["items"][number];
export type WhyChooseFeature = TravelWhyChooseUsData["features"][number];
export type AchievementItem = TravelAchievementsData["items"][number];
export type BlogPostItem = TravelBlogData["posts"][number];
export type TrustBadge = TravelFooterData["trustBadges"][number];
export type BreadcrumbItem = TravelSubBannersData["about"]["breadcrumbs"][number];
export type StoryFeature = TravelOurStoryData["features"][number];
export type AwardItem = TravelAwardsData["items"][number];
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
  packages: sections.Packages.variants.TravelPackages1,
  whyChoose: sections.WhyChooseUs.variants.TravelWhyChooseUs1,
  achievements: sections.Achievements.variants.TravelAchievements1,
  blog: sections.Blog.variants.TravelBlog1,
  footer: sections.Footer.variants.TravelFooter1,
  subBanners: sections.SubBanners.variants.TravelSubBanners1,
  subBanner: sections.SubBanners.variants.TravelSubBanners1.about,
  ourStory: sections.OurStory.variants.TravelOurStory1,
  mission: sections.Mission.variants.TravelMission1,
  awards: sections.Awards.variants.TravelAwards1,
};

export default travelData;
