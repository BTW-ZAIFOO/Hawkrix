import { NextResponse } from "next/server";
import {
  avatar,
  brand,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
} from "@/app/types/menu";

interface innovationItem {
  icon: string;
  title: string;
  bg_color: string;
  txt_color: string;
}

const avatarList: avatar[] = [
  {
    image: "/images/home/avatar_1.jpg",
    title: "Sarah Johnson",
  },
  {
    image: "/images/home/avatar_2.jpg",
    title: "Olivia Miller",
  },
  {
    image: "/images/home/avatar_3.jpg",
    title: "Sophia Roberts",
  },
  {
    image: "/images/home/avatar_4.jpg",
    title: "Isabella Clark",
  },
];

const brandList: brand[] = [
  {
    image: "/images/home/brand/brand-icon-1.svg",
    darkImg: "/images/home/brand/brand-darkicon-1.svg",
    title: "Adobe",
  },
  {
    image: "/images/home/brand/brand-icon-2.svg",
    darkImg: "/images/home/brand/brand-darkicon-2.svg",
    title: "Figma",
  },
  {
    image: "/images/home/brand/brand-icon-3.svg",
    darkImg: "/images/home/brand/brand-darkicon-3.svg",
    title: "Shopify",
  },
  {
    image: "/images/home/brand/brand-icon-4.svg",
    darkImg: "/images/home/brand/brand-darkicon-4.svg",
    title: "Dribble",
  },
  {
    image: "/images/home/brand/brand-icon-5.svg",
    darkImg: "/images/home/brand/brand-darkicon-5.svg",
    title: "Webflow",
  },
];

const innovationList: innovationItem[] = [
  {
    icon: "FaMobileAlt",
    title: "Mobile App\nDevelopment",
    bg_color: "bg-purple/20",
    txt_color: "text-purple",
  },
  {
    icon: "FaLaptopCode",
    title: "Website\nDevelopment",
    bg_color: "bg-blue/20",
    txt_color: "text-blue",
  },
  {
    icon: "FaPaintBrush",
    title: "UI/UX Design \nGraphic Designing",
    bg_color: "bg-orange/20",
    txt_color: "text-orange",
  },
  {
    icon: "FaRobot",
    title: "Ai Chatbot Development\nAi Automation",
    bg_color: "bg-green/20",
    txt_color: "text-green",
  },
  {
    icon: "FaCogs",
    title: "Custom Software\nDevelopment",
    bg_color: "bg-pink/20",
    txt_color: "text-pink",
  },
];

const onlinePresenceList: onlinePresence[] = [
  {
    image: "/images/home/onlinePresence/online_img_1.jpg",
    title: "FlowBank",
    tag: ["UX Research", "Interface Design"],
    link: "",
  },
  {
    image: "/images/home/onlinePresence/online_img_2.jpg",
    title: "Academy.co",
    tag: ["Product Design", "Interaction Design"],
    link: "",
  },
  {
    image: "/images/home/onlinePresence/online_img_3.jpg",
    title: "Genome",
    tag: ["Brand identity design", "UX Research"],
    link: "",
  },
  {
    image: "/images/home/onlinePresence/online_img_4.jpg",
    title: "Hotto",
    tag: ["Visual Storytelling", "Web & Mobile Design"],
    link: "",
  },
];

const creativeMindList: creativeMind[] = [
  {
    image: "/images/home/creative/ceo.png",
    name: "HUZAIFA KHAN",
    position: "CE0 & Founder-Hawkrix",
    linkedinLink: "https://www.linkedin.com/in/huzaifakhan11",
  },
];

const WebResultTagList: WebResultTag[] = [
  {
    image: "/images/home/result/creativity.svg",
    name: "Creativity",
    bg_color: "bg-purple/20",
    txt_color: "text-purple",
  },
  {
    image: "/images/home/result/innovation.svg",
    name: "Innovation",
    bg_color: "bg-blue/20",
    txt_color: "text-blue",
  },
  {
    image: "/images/home/result/strategy.svg",
    name: "Strategy",
    bg_color: "bg-orange/20",
    txt_color: "text-orange",
  },
];

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: "bg-pale-yellow",
    text_color: "text-dark_black",
    descp_color: "dark_black/60",
    border_color: "border-dark_black/10",
    plan_name: "Starter",
    plan_descp: "For companies who need design support. One request at a time",
    plan_price: "$2500",
    icon_img: "/images/home/startupPlan/white_tick.svg",
    plan_feature: [
      "Design Updates Every 2 Days",
      "Mid-level Designer",
      "SEO optimization",
      "Monthly analytics",
      "2x Calls Per Month",
      "License free assets",
    ],
  },
  {
    plan_bg_color: "bg-purple_blue",
    text_color: "text-white",
    descp_color: "white/60",
    border_color: "border-white/10",
    plan_name: "Pro",
    plan_descp: "2x the speed. Great for an MVP, Web App or complex problem",
    plan_price: "$3800",
    icon_img: "/images/home/startupPlan/black_tick.svg",
    plan_feature: [
      "Design Updates Daily",
      "Senior-level Designer",
      "AI Advisory Framework",
      "Full-service Creative Team",
      "4x Calls Per Month",
      "License free assets",
    ],
  },
];

const faqList: faq[] = [
  {
    faq_que: "What services does Hawkrix Agency offer?",
    faq_ans:
      "We offer a wide range of services including web and mobile app development, UI/UX design, AI chatbot development, branding, and ongoing support.",
  },
  {
    faq_que: "How long does a typical project take?",
    faq_ans: "Project timelines vary depending on complexity and requirements.",
  },
  {
    faq_que: "How is pricing structured at Hawkrix Agency?",
    faq_ans:
      "Pricing is structured based on the scope and complexity of the project. We offer different plans to suit various needs.",
  },
  {
    faq_que: "Do you offer ongoing support after project completion?",
    faq_ans:
      "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
  },
  {
    faq_que: "How often will I receive updates on my project?",
    faq_ans:
      "We provide regular updates throughout the project. The frequency depends on your chosen plan, ranging from every two days to daily updates.",
  },
];

const achievementsList: achievements[] = [
  {
    icon: "/images/home/achievement/framer_award.svg",
    dark_icon: "/images/home/achievement/dark_framer_award.svg",
    sub_title: "Mobile/Web Awards",
    title:
      "Celebrated for cutting-edge interaction design and seamless user experiences.",
    year: "2024",
    url: "https://Hawkrix.vercel.app/",
  },
  {
    icon: "/images/home/achievement/dribble_award.svg",
    dark_icon: "/images/home/achievement/dribble_award.svg",
    sub_title: "Design Awards",
    title: "Recognized for creative excellence and innovative design solutions",
    year: "2023",
    url: "https://Hawkrix.vercel.app/",
  },
  {
    icon: "/images/home/achievement/awward_award.svg",
    dark_icon: "/images/home/achievement/dark_awward_award.svg",
    sub_title: "Chatbot Integration Awards",
    title:
      "Honored with the Best Website Design for creativity, usability, and innovation.",
    year: "2022",
    url: "https://Hawkrix.vercel.app/",
  },
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
