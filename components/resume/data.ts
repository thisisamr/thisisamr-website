const tech_lead_product_consultant = {
  title: 'Tech Lead/Product Consultant',
  Employer: 'Edge-pro for information systems',
  period: '2022-2023',
  tasks: [
    'Leading development teams, providing solutions, code reviews and offshore coordination as well as architecting solutions to use the latest technologies and best practices.',
    'Design and implementation of rest services in node and dontnet core, migrating front-end legacy javascript code and enhancing developer experience.',
    'Design and implemntation of application specific Apis in graphql, enhancing fontend experience and performance by minimizing rest api calls through grapgQL custom wrappers',
    'Design and develop token based authentication microservices.',
    'Developed a home-grown 🪴 Graphql based database syncronization app using Apollo server , Prisma and NextJS.',
    'Carry out unit and integration tests in node and dotnet core.',
    'Interviewing and hiring junior developers',
  ],
}

const tech_lead = {
  title: 'Tech Lead',
  Employer: 'Ministry Of Planning',
  period: '2020-2021',
  tasks: [
    'Leading the development teams for the national spatial data infrastucture project.',
    'Provide public integration webservices to third parties with complete swagger documentation and mock services for testing',
    'Implementing realtime databases with Graphql subscribtions for specific client neeeds.',
    'Design and implementation of web mapping applications using Hexagon Geospatial technologies, handling and optimizing the visualization of large geospatial datasets using webservices and custom tile servers as well as integerating with geoprocessing servers through rest endpoints (geoserver /Luciad Fusion/Map server)',
  ],
}

const training_manager = {
  title: 'Training & Customer support manager',
  Employer: 'Edge-pro for information systems (Hexagon Geospatial Partner, Egypt)',
  period: '2019-2020',
  tasks: [
    'Responsible for the developer training programs,responsible for carrying out online and on primise training and workshops for various company clients , trouble shooting deployment issues and system integeration problems',
  ],
}

const assistant_lecturer = {
  title: 'Assistant Lecturer',
  Employer: 'Obour Higher Institutes For Engineering and Technology.',
  period: '2017-2019',
  tasks: [
    'Class tutorials in:Transportation Modelling, Taffic theory,Computer Simulation, c++, Plane and Topographic surveying, Geodecy, Airport and Highway design . Tasks also included Labs in Autodesk CIVIL-3d ,Bently Microstation,Terra Solid and PTV Vissim.',
  ],
}

const Transportation_engineer = {
  title: 'Transpaortation Engineer',
  Employer: 'Ministry of Transport',
  period: '2013-2016',
  tasks: [
    'Microsimulation modelling and scenario testing of alternative intersection treatments to mitigate Congestion',
    'Develop regression based models to predict speed and LOS',
    'Implementing pavement management system through the analysis of 3d point cloud drone and mobile mapping data',
  ],
}

const Technical_support_Engineer = {
  title: 'Technical Support Engineer',
  Employer: 'Ericsson for Telecomunication',
  period: '2012-2013',
  tasks: [
    'Automated 3D structural analysis and modelling of steel communication towers using c++, building a structural analysis reporting system and an inventory system using mysql and Java.',
  ],
}
const Highway_Consultant_Engineer = {
  title: 'Highway Consultant Engineer',
  Employer: 'Centre Of Research and Engineering Consultancy,Fayoum University.',
  period: '2011-2012',
  tasks: [
    'Construction supervision , quantity survey, labratory supervision , quality control and land surveying.',
  ],
}

export const experience = {
  tech_lead_product_consultant,
  tech_lead,
  training_manager,
  assistant_lecturer,
  Transportation_engineer,
  Technical_support_Engineer,
  Highway_Consultant_Engineer,
}

export interface Job {
  title: string
  Employer: string
  period: string
  tasks: string[]
}
