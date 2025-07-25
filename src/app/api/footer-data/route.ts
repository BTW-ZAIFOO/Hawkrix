import { NextResponse } from "next/server";

const footerData = {
  brand: {
    name: "Hawkrix",
    tagline:
      "From Vision to Execution We Transform Ideas into Reality.",
    socialLinks: [
      {
        icon: "/images/home/footerSocialIcon/linkedin.svg",
        dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
        link: "https://www.linkedin.com/company/hawkrix/",
      },
      {
        icon: "/images/home/footerSocialIcon/instagram.svg",
        dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
        link: "https://www.instagram.com/hawkrix?igsh=MTMzb3J1cWMwcW1sNQ==",
      },
      {
        icon: "/images/home/footerSocialIcon/email.png",
        dark_icon: "/images/home/footerSocialIcon/email_dark.png",
        link: "mailto:careers.hawkrix@gmail.com",
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
    ],
  },
  contactDetails: {
    name: "Contact Details",
    address: "Okara, Punjab Pakistan",
    email: "careers.Hawkrix@gmail.com",
    phone: "0318-9374797",
  },
  copyright: "©2025 Hawkrix. All Rights Reserved",
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
  });
};
