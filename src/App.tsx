import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, Image, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function App() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Research", href: "/research" },
    { name: "Alumni", href: "/alumni" },
    { name: "Teaching", href: "/teaching" },
    { name: "Publications", href: "/publications" },
    { name: "Resources", href: "/resources" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Main Navigation */}
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
              <Link 
                href={item.href} 
                className="text-white hover:text-[#A31F34] transition-colors"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button 
              variant="ghost"
              className="text-white"
              startContent={<Icon icon="lucide:search" />}
            >
              Search
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/500')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative min-h-[600px] flex items-center justify-center">
          <div className="text-center text-white px-4 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Research at Rutgers Rail Program
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
              Pushing the boundaries of knowledge and possibility
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Button 
                href="/research"
                as={Link}
                color="primary"
                size="lg"
                className="bg-[#A31F34] hover:bg-[#8A1B2D] transition-colors"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Explore Research
              </Button>
              <Button 
                href="/publications"
                as={Link}
                variant="bordered"
                size="lg"
                className="text-white border-white/50 hover:bg-white/10"
              >
                View Publications
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Research Areas Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A31F34] to-[#8A1B2D]">
            Research Areas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our cutting-edge research across multiple disciplines
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Artificial Intelligence",
              icon: "gravity-ui:robot",
              description: "Machine learning, neural networks, and cognitive computing"
            },
            {
              title: "Quantum Computing",
              icon: "gravity-ui:cube-3d",
              description: "Next-generation quantum systems and algorithms"
            },
            {
              title: "Biotechnology",
              icon: "gravity-ui:dna",
              description: "Advanced biological engineering and synthetic biology"
            },
            {
              title: "Nanotechnology",
              icon: "gravity-ui:molecule",
              description: "Molecular engineering and nanoscale materials"
            },
            {
              title: "Climate Science",
              icon: "gravity-ui:globe",
              description: "Climate change research and sustainable solutions"
            },
            {
              title: "Robotics",
              icon: "gravity-ui:robot-arm",
              description: "Autonomous systems and human-robot interaction"
            }
          ].map((area) => (
            <Card 
              key={area.title}
              isPressable
              as={Link}
              href="/research"
              className="group hover:scale-105 transition-all duration-300 border border-gray-200/50 bg-white/50 backdrop-blur-sm"
            >
              <CardBody className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-[#A31F34]/10 text-[#A31F34] group-hover:bg-[#A31F34] group-hover:text-white transition-colors">
                    <Icon icon={area.icon} className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                </div>
                <p className="text-gray-600">
                  {area.description}
                </p>
                <div className="mt-4 flex items-center text-[#A31F34] font-medium">
                  Learn more
                  <Icon 
                    icon="lucide:arrow-right" 
                    className="ml-2 group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div className="space-y-4 max-w-md">
              <div className="flex items-center gap-2">
                <Icon icon="gravity-ui:atom" className="text-3xl text-[#A31F34]" />
                <h3 className="text-2xl font-bold">Rutgers Rail Program</h3>
              </div>
              <p className="text-gray-400">
                Advancing knowledge and educating students in science, technology, and other areas of scholarship.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {navItems.slice(0, 3).map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Resources</h4>
                <ul className="space-y-2">
                  {navItems.slice(3).map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Icon icon="lucide:twitter" className="text-2xl" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Icon icon="lucide:linkedin" className="text-2xl" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Icon icon="lucide:youtube" className="text-2xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Divider className="bg-white/10" />
          <div className="mt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Rutgers Rail Program</p>
          </div>
        </div>
      </footer>
    </div>
  );
}