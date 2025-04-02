import React, { useState } from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,
  Button, Card, CardBody, Image, Tabs, Tab, Accordion, AccordionItem
} from "@heroui/react";
import { Icon } from "@iconify/react";

// Publications component
const Publications = ({ publications }) => {
  if (!publications || publications.length === 0) return null;

  return (
    <Accordion className="mt-4">
      <AccordionItem
        key="publications"
        title={
          <div className="flex items-center gap-2">
            <Icon icon="lucide:book-open" />
            <span>Publications</span>
          </div>
        }
      >
        <div className="space-y-2">
          {publications.map((pub, index) => (
            <div key={index} className="text-sm">
              {pub.authors} ({pub.year}). {pub.title}. {pub.journal}
            </div>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

const members = {
  faculty: [
    {
      name: "Xiang Liu",
      title: "Associate Professor",
      department: "Department of Civil and Environmental Engineering",
      image: "https://rail.rutgers.edu/img/xiangliu.jpg",
      bio: "Phone: 848-445-2868\nEmail: xiang.liu@rutgers.edu\nOffice: 500 Bartholomew Road, Room 428D Piscataway, NJ 08854",
      link: "https://rail.rutgers.edu/#/home"
    },
  ],
  members: [
    {
      name: "Zezhou Wang",
      title: "Ph.D. student, Civil & ECE",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/ZezhouWang.jpg",
      bio: "Zezhou is a Ph.D. student in Civil Engineering and Master's student in Electrical and Computer Engineering at Rutgers University. His research focuses on railroad signal and control. He received his B.S. from Beihang University in Electrical and Computer Engineering and M.S. from University of Illinois at Urbana Champaign in Civil Engineering.",
      publications: [
        {
          authors: "Wang, Z., Shlake, B.W., Mulay, N., Zaman, A., Liu, X.",
          year: "2023",
          title: "Development and Testing of A UWB-based Vehicle-to-Vehicle (V2V) Ranging System for Self-Propelled Rail Vehicles",
          journal: "IEEE Transactions on Vehicular Technology"
        },
        {
          authors: "Wang, Z., Liu, X.",
          year: "2022",
          title: "Cyber security of railway cyber-physical system (CPS) – A risk management methodology",
          journal: "Communications in Transportation Research, 2, 100078"
        },
        {
          authors: "Wang, Z., Khatavkar, Y., James, R., Liu, X.",
          year: "2020",
          title: "Applications of Ultra-wideband Technology in Future Rail Industry: Position Paper for North America Railroad Context",
          journal: "APM-ATS"
        },
        {
          authors: "Wang, Z., Mussanov, D., Dick, T.",
          year: "2019",
          title: "Scheduling and Routing Roaming Conductors to Support Single-Person Crew Operations on North American Freight Railways",
          journal: "IAROR"
        },
        {
          authors: "Wang, Z., Liu, X., Wang Y., Yavvari, C., Jablonskim N., Wijesekera, D., Sykes, B., Holt, K.",
          year: "2019",
          title: "Cyber Security Analysis for Advanced Train Control System (ATCS) in CTC Systems: Concepts and Methods",
          journal: "ASME JRC"
        },
        {
          authors: "Wandelt, S., Wang, Z., Sun, X.",
          year: "2016",
          title: "Worldwide Railway Skeleton Network: Extraction Methodology and Preliminary Analysis",
          journal: "IEEE Trans on ITS"
        }
      ],
      link: ""
    },
    {
      name: "Asim Francis Zaman",
      title: "Ph.D. student, Civil Engineering",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/AsimZaman.jpg",
      bio: "Asim Zaman is a Ph.D. student in Civil Engineering at Rutgers University. His research addresses utilizing Artificial Intelligence for transportation safety and risk management. Asim received his B.S. degree in Civil Engineering from the New Jersey Institute of Technology in Newark NJ, 2014 and M.S. in Civil Engineering from Rutgers in 2018. He worked as a senior engineer for the New Jersey Department of Transportation from 2014 – 2021 and now works as a Project Engineer at Rutgers CAIT.",
      publications: [
        {
          authors: "Zaman, A., Huang, Z., Li, W., Qin, H., Kang, D., Liu, X.",
          year: "2023",
          title: "Artificial Intelligence-Aided Grade Crossing Safety Violation Detection Methodology and a Case Study in New Jersey",
          journal: "Transportation Research Record"
        },
        {
          authors: "Zaman, A., Ren, B.Z., Liu, X.",
          year: "2019",
          title: "Artificial Intelligence-Aided Automated Detection of Railroad Trespassing",
          journal: "Transportation Research Record"
        },
        {
          authors: "Zaman, A., Ren, B.Z., Liu, X.",
          year: "2019",
          title: "Artificial Intelligence-Aided Automated Detection of Railroad Trespassing",
          journal: "TR News"
        },
        {
          authors: "Zaman, A., Liu, X., Zhang, Z.P.",
          year: "2018",
          title: "Video Analytics for Railroad Safety Research: An Artificial Intelligence Approach",
          journal: "Transportation Research Record"
        }
      ],
      link: ""
    },
    {
      name: "Weitian Li",
      title: "Ph.D. student, Civil Engineering",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/WeitianLi.jpg",
      bio: "Weitian Li is a Ph.D. student in Civil Engineering at Rutgers University. His research focuses on LiDAR analysis and infrastructure monitoring for railroads. He received his MS in Electrical and Computer Engineering from Rutgers University.",
      publications: [
        {
          authors: "Li, W., Bian, Z., Liu, X.",
          year: "2023",
          title: "Statistical Analysis of Train Derailment Severity for Unit Trains Versus Manifest Trains",
          journal: "Transportation Research Record, 03611981231182989"
        },
        {
          authors: "Zaman, A., Huang, Z., Li, W., Qin, H., Kang, D., Liu, X.",
          year: "2023",
          title: "Artificial Intelligence-Aided Grade Crossing Safety Violation Detection Methodology and a Case Study in New Jersey",
          journal: "Transportation Research Record, 03611981231163824"
        }
      ],
      link: ""
    },
    {
      name: "Huixiong Qin",
      title: "Ph.D. student, Civil Engineering",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/HuixiongQin.jpg",
      bio: "Huixiong is a Ph.D. student in Civil Engineering at Rutgers University. His research focuses on computer vision and software engineering for transportation applications. He received his B.S. in Mathematics from Sichuan University and M.S. in Electrical & Computer Engineering from Rutgers.",
      publications: [
        {
          authors: "Zaman, A., Huang, Z., Li, W., Qin, H., Kang, D., Liu, X.",
          year: "2023",
          title: "Artificial Intelligence-Aided Grade Crossing Safety Violation Detection Methodology and a Case Study in New Jersey",
          journal: "Transportation Research Record, 03611981231163824"
        },
        {
          authors: "Qin, H., Zaman, A., Liu, X.",
          year: "2023",
          title: "Artificial intelligence-aided intelligent obstacle and trespasser detection based on locomotive-mounted forward-facing camera data",
          journal: "Proceedings of the Institution of Mechanical Engineers, Part F: Journal of Rail and Rapid Transit, 09544097231156312"
        }
      ],
      link: ""
    },
    
    {
      name: "Mulin Wan",
      title: "Ph.D. student, Civil Engineering",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/MulinWan.png",
      bio: "Mulin is a Ph.D. student in Civil Engineering at Rutgers University. His research focuses on rail network modeling. He received his B.S. in Electrical Engineering from Beijing Jiaotong University and M.S. in Civil Engineering from University of Illinois at Urbana-Champaign.",
      link: ""
    },
    {
      name: "John Ng",
      title: "Master's student, Civil Engineering",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/JohnNg.jpg",
      bio: "John is a Master's student in Civil Engineering at Rutgers University. His research applies computer vision to improve rail operations and safety. He received his B.S. in Civil Engineering from Manhattan College in 2023.",
      link: ""
    }
  ],
  alumni: [
    {
      name: "Qinyuan Liu",
      title: "Former Master's Student, Civil Engineering",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/QinyuanLiu.jpg",
      bio: "Qinyuan completed his B.S. in Computer Science at Rutgers University, New Brunswick, in May 2023. He is currently furthering his education in the M.S.E. Computer Science program at Johns Hopkins University. During his time in the lab, his main contributions were instrumental in the development of train gate detection algorithms and the process of weekly validation.",
      link: ""
    },
    {
      name: "Shuohao Ping",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/ShuohaoPing.jpg",
      bio: "Research focused on track geometry and predictive maintenance.",
      link: ""
    },
    {
      name: "Di Kang",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/DiKang.jpg",
      bio: "Di is a Ph.D. student in Civil Engineering at Rutgers University. Her research focuses on rail system risk analyses. She received her B.S. from Nanjing University of Aeronautics and Astronautics in Air Transportation. She received her M.S. from the University of Virginia and University of Minnesota in Civil Engineering & Industrial Engineering.",
      publications: [
        {
          authors: "Kang, D., Zhao, J., Dick, C.T., Liu, X., Lin, C.Y., Bian, Z., Kirkpatrick, S.W.",
          year: "2024",
          title: "Quantifying the influence of tank car position and train configuration on the risk of rail transport of class 3 flammable liquids",
          journal: "Transportation Research Record, 03611981241274649"
        },
        {
          authors: "Kang, D., Dai, J., Liu, X., Bian, Z., Zaman, A., Wang, X.",
          year: "2024",
          title: "Estimating the occurrence of broken rails in commuter railroads with machine learning algorithms",
          journal: "Proceedings of the Institution of Mechanical Engineers, Part F: Journal of Rail and Rapid Transit, 09544097241280848"
        },
        {
          authors: "Kang, D., Kirkpatrick, S. W., Zhang, Z., Liu, X., Bian, Z.",
          year: "2024",
          title: "Freight train derailment severity prediction: a physics-informed one-dimensional model",
          journal: "Smart and Resilient Transportation"
        },
        {
          authors: "Kang, D., Zhao, J., Dick, C.T., Liu, X., Bian, Z.Y., Kirkpatrick, S.W., Lin, C.Y.",
          year: "2023",
          title: "Probabilistic risk analysis of unit trains versus manifest trains for transporting hazardous materials",
          journal: "Accident Analysis and Prevention, 181, 106950"
        }
      ],
      link: ""
    },
    {
      name: "Xin Wang",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/XinWang.jpg",
      bio: "Xin completed his Ph.D. in Civil Engineering at Rutgers University. Now he holds a position at Tongji University. His research focuses artificial intelligence for rail applications. He received his B.S. and M.S. from Southwest Jiaotong University in Civil Engineering.",
      publications: [
        {
          authors: "Wang, X., Dai, J., Liu, X.",
          year: "2025",
          title: "A spatial-temporal neural network based on ResNet-Transformer for predicting railroad broken rails",
          journal: "Advanced Engineering Informatics, 65, 103126"
        },
        {
          authors: "Wang, X., Liu, X., Bai, Y.",
          year: "2024",
          title: "Prediction of the temperature of diesel engine oil in railroad locomotives using compressed information-based data fusion method with attention-enhanced CNN-LSTM",
          journal: "Applied Energy, 367, 123357"
        },
        {
          authors: "Wang, X., Bai, Y., Liu, X.",
          year: "2023",
          title: "Prediction of railroad track geometry change using a hybrid CNN-LSTM spatial-temporal model",
          journal: "Advanced Engineering Informatics, 58, 102235"
        },
        {
          authors: "Wang, X., Liu, X., Euston, T.L.",
          year: "2023",
          title: "Relationship between track geometry defect occurrence and substructure condition: A case study on one passenger railroad in the United States",
          journal: "Construction and Building Materials, 365, 130066"
        },
        {
          authors: "Wang, X., Liu, X., Bian, Z.",
          year: "2022",
          title: "A machine learning based methodology for broken rail prediction on freight railroads: A case study in the United States",
          journal: "Construction and Building Materials, 346, 128353"
        },
        {
          authors: "Wang, Y., Wang, P., Wang, X., Liu, X.",
          year: "2018",
          title: "Position synchronization for track geometry inspection data via big-data fusion and incremental learning",
          journal: "Transportation Research Part C: Emerging Technologies 93 (2018): 544-565"
        }
      ],
      link: ""
    },
    {
      name: "Junyan Dai",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/JunyanDai.jpg",
      bio: "Junyan completed his M.S. in Civil Engineering at Rutgers University. His research focuses on Intelligent Transportation Systems and big data analysis for railroads. He received his B.S. in Computer Science from Rutgers University. Junyan is now employed at Google.",
      publications: [
        {
          authors: "Wang, X., Dai, J., Liu, X.",
          year: "2025",
          title: "A spatial-temporal neural network based on ResNet-Transformer for predicting railroad broken rails",
          journal: "Advanced Engineering Informatics, 65, 103126"
        },
        {
          authors: "Kang, D., Dai, J., Liu, X., Bian, Z., Zaman, A., Wang, X.",
          year: "2024",
          title: "Estimating the occurrence of broken rails in commuter railroads with machine learning algorithms",
          journal: "Proceedings of the Institution of Mechanical Engineers, Part F: Journal of Rail and Rapid Transit, 09544097241280848"
        },
        {
          authors: "Dai, J., Liu, X.",
          year: "2022",
          title: "Machine learning based prediction of rail transit signal failure: A case study in the United States",
          journal: "Proceedings of the Institution of Mechanical Engineers, Part F: Journal of Rail and Rapid Transit, 09544097221127781"
        }
      ],
      link: ""
    },
    {
      name: "Dhiraj Deelip Gandhi",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/unknown.jpg",
      bio: "Dhiraj received his M.S. in Computer Science from Rutgers. He is now a software engineer at Google. His research focuses artificial and railroad safety. He received his Bachelor of Technology degree from Visvesvaraya National Institute Of Technology, India in Computer Science and Engineering.",
      link: ""
    },
    {
      name: "Kang Zhou",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/kangzhou.jpg",
      bio: "Kang completed his Ph.D. in Civil Engineering at Rutgers University in December 2019. His research addresses railroad big data analytics.",
      publications: [
        {
          authors: "Zhou, K., Liu, X.",
          year: "2018",
          title: "A review of influencing factors and statistical prediction models for broken rails on freight railroads",
          journal: "(under review)"
        },
        {
          authors: "Zhou, K., Chen. J.H., Liu, X.",
          year: "2018",
          title: "Optimal collision-avoidance maneuvers to minimize bunker consumption under the two-ship crossing situation",
          journal: "Journal of Navigation, 71: 151–168"
        },
        {
          authors: "Zhou, K., Liu, X., Zhou, Y.",
          year: "2017",
          title: "Prioritization of rail defect inspection: a risk-based optimization approach",
          journal: "Proceedings of Annual Meeting of Transportation Research Board, Washington D.C."
        },
        {
          authors: "Zhou, K., Liu, X.",
          year: "2017",
          title: "Risk-informed ultrasonic rail defect inspection frequency optimization",
          journal: "2017 Joint Rail Conference, Philadelphia, PA"
        }
      ],
      link: ""
    },
    {
      name: "Zheyong Bian",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/zheyongbian.jpg",
      bio: "Zheyong completed his Ph.D. in Civil Engineering at Rutgers University in December 2020. He is now an Assistant Professor at University of Houston. His research focuses on operations research, logistics optimization and freight transportation. He received a B.S. and M.S., both in Industrial Engineering, from Tianjin University, China.",
      publications: [
        {
          authors: "Zhang, Z.P., Liu, X., Bian, Z.Y.",
          year: "2018",
          title: "Analysis of restricted-speed accidents using fault tree analysis",
          journal: "(under review)"
        },
        {
          authors: "Bian, Z.Y., Liu, X.",
          year: "2019",
          title: "Mechanism design for first-mile ridesharing based on personalized requirements part II: solution algorithm for large-scale problems",
          journal: "Transportation Research Part B - Methodological, 120: 172-192"
        },
        {
          authors: "Bian, Z.Y., Liu, X.",
          year: "2019",
          title: "Mechanism design for first-mile ridesharing based on personalized requirements part I: theoretical analysis in generalized scenarios",
          journal: "Transportation Research Part B - Methodological, 120: 147-171"
        },
        {
          authors: "Deng, J.Y., Liu, X., Jing, G.Q., Bian, Z.Y.",
          year: "2018",
          title: "Probabilistic risk analysis of flying ballast hazard on high-speed rail lines",
          journal: "Transportation Research Part C, 93: 396–409"
        },
        {
          authors: "Bian, Z.Y., Liu, X.",
          year: "2018",
          title: "A real time adjustment strategy for operational-level stochastic orienteering problem: a simulation-aided optimization approach",
          journal: "Transportation Research Part E, 115: 246–266"
        },
        {
          authors: "Ma, X.P., Dong, H.H., Jia, L.M., Liu, X., Bian, Z.Y.",
          year: "2018",
          title: "An optimal communications protocol for maximizing lifetime of railway infrastructure wireless monitoring network",
          journal: "IEEE Transactions on Industrial Informatics, 14(8): 3347-3357"
        },
        {
          authors: "Bian, Z.Y., Liu, X.",
          year: "2017",
          title: "Planning the ridesharing route for the first-mile service linking to railway passenger transportation",
          journal: "2017 Joint Rail Conference, Philadelphia, PA"
        },
        {
          authors: "Lin, Y., Bian, Z.Y., Liu, X.",
          year: "2016",
          title: "Developing a dynamic neighborhood structure for an adaptive hybrid simulated annealing - tabu search algorithm to solve the symmetrical traveling salesman problem",
          journal: "Journal of Applied Soft Computing, 49, 937-952"
        }
      ],
      awards: [
        "ASME Rail Transportation Division (RTD) Graduate Student Conference Scholarship"
      ],
      link: ""
    },
    {
      name: "Zhipeng Zhang",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/Zhipeng.jpeg",
      bio: "Zhipeng completed his Ph.D. in Civil Engineering at Rutgers University in May 2020. He is now an Assistant Professor at Shanghai Jiaotong University. His research focuses on transportation safety and risk analysis of railroad engineering. He obtained his B.S. from Beijing Jiaotong University in 2015 and a M.S. in Civil Engineering from the University of Illinois at Urbana-Champaign in 2016.",
      publications: [
        {
          authors: "Zhang, Z.P., Liu, X., Holt, K.",
          year: "2019",
          title: "Prevention of end-of-track collisions at passenger terminals via positive train control",
          journal: "Transportation Research Record: Journal of the Transportation Research Board"
        },
        {
          authors: "Zhang, Z.P., Liu, X.",
          year: "2018",
          title: "Safety risk analysis of restricted-speed train accidents in the United States",
          journal: "(in press)"
        },
        {
          authors: "Zhang, Z.P., Liu, X., Bian, Z.Y.",
          year: "2018",
          title: "Analysis of restricted-speed accidents using fault tree analysis",
          journal: "(under review)"
        },
        {
          authors: "Zhang, Z.P., Trivedi, C.B., Liu, X.",
          year: "2018",
          title: "Automated detection of grade-crossing-trespassing near misses based on computer vision analysis of surveillance video data",
          journal: "Safety Science, 110(B): 276-285"
        },
        {
          authors: "Turla, T., Liu, X., Zhang, Z.P.",
          year: "2018",
          title: "Analysis of freight train collision risk in the United States",
          journal: "Proc IMechE Part F: J Rail and Rapid Transit, 0(0): 1–14"
        },
        {
          authors: "Zaman, A., Liu, X., Zhang, Z.P.",
          year: "2018",
          title: "Video analytics for railroad safety research: an artificial intelligence approach",
          journal: "Transportation Research Record: Journal of the Transportation Research Board, 00(0): 1–9"
        },
        {
          authors: "Li, W., Roscoe, G.S., Zhang, Z.P., Saat, M. R., Barkan, C.P.L.",
          year: "2018",
          title: "Comparison of loaded and empty unit train derailment characteristics",
          journal: "TRB18-05260"
        },
        {
          authors: "Zhang, Z.P., Liu, X.",
          year: "2018",
          title: "Positive Train Control (PTC) for railway safety in the United States: policy developments and critical issues",
          journal: "Utilities Policy, 51: 33-40"
        },
        {
          authors: "Liu, X., Turla, T., Zhang, Z.P.",
          year: "2018",
          title: "Accident-cause-specific risk analysis for rail transport of hazardous materials",
          journal: "Transportation Research Record, 00(0): 1–12"
        }
      ],
      link: ""
    },
    {
      name: "Huiyue Tang",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/HuiyueTang.jpg",
      bio: "Huiyue was a visiting Ph.D student in Civil Engineering at Rutgers University and is now a Post Doc in China. She received her B.S. in Electrical Engineering at Southwest Jiaotong University in 2014. Her research interests lie in automatic train control, reinforcement learning based optimization and control techniques, robust and adaptive control, rail measurement techniques.",
      publications: [
        {
          authors: "Wang, Y., Wang, P., Tang, H.Y., Liu, X.",
          year: "2018",
          title: "Assessment and prediction of high speed railway bridge long-term deformation based on track geometry inspection big data",
          journal: "(under review)"
        }
      ],
      link: ""
    },
    {
      name: "Yuan Wang",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/Photo_Wang.jpg",
      bio: "Yuan completed his Ph.D. in Civil Engineering at Rutgers University and is now a Post Doc in China. He loves mathematics, algorithm designing and programing. He prefers to solve problems with MATLAB. He is also fond of APP designing for Android and IOS. What's more, he loves java and hates C++. His current research focuses on (1) rail measurement techniques; (2) big data application of track maintenance; (3) intelligent railway system; (4) nonlinear dynamics.",
      publications: [
        {
          authors: "Wang, Y., Tang, H.Y., Wang, P., Liu, X., Chen, R.",
          year: "2019",
          title: "Multipoint chord reference system for track irregularity: part I - theory and methodology",
          journal: "Measurement, 138(2019): 240-255"
        },
        {
          authors: "Wang, Y., Tang, H.Y., Wang, P., Liu, X., Chen, R.",
          year: "2019",
          title: "Multipoint chord reference system for track irregularity: part II - numerical analysis",
          journal: "Measurement, 138(2019): 194-205"
        },
        {
          authors: "Wang, Y., Wang, P., Wang, X., Liu, X.",
          year: "2018",
          title: "Position synchronization for track geometry inspection data via big-data fusion and incremental learning",
          journal: "Transportation Research Part C, 93: 544-565"
        },
        {
          authors: "Wang, Y., Wang, P., Tang, H.Y., Liu, X.",
          year: "2018",
          title: "Assessment and prediction of high speed railway bridge long-term deformation based on track geometry inspection big data",
          journal: "(under review)"
        }
      ],
      link: ""
    },
    {
      name: "Jieyi Deng",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/Jieyi.jpg",
      bio: "Jieyi completed her Master's in Civil and Environment Engineering at Rutgers, the State University of New Jersey, in 2018. She received her B.S. from Central South University in China and developed a professional ability in modeling. As a junior researcher, Jieyi's research interests are mainly focused on railroadd safety analysis and transportation data analysis.",
      publications: [
        {
          authors: "Deng, J.Y., Liu, X., Jing, G.Q., Bian, Z.Y.",
          year: "2018",
          title: "Probabilistic risk analysis of flying ballast hazard on high-speed rail lines",
          journal: "Transportation Research Part C, 93: 396–409"
        },
        {
          authors: "Deng, J.Y., Jing, G.Q., Liu, X.",
          year: "2017",
          title: "Probabilistic analysis of flying ballast on high-speed rail lines",
          journal: "2017 Joint Rail Conference, Philadelphia, PA"
        }
      ],
      link: ""
    },
    {
      name: "Liwen Tian",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/Liwen.jpg",
      bio: "Liwen completed his Master's in Civil and Environment Engineering at Rutgers, the state university of New Jersey in 2018. He assisted in evaluating RPMs and their alternatives for optimal allocation of safety investment concerning interdependent Crash Modification Factors. He received his B.E. in Civil Engineering from Tongji University, China. Liwen also had a two-year full-time on-site experience in the Evergrande Group in Shanghai, where he worked as a project engineer.",
      link: ""
    },
    {
      name: "Masoud Imaniboossejin",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/masoud.jpg",
      bio: "Masoud is a pursuing his M.S. with a research fellowship. His research addresses transportation safety and risk management. He is currently working on a project related to roadway transportation safety. Masoud received his B.S. degree in Civil Engineering from Sharif University of Technology in Iran, 2015.",
      link: ""
    },
    {
      name: "Tejashree Turla",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/tephoto.jpg",
      bio: "Tejashree completed her Master's in Civil and Environment Engineering at Rutgers, the state university of New Jersey in 2019. She is a junior researcher, assisting in the railway safety analysis and risk assessment using FRA data. She is currently working on Collision and derailment severity analysis. Tejashree received her B.E. degree in Civil Engineering from Osmania University, India.",
      publications: [
        {
          authors: "Turla, T., Liu, X., Zhang, Z.P.",
          year: "2018",
          title: "Analysis of freight train collision risk in the United States",
          journal: "Proc IMechE Part F: J Rail and Rapid Transit, 0(0): 1–14"
        },
        {
          authors: "Liu, X., Turla, T., Zhang, Z.P.",
          year: "2018",
          title: "Accident-cause-specific risk analysis for rail transport of hazardous materials",
          journal: "Transportation Research Record, 00(0): 1–12"
        }
      ],
      link: ""
    },
    {
      name: "Christian Higgins",
      title: "Alumnus",
      department: "Rutgers University",
      image: "https://rail.rutgers.edu/img/christian.jpg",
      bio: "Christian is a M.S. student in City and Regional Planning at Rutgers University. He has worked on a methodological framework for truck parking development. His current research focuses on railroad infrastructure risk management and safety policy. He has a B.S. in Urban Planning from Cornell University where he additionally conducted rural public transit planning and policy analysis with a local metropolitan planning organization.",
      publications: [
        {
          authors: "Higgins, C., Liu, X.",
          year: "2018",
          title: "Modeling of track geometry degradation and decisions on safety and maintenance: a literature review and possible future research directions",
          journal: "Proc IMechE Part F: J Rail and Rapid Transit, 232(5): 1385–1397"
        },
        {
          authors: "Bai, Y., Liu, X., Higgins, C., Chiu, Y.P., Chen, J.H.",
          year: "2017",
          title: "Transportation cost modeling of containerized soybean exports in the United States",
          journal: "Transportation Research Record: Journal of the Transportation Research Board, 2611: 19-31"
        }
      ],
      awards: [
        "Dwight David Eisenhower Transportation Fellowship"
      ],
      link: ""
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
                {member.publications && <Publications publications={member.publications} />}
                {member.link && (
                  <Link 
                    href={member.link}
                    className="inline-flex items-center text-[#A31F34] hover:text-[#8A1B2D] transition-colors"
                  >
                    <Icon icon="lucide:link" className="mr-2" />
                    Visit Profile
                  </Link>
                )}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
