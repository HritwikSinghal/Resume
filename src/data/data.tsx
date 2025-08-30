import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Hritwik's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Hritwik.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Bangalore based <strong className="text-stone-100">Site Reliability Engineer</strong>, with{' '}
        <strong className="text-stone-100">3+ years</strong> of experience building & maintaining resilient, scalable
        infrastructure in production environments.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me working on{' '}
        <strong className="text-stone-100">TerraNixLab (my Homelab)</strong>, playing{' '}
        <strong className="text-stone-100">Badminton</strong>, <strong className="text-stone-100">Stargazing</strong>,
        or <strong className="text-stone-100">Solo traveling</strong> to different corners of India.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">So who am i really?</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am someone who likes to <strong className="text-stone-100">code</strong>, be it for my career or for solutions
        to problems that i create! (why spend 6 minutes doing something by hand when you can spend 6 hours to automate
        it xD). But seriously, this habit made me significantly better engineer over the past years.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Couldn't find program to upgrade my song library? Just code it.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Couldn't find program to download new songs? (i like to own my content) Just code it.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Too lazy to walk 10 steps to turn lights/fan on? Control it via Raspberry pi + Relay and code its Frontend.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Frustrated about all the privacy invading crap in OEM android? Just build you own fork of Android and tinker
        with it. (Yep, i use forked AOSP to build my own rom and daily drive it. No more OEM BS) These are just some of
        the instances through which i learned coding.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Don't believe me? Just take a look at my github profile. I am a huge free software and OSS supporter so all my
        work is open source. (it ain't much but it's honest work)
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        You can always have a chat with me on Linux, Competitive coding and how computer systems work.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I have also began self-hosting recently to get one more step ahead a privacy focused life and have been hosting
        many services on my homelab which are direct replacements for many big-tech products.{' '}
        <strong className="text-stone-100">(TerraNixLab)</strong>
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Apart from that, i love playing <strong className="text-stone-100">badminton</strong>, reading{' '}
        <strong className="text-stone-100">psychology</strong> books ,{' '}
        <strong className="text-stone-100">trekking</strong> and a little bit of{' '}
        <strong className="text-stone-100">gaming</strong>. I have also been{' '}
        <strong className="text-stone-100">traveling</strong> solo for the past year and been loving it so far. Movies,
        Web-series aren't my cup of tea. (well expect for LOTR and selected movies in mystery/thriller genre).
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Oh, I am also an <strong className="text-stone-100">Astronomy</strong> lover so if you know your stars, you can
        always ping me.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">And... that's all folks!</p>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Bengaluru, IN', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Astronomy, Homelab, Travelling', Icon: SparklesIcon},
    {label: 'Study', text: 'LNM Institute of Information Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'On a Health break', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
    ],
  },
  {
    name: 'Infrastructure',
    skills: [
      {
        name: 'Nix',
        level: 8,
      },
      {
        name: 'Terraform',
        level: 5,
      },
      {
        name: 'Python',
        level: 4,
      },
    ],
  },
  {
    name: 'Platforms',
    skills: [
      {
        name: 'Proxmox (on-prem)',
        level: 9,
      },
      {
        name: 'AWS',
        level: 5,
      },
      {
        name: 'GCP',
        level: 4,
      },
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'GitOps, Optimizations, Microservices',
        level: 8,
      },
      {
        name: 'Monitoring, Logging, Alerting',
        level: 7,
      },
      {
        name: 'GitOps, Networking, Automation',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
