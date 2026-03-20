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
    title: "Full-Stack Next.js",
  },
  {
    title: "AI Agents & Subagents",
  },
  {
    title: "Automation & Testing",
  },
];

export const portfolioData = [
  {
    icon: "/images/cinevideo.png",
    title: "CINE ",
    tags: "Video Conference App",
    website: "http://cinevideo.vercel.app",
    github: "https://github.com/shayomi/cine",
    description:
      "Cine is a video communication platform built with Next.js, Stream.io, TailwindCSS, and ShadCN, offering seamless, scalable, and interactive video conferencing with a responsive and customizable",
  },
  {
    icon: "/images/savetown.png",
    title: "Savetown ",
    tags: "Fintech",
    website: "https://savetown.com",
    github: "https://github.com/Savetown/savetown-website-fe",
    description:
      "Savetown is a digital cooperative for homeowners built with Vue.js and Next.js, AWS. It enables families to pool funds, share insights, and access expert guidance, helping them plan and save for their future home together. Join our growing community working towards a brighter tomorrow.",
  },
  {
    icon: "/images/accelerate-africa.png",
    title: "Accelerate Africa ",
    tags: "Agentic Founder Platform",
    website: "http://acceler8.africa",
    github: "https://github.com/shayomi/accelerate-website-develop",
    description:
      "Accelerate Africa is now an agentic platform for founders and coaches, enabling structured mentoring, weekly submissions, and story mapping with automated workflows, observability, and reliable data infrastructure.",
  },
  {
    icon: "/images/capitalstatefarm.png",
    title: "Capital State Farm ",
    tags: "Information App",
    website: "https://capitalstatefarm.com",
    github: "https://github.com/shayomi/capital-state-farm",
    description:
      "Capital State Farm is an information web app built with Next.js, providing users with seamless access to essential data and resources in a fast, scalable, and efficient interface.",
  },
  // {
  //   icon: "/images/inventory.png",
  //   title: "LEGION ",
  //   tags: "Inventory Management ",
  //   website: "https://master.dbwj8sb29fpl3.amplifyapp.com/dashboard",
  //   github: "https://github.com/shayomi/Inventory-dashboard",
  // },
  {
    icon: "/images/eventspaces.png",
    title: "EventSpace ",
    tags: "Social App",
    website: "http://eventspaces.vercel.app",
    github: "https://github.com/shayomi/Eventspace",
    description:
      "Event Spaces is an event management platform built with MongoDB, Next.js, and JavaScript. It allows users to manage events, sell tickets, and integrate payments through Stripe, providing a seamless and efficient experience for event organizers and attendees.",
  },
  {
    icon: "/images/janesweb.png",
    title: "Janes Auction ",
    tags: "Ecommerce",
    website: "https://janes.vercel.app",
    github: "https://github.com/shayomi/Janes-Auction-webapp",
    description:
      "Janes Auction is a platform for hosting art auctions, built with MongoDB, AWS, Stripe, and Next.js. It provides a secure and scalable environment for bidding, payments, and seamless user experiences for both buyers and sellers.",
  },
  {
    icon: "/images/Accdashboard.png",
    title: "Acceler8 Africa Dashboard ",
    tags: "Data",
    website: "https://accelerate-dashboard.vercel.app/dashboard/",
    github: "https://github.com/shayomi/Accelerate-dashboard",
    description:
      "Accelerate Africa Dashboard is an ERP platform built with Next.js, offering a streamlined and efficient user interface for managing operations, tracking performance, and optimizing business processes.",
  },
  {
    icon: "/images/genteeecos.png",
    title: "Gentee Cosmestics ",
    tags: "Ecommerce",
    website: "https://genteecosmestics.vercel.app",
    github: "https://github.com/shayomi/makeup",
    description:
      "Gentee Cosmetics is a React project that fetches data from APIs to display a list of makeup products, providing users with an interactive and seamless browsing experience.",
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
    description:
      "CineDate is a UI/UX design for a movie streaming app that allows users to set up movie dates, offering an intuitive and engaging interface to plan and enjoy movie nights with others.",
  },
  {
    icon: "/images/alphamusic.png",
    title: "Alpha Music Ipad App",
    tags: "Music",
    website: "https://www.behance.net/gallery/165634963/Alpha-Ipad-music-app",
    github: "",
    description:
      "Alpha Music is a UI design for an iPad music app featuring stunning visuals and a user-friendly interface. It offers a smooth and enjoyable experience, making music discovery and playback easy for users.",
  },

  {
    icon: "/images/run.png",
    title: "Run Dispatch App",
    tags: "Logistics",
    website:
      "https://www.behance.net/gallery/164211483/UI-UX-CASE-STUDY-FOR-A-DELIVERY-MOBILE-APP",
    github: "",
    description:
      "Run Dispatch is a tech logistics UI/UX design that facilitates delivery hailing and other logistics services. With an easy-to-use interface and visually appealing design, it enhances the user experience for seamless logistics management.",
  },
  {
    icon: "/images/capitalstate.png",
    title: "Capital State farm UI Design",
    tags: "Information",
    website:
      "https://www.behance.net/gallery/194301901/Capital-Start-farm-website-UI-design",
    github: "",
    description: "UI design for capital state farm",
  },
  {
    icon: "/images/nexford.png",
    title: "Nexapluse Website Design",
    tags: "Tech Service",
    website:
      "https://www.behance.net/gallery/194303255/Nexapluse-Tech-Service-Landing-page",
    github: "",
    description:
      "Landing page UI design for Nexapluse company, a tech solution platform",
  },
  {
    icon: "/images/cleaning.png",
    title: "Onimoto Cleaning service website Design",
    tags: "Information",
    website:
      "https://www.behance.net/gallery/194303089/Onimoto-Cleaning-service",
    github: "",
    description: "Landing UI page design for a cleaning service website",
  },
];

