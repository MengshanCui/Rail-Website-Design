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

const publications = [
  {
    title: "Advanced Rail Infrastructure Monitoring Using AI",
    authors: "Smith, J., Johnson, S., Chen, M.",
    journal: "Transportation Research Part C",
    year: "2024",
    doi: "10.1016/j.trc.2024.123456"
  },
  {
    title: "Safety Analysis of High-Speed Rail Systems",
    authors: "Wilson, R., Garcia, M., Lee, K.",
    journal: "Railway Engineering Journal",
    year: "2023",
    doi: "10.1016/j.rail.2023.789012"
  },
  {
    title: "Sustainable Railway Engineering Practices",
    authors: "Thompson, A., Wang, L., Rodriguez, E.",
    journal: "Sustainable Transportation",
    year: "2023",
    doi: "10.1016/j.sust.2023.345678"
  }
];

export default function Publications() {
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
              Publications
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
              Explore our latest research publications and academic contributions
            </p>
          </div>
        </div>
      </div>

      {/* Publications List */}
      <div className="max-w-7xl mx-auto px-4 py-24 space-y-8">
        {publications.map((pub, index) => (
          <Card key={index} className="p-6 border border-gray-200/70 shadow-sm hover:shadow-md transition">
            <CardBody className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#A31F34]/10 text-[#A31F34]">
                  <Icon icon="lucide:file-text" className="text-2xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {pub.title}
                </h2>
              </div>
              <p className="text-gray-600">{pub.authors}</p>
              <p className="text-gray-500">
                {pub.journal} ({pub.year})
              </p>
              <Link 
                href={`https://doi.org/${pub.doi}`}
                className="text-[#A31F34] text-sm font-medium inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Publication
                <Icon icon="lucide:arrow-right" className="ml-1" />
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
