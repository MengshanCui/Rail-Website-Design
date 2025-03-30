import React, { useState } from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,
  Button, Card, CardBody, Image, Tabs, Tab
} from "@heroui/react";
import { Icon } from "@iconify/react";

const members = {
  faculty: [
    {
      name: 'Dr. John Smith',
      title: 'Professor',
      department: 'Civil and Environmental Engineering',
      image: 'https://picsum.photos/200/200',
      bio: 'Leading research in rail infrastructure and safety...',
      email: 'john.smith@rutgers.edu'
    },
    {
      name: 'Dr. Sarah Johnson',
      title: 'Associate Professor',
      department: 'Mechanical and Aerospace Engineering',
      image: 'https://picsum.photos/200/200',
      bio: 'Specializing in rail vehicle dynamics and control systems...',
      email: 'sarah.johnson@rutgers.edu'
    }
  ],
  members: [
    {
      name: 'Dr. Michael Chen',
      title: 'Research Scientist',
      department: 'Transportation Engineering',
      image: 'https://picsum.photos/200/200',
      bio: 'Expert in rail safety and maintenance...',
      email: 'michael.chen@rutgers.edu'
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Senior Researcher',
      department: 'Systems Engineering',
      image: 'https://picsum.photos/200/200',
      bio: 'Focusing on rail system optimization...',
      email: 'emily.rodriguez@rutgers.edu'
    }
  ],
  alumni: [
    {
      name: 'Dr. Robert Wilson',
      title: 'Former Ph.D. Student',
      department: 'Civil Engineering',
      image: 'https://picsum.photos/200/200',
      bio: 'Now working as a Senior Engineer at Amtrak...',
      email: 'robert.wilson@example.com'
    },
    {
      name: 'Dr. Maria Garcia',
      title: 'Former Graduate Student',
      department: 'Mechanical Engineering',
      image: 'https://picsum.photos/200/200',
      bio: 'Currently a Research Director at FRA...',
      email: 'maria.garcia@example.com'
    }
  ]
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "Research", href: "/research" },
  { name: "Members", href: "/members" },
  { name: "Teaching", href: "/teaching" },
  { name: "Publications", href: "/publications" },
  { name: "Resources", href: "/resources" }
];

export default function Members() {
  const [selectedTab, setSelectedTab] = useState("faculty");

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
          <NavbarItem>
            <Link href="/" className="text-white hover:text-[#A31F34] transition-colors">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/news" className="text-white hover:text-[#A31F34] transition-colors">
              News
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/research" className="text-white hover:text-[#A31F34] transition-colors">
              Research
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/alumni" className="text-white hover:text-[#A31F34] transition-colors">
              Alumni
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/teaching" className="text-white hover:text-[#A31F34] transition-colors">
              Teaching
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/publications" className="text-white hover:text-[#A31F34] transition-colors">
              Publications
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/resources" className="text-white hover:text-[#A31F34] transition-colors">
              Resources
            </Link>
          </NavbarItem>
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
              Members
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
              Meet our team of researchers, faculty, and alumni
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs 
          selectedKey={selectedTab} 
          onSelectionChange={(key) => setSelectedTab(key as string)}
          className="justify-center"
        >
          <Tab
            key="faculty"
            title={
              <div className="flex items-center gap-2">
                <Icon icon="lucide:graduation-cap" />
                <span>Faculty Members</span>
              </div>
            }
          />
          <Tab
            key="members"
            title={
              <div className="flex items-center gap-2">
                <Icon icon="lucide:users" />
                <span>Members</span>
              </div>
            }
          />
          <Tab
            key="alumni"
            title={
              <div className="flex items-center gap-2">
                <Icon icon="lucide:user-graduate" />
                <span>Alumni</span>
              </div>
            }
          />
        </Tabs>
      </div>

      {/* Members Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {members[selectedTab as keyof typeof members].map((member, index) => (
          <Card key={index} className="bg-white shadow-lg rounded-lg">
            <CardBody className="p-6">
              <div className="flex flex-col items-center text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                <p className="text-[#A31F34] font-medium mb-1">{member.title}</p>
                <p className="text-gray-600 mb-4">{member.department}</p>
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <Link 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-[#A31F34] hover:text-[#8A1B2D] transition-colors"
                >
                  <Icon icon="lucide:mail" className="mr-2" />
                  Contact
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}