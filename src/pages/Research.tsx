import React from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody
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

const researchAreas = [
  {
    title: "Artificial Intelligence",
    icon: "fluent:brain-circuit-24-regular",
    description: "Machine learning, neural networks, and cognitive computing"
  },
  {
    title: "Quantum Computing",
    icon: "mdi:atom-variant",
    description: "Next-generation quantum systems and algorithms"
  },
  {
    title: "Biotechnology",
    icon: "mdi:dna",
    description: "Advanced biological engineering and synthetic biology"
  },
  {
    title: "Nanotechnology",
    icon: "mdi:nanotechnology",
    description: "Molecular engineering and nanoscale materials"
  },
  {
    title: "Climate Science",
    icon: "mdi:earth",
    description: "Climate change research and sustainable solutions"
  },
  {
    title: "Robotics",
    icon: "mdi:robot",
    description: "Autonomous systems and human-robot interaction"
  }
];

export default function Research() {
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
      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchAreas.map((area, index) => (
          <Card key={index} className="p-6 border border-gray-200/70 shadow-sm hover:shadow-md transition">
            <CardBody className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#A31F34]/10 text-[#A31F34]">
                  <Icon icon={area.icon} className="text-2xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {area.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm">{area.description}</p>
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