export const navData = [
  { href: "/", name: "Home" },

  { href: "/work", name: "Portfolio" },
  { href: "/about", name: "About" },

  { href: "/blog", name: "Blog" },
];

export const reviewData = [
  {
    avatar: "/images/seun.jpeg",
    name: "Seun Akoyon",
    title: "Run Technology",
    review:
      "Sayo is reliable, fast, and deeply technical. He consistently ships modern product experiences and communicates clearly through every delivery cycle.",
  },
  {
    avatar: "/images/conah.jpeg",
    name: "Comfort Onah",
    title: "Independent",
    review:
      "When we need execution, Sayo delivers. He combines product thinking, clean implementation, and strong ownership from planning to release.",
  },
  {
    avatar: "/images/abbey.jpeg",
    name: "Ismail Olasunkanmi",
    title: "Devote CEO",
    review:
      "Sayo keeps raising his engineering bar. He learns fast, applies modern tooling quickly, and builds practical solutions that teams can trust in production.",
  },
  {
    avatar: "/images/chiye.png",
    name: "Chinyere Inya",
    title: "Future Africa",
    review:
      "Sayomi is a highly reliable and detail-oriented developer. We've collaborated on multiple projects, and he consistently delivers clean, on-time work with excellent communication throughout. His frontend skills, combined with his understanding of user experience and marketing technologies, make his web solutions not just functional, but also intuitive and conversion-focused.",
  },
  {
    avatar: "/images/conah.jpeg",
    name: "Temitayo Noamesi",
    title: "Independent",
    review:
      "Working with Sayo has been a game-changer. He combines frontend quality, AI workflow design, and automation discipline to ship features users actually adopt.",
  },
  {
    avatar: "/images/ife.webp",
    name: "Ife Adepoju",
    title: "Founders Resource",
    review:
      "Sayo brings structure to complex builds. From technical planning to delivery, he uses modern AI-assisted workflows to keep teams focused and shipping.",
  },
];

export const ContactData = [
  {
    icon: "/images/call.svg",
    title: "Call or WhatsApp",
    description: "+447349722273",
    link: "https://wa.link/37lp8a",
  },
  {
    icon: "/images/mail.svg",
    title: "Email for projects",
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

export const trustedBy = [
  {
    avatar: "/images/run-logo.png",
  },
  {
    avatar: "/images/aawhite.png",
  },
  {
    avatar: "/images/fawhitee.png",
  },
  {
    avatar: "/images/ff-1.png",
  },
  {
    avatar: "/images/capital.svg",
  },
];
