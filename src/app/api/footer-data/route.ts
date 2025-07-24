import { NextResponse } from "next/server";

const footerData = {
  brand: {
    name: "hawkrix",
    tagline:
      "Empowering businesses with innovative solutions. Let's create something amazing together.",
    socialLinks: [
      {
        icon: "/images/home/footerSocialIcon/linkedin.svg",
        dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
        link: "https://linkedin.com/in",
      },
      {
        icon: "/images/home/footerSocialIcon/instagram.svg",
        dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
        link: "https://instagram.com",
      },
    ],
  },
  sitemap: {
    name: "Sitemap",
    links: [
      { name: "Contact us", url: "/contact" },
      { name: "About us", url: "/#aboutus" },
      { name: "Work", url: "/#work" },
      { name: "Services", url: "/#services" },
      { name: "Pricing", url: "/#pricing" },
    ],
  },
  otherPages: {
    name: "Other Pages",
    links: [
      { name: "Error 404", url: "/not-found" },
      { name: "Terms & Conditions", url: "/terms-and-conditions" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Documentation", url: "/documentation" },
    ],
  },
  contactDetails: {
    name: "Contact Details",
    address: "Okara, Punjab Pakistan",
    email: "careers.hawkrix@gmail.com",
    phone: "0318-9374797",
  },
  copyright: "©2025 Hawkrix. All Rights Reserved",
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
  });
};
