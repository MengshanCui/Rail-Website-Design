import React from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,
  Card, CardBody, Divider, Tabs, Tab
} from "@heroui/react";
import { Icon } from "@iconify/react";

interface NavItem {
  name: string;
  href: string;
}

interface Publication {
  year: number;
  title: string;
  authors: string;
  journal: string;
  doi?: string;
  type: 'journal' | 'magazine' | 'conference';
  url?: string;
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

const publications: Publication[] = [
  {    year: 2025,
    title: "A spatial-temporal neural network based on ResNet-Transformer for predicting railroad broken rails",
    authors: "Wang, X., Dai, J., Liu, X.",
    journal: "Advanced Engineering Informatics",
    type: "journal",
    doi: "10.1016/j.aei.2025.103126",
    url: ""
  },
  {
    year: 2024,
    title: "Quantifying the influence of tank car position and train configuration on the risk of rail transport of class 3 flammable liquids",
    authors: "Kang, D., Zhao, J., Dick, C.T., Liu, X., Lin, C.Y., Bian, Z., Kirkpatrick, S.W.",
    journal: "Transportation Research Record",
    type: "journal",
    doi: "10.1177/03611981241274649",
    url: "https://rail.rutgers.edu/files/kang-et-al-2024-quantifying-the-influence-of-tank-car-position.pdf"
  },
  {
    year: 2024,
    title: "Estimating the occurrence of broken rails in commuter railroads with machine learning algorithms",
    authors: "Kang, D., Dai, J., Liu, X., Bian, Z., Zaman, A., Wang, X.",
    journal: "Proceedings of the Institution of Mechanical Engineers, Part F: Journal of Rail and Rapid Transit",
    type: "journal",
    doi: "10.1177/09544097241280848",
    url: "https://rail.rutgers.edu/files/kang-et-al-2024-estimating-the-occurrence-of-broken-rails-in-commuter-railroads-with-machine-learning-algorithms.pdf"
  },
  {
    year: 2024,
    title: "Prediction of the temperature of diesel engine oil in railroad locomotives using compressed information-based data fusion method with attention-enhanced CNN-LSTM",
    authors: "Wang, X., Liu, X., Bai, Y.",
    journal: "Applied Energy",
    type: "journal",
    doi: "10.1016/j.apenergy.2024.123357",
    url: "https://rail.rutgers.edu/files/Wang%20et%20al_2024_Applied%20Energy_Temperature%20prediction.pdf"
  },
  {
    year: 2024,
    title: "Freight train derailment severity prediction: a physics-informed one-dimensional model",
    authors: "Kang, D., Kirkpatrick, S. W., Zhang, Z., Liu, X., Bian, Z.",
    journal: "Smart and Resilient Transportation",
    type: "journal",
    url: "https://rail.rutgers.edu/files/Kang_2024_Physics%20informed%20severity%20model.pdf"
  },
  {
    year: 2023,
    title: "Prediction of railroad track geometry change using a hybrid CNN-LSTM spatial-temporal model",
    authors: "Wang, X., Bai, Y., Liu, X.",
    journal: "Advanced Engineering Informatics",
    type: "journal",
    doi: "10.1016/j.aei.2023.102235",
    url: "https://rail.rutgers.edu/files/Wang_2023_LSTM%20CNN%20for%20Track%20Geometry.pdf"
  },
  {
    year: 2023,
    title: "Development and Testing of A UWB-based Vehicle-to-Vehicle (V2V) Ranging System for Self-Propelled Rail Vehicles",
    authors: "Wang, Z., Shlake, B.W., Mulay, N., Zaman, A., Liu, X.",
    journal: "IEEE Transactions on Vehicular Technology",
    type: "journal",
    url: "https://rail.rutgers.edu/files/Wang_2023_Development_and_Testing_of_a_UWB-based_Vehicle-to-Vehicle_V2V_Ranging_System_for_Self-Propelled_Rail_Vehicles.pdf"
  },
  {
    year: 2023,
    title: "Statistical Analysis of Train Derailment Severity for Unit Trains Versus Manifest Trains",
    authors: "Li, W., Bian, Z., Liu, X.",
    journal: "Transportation Research Record",
    type: "journal",
    doi: "10.1177/03611981231182989",
    url: "https://rail.rutgers.edu/files/li-et-al-2023-statistical-analysis-of-train-derailment-severity-for-unit-trains-versus-manifest-trains.pdf"
  },
  {
    year: 2023,
    title: "Artificial Intelligence Aided Crowd Analytics in Rail Transit Station",
    authors: "Zhu, Y., Ni, K., Li, X., Zaman, A., Liu, X., Bai, Y.",
    journal: "Transportation Research Record",
    type: "journal",
    doi: "10.1177/03611981231175156",
    url: "https://rail.rutgers.edu/files/Zhu-et-al-2023-artificial-intelligence-aided-crowd-analytics-in-rail-transit-station.pdf"
  },
  {
    year: 2023,
    title: "Artificial Intelligence-Aided Grade Crossing Safety Violation Detection Methodology and a Case Study in New Jersey",
    authors: "Zaman, A., Huang, Z., Li, W., Qin, H., Kang, D., Liu, X.",
    journal: "Transportation Research Record",
    type: "journal",
    doi: "10.1177/03611981231163824",
    url: "https://rail.rutgers.edu/files/Zaman_2023_AIGradeCrossing.pdf"
  },
  {
    year: 2023,
    title: "Artificial intelligence-aided intelligent obstacle and trespasser detection based on locomotive-mounted forward-facing camera data",
    authors: "Qin, H., Zaman, A., Liu, X.",
    journal: "Proceedings of the Institution of Mechanical Engineers, Part F: Journal of Rail and Rapid Transit",
    type: "journal",
    doi: "10.1177/09544097231156312",
    url: "https://rail.rutgers.edu/files/Qin_2023_Forward%20Facing%20AI.pdf"
  },
  {
    year: 2023,
    title: "Probabilistic risk analysis of unit trains versus manifest trains for transporting hazardous materials",
    authors: "Kang, D., Zhao, J., Dick, C.T., Liu, X., Bian, Z.Y., Kirkpatrick, S.W., Lin, C.Y.",
    journal: "Accident Analysis and Prevention",
    type: "journal",
    doi: "10.1016/j.aap.2023.106950",
    url: "https://rail.rutgers.edu/files/Kang%20et%20al_2023_AAP_Hazmat%20risk.pdf"
  },
  {
    year: 2023,
    title: "Relationship between track geometry defect occurrence and substructure condition: A case study on one passenger railroad in the United States",
    authors: "Wang, X., Liu, X., Euston, T.L.",
    journal: "Construction and Building Materials",
    type: "journal",
    doi: "10.1016/j.conbuildmat.2023.130066",
    url: "https://rail.rutgers.edu/files/Wang_2022_Track%20Geometry%20and%20Subcondition.pdf"
  },
  {
    year: 2022,
    title: "Machine learning based prediction of rail transit signal failure: A case study in the United States",
    authors: "Dai, J., Liu, X.",
    journal: "Proceedings of the Institution of Mechanical Engineers, Part F: Journal of Rail and Rapid Transit",
    type: "journal",
    doi: "10.1177/09544097221127781",
    url: "https://rail.rutgers.edu/files/Dai%20and%20Liu_JRRT_Machine%20Learning%20for%20Rail%20Signal%20Failure%20Prediction.pdf"
  },
  {
    year: 2022,
    title: "Cyber security of railway cyber-physical system (CPS) – A risk management methodology",
    authors: "Wang, Z., Liu, X.",
    journal: "Communications in Transportation Research",
    type: "journal",
    doi: "10.1016/j.commtr.2022.100078",
    url: "https://rail.rutgers.edu/files/Wang_2022_Rail%20Cyber%20Security.pdf"
  },
  {
    year: 2022,
    title: "A machine learning based methodology for broken rail prediction on freight railroads: A case study in the United States",
    authors: "Wang, X., Liu, X., Bian, Z.",
    journal: "Construction and Building Materials",
    type: "journal",
    doi: "10.1016/j.conbuildmat.2022.128353",
    url: "https://rail.rutgers.edu/files/Wang_2022_Broken%20Rail%20Prediction.pdf"
  },
  {
    year: 2022,
    title: "Quantitative analysis of freight train derailment severity with structured and unstructured data",
    authors: "Song, B., Zhang, Z.P., Qin, Y., Liu, X., Hu, H.",
    journal: "Reliability Engineering & System Safety",
    type: "journal",
    doi: "10.1016/j.ress.2022.108563",
    url: "https://rail.rutgers.edu/files/Song_2022_NLP%20for%20Derailment%20Severity.pdf"
  },
  {
    year: 2022,
    title: "An Empirical analysis of freight train derailment rates for unit trains and manifest trains",
    authors: "Zhang, Z.P., Lin, C.Y., Liu, X., Bian, Z.Y., Dick, C.T., Zhao, J.X., Kirkpatrick, S.",
    journal: "Proceedings of the Institution of Mechanical Engineers, Part F: Journal of Rail and Rapid Transit",
    type: "journal",
    doi: "10.1177/09544097221098765",
    url: "https://rail.rutgers.edu/files/[61]%20Zhang_2022_An%20Empirical%20analysis%20of%20freight%20train%20derailment%20rates%20for%20unit%20trains%20and%20manifest%20trains.pdf"
  },
  {
    year: 2022,
    title: "An online hybrid mechanism for dynamic first-mile ridesharing service",
    authors: "Bian, Z.Y., Bai, Y., Liu, X., Wang, B.J.",
    journal: "Transportation Research Part C",
    type: "journal",
    doi: "10.1016/j.trc.2022.103585",
    url: "https://rail.rutgers.edu/files/Bian_2022_TRC_Online%20mechanism%20design.pdf"
  },
  {
    year: 2022,
    title: "Multi-year planning for optimal navigation channel dredging and dredged material management",
    authors: "Bian, Z.Y., Bai, Y., Douglas, W.S., Liu, X.",
    journal: "Transportation Research Part E",
    type: "journal",
    doi: "10.1016/j.tre.2022.102618",
    url: "https://rail.rutgers.edu/files/Bian_Maritime.pdf"
  },
  {
    year: 2022,
    title: "Artificial intelligence-aided railroad trespassing detection and data analytics: Methodology and a case study",
    authors: "Zhang, Z.P., Zaman, A., Xu, J.X., Liu, X.",
    journal: "Accident Analysis & Prevention",
    type: "journal",
    doi: "10.1016/j.aap.2022.106594",
    url: "https://rail.rutgers.edu/files/Zhang_AI%20Trespassing-AAP-2022.pdf"
  },
  {
    year: 2021,
    title: "Quantifying Recent Trends in Class 1 Freight Railroad Train Length and Weight by Train Type",
    authors: "Dick, C.T., Zhao, J., Liu, X., Kirkpatrick, S.W.",
    journal: "Transportation Research Record",
    type: "journal",
    doi: "10.1177/03611981211031534",
    url: "https://rail.rutgers.edu/files/Dick-et-al-2021-TRR-Train-Size-03611981211031534.pdf"
  },
  {
    year: 2021,
    title: "Passenger rail station safety improvement and analysis of end-of-track collisions based on systems-theoretic accident modeling and processes (STAMP)",
    authors: "Zhang, Z.P., Liu, X., Hu, H.",
    journal: "Smart and Resilient Transport",
    type: "journal",
    url: "https://rail.rutgers.edu/files/Zhang_Passenger%20rail%20station%20safety%20improvement%20and%20analysis%20of%20end-of-track%20collisions%20based%20on%20STAMP-2021.pdf"
  },
  {
    year: 2021,
    title: "Statistical Analysis of Seasonal Effect on Freight Train Derailments",
    authors: "Zhang, Z.P., Liu, X., Hu, H.",
    journal: "Journal of Transportation Engineering, Part A: Systems",
    type: "journal",
    doi: "10.1061/JTEPBS.0000562",
    url: "https://rail.rutgers.edu/files/Zhang_Statistical%20Analysis%20of%20Seasonal%20Effect%20on%20Freight%20Train%20Derailments-2021.pdf"
  },
  {
    year: 2021,
    title: "Assessment and prediction of high speed railway bridge long-term deformation based on track geometry inspection big data",
    authors: "Wang, Y., Wang, P., Tang, H.Y., Liu, X., Xu, J.H., Xiao, J.L., Wu, J.S.",
    journal: "Mechanical Systems and Signal Processing",
    type: "journal",
    doi: "10.1016/j.ymssp.2021.107749",
    url: "https://rail.rutgers.edu/files/1-s2.0-S0888327021001448-main.pdf"
  },
  {
    year: 2020,
    title: "Analysis of human-factor-caused freight train accidents in the United States",
    authors: "Zhang, Z.P., Turla, T., Liu, X.",
    journal: "Journal of Transportation Safety & Security",
    type: "journal",
    url: "https://rail.rutgers.edu/files/Zhang_2019_Analysis%20of%20human%20factor%20caused%20freight%20train%20accidents%20in%20the%20United%20States.pdf"
  },
  {
    year: 2020,
    title: "Safety risk analysis of restricted-speed train accidents in the United States",
    authors: "Zhang, Z.P., Liu, X.",
    journal: "Journal of Risk Research",
    type: "journal",
    doi: "10.1080/13669877.2019.1617336",
    url: "https://rail.rutgers.edu/files/Zhang%20and%20Liu_Journal%20of%20Risk%20Research_Restricted%20speed"
  },
  {
    year: 2020,
    title: "A data-fusion approach for speed estimation and location calibration of a metro train based on low-cost sensors in smartphones",
    authors: "Wang, Y., Cong, J.L., Wang, P., Liu, X., Tang, H.H.",
    journal: "IEEE Sensors Journal",
    type: "journal",
    doi: "10.1109/JSEN.2019.2932412",
    url: "https://rail.rutgers.edu/files/[53]%20Wang_Smartphone"
  },
  {
    year: 2020,
    title: "A Double-Switch-Q-network-based reinforcement learning approach for optimal control of multiple electric locomotives in a heavy-haul freight train",
    authors: "Tang, H.Y., Wang, Y., Liu, X., Feng, X.X.",
    journal: "Knowledge-based System",
    type: "journal",
    url: "https://rail.rutgers.edu/files/[52]%20Tang_Reinforcement%20Learning%20for%20Locomotives_Revised%20Manuscript"
  },
  {
    year: 2019,
    title: "High-speed railway ballast flight mechanism analysis and risk management – A literature review",
    authors: "Jing, G.Q., Dong, D., Liu, X.",
    journal: "Construction and Building Materials",
    type: "journal",
    doi: "10.1016/j.conbuildmat.2019.117819",
    url: "https://rail.rutgers.edu/files/[1]%20Jing%20et%20al._2019_Review%20of%20flying%20ballast.pdf"
  },
  {
    year: 2019,
    title: "Artificial-intelligence-aided automated detection of railroad trespassing",
    authors: "Zaman, A., Ren, B.Z., Liu, X.",
    journal: "Transportation Research Record: Journal of the Transportation Research Board",
    type: "journal",
    url: "https://rail.rutgers.edu/files/[6]%20Zaman%20et%20al_2019_TRR_AI%20for%20Trespassing.pdf"
  },
  {
    year: 2019,
    title: "Prevention of end-of-track collisions at passenger terminals via positive train control",
    authors: "Zhang, Z.P., Liu, X., Holt, K.",
    journal: "Transportation Research Record: Journal of the Transportation Research Board",
    type: "journal",
    url: "https://rail.rutgers.edu/files/Zhang_TRR2019_PTC%20for%20End%20of%20Track%20Collision.pdf"
  },
  {
    year: 2019,
    title: "Multipoint chord reference system for track irregularity: part I - theory and methodology",
    authors: "Wang, Y., Tang, H.Y., Wang, P., Liu, X., Chen, R.",
    journal: "Measurement",
    type: "journal",
    doi: "10.1016/j.measurement.2019.02.015",
    url: "https://rail.rutgers.edu/files/Wang_2019_Multi%20chord_part%201.pdf"
  },
  {
    year: 2019,
    title: "Multipoint chord reference system for track irregularity: part II - numerical analysis",
    authors: "Wang, Y., Tang, H.Y., Wang, P., Liu, X., Chen, R.",
    journal: "Measurement",
    type: "journal",
    doi: "10.1016/j.measurement.2019.02.016",
    url: "https://rail.rutgers.edu/files/Wang_2019_Multi%20chord_part%202.pdf"
  },
  {
    year: 2019,
    title: "Mechanism design for first-mile ridesharing based on personalized requirements part II: solution algorithm for large-scale problems",
    authors: "Bian, Z.Y., Liu, X.",
    journal: "Transportation Research Part B - Methodological",
    type: "journal",
    doi: "10.1016/j.trb.2018.12.002",
    url: "https://rail.rutgers.edu/files/Bian_2019_Part2.pdf"
  },
  {
    year: 2019,
    title: "Mechanism design for first-mile ridesharing based on personalized requirements part I: theoretical analysis in generalized scenarios",
    authors: "Bian, Z.Y., Liu, X.",
    journal: "Transportation Research Part B - Methodological",
    type: "journal",
    doi: "10.1016/j.trb.2018.12.001",
    url: "https://rail.rutgers.edu/files/Bian_2019_Part1.pdf"
  },
  {
    year: 2018,
    title: "Safety risk analysis of restricted-speed train accidents in the United States",
    authors: "Zhang, Z.P., Liu, X..",
    journal: "Journal of Risk Research",
    type: "journal",
    url: "https://rail.rutgers.edu/files/[0]%20Zhang%20and%20Liu_Journal%20of%20Risk%20Research_Restricted%20speed.pdf"
  },
  {
    year: 2018,
    title: "Assessing the visibility of raised pavement markers and alternative forms of delineation",
    authors: "Bullough, J., Liu, X.",
    journal: "Transportation Research Record",
    type: "journal",
    url: "https://rail.rutgers.edu/files/Bullough_2018_Assessing%20the%20visibility%20of%20raised%20pavement%20markers%20and%20alternative%20froms%20of%20delineation.pdf"
  },
  {
    year: 2018,
    title: "Adaptive optimization of multi-hop communication protocol for linear wireless monitoring networks on high-speed railways",
    authors: "Ma, X.P., Dong, H.H, Li, P., Jia, L.M., Liu, X., Qin, Y., Tang, J.Q.",
    journal: "IEEE Transactions on Intelligent Transportation Systems",
    type: "journal",
    url: "https://rail.rutgers.edu/files/Ma_2018_IEEE%20ITS_Adaptive%20Optimization.pdf"
  },
  {
    year: 2018,
    title: "Periodical characteristics of ship building market activity: a wavelet analysis",
    authors: "Song, L., Chen, J.H., Li, K., Liu, X., Fei, Y., Yu, H.",
    journal: "Journal of Marine Science and Technology",
    type: "journal",
    url: "https://rail.rutgers.edu/files/Li_Periodical%20characteristics%20of%20ship%20building%20market%20activity%20wavelet%20analysis.pdf"
  },
  {
    year: 2018,
    title: "Automated detection of grade-crossing-trespassing near misses based on computer vision analysis of surveillance video data",
    authors: "Zhang, Z.P., Trivedi, C.B., Liu, X.",
    journal: "Safety Science",
    type: "journal",
    doi: "10.1016/j.ssci.2018.05.017",
    url: "https://rail.rutgers.edu/files/Detection_Safety_Scien.pdf"
  },
  {
    year: 2018,
    title: "Analysis of freight train collision risk in the United States",
    authors: "Turla, T., Liu, X., Zhang, Z.P.",
    journal: "Proc IMechE Part F: J Rail and Rapid Transit",
    type: "journal",
    doi: "10.1177/0954409718754912",
    url: "https://rail.rutgers.edu/files/Turla_JRRT_2018_CollisionRisk.pdf"
  },
  {
    year: 2018,
    title: "Video analytics for railroad safety research: an artificial intelligence approach",
    authors: "Zaman, A., Liu, X., Zhang, Z.P.",
    journal: "Transportation Research Record: Journal of the Transportation Research Board",
    type: "journal",
    doi: "10.1177/0361198118754912",
    url: "https://rail.rutgers.edu/files/Video_Analytics.pdf"
  },
  {
    year: 2018,
    title: "Position synchronization for track geometry inspection data via big-data fusion and incremental learning",
    authors: "Wang, Y., Wang, P., Wang, X., Liu, X.",
    journal: "Transportation Research Part C",
    type: "journal",
    doi: "10.1016/j.trc.2018.06.001",
    url: "https://rail.rutgers.edu/files/Wang_Big_Data.pdf"
  },
  {
    year: 2018,
    title: "Probabilistic risk analysis of flying ballast hazard on high-speed rail lines",
    authors: "Deng, J.Y., Liu, X., Jing, G.Q., Bian, Z.Y.",
    journal: "Transportation Research Part C",
    type: "journal",
    doi: "10.1016/j.trc.2018.05.001",
    url: "https://rail.rutgers.edu/files/Deng_Bian_TRC_Flying_Ballast.pdf"
  },
  {
    year: 2018,
    title: "A real time adjustment strategy for operational-level stochastic orienteering problem: a simulation-aided optimization approach",
    authors: "Bian, Z.Y., Liu, X.",
    journal: "Transportation Research Part E",
    type: "journal",
    doi: "10.1016/j.tre.2018.05.001",
    url: "https://rail.rutgers.edu/files/Bian_2018_TRE_Stochastic_Reorienting.pdf"
  },
  {
    year: 2018,
    title: "Recent applications of big data analytics in railway transportation systems: a survey",
    authors: "He, Q., Ghofrani, F., Goverde, R., Liu, X.",
    journal: "Transportation Research Part C",
    type: "journal",
    doi: "10.1016/j.trc.2018.05.001",
    url: "https://rail.rutgers.edu/files/He_2018_Bigdata.pdf"
  },
  {
    year: 2018,
    title: "A multi-service train-to-ground bandwidth allocation strategy based on game theory and particle swarm optimization",
    authors: "Ma, X.P., Dong. H.H., Li, P., Jia, L.M., Liu, X.",
    journal: "IEEE Intelligent Transportation Systems Magazine",
    type: "journal",
    doi: "10.1109/MITS.2018.2806620",
    url: "https://rail.rutgers.edu/files/12345.pdf"
  },
  {
    year: 2018,
    title: "An optimal communications protocol for maximizing lifetime of railway infrastructure wireless monitoring network",
    authors: "Ma, X.P., Dong, H.H., Jia, L.M., Liu, X., Xie, G., Bian, Z.Y.",
    journal: "IEEE Transactions on Industrial Informatics",
    type: "journal",
    doi: "10.1109/TII.2018.2806620",
    url: "https://rail.rutgers.edu/files/08233201.pdf"
  },
  {
    year: 2018,
    title: "Positive Train Control (PTC) for railway safety in the United States: policy developments and critical issues",
    authors: "Zhang, Z.P., Liu, X.",
    journal: "Utilities Policy",
    type: "journal",
    doi: "10.1016/j.jup.2018.05.001",
    url: "https://rail.rutgers.edu/files/Zhang_2018_UtilitiesPolicy_PTC.pdf"
  },
  {
    year: 2018,
    title: "Optimal collision-avoidance maneuvers to minimize bunker consumption under the two-ship crossing situation",
    authors: "Zhou, K., Chen. J.H., Liu, X.",
    journal: "Journal of Navigation",
    type: "journal",
    doi: "10.1017/S0373463317000823",
    url: "https://rail.rutgers.edu/files/Zhou_Navigation_Ship_Collision.pdf"
  },
  {
    year: 2018,
    title: "Modeling of track geometry degradation and decisions on safety and maintenance: a literature review and possible future research directions",
    authors: "Higgins, C., Liu, X.",
    journal: "Proc IMechE Part F: J Rail and Rapid Transit",
    type: "journal",
    doi: "10.1177/0954409718754912",
    url: "https://rail.rutgers.edu/files/HigginsC_LiuX.pdf"
  },
  {
    year: 2018,
    title: "Accident-cause-specific risk analysis for rail transport of hazardous materials",
    authors: "Liu, X., Turla, T., Zhang, ZP.",
    journal: "Transportation Research Record",
    type: "journal",
    doi: "10.1177/0361198118754912",
    url: "https://rail.rutgers.edu/files/Liu_TRR18.pdf"
  },
  {
    year: 2017,
    title: "The Nicaragua Canal: potential impact on international shipping and its attendant challenges",
    authors: "Chen, J., Notteboom, T., Liu, X., H., Nikitakos, N., Yang, C.",
    journal: "Maritime Economics & Logistics",
    type: "journal",
    doi: "10.1057/mel.2017.1",
    url: "https://rail.rutgers.edu/files/Nicaragua_Canal.pdf"
  },
  {
    year: 2017,
    title: "Analysis of multiple tank car releases in train accidents",
    authors: "Liu, X., Liu, C., Hong, Y.L.",
    journal: "Accident Analysis and Prevention",
    type: "journal",
    doi: "10.1016/j.aap.2017.05.001",
    url: "https://rail.rutgers.edu/files/Liu2017AAP.pdf"
  },
  {
    year: 2017,
    title: "The development of ship registration policy in china: Response to flags of convenience",
    authors: "Chen, J., Liu, K.X., Liu, X., Li, H.",
    journal: "Marine Policy",
    type: "journal",
    doi: "10.1016/j.marpol.2017.05.001",
    url: "https://rail.rutgers.edu/files/chen1.pdf"
  },
  {
    year: 2017,
    title: "An intermodal transportation geospatial network modeling for containerized soybean shipping",
    authors: "Liu, X., Bai, Y., Chen, J.H.",
    journal: "Journal of Ocean Engineering and Science",
    type: "journal",
    doi: "10.1016/j.joes.2017.05.001",
    url: "https://rail.rutgers.edu/files/Liu3.pdf"
  },
  {
    year: 2017,
    title: "Integrated train timetabling and rolling stock scheduling model based on time-dependent demand for urban rail transit",
    authors: "Yue, Y.X., Han, J., Wang, S.F., Liu, X.",
    journal: "Computer-Aided Civil and Infrastructure Engineering",
    type: "journal",
    doi: "10.1111/mice.12345",
    url: "https://rail.rutgers.edu/files/Yue2017.pdf"
  },
  {
    year: 2017,
    title: "Transportation cost modeling of containerized soybean exports in the United States",
    authors: "Bai, Y., Liu, X., Higgins, C., Chiu, Y.P., Chen, J.H.",
    journal: "Transportation Research Record: Journal of the Transportation Research Board",
    type: "journal",
    doi: "10.1177/0361198117701234",
    url: "https://rail.rutgers.edu/files/bai5.pdf"
  },
  {
    year: 2017,
    title: "Optimizing rail defect inspection frequency to reduce the risk of hazardous materials transportation by rail",
    authors: "Liu, X.",
    journal: "Journal of Loss Prevention in the Process Industries",
    type: "journal",
    doi: "10.1016/j.jlp.2017.05.001",
    url: "https://rail.rutgers.edu/files/Liu_JLPP_2017.pdf"
  },
  {
    year: 2017,
    title: "Optimal bilateral cooperative slot allocation for two liner carriers under a co-chartering agreement",
    authors: "Chen. J.H., Liu, X., Zhang. X.H., He, J.L., Luo, L.H.",
    journal: "Journal of Navigation",
    type: "journal",
    doi: "10.1017/S0373463317000823",
    url: "https://rail.rutgers.edu/files/Optimal.pdf"
  },
  {
    year: 2017,
    title: "Risk comparison of transporting hazardous materials in unit trains versus mixed trains",
    authors: "Liu, X.",
    journal: "Transportation Research Record: Journal of the Transportation Research Board",
    type: "journal",
    doi: "10.1177/0361198117701234",
    url: "https://rail.rutgers.edu/files/Liu_2017_TRR_Hazmat.pdf"
  },
  {
    year: 2017,
    title: "Freight-train derailment rates for railroad safety and risk analysis",
    authors: "Liu, X.,Saat, M.R., Barkan, C.P.L.",
    journal: "Accident Analysis and Prevention",
    type: "journal",
    doi: "10.1016/j.aap.2017.05.001",
    url: "https://rail.rutgers.edu/files/4_Liu2017.pdf"
  },
  {
    year: 2016,
    title: "Derailment risk analysis of liquefied natural gas (LNG) tenders on mainline freight trains in the United States",
    authors: "Liu, X.,Schlake, B.",
    journal: "Transportation Research Part C –Emerging Technologies",
    type: "journal",
    doi: "10.1016/j.trc.2016.05.001",
    url: "https://rail.rutgers.edu/files/schlake2016.pdf"
  },
  {
    year: 2016,
    title: "Statistical causal analysis of freight train derailments in the United States",
    authors: "Liu, X.",
    journal: "Journal of Transportation Engineering Part A: Systems",
    type: "journal",
    doi: "10.1061/JTEPBS.0000123",
    url: "https://rail.rutgers.edu/files/Liu2016JTE.pdf"
  },
  {
    year: 2016,
    title: "Analysis of collision risk for freight trains in the United States",
    authors: "Liu, X.",
    journal: "Transportation Research Record - Journal of the Transportation Research Board",
    type: "journal",
    doi: "10.1177/0361198116601234",
    url: "https://rail.rutgers.edu/files/7_Liu2016.pdf"
  },
  {
    year: 2016,
    title: "Developing a dynamic neighborhood structure for an adaptive hybrid simulated annealing - tabu search algorithm to solve the symmetrical traveling salesman problem",
    authors: "Lin, Y., Bian, Z.Y., Liu, X.",
    journal: "Journal of Applied Soft Computing",
    type: "journal",
    doi: "10.1016/j.asoc.2016.08.052",
    url: "https://rail.rutgers.edu/files/Lin2017.pdf"
  },
  {
    year: 2016,
    title: "Risk analysis of transportation crude oil by rail: methodology and decision support system",
    authors: "Liu, X.",
    journal: "Transportation Research Record - Journal of the Transportation Research Record",
    type: "journal",
    doi: "10.1177/0361198116601234",
    url: "https://rail.rutgers.edu/files/xiangliupaper12.pdf"
  },
  {
    year: 2016,
    title: "Risk-based optimization of rail defect inspection frequency for petroleum crude oil transportation",
    authors: "Liu, X., Dick, C.T.",
    journal: "Transportation Research Record - Journal of the Transportation Research Board",
    type: "journal",
    doi: "10.1177/0361198116601234",
    url: "https://rail.rutgers.edu/files/xiangliu1.pdf"
  },
  {
    year: 2015,
    title: "Modeling railroad tank car releases using a generalized binomial model",
    authors: "Liu, X., Hong, Y.",
    journal: "Accident Analysis and Prevention",
    type: "journal",
    doi: "10.1016/j.aap.2015.05.001",
    url: "https://rail.rutgers.edu/files/j2.pdf"
  },
  {
    year: 2015,
    title: "Statistical temporal analysis of freight-train derailment rates in the United States: 2000 to 2012",
    authors: "Liu, X.",
    journal: "Transportation Research Record",
    type: "journal",
    doi: "10.1177/0361198115501234",
    url: "https://rail.rutgers.edu/files/j3.pdf"
  },
  {
    year: 2014,
    title: "Optimization of rail defect inspection frequency for the improvement of railway transportation safety and efficiency",
    authors: "Liu, X., Lovett, A., Dick, C.T., Saat, M.R., Barkan, C.P.L.",
    journal: "Journal of Transportation Engineering",
    type: "journal",
    doi: "10.1061/JTEPBS.0000123",
    url: "https://rail.rutgers.edu/files/j4.pdf"
  },
  {
    year: 2014,
    title: "Probability analysis of multiple-tank-car release incidents in railway hazardous materials transportation",
    authors: "Liu, X., Saat, M.R., Barkan, C.P.L.",
    journal: "Journal of Hazardous Materials",
    type: "journal",
    doi: "10.1016/j.jhazmat.2014.05.001",
    url: "https://rail.rutgers.edu/files/j5.pdf"
  },
  {
    year: 2013,
    title: "Analysis of U.S. freight-train derailment severity using zero-truncated negative binomial regression and quantile regression",
    authors: "Liu, X., Saat, M.R., Qin, X., Barkan, C.P.L.",
    journal: "Accident Analysis and Prevention",
    type: "journal",
    doi: "10.1016/j.aap.2013.05.001",
    url: "https://rail.rutgers.edu/files/j6.pdf"
  },
  {
    year: 2013,
    title: "Integrated risk reduction framework to improve railway hazardous materials transportation safety",
    authors: "Liu, X., Saat, M.R., Barkan, C.P.L.",
    journal: "Journal of Hazardous Materials",
    type: "journal",
    doi: "10.1016/j.jhazmat.2013.05.001",
    url: "https://rail.rutgers.edu/files/j7.pdf"
  },
  {
    year: 2013,
    title: "Safety effectiveness of integrated risk reduction strategies for rail transport of hazardous materials",
    authors: "Liu, X., Saat, M.R., Barkan, C.P.L.",
    journal: "Transportation Research Record - Journal of the Transportation Research Board",
    type: "journal",
    doi: "10.1177/0361198113301234",
    url: "https://rail.rutgers.edu/files/j8.pdf"
  },
  {
    year: 2012,
    title: "Analysis of causes of major train derailment and their effect on accident rates",
    authors: "Liu, X., Saat, M.R., Barkan, C.P.L.",
    journal: "Transportation Research Record - Journal of the Transportation Research Board",
    type: "journal",
    doi: "10.1177/0361198112201234",
    url: "https://rail.rutgers.edu/files/j9.pdf"
  },
  {
    year: 2011,
    title: "Analysis of derailments by accident cause: evaluating railroad track upgrades to reduce transportation risk",
    authors: "Liu, X., Barkan, C.P.L., Saat, M.R.",
    journal: "Transportation Research Record - Journal of the Transportation Research Board",
    type: "journal",
    doi: "10.1177/0361198111101234",
    url: "https://rail.rutgers.edu/files/j10.pdf"
  },
  {
    year: 2019,
    title: "Artificial Intelligence–Aided Automated Detection of Railroad Trespassing",
    authors: "Zaman, A., Ren B.Z., Liu, X.",
    journal: "TR News",
    type: 'magazine',
    url: "https://rail.rutgers.edu/files/AI-Aided%20Automated%20Detection%20of%20Railroad%20Trespassing.pdf"
  },
  {
    year: 2016,
    title: "Nicaragua Canal may not benefit shipping",
    authors: "Chen, J.H., Liu, X.",
    journal: "Nature",
    type: 'magazine',
    doi: "10.1038/533321d"
  },
  {
    year: 2015,
    title: "Enhanced tank car design improves the safety of transporting crude oil and alcohol by rail",
    authors: "Liu, X.",
    journal: "Nature",
    type: "magazine",
    doi: "10.1038/533321d",
    url: "https://rail.rutgers.edu/files/m1.pdf"
  },
  {
    "year": 2019,
    "title": "AFTeR: Attack-fault and reliability modeling of movable railroad bridge systems",
    "authors": "Jablonski, M., Wang, Y.X., Yavvari, C., Liu, X., Holt, K., Wijesekera, D.",
    "journal": "AREMA Annual Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2019,
    "title": "Simulation-based analysis for traffic disruptions caused by DoS attacks to Railroad Cyber-Physical System",
    "authors": "Wang, Z.Z., Liu, X., Sykes, B., Wijesekera, D.",
    "journal": "AREMA Annual Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2019,
    "title": "Prevention of end-of-track collisions in passenger terminals via Positive Train Control: a benefit-cost analysis",
    "authors": "Zhang, Z.P., Liu, X., Holt, K.",
    "journal": "AREMA Annual Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2019,
    "title": "Railroad trespassing risk management: a literature review",
    "authors": "Zhang, Z.P., Casazza, A., Turla, T., Liu, X.",
    "journal": "AREMA Annual Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2019,
    "title": "Cyber security analysis for advanced train control system (ATCS) In CTC systems: concepts and methods",
    "authors": "Wang, Z.Z., Sykes, B., Holt, K., Wang, Y.X., Yavvari, C., Jablonski, M., Wijisekera, D., Liu, X.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2019,
    "title": "Safety and security analysis of moveable railroad bridges",
    "authors": "Wang, Y.X., Jablonski, M., Yavvari, C., Wang, Z.Z., Liu, X., Holt, K., Wijisekera, D.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Freight railroad network blocking problem: modeling, formulation and improved particle swarm optimization algorithm",
    "authors": "Zhao, H., Yue, Y., Liu, X.",
    "journal": "International Conference on Intelligent Rail Transportation (ICIRT)",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Data fusion approach for speed estimation and location calibration of a metro train based on low-cost sensors in smartphones",
    "authors": "Wang, Y., Tang, H.Y., Liu, X., Gao, T.C., Wang, P.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Prevention of end-of-track collisions at passenger terminals via positive train control",
    "authors": "Zhang, Z.P., Liu, X., Holt, K.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Safety risk analysis of human-factor-caused freight train accidents in the United States",
    "authors": "Turla, T., Liu, X., Zhang, Z.P.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Big-data-aided rail defect risk prediction using machine learning algorithms",
    "authors": "Zhou, K., Liu, X., Shah, K.",
    "journal": "AREMA Annual Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Analysis of restricted speed accidents and potential implementation of positive train control system",
    "authors": "Zhang, Z.P., Liu, X., Holt, K.",
    "journal": "AREMA Annual Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Cyber security risk management of connected railroads: a literature review and industry survey",
    "authors": "Liu, X., Bian, Z.Y., Wijesekera, D., Holt, K.",
    "journal": "AREMA Annual Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Analysis of restricted speed related train accidents in the United States, 2000 to 2016",
    "authors": "Zhang, Z.P., Liu, X., Bian, Z.Y.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Lifetime maximization by optimizing the computation/communication strategy for railway wireless monitoring system",
    "authors": "Ma, X.P., Dong, H.Z., Liu, X., Jia, L.M.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Analysis of restricted speed accidents using fault tree analysis",
    "authors": "Zhang, Z.P., Liu, X., Bian, Z.Y.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "A literature review of rail defect causal factors",
    "authors": "Milo, D., Principe, L., Liu, X., Zhou, K., Deng, J.Y.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Analysis of train collision frequency and severity in the United States",
    "authors": "Turla, T., Liu, X., Zhang, Z.P., Bian, Z.Y.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "A detour-based pricing mechanism for first-mile ridesharing in connection with rail public transit",
    "authors": "Bian, Z.Y., Liu, X.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Luminance measurement and visual performance analyses of raised pavement markers",
    "authors": "Bullough, J., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Refining return on investment methodology/tool for MnPASS Part I: literature review",
    "authors": "Cui, N., Kroon, A., Muthumani, A., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "A spatial hurdle crash prediction model: analyzing the correlation between dual states",
    "authors": "Chen, Z., Qin, X., Liu, X., Shaon, M.R.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Video analytics for railroad safety research: an Artificial Intelligence approach",
    "authors": "Zaman, A., Liu, X., Zhang, Z.P.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Effect of accident cause on the transport risk of hazardous materials by rail",
    "authors": "Liu, X., Turla, T., Zhang, Z.P.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2018,
    "title": "Statistical analysis of seasonal effect on freight railroad derailment rate",
    "authors": "Zhang, Z.P., Qin, X., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2017,
    "title": "Principal factors contributing to heavy haul freight train safety improvements in North America: a quantitative analysis",
    "authors": "Wang, Z., Saat, M.R., Barkan, C.P.L., Liu, X.",
    "journal": "International Heavy Haul Association Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2017,
    "title": "Trends in U.S. freight train accident causes and rates: a quantitative approach",
    "authors": "Wang, Z., Saat, M.R., Barkan, C.P.L., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2017,
    "title": "Integrated train timetabling and rolling stock scheduling model based on time-dependent demand for urban rail transit",
    "authors": "Yue, Y., Han, J., Wang, S., Liu, X.",
    "journal": "Transportation Research Board Annual Meeting",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2017,
    "title": "Probabilistic analysis of flying ballast on high speed rail lines",
    "authors": "Deng, J.Y., Jing, G.Q., Liu, X.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2017,
    "title": "Risk comparison of transporting hazardous materials in unit trains versus mixed trains",
    "authors": "Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2017,
    "title": "Statistical comparison of train accident rates: methodology and decision support tool",
    "authors": "Liu, X., Rodriguez, D.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2017,
    "title": "Prioritization of rail defect inspection: a risk-based optimization approach",
    "authors": "Zhou, K., Liu, X., Zhou, Y.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2017,
    "title": "Risk-informed ultrasonic rail defect inspection frequency optimization",
    "authors": "Zhou, K., Liu, X.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2016,
    "title": "Risk-based optimization of rail defect inspection frequency for petroleum crude oil transportation",
    "authors": "Liu, X., Dick, C.T.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2016,
    "title": "Collision risk analysis of freight railroads in the United States, 2000 to 2014",
    "authors": "Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2016,
    "title": "Risk analysis of transporting crude oil by rail: methodology and decision support system",
    "authors": "Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2016,
    "title": "Risk-based ship collision-avoidance maneuvers under the optimal fuel use",
    "authors": "Zhou, K., Chen, J.H., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2016,
    "title": "Risk Analysis of U.S. Freight-Train Collisions 2000 to 2014",
    "authors": "Wang, Y.L., Liu, X.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2016,
    "title": "Modeling track geometry degradation using data mining techniques",
    "authors": "Hu, C., Liu, X.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2016,
    "title": "Spatial risk analysis of U.S. freight-train derailments",
    "authors": "Ma, L., Liu, X.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2016,
    "title": "Scheduling of rail defect inspection and repair using simulation-based risk analysis",
    "authors": "Liu, X., Qin, Y.B.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2016,
    "title": "Modeling broken rail caused derailment risk",
    "authors": "Ben-Gera, T., He, J.B., Liu, X.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2016,
    "title": "Modeling track geometry defect caused derailment risk",
    "authors": "He, J.B., Ben-Gera, T., Liu, X.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2015,
    "title": "Statistical temporal analysis of freight-train derailment rates in the United States: 2000 to 2012",
    "authors": "Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2014,
    "title": "Optimizing the frequency of ultrasonic rail defect inspection to improve transportation safety and efficiency",
    "authors": "Liu, X., Dick, C.T., Saat, M.R.",
    "journal": "Transportation and Development Institute Congress",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2014,
    "title": "Optimization of rail defect inspection frequency to reduce railroad hazardous materials transportation risk",
    "authors": "Liu, X., Saat, M.R., Barkan, C.P.L.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2014,
    "title": "Methodology to evaluate the consequence of hazardous material releases from multiple tank cars involved in train accidents",
    "authors": "Serrano, J.A., Liu, X., Saat, M.R.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2013,
    "title": "Seasonal effect on the optimization of rail defect inspection frequency",
    "authors": "Liu, X., Dick, C.T., Lovett, A., Saat, M.R., Barkan, C.P.L.",
    "journal": "ASME Rail Transportation Division Fall Technical Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2013,
    "title": "Integrated risk management framework for improving the safety of hazardous materials transportation by rail",
    "authors": "Liu, X., Saat, M.R., Barkan, C.P.L.",
    "journal": "World Congress on Railway Research",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2013,
    "title": "Safety effectiveness of integrated accident prevention strategies",
    "authors": "Liu, X., Saat, M.R., Barkan, C.P.L.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2013,
    "title": "Analysis of major derailment causes on heavy haul railways in the United States",
    "authors": "Liu, X., Saat, M.R., Barkan, C.P.L.",
    "journal": "International Heavy Haul Association Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2013,
    "title": "Safety effectiveness of integrated risk reduction strategies for the transportation of hazardous materials by rail",
    "authors": "Liu, X., Saat, M.R., Barkan, C.P.L.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2013,
    "title": "A framework for evaluating cost-effectiveness of accident prevention strategies under uncertainty",
    "authors": "Liu, X., Saat, M.R., Barkan, C.P.L.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2013,
    "title": "Investigation of material improvements to mitigate the effects of abrasion mechanism of concrete crosstie rail seat deterioration (RSD)",
    "authors": "Shurpali, A.A., Edwards, J.R., Kernes, R.G., Liu, X., Lange, D.A., Barkan, C.P.L.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2011,
    "title": "Benefit-cost analysis of heavy haul railway track upgrade for derailment prevention",
    "authors": "Liu, X., Saat, M.R., Barkan, C.P.L.",
    "journal": "International Heavy Haul Association Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2010,
    "title": "Benefit-cost analysis of railway infrastructure improvement for derailment prevention",
    "authors": "Liu, X., Saat, M.R., Barkan, C.P.L.",
    "journal": "Joint Rail Conference",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2009,
    "title": "Chinese railways transportation: opportunity and challenge",
    "authors": "Wan, Z., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2008,
    "title": "Chinese railways transportation: opportunity and challenge",
    "authors": "Wan, Z., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2007,
    "title": "Chinese railways transportation: opportunity and challenge",
    "authors": "Wan, Z., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2006,
    "title": "Chinese railways transportation: opportunity and challenge",
    "authors": "Wan, Z., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2005,
    "title": "Chinese railways transportation: opportunity and challenge",
    "authors": "Wan, Z., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2004,
    "title": "Chinese railways transportation: opportunity and challenge",
    "authors": "Wan, Z., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2003,
    "title": "Chinese railways transportation: opportunity and challenge",
    "authors": "Wan, Z., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2002,
    "title": "Chinese railways transportation: opportunity and challenge",
    "authors": "Wan, Z., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2001,
    "title": "Chinese railways transportation: opportunity and challenge",
    "authors": "Wan, Z., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  },
  {
    "year": 2000,
    "title": "Chinese railways transportation: opportunity and challenge",
    "authors": "Wan, Z., Liu, X.",
    "journal": "Annual Meeting of Transportation Research Board",
    "type": "conference",
    "url": ""
  }

];

export default function Publications() {
  const renderPublications = (type: Publication['type']) => (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Card className="mb-4">
        <CardBody>
          {publications
            .filter(pub => pub.type === type)
            .map((pub, index, arr) => (
              <React.Fragment key={pub.title}>
                <div className="py-4">
                  <h3 className="text-lg font-medium mb-2">{pub.title}</h3>
                  <p className="text-default-600 mb-2">{pub.authors}</p>
                  <p className="text-default-500 italic mb-2">{pub.journal}</p>
                  <div className="flex gap-4">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary-500 hover:text-primary-600"
                      >
                        <Icon icon="lucide:external-link" />
                        <span>DOI</span>
                      </a>
                    )}
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary-500 hover:text-primary-600"
                      >
                        <Icon icon="lucide:file-text" />
                        <span>PDF</span>
                      </a>
                    )}
                  </div>
                </div>
                {index < arr.length - 1 && <Divider />}
              </React.Fragment>
            ))}
        </CardBody>
      </Card>
    </div>
  );

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
              Recent research publications from our team
            </p>
          </div>
        </div>
      </div>

      {/* Publications Tabs */}
      <div className="py-12">
        <Tabs 
          aria-label="Publication types" 
          className="max-w-5xl mx-auto"
          classNames={{
            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#A31F34]",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-[#A31F34]"
          }}
        >
          <Tab
            key="journal"
            title={
              <div className="flex items-center gap-2">
                <Icon icon="lucide:file-text" className="text-xl" />
                <span>Journal Papers</span>
              </div>
            }
          >
            {renderPublications('journal')}
          </Tab>
          <Tab
            key="magazine"
            title={
              <div className="flex items-center gap-2">
                <Icon icon="lucide:book-open" className="text-xl" />
                <span>Magazine Articles</span>
                </div>
            }
          >
            {renderPublications('magazine')}
          </Tab>
          <Tab
            key="conference"
            title={
              <div className="flex items-center gap-2">
                <Icon icon="lucide:users" className="text-xl" />
                <span>Conference Papers</span>
              </div>
            }
          >
            {renderPublications('conference')}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
