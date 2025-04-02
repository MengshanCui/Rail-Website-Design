import React from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,
  Button, Card, CardBody, Image
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

const newsItems = [
  {
      "date": "Dec 13, 2024",
      "title": "Team Party",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/20241213_Team_Party.jpeg",
      "description": "Time flies! The Rutgers Rail and Transit Program recently celebrated its 10th anniversary and end-of-year party at Dr. Liu's home. The event was a wonderful opportunity to welcome new members and bid farewell to graduating friends. Welcome, Francisco, and best wishes, Junyan!",
      "link": "#"
  },
  {
      "date": "Feb 23, 2024",
      "title": "Lantern festival group lunch 2024",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Lantern_festival_group_lunch_2024.jpeg",
      "description": "Rutgers Rail and Transit Program had a group lunch to celebrate the Chinese New Year!",
      "link": "#"
  },
  {
      "date": "December 30, 2020",
      "title": "thumbnail Rutgers Rail Team 2020 Party",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/thumbnail_Rutgers Rail Team 2020 Party.jpg",
      "description": "Rutgers Rail and Transit Program had an end-of-year virtual happy hour to celebrate the new year!",
      "link": "#"
  },
  {
      "date": "November 25, 2019",
      "title": "Erik Hahn",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Hahn_2.jpeg",
      "description": "Mr. Erik Hahn from NJ TRANSIT gave an impressive guest lecture in Rutgers Track Engineering class. Thanks, Erik!",
      "link": "#"
  },
  {
      "date": "November 21, 2019",
      "title": "Thanksgiving",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Thanksgiving.jpg",
      "description": "Group lunch to celebrate Thanksgiving Holiday, with our guests from Frauscher Sensor Technology. Enjoy food and discuss advanced sensing technologies!",
      "link": "#"
  },
  {
      "date": "November 15, 2019",
      "title": "Mao and Joshi",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Mao 1.jpeg",
      "description": "Mr. Yifeng Mao and Mr. Hiren Joshi from LIRR gave an excellent presentation on track engineering and design. Thank you!",
      "link": "#"
  },
  {
      "date": "November 7, 2019",
      "title": "Kevin Casey",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Kevin 2.jpeg",
      "description": "Mr. Kevin Casey from Amtrak gave an excellent presentation on clearances. Thank you!",
      "link": "#"
  },
  {
      "date": "September 24, 2019",
      "title": "AREMA 2019 Conference",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Sept24_2019.jpg",
      "description": "Dr. Xiang Liu and Zhipeng Zhang gave two presentations on terminal end-of-track collision prevention with PTC and railroad trespassing in AREMA 2019 Conference at Minneapolis, MN.",
      "link": "#"
  },
  {
      "date": "May 2, 2019",
      "title": "Ramsey",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Ramsey_2.jpg",
      "description": "Rutgers students visited one busy highway-rail grade crossing on East Main Street in Ramsey, NJ to learn about the continued safety improvement actions, as well as grade crossing safety education. Thanks, NJDOT!",
      "link": "#"
  },
  {
      "date": "May 2, 2019",
      "title": "Wai Cheung",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/wai_cheung.jpg",
      "description": "Mr. Wai Cheung, a transportation expert from Michael Baker International, visited and gave an excellent presentation on Intelligent Transportation Systems technologies. Thanks, Mr. Cheung!",
      "link": "#"
  },
  {
      "date": "April 27, 2019",
      "title": "Rutgers Day",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/rutgersday.jpeg",
      "description": "NJ Operation Lifesaver (Thai Luu and Eric Souders) and Rutgers Rail Program students participated in Rutgers Day 2019 and raised awareness of rail safety to the public. Thanks, Thai and Eric!",
      "link": "#"
  },
  {
      "date": "April 25, 2019",
      "title": "Asim Zaman",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Asim_talk.jpeg",
      "description": "Asim Zaman from NJDOT gave excellent guest talk regarding his transportation projects and career. Thanks so much Asim for the excellent presentation. Thanks, Asim!",
      "link": "#"
  },
  {
      "date": "April 2, 2019",
      "title": "Tejashree Turla",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Tej_Defense.jpg",
      "description": "Tejashree Turla passed her M.S. special project defense on freight train collision risk analysis. She is now a civil engineer at Conti Enterprises. Congratulations, Tej!",
      "link": "#"
  },
  {
      "date": "October 24, 2018",
      "title": "Conrall visit",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Conrall_visit.JPG",
      "description": "Rutgers and GMU students visited Conrail to learn about removable bridges. Thanks, Conrail!",
      "link": "#"
  },
  {
      "date": "October 18, 2018",
      "title": "PATH",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/PATH.jpeg",
      "description": "Rutgers railroad engineering students visited PATH to learn about track engineering and asset management practices. Thanks, PATH!",
      "link": "#"
  },
  {
      "date": "October 16, 2018",
      "title": "ASCE Central Jersey Branch",
      "category": "Events",
      "image": "",
      "description": "Dr. Xiang Liu received the Researcher of the Year Award from ASCE Central Jersey Branch (CJB), in recognition of his rail engineering and safety research. Thanks, ASCE-CJB!",
      "link": "#"
  },
  {
      "date": "August 15, 2018",
      "title": "Sweet Sixteen",
      "category": "Events",
      "image": "",
      "description": "Dr. Liu received a Sweet Sixteen High-Value Research Award from American Association of State Highway and Transportation Officials (AASHTO), in recognition of a research project he recently completed with New Jersey Department of Transportation (NJDOT) on the topic of roadway safety devices. Thanks, AASHTO!",
      "link": "#"
  },
  {
      "date": "August 1, 2018",
      "title": "Morteza",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Morteza.jpg",
      "description": "Morteza Mesgari Hagh presented his summer research regarding simulation-based optimization in transportation engineering. His work was funded by Rutgers Aresty Undergraduate Research Center. Well done, Morteza!",
      "link": "#"
  },
  {
      "date": "June 12, 2018",
      "title": "Summer Celebration",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/35955092.jpg",
      "description": "The team of Rutgers rail safety took a day off together as a welcome to summer, and spent the day with fun packed lunch followed by games. Everyone celebrated the graduation of a member and joining of new members. Such team events are scheduled for each season in order to celebrate special moments of our team.",
      "link": "#"
  },
  {
      "date": "May 29, 2018",
      "title": "Master Thesis Defense",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/JieyiDefense.jpeg",
      "description": "Jieyi has successfully passed her master thesis defense. Congrats, Jieyi!",
      "link": "#"
  },
  {
      "date": "May 5, 2018",
      "title": "Annual Undergraduate Research Symposium",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/IMG_476022.JPG",
      "description": "Liana and Daniel gave a presentation on the Annual Undergraduate Research Symposium held by the Aresty Research Center about their research on rail defect risk analysis. Congrats Liana and Daniel!",
      "link": "#"
  },
  {
      "date": "May 4, 2018",
      "title": "Group Photo",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/grouppho.jpg",
      "description": "Rutgers School of Engineering featured Dr. Xiang Liu and his students (some of them are in the photo) in the school magazine, to introduce Rutgers recent initiatives in advancing rail education and research in the region.",
      "link": "#"
  },
  {
      "date": "May 3, 2018",
      "title": "A. Walter Tyson Assistant Professor Award",
      "category": "Events",
      "image": "",
      "description": "Dr. Xiang Liu received A. Walter Tyson Assistant Professor Award from Rutgers School of Engineering (SOE) in recognition of his rail research and education. Thanks, SOE!",
      "link": "#"
  },
  {
      "date": "April 28, 2018",
      "title": "NJ Operation Lifesaver",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/2018RUday.jpg",
      "description": "NJ Operation Lifesaver (Babara Foran and Gregory Spiritosanto) and Rutgers Rail Program students participated in Rutgers Day in 2018 and raised awareness of rail safety to the public. Thanks so much, Babara and Greg for the excellent work!",
      "link": "#"
  },
  {
      "date": "April 18, 2018",
      "title": "Joint Rail Conference",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/ZZmerge.jpg",
      "description": "Rutgers Rail Program students presented seven papers (in the photos are the two Ph.D. students, Zhipeng Zhang and Zheyong Bian) at the Joint Rail (JRC) in Pittsburgh, PA,  covering the topics of rail infrastructure management, big data analytics, positive train control, ridesharing, and intelligent rail systems.",
      "link": "#"
  },
  {
      "date": "April 16, 2018",
      "title": "HDR",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/merge_from_ofoct.jpg",
      "description": "Mr. Pete Davis and Mr. Michael Naughton from HDR gave excellent guest presentations regarding railroad engineering. Thanks, Pete and Michael!",
      "link": "#"
  },
  {
      "date": "April 12, 2018",
      "title": "MTA",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/DavidMayer.jpg",
      "description": "Mr. David Mayer from MTA gave a talk regarding rail safety. He also interacted with the students with respect to challenges and opportunities in the rail industry. Thanks, David!",
      "link": "#"
  },
  {
      "date": "April 5, 2018",
      "title": "Michale Baker International",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/David2.jpg",
      "description": "Mr. David Liebgold, an expert of ITS and traffic engineering from Michale Baker International, gave a guest lecture on intelligent transportation system design. Thanks, David!",
      "link": "#"
  },
  {
      "date": "March 26, 2018",
      "title": "HNTB",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/RobertJames.jpeg",
      "description": "Mr. Robert James, an expert of Connected & Automated Vehicles from HNTB, gave a guest lecture on emerging transportation technologies. Thanks, Robert!",
      "link": "#"
  },
  {
      "date": "March 28, 2018",
      "title": "RailwayAge",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/RailwayAge.JPG",
      "description": "Dr. Xiang Liu was recognized by Railway Age as a runner-up of the Fast Trackers – 10 Under 40 contest (https://www.railwayage.com/news/fast-trackers-railway-ages-10-40/). This award is given to young professionals how make an impact on railway industry.",
      "link": "#"
  },
  {
      "date": "March 22, 2018",
      "title": "Progressive Railroading",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/risingstar.png",
      "description": "Dr. Xiang Liu was recognized by Progressive Railroading magazine with a \"Rising Star\" award. The magazine defines a \"Rising Star\" as someone under 40 years of age who has made, or is making, a positive impact on his or her company, organization, department or team, and is viewed by others — peers, colleagues, supervisors, clients or associates — as an up-and-coming leader in the rail industry.",
      "link": "#"
  },
  {
      "date": "March 19, 2018",
      "title": "NJBIZ",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/download.jpeg",
      "description": "Dr. Xiang Liu was interviewed by NJBIZ to talk about his work on rail research and education. (http://www.njbiz.com/apps/pbcs.dll/article?AID=/20180319/NJBIZ01/180319863/all-aboard).",
      "link": "#"
  },
  {
      "date": "March 16, 2018",
      "title": "AREMA Educational Foundation",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/WechatIMG320.jpeg",
      "description": "Zhipeng received AREMA Educational Foundation 2018 Scholarship (Committee 4 - Rail Art Worth Memorial Scholarship). Congratulations, Zhipeng!",
      "link": "#"
  },
  {
      "date": "March 13, 2018",
      "title": "Rutgers Today",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/cardoni_Sophia_Pastore_030918_052.jpg",
      "description": "Sophia Pastore, an undergraduate research assistant in the group, has been featured in the Rutgers School of Engineering news. Congratulations, Sophia! (http://soe.rutgers.edu/rutgers-engineering-students-dive-research).",
      "link": "#"
  },
  {
      "date": "March 6, 2018",
      "title": "Rutgers Today",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/RailHazMatTrain2.jpg",
      "description": "Rutgers Today, a university-wide media, features the rail safety research and education headed by Dr. Liu's group. (https://news.rutgers.edu/rutgers-leads-rail-safety-research-and-education-new-jersey-and-new-york/20180306#.Wp6qDJPwb6Z). Thanks, Rutgers Today! (Photo: Allison Thomas/Rutgers CAIT)",
      "link": "#"
  },
  {
      "date": "February 1, 2018",
      "title": "Transportation Today",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/123.png",
      "description": "Dr. Xiang Liu's rail safety research was featured as a cover story in Transportation Today, published by Rutgers Center for Advanced Infrastructure and Transportation (CAIT). (https://cait.rutgers.edu/system/files/u5/CAIT_NL19_January2018_web_final.pdf).",
      "link": "#"
  },
  {
      "date": "January 8, 2018",
      "title": "Liu TRB Award",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Liu_TRB_Award2.JPG",
      "description": "TRB Hazmat Transportation Committee (AT040) honored Dr. Xiang Liu with an Outstanding Research Contribution Award based on his paper entitled \"Analysis of Multiple Tank Car Releases in Train Accidents. Accident Analysis and Prevention 107: 164–172.\". Thanks, TRB!",
      "link": "#"
  },
  {
      "date": "December 5, 2017",
      "title": "Amtrak",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Matthew.jpeg",
      "description": "Amtrak colleagues visited Rutgers Rail Program, listened to Track Engineering student presentation on rail wear big data analysis, and gave an excellent presentation on railroad engineering and big data issues. Thank you Amtrak for visiting us!",
      "link": "#"
  },
  {
      "date": "December 1, 2017",
      "title": "Group Photo",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/GROUP.JPG",
      "description": "Before thanksgiving break, part of our group members got together and took a memorable group photo as a conclusion of this year. Happy thanksgiving to all supporters and friends of our group!",
      "link": "#"
  },
  {
      "date": "November 17, 2017",
      "title": "NJTransit",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/NJTransit.jpg",
      "description": "Three graduate students from Rutgers Rail Program (Zhipeng, Zheyong and Tejashree) were invited by NJ Transit to visit their maintenance facility and operations center. Thanks, NJ Transit!",
      "link": "#"
  },
  {
      "date": "September 27, 2017",
      "title": "AREMA Annual Conference",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/2milo2.JPG",
      "description": "Daniel Milo and Zhipeng Zhang attended 2017 AREMA Annual Conference in Indianapolis. Daniel Milo won the second prize of Undergraduate Poster Competition in AREMA Conference, with a poster on the Automated Detection of Grade-Crossing-Trespassing Near Misses Based On Artificial Intelligence Analysis of Surveillance Video Data. Congrats, Daniel!",
      "link": "#"
  },
  {
      "date": "May 1, 2017",
      "title": "Rutgers Day",
      "category": "Events",
      "image": "",
      "description": "On Rutgers Day, Zhipeng Zhang, Sophia Pastore, Daniel Rodriguez, Daniel Milo, and Christian Higgins (left to right) set up AREMA table to introduce interesting railroad models and significant knowledge to young children, which help to spread the value of Rutgers railroad education and research program to the general public. Thank you all for spending a valuable weekend on contributing to the Rutgers railroad program!",
      "link": "#"
  },
  {
      "date": "April 29, 2017",
      "title": "RutgersDay",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/RutgersDay.JPG",
      "description": "On Rutgers Day, Zhipeng Zhang, Sophia Pastore, Daniel Rodriguez, Daniel Milo, and Christian Higgins (left to right) set up AREMA table to introduce interesting railroad models and significant knowledge to young children, which help to spread the value of Rutgers railroad education and research program to the general public. Thank you all for spending a valuable weekend on contributing to the Rutgers railroad program!",
      "link": "#"
  },
  {
      "date": "April 28, 2017",
      "title": "AliceAresty",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/AliceAresty.jpg",
      "description": "Yifeng Lan attended The 13th Annual Undergraduate Research Symposium held by the Aresty Research Center, and presented a poster on \"Multivariable Statistical Model for Prediction of Railway Defect\" to culminate her Aresty Research Assistant program for the 2016-2017 academic year. Congrats Yifeng!",
      "link": "#"
  },
  {
      "date": "April 20, 2017",
      "title": "Amtrak",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/Matt.JPG",
      "description": "Mr. Matthew Greve from Amtrak visited Rutgers Rail Group and delivered a great talk regarding how Amtrak is tapping big data analytics to improve safety and service quality. Thanks, Mr. Greve!",
      "link": "#"
  },
  {
      "date": "April 17, 2017",
      "title": "PATH",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/PATH.jpg",
      "description": "Port Authority Trans-Hudson (PATH) visited Rutgers Rail Group. Mr. Mike Marino (Executive Director and General Manager) gave an excellent presentation regarding PATH and railroad career opportunities. Thanks, PATH!",
      "link": "#"
  },
  {
      "date": "March 27, 2017",
      "title": "Educator of the Year Award",
      "category": "Events",
      "image": "",
      "description": "ASCE New Jersey Section honored Dr. Xiang Liu with the Educator of the Year Award in recognition of his contribution to railroad education in the region. Thanks, ASCE-NJ!",
      "link": "#"
  },
  {
      "date": "March 1, 2017",
      "title": "USDOT Fast Forward",
      "category": "Events",
      "image": "",
      "description": "Dr. Xiang Liu was interviewed by USDOT Fast Forward to talk about opportunities in the railroad industry.(http://fastforwardtransportation.com/V3-mr-opportunities.html).",
      "link": "#"
  },
  {
      "date": "February 15, 2017",
      "title": "New Jersey Shortline Railroad Association",
      "category": "Events",
      "image": "",
      "description": "New Jersey Shortline Railroad Association donated $2000 to Rutgers AREMA Student Chapter in support of the railroad education and workforce development at Rutgers University. Much appreciated, New Jersey Railroaders!",
      "link": "#"
  },
  {
      "date": "February 14, 2017",
      "title": "Joint Rail Conference",
      "category": "Events",
      "image": "",
      "description": "Congratulations to Kang Zhou, Zheyong Bian and Jieyi Deng for publishing their respective paper in the Joint Rail Conference in 2017. Well done!",
      "link": "#"
  },
  {
      "date": "February 10, 2017",
      "title": "ASME Scholarship",
      "category": "Events",
      "image": "",
      "description": "Zheyong Bian was awarded the competitive Graduate Student Conference Scholarship by the American Society of Mechanical Engineers (ASME) for presenting his research at the Joint Rail Conference in 2017. Congratulations, Zheyong!",
      "link": "#"
  },
  {
      "date": "January 9, 2017",
      "title": "Outstanding Research Contribution Award",
      "category": "Events",
      "image": "",
      "description": "Dr. Liu received an Outstanding Research Contribution Award from the Hazardous Materials Transportation Committee (AT040) of Transportation Research Board,2017.",
      "link": "#"
  },
  {
      "date": "January 8, 2017",
      "title": "010817",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/010817.jpg",
      "description": "Dr. Liu received a Best Paper Award for Young Member, Railroad Operational Safety Committee (AR070) of Transportation Research Board, 2017.",
      "link": "#"
  },
  {
      "date": "August 08, 2016",
      "title": "Internships",
      "category": "Events",
      "image": "",
      "description": "Group member took internships. Brian Leckie is interning at the Somerset County Planning Division in Somerville, NJ. Liwei Wang is a statistician contractor at Sanofi, responsible for learning and implementing Bayesian network analysis for bio-marker data.",
      "link": "#"
  },
  {
      "date": "July 29, 2016",
      "title": "Aresty Summer Science Program",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/event-080416_1.jpg",
      "description": "Daniel Rodriguez, a rising sophomore, presented a poster on the \"Statistical Comparison of Train Accident Rates: Methodology and Decision Support Tool\" culminating his Aresty Summer Science Program experience. The work entailed within this poster was Daniel's main focus for the summer, along with other smaller projects and tasks. Congrats Daniel!",
      "link": "#"
  },
  {
      "date": "July 25, 2016",
      "title": "Dwight David Eisenhower Transportation Fellowship",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/event-072516.png",
      "description": "Christian Higgins was awarded a prestigious Dwight David Eisenhower Transportation Fellowship based on his research on railroad safety and risk analysis. The award is offered by the US Department of Transportation. Congratulations, Chris!",
      "link": "#"
  },
  {
      "date": "June 17, 2016",
      "title": "AREMA Student Chapter",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/event-080416_2.jpg",
      "description": "Christian Higgins (presenter), President of the Rutgers University Student Chapter for the American Railway and Engineering Maintenance-of-Way Association (AREMA), gave a talk at a recent New Jersey Short Line Railroad Association meeting. This talk consisted of a brief description of the AREMA student chapter as well as what they aim to accomplish in the coming years so that they may realize their goal of bringing students and local industry closer together. Good work, Chris!",
      "link": "#"
  },
  {
      "date": "April 15, 2016",
      "title": "Honored at JRC",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/event-041516.jpg",
      "description": "Yanlei Wang, Can Hu and Jiabo He were honored at the conference banquet due to their research scholarship. They all delivered excellent presentations. Great job, all!",
      "link": "#"
  },
  {
      "date": "Mar 16, 2016",
      "title": "ASME Scholarship",
      "category": "Events",
      "image": "",
      "description": "Can Hu was awarded the competitive Graduate Student Conference Scholarship by the American Society of Mechanical Engineers (ASME) to present his research at the Joint Rail Conference in 2016 (Can's work focuses on data analytics and modeling of track condition data). Congratulations, Can!",
      "link": "#"
  },
  {
      "date": "Feb 23, 2016",
      "title": "ASME Scholarship",
      "category": "Events",
      "image": "",
      "description": "Yanlei Wang and Ling Ma were awarded the competitive Graduate Student Conference Scholarship by the American Society of Mechanical Engineers (ASME) to present their respective research at the Joint Rail Conference in 2016 (Yanlei' work is train collision risk modeling and Ling's work is spatial risk analysis of train derailments). Congratulations, Yanlei and Ling!",
      "link": "#"
  },
  {
      "date": "Feb 18, 2016",
      "title": "AREMA Student Chapter",
      "category": "Events",
      "image": "",
      "description": "Under the auspices of the American Railway Engineering and Maintenance of Way Association (AREMA) and Rutgers University, the first AREMA Student Chapter at Rutgers University (Rutgers Rail) was established in Spring 2016. Christian Higgins (current group member) is the founding President of the Chapter, supported by his board members, Nicole Todd (Vice President), Kang Zhou (Treasurer), and Yanlei Wang (Secretary). As the only rail-focused student organization in New Jersey/New York metropolitan area, this chapter will actively build a tie between Rutgers University and the railway industry. The AREMA generously provides gift fund to support the initiation of this chapter. The Faculty Advisors of this chapter include Dr. Xiang Liu and Dr. Trefor Williams.",
      "link": "#"
  },
  {
      "date": "Feb 18, 2016",
      "title": "Research Analyst Position",
      "category": "Events",
      "image": "",
      "description": "Congratulations to Xiangyi Guo (former group member) on accepting a Research Analyst position at Quantcast in San Francisco. Xiangyi has participated in railroad safety and risk analysis research in the fall of 2014. Best luck on your new position, Xiangyi!",
      "link": "#"
  },
  {
      "date": "Jan 11, 2016",
      "title": "TRB 2016",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/trb-2016.jpg",
      "description": "Kang Zhou gave a poster presentation entitled “Risk-based ship collision- avoidance maneuvers under bunker consumption optimization” on the Annual Meeting of Transportation Research Board at D.C. Good job, Kang!",
      "link": "#"
  },
  {
      "date": "Dec 02, 2015",
      "title": "Railroad Capacity and Train Control Systems",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/event-120215.jpg",
      "description": "Dr. David Thurston (VP of Atkins) gave an informative presentation on railroad capacity, train control systems and civil designs. Thanks, Dr. Thurston!",
      "link": "#"
  },
  {
      "date": "Nov 27, 2015",
      "title": "Data Scientist Position",
      "category": "Events",
      "image": "",
      "description": "Congratulations to Xiaoxi Ma (former group member) on accepting a data scientist position at Optimal Strategic Group. Xiaoxi has participated in geospatial risk analysis of railroad accidents in the summer of 2015 and recently received her M.S. in Statistics from Rutgers University. Best luck on your new position, Xiaoxi!",
      "link": "#"
  },
  {
      "date": "Nov 23, 2015",
      "title": "Successful Entrepreneurial Experience",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/event-112315.jpg",
      "description": "Ms. Ingrid Schultze (Rutgers alumna), a successful serial entrepreneur specialized in applied operations research, shared her experience with students and suggested how to stand out in the career. Thanks very much, Ingrid!",
      "link": "#"
  },
  {
      "date": "Nov 05, 2015",
      "title": "Hazmat Transportation Regulations",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/event-110515.jpg",
      "description": "Mr. Anthony Murray from the Pipeline and Hazardous Materials Safety Administration (PHMSA) gave an informative presentation regarding hazmat transportation regulations",
      "link": "#"
  },
  {
      "date": "Oct 14, 2015",
      "title": "Academic Writing Workshop",
      "category": "Events",
      "image": "https://rail.rutgers.edu/img/event-101415.jpg",
      "description": "The group had its first academic writing training workshop. Dr. David Jones, a professional English editor, was invited to give a lecture on how to improve writing skills.",
      "link": "#"
  },
  {
      "date": "Oct 13, 2015",
      "title": "TRB Paper Accepted",
      "category": "Events",
      "image": "",
      "description": "Kang Zhou's paper entitled Risk-based ship collision-avoidance maneuvers under bunker consumption optimization was accepted into the Proceedings of the Annual Meeting of Transportation Research Board. He will present this work at D.C. in 2016. Congratulations, Kang!",
      "link": "#"
  },
  {
      "date": "Sep 29, 2015",
      "title": "Joint Rail Conference",
      "category": "Events",
      "image": "",
      "description": "Six abstracts have been accepted to the Joint Rail Conference in South Carolina in 2016. The studies cover train accident risk analysis and infrastructure management. Can, Tal, Jiabo, Ling, Yanlei, Yubo are eligible for applying for a travel scholarship",
      "link": "#"
  },
  {
      "date": "Sep 20, 2015",
      "title": "Final Report",
      "category": "Events",
      "image": "",
      "description": "Can Hu submitted a final report to the Railway Applications Section (RAS) of the Institute for Operations Research and the Management Sciences (INFORMS) for a competition on railroad data analytics. His research, entitled Predicting Track Geometry Degradation using Data Mining Techniques addresses data-driven railroad infrastructure management. Good luck, Can!",
      "link": "#"
  },
  {
      "date": "Aug 05, 2015",
      "title": "NSF Travel Award",
      "category": "Events",
      "image": "",
      "description": "Congratulations to Can Hu for receiving a NSF travel award to present his railroad data analytics research in Seattle. Good job, Can!",
      "link": "#"
  }

];

export default function News() {
  // Combine all news items from all years into a single array
  const allNewsItems = Object.values(newsItems).flat();

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
              News
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
              Stay updated with the latest news and developments from our program
            </p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allNewsItems.map((news, index) => (
          <Card key={index} className="p-6 border border-gray-200/70 shadow-sm hover:shadow-md transition">
            <CardBody className="space-y-3">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#A31F34]/10 text-[#A31F34]">
                  <Icon icon="lucide:newspaper" className="text-2xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {news.title}
                </h2>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Icon icon="lucide:calendar" className="text-base" />
                <span>{news.date}</span>
                <span>•</span>
                <span className="text-[#A31F34] font-medium">{news.category}</span>
              </div>
              <p className="text-gray-600 text-sm">{news.description}</p>
              <Link href={news.link} className="text-[#A31F34] text-sm font-medium inline-flex items-center">
                Read More
                <Icon icon="lucide:arrow-right" className="ml-1" />
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
