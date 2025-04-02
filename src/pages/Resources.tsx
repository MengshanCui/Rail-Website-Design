import React from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,
  Button, Card, CardBody, Tabs, Tab
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

const sponsors = [
  {
    name: "Association of American Railroads",
    abbreviation: "AAR",
    description: "Leading railroad industry association"
  },
  {
    name: "Cambridge Systems",
    abbreviation: "CS",
    description: "Transportation planning and analysis"
  },
  {
    name: "DecisionTek Inc.",
    abbreviation: "DT",
    description: "Transportation consulting and solutions"
  },
  {
    name: "Federal Railroad Administration",
    abbreviation: "FRA",
    description: "Federal agency for rail safety and development"
  },
  {
    name: "Metropolitan Transportation Authority",
    abbreviation: "MTA",
    description: "New York's public transportation authority"
  },
  {
    name: "New Jersey Department of Transportation",
    abbreviation: "NJDOT",
    description: "State transportation agency"
  },
  {
    name: "New Jersey Transit",
    abbreviation: "NJT",
    description: "New Jersey's public transportation system"
  },
  {
    name: "Pipeline and Hazardous Materials Safety Administration",
    abbreviation: "PHMSA",
    description: "Federal agency for pipeline and hazardous materials safety"
  },
  {
    name: "Port Authority Trans-Hudson",
    abbreviation: "PATH",
    description: "Rail transit system connecting New York and New Jersey"
  },
  {
    name: "Rutgers Center for Advanced Infrastructure and Transportation",
    abbreviation: "CAIT",
    description: "Rutgers transportation research center"
  },
  {
    name: "Rutgers Department of Civil and Environmental Engineering",
    abbreviation: "CEE",
    description: "Rutgers engineering department"
  },
  {
    name: "Rutgers Research Council",
    abbreviation: "RC",
    description: "Rutgers research funding organization"
  },
  {
    name: "Rutgers School of Engineering",
    abbreviation: "SOE",
    description: "Rutgers engineering school"
  },
  {
    name: "Transportation Technology Center Inc.",
    abbreviation: "TTCI",
    description: "Railway research and testing facility"
  },
  {
    name: "US Department of Transportation",
    abbreviation: "USDOT",
    description: "Federal transportation department"
  }
];

type GraduateOpportunity = {
  title: string;
  type: "overview" | "requirements" | "guidelines" | "deadlines";
  content: string | string[] | Array<{
    degree: string;
    link: string;
  }>;
  contact?: string;
};

const graduateOpportunities: GraduateOpportunity[] = [
  {
    title: "Graduate Research Assistant Positions",
    type: "overview",
    content: "We encourage and welcome the best talents to join us as graduate research assistants for M.S. or Ph.D. degrees, contributing to high-impact research, including but not limited to: intermodal freight, logistics systems analysis, transportation safety (rail, highway and maritime), network modeling and infrastructure management."
  },
  {
    title: "Qualifications",
    type: "requirements",
    content: [
      "Major in Transportation Engineering, Civil Engineering, Industrial Engineering, Statistics, Mathematics, Computer Science or related areas",
      "Experience in probability, statistics, operations research, optimization or computer programming is preferred but not required",
      "Full tuition waiver, full stipend and other related university benefits",
      "Opportunities to work with faculty in the CEE and national transportation research center (CAIT) at Rutgers, on high-profile projects funded by government and private agencies",
      "Financial support to attend conferences to present research and interact with global researchers and industry professionals",
      "Career opportunities in research institutions, logistics companies and consulting firms"
    ]
  },
  {
    title: "Application Guidelines",
    type: "guidelines",
    content: [
      "Detailed application information can be found at http://gradstudy.rutgers.edu/apply/overview",
      "Required application materials:",
      "- Transcript",
      "- CV",
      "- Personal statement",
      "- 3 recommendation letters",
      "- TOEFL and GRE test scores"
    ]
  },
  {
    title: "Application Deadlines",
    type: "deadlines",
    content: [
      {
        degree: "Master Degree",
        link: "https://grad.admissions.rutgers.edu/GraduateProgram/Detail.aspx?code=16180&degree=MS"
      },
      {
        degree: "Ph.D. Degree",
        link: "https://grad.admissions.rutgers.edu/GraduateProgram/Detail.aspx?code=16180&degree=PHD"
      }
    ],
    contact: "The interested applicant may contact Professor Xiang Liu via email (xiang.liu@rutgers.edu), attaching his/her CV and transcript. However, the final decision will not be made until the applicant completes official application process through Rutgers University."
  }
];

