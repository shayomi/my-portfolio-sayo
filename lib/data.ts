import { IconType } from "react-icons";
import {
  FaGithub,
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";

// Define a type for each social media icon object
interface SocialMedia {
  href: string;
  icon: IconType;
}

export const socialData: SocialMedia[] = [
  { href: "https://wa.link/37lp8a", icon: FaWhatsapp },
  { href: "https://github.com/shayomi", icon: FaGithub },
  {
    href: "https://www.instagram.com/shayomiiii_designs?igsh=MWI4djBwdWo3MG1pdw%3D%3D&utm_source=qr",
    icon: FaInstagram,
  },
  { href: "https://www.behance.net/shayomidesigns", icon: FaBehance },
  {
    href: "https://www.linkedin.com/in/sayo-adegoroye-41b28064?",
    icon: FaLinkedinIn,
  },
];

export const heroData = [
  {
    title: "Web Development",
  },
  {
    title: "UI / UX ",
  },
  {
    title: "Visual Designs",
  },
];

export const portfolioData = [
  {
    icon: "/images/cinevideo.png",
    title: "CINE ",
    tags: "Video Conference App",
    website: "http://cinevideo.vercel.app",
    github: "https://github.com/shayomi/cine",
  },
  {
    icon: "/images/inventory.png",
    title: "LEGION ",
    tags: "Inventory Management ",
    website: "https://master.dbwj8sb29fpl3.amplifyapp.com/dashboard",
    github: "https://github.com/shayomi/Inventory-dashboard",
  },
  {
    icon: "/images/eventspaces.png",
    title: "EventSpace ",
    tags: "Social App",
    website: "http://eventspaces.vercel.app",
    github: "https://github.com/shayomi/Eventspace",
  },
  {
    icon: "/images/janesweb.png",
    title: "Janes Auction ",
    tags: "Ecommerce",
    website: "https://janes.vercel.app",
    github: "https://github.com/shayomi/Janes-Auction-webapp",
  },
  {
    icon: "/images/genteeecos.png",
    title: "Gentee Cosmestics ",
    tags: "Ecommerce",
    website: "https://genteecosmestics.vercel.app",
    github: "https://github.com/shayomi/makeup",
  },
  {
    icon: "/images/savetown.png",
    title: "Savetown ",
    tags: "Fintech",
    website: "https://savetown.com",
    github: "https://github.com/Savetown/savetown-website-fe",
  },
  {
    icon: "/images/accelerate-africa.png",
    title: "Accelerate Africa ",
    tags: "Information App",
    website: "http://acceler8.africa",
    github: "https://github.com/shayomi/accelerate-website-develop",
  },
  {
    icon: "/images/capitalstatefarm.png",
    title: "Capital State Farm ",
    tags: "Information App",
    website: "https://capitalstatefarm.com",
    github: "https://github.com/shayomi/capital-state-farm",
  },
  {
    icon: "/images/spinbet.png",
    title: "Spinbet",
    tags: "Betting App",
    website: "https://spinzbet.web.app/",
    github: "https://github.com/shayomi/Spinbet",
  },
];

export const UIUXData = [
  {
    icon: "/images/cinedate.png",
    title: "Cinedate App Design",
    tags: "Social",
    website:
      "https://www.behance.net/gallery/168172805/UX-case-study-for-CineDate-streaming-application",
    github: "",
  },
  {
    icon: "/images/alphamusic.png",
    title: "Alpha Music Ipad App",
    tags: "Music",
    website: "https://www.behance.net/gallery/165634963/Alpha-Ipad-music-app",
    github: "",
  },
  {
    icon: "/images/run.png",
    title: "Run Dispatch App",
    tags: "Logistics",
    website:
      "https://www.behance.net/gallery/164211483/UI-UX-CASE-STUDY-FOR-A-DELIVERY-MOBILE-APP",
    github: "",
  },
  {
    icon: "/images/capitalstate.png",
    title: "Capital State farm UI Design",
    tags: "Information",
    website:
      "https://www.behance.net/gallery/194301901/Capital-Start-farm-website-UI-design",
    github: "",
  },
  {
    icon: "/images/nexford.png",
    title: "Nexapluse Website Design",
    tags: "Tech Service",
    website:
      "https://www.behance.net/gallery/194303255/Nexapluse-Tech-Service-Landing-page",
    github: "",
  },
  {
    icon: "/images/cleaning.png",
    title: "Onimoto Cleaning service website Design",
    tags: "Information",
    website:
      "https://www.behance.net/gallery/194303089/Onimoto-Cleaning-service",
    github: "",
  },
];

export const navData = [
  { href: "/", name: "Home" },
  { href: "#services", name: "Service" },
  { href: "#portfolio", name: "Portfolio" },
  { href: "#about", name: "About" },
  { href: "#reviews", name: "Reviews" },
  { href: "#contact", name: "Contact" },
];

export const reviewData = [
  {
    avatar: "/images/seun.jpeg",
    name: "Seun Akoyon",
    review:
      "Sayomi is an amazing developer who is very diligent and keep to time. We have worked on quite a lot of projects together and he never disappoints.His web designs are topnotch, easy to navigate and interactive",
  },
  {
    avatar: "/images/conah.jpeg",
    name: "Comfort Onah",
    review:
      "Sayo is my go to guy when it comes to web development and designs.His time management is something i love about him and also his commitments to work. ",
  },
  {
    avatar: "/images/abbey.jpeg",
    name: "Ismail Olasunkanmi",
    review:
      "Sayo is my mentee and i can tell you he is a great developer. Always learning and improving , keeping up with latest technology at all cost. He is very intelligent and resourceful",
  },
];

export const ContactData = [
  {
    icon: "/images/call.svg",
    title: "Call me at",
    description: "+2349034970469",
    link: "https://wa.link/37lp8a",
  },
  {
    icon: "/images/mail.svg",
    title: "Send me an email",
    description: "adegoroyesayotosin@gmail.com",
    link: "https://mailto:adegoroyesayotosin@gmail.com",
  },
];

export const Footercontactdata = [
  {
    icon: "/images/github.svg",
    website: "https://github.com/shayomi",
  },
  {
    icon: "/images/behance.svg",
    website: "https://www.behance.net/shayomidesigns",
  },
  {
    icon: "/images/Ig.svg",
    website:
      "https://www.instagram.com/shayomiiii_designs?igsh=MWI4djBwdWo3MG1pdw%3D%3D&utm_source=qr",
  },
  {
    icon: "/images/linkedin.svg",
    website: "https://www.linkedin.com/in/sayo-adegoroye-41b28064?",
  },
  {
    icon: "/images/whatsapp.svg",
    website: "https://wa.link/37lp8a",
  },
];
