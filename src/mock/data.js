import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jamie Egan | Web Developer',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jamie Egan',
  subtitle: "I'm a web developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'I have over 10 years experience in various different e-commerce businesses in the UK, Canada & Germany.',
  paragraphTwo: 'I build fast, minimal websites using Javascript, React & Gatsby.',
  paragraphThree: 'I can deliver cost effective technology solutions to improve your business.',
  resume: 'resume.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sheddensmews.png',
    title: 'Sheddens Mews',
    info:
      'A marketing website for a local property business. Built using React/Gatsby and powered by Netlify.',
    info2: '',
    url: 'https://www.sheddensmews.co.uk',
    repo: 'https://github.com/jeeegan/sheddens-mews',
  },
  {
    id: nanoid(),
    img: 'shapewars.png',
    title: 'Shape Wars',
    info: 'A Javascript/Canvas retro 80s browser game set in a retro-futuristic Berlin.',
    info2: '',
    url: 'http://shapewars.surge.sh/',
    repo: 'https://github.com/jeeegan/shape-wars', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Please get in touch if you would like to work with me',
  btn: 'Contact Me',
  email: 'jamie.p.egan@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jamie-egan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jeeegan',
    },
  ],
};
