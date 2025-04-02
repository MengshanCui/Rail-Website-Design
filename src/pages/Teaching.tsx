import React from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,
  Button, Card, CardBody
} from "@heroui/react";
import { Icon } from "@iconify/react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "Research", href: "/research" },
  { name: "Members", href: "/members" },
  { name: "Teaching", href: "/teaching" },
  { name: "Publications", href: "/publications" },
  { name: "Resources", href: "/resources" }
];

const courses = [
  {
    "date": "Fall 2017",
    "title": "Engineering Risk Analysis in Transportation Systems",
    "category": "Teaching",
    "image": "https://rail.rutgers.edu/img/NotExist.jpg",
    "description": "This course provides an introduction to the concepts, theories, methodologies and applications of engineering risk analysis in the context of multimodal transportation safety. The topics include Bayesian Network, Econometrics, Fault Tree, Event Tree and Empirical Bayes.",
    "link": "#"
  },
  {
    "date": "Fall 2017",
    "title": "EngTrack Engineering",
    "category": "Teaching",
    "image": "https://rail.rutgers.edu/img/Group_Photo.jpeg",
    "description": "This course teaches fundamentals of railroad track engineering, including rail, tie, ballast, roadbed, track geometry layout, as well as track data analytics and safety.",
    "link": "#"
  },
  {
    "date": "Spring 2017",
    "title": "Transportation Engineering I",
    "category": "Teaching",
    "image": "https://rail.rutgers.edu/img/S2017.jpg",
    "description": "This course provides an introduction to the design and operations of transportation systems, and materials selection, design, and management of transportation infrastructure.",
    "link": "#"
  },
  {
    "date": "Fall 2016",
    "title": "Rail Transportation System",
    "category": "Teaching",
    "image": "https://rail.rutgers.edu/img/Fall2016.jpg",
    "description": "This course covers the fundamentals of railroad transportation and engineering. The topics include railroad efficiency and economics, track infrastructure, rail vehicle, traffic control system, highway-rail grade crossing, and railroad safety.",
    "link": "#"
  },
  {
    "date": "Spring 2016",
    "title": "Transportation Engineering II",
    "category": "Teaching",
    "image": "https://rail.rutgers.edu/img/teach4.jpg",
    "description": "This course provides an introduction to multimodal transportation systems (roadway, railway, maritime). The students work on an extensive, customized capstone research project that addresses a unique transportation research problem, ranging from railway safety, parking data analysis to infrastructure management.",
    "link": "#"
  },
  {
    "date": "Fall 2015",
    "title": "Engineering Risk Analysis in Transportation Systems",
    "category": "Teaching",
    "image": "https://rail.rutgers.edu/img/teach3.jpg",
    "description": "This course provides an introduction to the concepts, theories, methodologies and applications of engineering risk analysis in the context of multimodal transportation safety. Upon successful completion of this course, students would be able to perform mode-specific and multimodal transportation engineering risk analyses.",
    "link": "#"
  },
  {
    "date": "Spring 2015",
    "title": "Rail Transportation System",
    "category": "Teaching",
    "image": "https://rail.rutgers.edu/img/teach2.jpg",
    "description": "This course covers the fundamentals of railroad transportation and engineering. The topics include railroad efficiency and economics, track infrastructure, rail vehicle, traffic control system, highway-rail grade crossing, and railroad safety.",
    "link": "#"
  },
  {
    "date": "Fall 2014",
    "title": "Freight Transportation Systems",
    "category": "Teaching",
    "image": "https://rail.rutgers.edu/img/teach1.png",
    "description": "This advanced, graduate-level course provides an introduction to multimodal (rail, road, waterway) freight transportation systems. This course comprises three inter-connected parts: 1) introduce basic modal-specific concepts and industry development; 2) explain widely used modeling techniques used in freight transportation and logistics; and 3) apply the methodologies to an emerging high-profile transportation research topic through a term project.",
    "link": "#"
  },
  
];

export default function Teaching() {
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
              Teaching
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
              Explore our comprehensive railway engineering curriculum
            </p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <Card key={index} className="p-6 border border-gray-200/70 shadow-sm hover:shadow-md transition">
            <CardBody className="space-y-3">
              {course.image && (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#A31F34]/10 text-[#A31F34]">
                  <Icon icon="lucide:book-open" className="text-2xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {course.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm">{course.description}</p>
              <Link href="#" className="text-[#A31F34] text-sm font-medium inline-flex items-center">
                Learn more
                <Icon icon="lucide:arrow-right" className="ml-1" />
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