const resources = [
  {
    year: '',
    title: "How to write an academic article",
    authors: "David Jones",
    journal: "Many of my students expressed their interest to improve their skills for writing English academic articles. The short tutorial here was developed to help them get started. The materials were drafted by my colleague Mr. David Jones from the Department of English at Rutgers University.",
    type: "resource",
    url: "https://rail.rutgers.edu/files/mat1.pdf"
  },
  {
    year:'',
    title:"How to do research with GIS techniques effectively", 
    author:"Yupo Chiu", 
    journal:"Many of my research group students will use GIS techniques in their future work. The in-depth hands-on training session here was developed to help them on using ArcGIS tool. The materials were drafted by our group member Mr. Yupo Chiu from the City and Regional Planning at Rutgers University.", 
    type: "resource",
    url: "https://rail.rutgers.edu/files/GIS-Hands-onExercises.rar"
  }
];

export default function Resources() {
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
              Resources
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
              Access our collection of railway engineering resources, opportunities, and sponsors
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs aria-label="Resource categories" className="w-full">
          <Tab key="sponsors" title="Sponsors">
            <div className="mt-8">
              <p className="text-gray-600 text-center mb-8">
                We gratefully appreciate the support and collaboration from the following agencies or companies (alphabetically ordered):
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sponsors.map((sponsor, index) => (
                  <Card key={index} className="p-6 border border-gray-200/70 shadow-sm hover:shadow-md transition">
                    <CardBody className="space-y-3">
                      <div className="flex flex-col">
                        <h2 className="text-xl font-semibold text-gray-900">
                          {sponsor.name}
                        </h2>
                        <p className="text-[#A31F34] font-medium">
                          {sponsor.abbreviation}
                        </p>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {sponsor.description}
                      </p>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          </Tab>

          <Tab key="opportunities" title="Graduate Opportunities">
            <div className="space-y-8 mt-8">
              {graduateOpportunities.map((section, index) => (
                <Card key={index} className="p-6 border border-gray-200/70 shadow-sm">
                  <CardBody className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                    
                    {section.type === "overview" && (
                      <p className="text-gray-600 text-lg">
                        {section.content as string}
                      </p>
                    )}

                    {section.type === "requirements" && (
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {(section.content as string[]).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.type === "guidelines" && (
                      <div className="space-y-2 text-gray-600">
                        {(section.content as string[]).map((item, i) => (
                          <p key={i}>{item}</p>
                        ))}
                      </div>
                    )}

                    {section.type === "deadlines" && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          {(section.content as Array<{ degree: string; link: string }>).map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="text-[#A31F34] font-medium">{item.degree}:</span>
                              <Link href={item.link} className="text-[#A31F34] hover:underline">
                                View Details
                                <Icon icon="lucide:arrow-right" className="ml-1 inline" />
                              </Link>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <p className="text-gray-600">{section.contact}</p>
                        </div>
                      </div>
                    )}
                  </CardBody>
                </Card>
              ))}
            </div>
          </Tab>

          <Tab key="resources" title="Resources">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {resources.map((resource, index) => (
                <Card key={index} className="p-6 border border-gray-200/70 shadow-sm hover:shadow-md transition">
                  <CardBody className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-[#A31F34]/10 text-[#A31F34]">
                        <Icon icon="lucide:file-text" className="text-2xl" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {resource.title}
                      </h2>
                    </div>
                    <p className="text-[#A31F34] font-medium">{resource.type}</p>
                    <p className="text-gray-600 text-sm">{resource.authors}</p>
                    <p className="text-gray-600 text-sm">{resource.journal}, {resource.year}</p>
                    {resource.url && (
                      <Link href={resource.url} className="text-[#A31F34] text-sm font-medium inline-flex items-center">
                        View Publication
                        <Icon icon="lucide:arrow-right" className="ml-1" />
                      </Link>
                    )}
                  </CardBody>
                </Card>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
