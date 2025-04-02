import React, { useState } from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody,
  Image, Skeleton
} from "@heroui/react";
import { Icon } from "@iconify/react";

interface ResearchArea {
  date: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
  // icon: string;
}

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "Research", href: "/research" },
  { name: "Members", href: "/members" },
  { name: "Teaching", href: "/teaching" },
  { name: "Publications", href: "/publications" },
  { name: "Resources", href: "/resources" }
];

const researchAreas: ResearchArea[] = [
  {
    "date": "NA",
    "title": "Railway Infrastructure Risk Management",
    "category": "Research",
    "image": "https://rail.rutgers.edu/img/newicture1.png",
    "description": "This project develops an implementable risk management model for assessing track safety risk, in support of the optimization of track inspection and maintenance. The current research focuses on broken rails, which are the leading derailment cause on U.S. freight railroads.",
    "link": "#",
    // "icon": "mdi:train"
  },
  {
    "date": "NA",
    "title": "Advanced Train Control Technologies and Risk",
    "category": "Research",
    "image": "https://rail.rutgers.edu/img/NewPicture2.png",
    "description": "The objective of this research is to evaluate the safety benefit and cost and operational impact of implementing positive train control (PTC) under various operating scenarios, such as restricted speed operations.",
    "link": "#",
    // "icon": "mdi:train-variant"
  },
  {
    "date": "NA",
    "title": "Intelligent Railroads, Safety and Security",
    "category": "Research",
    "image": "https://rail.rutgers.edu/img/newPicture3.png",
    "description": "The railway industry in stepping into the stage of the Digital Railways, which we call the Internet of Railway Things (IoRT). This project convened railroad experts and analysts to evaluate the safety and security risk profiles of emerging connected railroad technologies, and thus recommend implementable risk mitigation actions.",
    "link": "#",
    //"icon": "mdi:shield-check"
  },
  {
    "date": "NA",
    "title": "Railroad Big Data and Artificial Intelligence",
    "category": "Research",
    "image": "https://rail.rutgers.edu/img/bigdata1.jpg",
    "description": "This research develops advanced big data and artificial intelligence techniques to turn railroad big data into useful information that leads to risk-informed safety decisions. We also train the next generation of railroad experts skilled at data analytics.",
    "link": "#",
    //"icon": "mdi:database"
  },
  {
    "date": "NA",
    "title": "Freight Railroads, Economics and Logistics",
    "category": "Research",
    "image": "https://rail.rutgers.edu/img/p5.png",
    "description": "This project studies the economic efficiency of freight rail transportation and develops operations research methods to optimally allocate limited resources for maximizing the economic benefits of freight rail projects.",
    "link": "#",
   // "icon": "mdi:package-variant"
  },
  {
    "date": "NA",
    "title": "Evaluation of Raised Pavement Markers (RPMs)",
    "category": "Research",
    "image": "https://rail.rutgers.edu/img/project1.jpg",
    "description": "This research evaluates the safety effects of raised pavement makers, and identifies their optimal implementation and promoting alternatives or modifications. The work is sponsored by New Jersey Department of Transportation.",
    "link": "#",
    // "icon": "mdi:road"
  },
  {
    "date": "NA",
    "title": "Hazardous Materials Transportation Risk Analysis Tool",
    "category": "Research",
    "image": "https://rail.rutgers.edu/img/project2.png",
    "description": "This project develops a GIS-based risk assessment tool for rail transport of flammable liquids. The tool estimates the average recurrence interval of a release incident, and the affected population. This work is sponsored by the Center for Advanced Infrastructure and Transportation (CAIT) at Rutgers University.",
    "link": "#",
    // "icon": "mdi:alert-circle"
  }
];

const defaultImage = "https://via.placeholder.com/400x300?text=Research+Area";

export default function Research() {
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>({});
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const handleImageLoad = (index: number) => {
    setImageLoading(prev => ({ ...prev, [index]: false }));
  };

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
    setImageLoading(prev => ({ ...prev, [index]: false }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <Navbar maxWidth="xl" className="bg-black/90 backdrop-blur-md supports-[backdrop-filter]:bg-black/60">
        <NavbarBrand>
          <Link href="/" className="font-bold text-white text-xl flex items-center gap-2">
            <Icon icon="gravity-ui:atom" className="text-2xl text-[#A31F34]" />
            Rutgers Rail Program
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link href={item.href} className="text-white hover:text-[#A31F34] transition-colors">
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button variant="ghost" className="text-white" startContent={<Icon icon="lucide:search" />}>
              Search
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/500')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative min-h-[400px] flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Research Areas
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
              Discover our cutting-edge research across multiple disciplines
            </p>
          </div>
        </div>
      </div>

      {/* Research Area Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24 space-y-8">
        {researchAreas.map((area, index) => (
          <Card key={index} className="p-6 border border-gray-200/70 shadow-sm hover:shadow-md transition">
            <CardBody className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="relative aspect-video">
                  {imageLoading[index] && (
                    <Skeleton className="w-full h-full rounded-lg" />
                  )}
                  <Image
                    src={imageError[index] ? defaultImage : area.image}
                    alt={area.title}
                    className={`w-full h-full object-cover rounded-lg ${imageLoading[index] ? 'hidden' : ''}`}
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                  />
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {area.title}
                </h2>
                <p className="text-[#A31F34] font-medium">
                  {area.category}
                </p>
                <p className="text-gray-600">
                  {area.description}
                </p>
                <Link href={area.link} className="text-[#A31F34] text-sm font-medium inline-flex items-center">
                  Learn more
                  <Icon icon="lucide:arrow-right" className="ml-1" />
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
