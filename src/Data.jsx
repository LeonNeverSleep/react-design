import { ImPencil } from "react-icons/im";
import { BsShop, BsHeart, BsWatch, BsStar } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { TiDeviceDesktop } from "react-icons/ti";
import { TbSpeakerphone } from "react-icons/tb";

import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.jpg";
import project5 from "./assets/project5.jpg";
import project6 from "./assets/project6.jpg";
import project7 from "./assets/project7.jpg";

import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpg";

import testimonial1 from "./assets/testimonial1.jpg";
import testimonial2 from "./assets/testimonial2.jpg";
import testimonial3 from "./assets/testimonial3.jpg";

import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoMailRead } from "react-icons/go";

export const navLinks = [
  {
    id: 1,
    text: "首页",
    href: "home",
  },
  {
    id: 2,
    text: "项目",
    href: "projects",
  },
  {
    id: 3,
    text: "服务",
    href: "services",
  },
  {
    id: 4,
    text: "博客",
    href: "blog",
  },
  {
    id: 5,
    text: "团队成员",
    href: "testimonials",
  },
  {
    id: 6,
    text: "联系我们",
    href: "contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <ImPencil />,
    title: "文案",
  },
  {
    id: 2,
    icon: <BsShop />,
    title: "电子商务",
  },
  {
    id: 3,
    icon: <TiDeviceDesktop />,
    title: "网页设计",
  },
  {
    id: 4,
    icon: <TbSpeakerphone />,
    title: "市场营销",
  },
];
export const serviceFinishes = [
  {
    id: 1,
    icon: <BsHeart />,
    text: "用户好评",
    amount: 566,
  },
  {
    id: 2,
    icon: <BsWatch />,
    text: "工作时长",
    amount: 5335,
  },
  {
    id: 3,
    icon: <BsStar />,
    text: "获得荣誉",
    amount: 13,
  },
  {
    id: 4,
    icon: <BiCoffeeTogo />,
    text: "代码消耗咖啡杯数",
    amount: 1189,
  },
];
export const btns = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "UI/UX", value: "ui/ux" },
  { id: 3, name: "Web Design", value: "web design" },
  { id: 4, name: "Marketing", value: "marketing" },
];

export const projects = [
  {
    id: 1,
    image: project1,
    value: "web design",
  },
  {
    id: 2,
    image: project2,
    value: "ui/ux",
  },
  {
    id: 3,
    image: project3,
    value: "ui/ux",
  },
  {
    id: 4,
    image: project4,
    value: "web design",
  },
  {
    id: 5,
    image: project5,
    value: "ui/ux",
  },
  {
    id: 6,
    image: project6,
    value: "marketing",
  },
  {
    id: 7,
    image: project7,
    value: "marketing",
  },
];

export const blogs = [
  {
    id: 1,
    image: blog1,
    title: "2023年的市场营销需要哪些技能?",
  },
  {
    id: 2,
    image: blog2,
    title: "什么是网页设计?--综合指南",
  },
  {
    id: 3,
    image: blog3,
    title: "2023年你必须阅读的100个最佳网页设计博客",
  },
  {
    id: 4,
    image: blog4,
    title: "如何在家学习网页设计",
  },
];

export const testimonials = [
  {
    id: 1,
    image: testimonial1,
    name: "比利 亚当斯",
    business: "主管",
  },
  {
    id: 2,
    image: testimonial2,
    name: "格里 加纳森",
    business: "产品经理",
  },
  {
    id: 3,
    image: testimonial3,
    name: "维尼莎",
    business: "UI设计",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <TfiHeadphoneAlt />,
    text: "+86 123456789",
  },
  {
    id: 2,
    icon: <HiOutlineLocationMarker />,
    text: "福建省福州市",
  },
  {
    id: 3,
    icon: <GoMailRead />,
    text: "4543543dfged@gmail.com",
  },
];
