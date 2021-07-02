import { nanoid } from 'nanoid';

import vinLogo from '../images/vinbigdata.jpeg';
import appotaLogo from '../images/appota.png';
import savvyLogo from '../images/savvycom.jpeg';

// HEAD DATA
export const headData = {
  title: 'Trung Duc Nguyen | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My porfolio website', // e.g: Welcome to my website
};

// SKILLS DATA
export const languageData = [
  { id: nanoid(), name: 'HTML5', icon: 'vscode-icons:file-type-html' },
  { id: nanoid(), name: 'CSS3', icon: 'vscode-icons:file-type-css' },
  { id: nanoid(), name: 'JavaScript', icon: 'logos:javascript' },
  { id: nanoid(), name: 'TypeScript', icon: 'logos:typescript-icon' },
  { id: nanoid(), name: 'Python', icon: 'logos:python' },
  { id: nanoid(), name: 'Golang', icon: 'grommet-icons:golang' },
  { id: nanoid(), name: 'Swift', icon: 'vscode-icons:file-type-swift' },
];

export const databaseData = [
  { id: nanoid(), name: 'MySQL', icon: 'logos:mysql' },
  { id: nanoid(), name: 'PostgreSQL', icon: 'logos:postgresql' },
  { id: nanoid(), name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
  { id: nanoid(), name: 'Elasticsearch', icon: 'logos:elasticsearch' },
  { id: nanoid(), name: 'Firebase', icon: 'logos:firebase' },
  { id: nanoid(), name: 'Redis', icon: 'logos:redis' },
];

export const frameworkData = [
  { id: nanoid(), name: 'NodeJS', icon: 'logos:nodejs' },
  { id: nanoid(), name: 'ReactJS', icon: 'logos:react' },
  { id: nanoid(), name: 'Express', icon: 'logos:express' },
  { id: nanoid(), name: 'GatsbyJS', icon: 'logos:gatsby' },
  { id: nanoid(), name: 'Scikit-learn', icon: 'simple-icons:scikitlearn' },
  { id: nanoid(), name: 'Tensorflow', icon: 'logos:tensorflow' },
  { id: nanoid(), name: 'Keras', icon: 'simple-icons:keras' },
];

export const toolData = [
  { id: nanoid(), name: 'Linux', icon: 'flat-color-icons:linux' },
  { id: nanoid(), name: 'Git', icon: 'logos:git' },
  { id: nanoid(), name: 'AWS', icon: 'logos:aws' },
  { id: nanoid(), name: 'Docker', icon: 'logos:docker-icon' },
  { id: nanoid(), name: 'npm', icon: 'vscode-icons:file-type-npm' },
  { id: nanoid(), name: 'GraphQL', icon: 'logos:graphql' },
  { id: nanoid(), name: 'Apollo', icon: 'logos:apollostack' },
  { id: nanoid(), name: 'Webpack', icon: 'logos:webpack' },
  { id: nanoid(), name: 'Salesforce', icon: 'logos:salesforce' },
  { id: nanoid(), name: 'Streamlit', icon: 'simple-icons:streamlit' },
  { id: nanoid(), name: 'Trello', icon: 'logos:trello' },
  { id: nanoid(), name: 'Jira', icon: 'logos:jira' },
];

// EDUCATION DATA:

export const educationsData = [
  {
    id: nanoid(),
    university: 'University of Technology, Sydney',
    title: 'Master of Information Technology (Extension)',
    gpa: '6.75/7',
    from: 'March 2020',
    to: '',
  },
  {
    id: nanoid(),
    university: 'University of Engineering and Technology, VNU',
    title: 'Bachelor of Information Technology (Honours)',
    gpa: '3.3/4',
    from: 'September 2015',
    to: 'July 2019',
  },
];

// WORK DATA
export const experienceData = [
  {
    id: nanoid(),
    company: 'VinBigData',
    title: 'Machine Learning Engineer',
    description: 'Candidate of AI Engineer training program batch 1.',
    technologies: ['Python', 'Scikit-learn', 'Tensorflow', 'OpenCV', 'Streamlit'],
    from: 'October 2020',
    to: 'March 2021',
    logo: vinLogo,
  },
  {
    id: nanoid(),
    company: 'Appota',
    title: 'Software Engineer Intern',
    description:
      'Participating develop an internal product about checkin. <a href="https://acheckin.vn">View more</a>',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React Native', 'Redux', 'npm'],
    from: 'July 2018',
    to: 'October 2018',
    logo: appotaLogo,
  },
  {
    id: nanoid(),
    company: 'Savvycom',
    title: 'Software Engineer Intern',
    description:
      'Outsourcing project. Participating develop <a href="https://apps.apple.com/vn/app/jupviec-vn-giúp-việc-theo-giờ/id971949581?l=vi">JupViec</a> mobile application.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React Native', 'Redux', 'npm', 'Jira'],
    from: 'March 2018',
    to: 'June 2018',
    logo: savvyLogo,
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: ['dl_1.png', 'dl_2.png', 'dl_3.png', 'dl_4.png'],
    title: 'Driver Moniter App (Deep Learning and CNN - AU2021)',
    info: 'This is the final assignment in Deep Learning subject from UTS. It was a computer vision based application used <strong>deep learning</strong> and <strong>convolution neural network</strong> to detect sleepiness and distracted actions from a driver in a car. The GUI built by using <strong>Streamlit</strong> library could run the model on image, video and live webcam.',
    technologies: ['Python', 'Tensorflow', 'GoogleColab', 'Streamlit'],
    url: '',
    repo: 'https://github.com/trungducng0410/Assignement3-DL', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: ['iou_1.png'],
    title: 'I Own U (Advanced Internet Programming - SP2020)',
    info: 'IOU application allows users to log in, record and resolve debts, favors, and public requests. An “IOU” is an abbreviation of "I owe you", and it is an informal acknowledgement of a debt or favor owed. This application was built with <strong>MERN stack</strong> as the final assignment in Advanced Internet Programming subject at UTS.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
    url: '',
    repo: 'https://github.com/trungducng0410/aip2020-a2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: ['expresso_1.png', 'expresso_2.png', 'expresso_3.png', 'expresso_4.png'],
    title: 'Brand measurement system (Bachelor thesis)',
    info: 'Building a bigdata analysis platform about female fashion running on web environment with <strong>75k</strong> online stores, <strong>1.2m</strong> products and <strong>5m</strong> comments crawled from <strong>3</strong> biggest e-commerce websites (<strong>Tiki</strong>, <strong>Lazada</strong>, <strong>Shopee</strong>). Using techniques in natural language processing in <strong>sentinment analysis</strong> and <strong>contextual searching</strong> and lastest tools to build <strong>high performance</strong> and <strong>scalable</strong> web application.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'MongoDB',
      'ExpressJS',
      'ReactJS',
      'NodeJS',
      'GraphQL',
      'Elasticsearch',
      'Kibana',
    ],
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = [
  {
    id: nanoid(),
    name: 'envelope',
    url: 'mailto:ngtrungducyb@gmail.com',
  },
  {
    id: nanoid(),
    name: 'facebook',
    url: 'https://www.facebook.com/trungducng/',
  },
  {
    id: nanoid(),
    name: 'instagram',
    url: 'https://www.instagram.com/dducws',
  },
  {
    id: nanoid(),
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/trungducng',
  },
  {
    id: nanoid(),
    name: 'github',
    url: 'https://github.com/trungducng0410',
  },
];
