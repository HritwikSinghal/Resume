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
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import projectImage1 from '../images/projects/portfolio-1.jpg';
import projectImage2 from '../images/projects/portfolio-2.jpg';
import projectImage3 from '../images/projects/portfolio-3.jpg';
import projectImage4 from '../images/projects/portfolio-4.jpg';
import projectImage5 from '../images/projects/portfolio-5.jpg';
import projectImage6 from '../images/projects/portfolio-6.jpg';
import projectImage7 from '../images/projects/portfolio-7.jpg';
import projectImage8 from '../images/projects/portfolio-8.jpg';
import projectImage9 from '../images/projects/portfolio-9.jpg';
import projectImage10 from '../images/projects/portfolio-10.jpg';
import projectImage11 from '../images/projects/portfolio-11.jpg';
import profilepic from '../images/profilepic.webp';
import blogImage from '../images/blog.webp';
import {
  About,
  BlogSection,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  ProjectItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hritwik Singhal',
  description: "Hritwik's portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Project: 'projects',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Blogs: 'blog',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Hritwik`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Bangalore based <strong className="text-stone-100">Site Reliability Engineer</strong>, with{' '}
        <strong className="text-stone-100">3+ years</strong> of experience building & maintaining resilient, scalable
        infrastructure in production environments. I am a dedicated and self-driven geek with a passion for Python,
        Linux and self-hosting and a strong zeal for open-source development.
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
        with it. (Yep, i use forked AOSP to build my own rom and daily drive it, no more OEM BS).
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        These are just some of the instances through which i learned coding. Don't believe me? Just take a look at my
        github profile. I am a huge free software and OSS supporter so all my work is open source. (it ain't much but
        it's honest work)
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        You can always have a chat with me on Linux, Competitive coding and how computer systems work.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I have also began <strong className="text-stone-100">self-hosting</strong> recently to get one more step ahead a
        privacy focused life and have been hosting many services on my homelab which are direct replacements for many
        big-tech products. <strong className="text-stone-100">(TerraNixLab)</strong>
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
    {label: 'Employment', text: 'On a Career break', Icon: BuildingOffice2Icon},
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
        level: 8,
      },
    ],
  },
  {
    name: 'Infrastructure',
    skills: [
      {
        name: 'Nix',
        level: 7,
      },
      {
        name: 'Terraform',
        level: 6,
      },
      {
        name: 'Python',
        level: 9,
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
        level: 6,
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
 * Projects section
 */
export const projectItems: ProjectItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: projectImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: projectImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: projectImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: projectImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: projectImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: projectImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: projectImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: projectImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: projectImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: projectImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: projectImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2018 - May 2022',
    location: 'The LNM Institute of Information Technology',
    title: 'Bachelors in Computer Science',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Mar 2025 - Present',
    location: 'Somewhere...',
    title: 'Career Break',
    content: (
      <p>
        Welp! emergencies don't knock on your door; they apparently throw the door off its hinges, barge in and
        announce, ‘Time for a reset!’ So, I've been rediscovering all the things I forgot I loved – like finally
        tackling that coding project I'd been putting off, leveling up in my favorite game, and tinkering with my
        homelab without feeling guilty about neglecting work. Consider it an unexpected system reboot for my well-being.
        Don't worry, I'll be back to debugging the real world soon!
      </p>
    ),
  },
  {
    date: 'Sept 2024 - Feb 2025',
    location: 'Tessell',
    title: 'Platform Engineer',
    content: (
      <p>
        Conducted in-depth analysis of Java garbage collection times by scrutinizing server GC logs from a Hadoop
        cluster executing MapReduce applications. Utilized findings to fine-tune GC parameters, optimize heap size,
        resulting in a 10% improvement in application performance and reduced memory consumption.
      </p>
    ),
  },
  {
    date: 'July 2022 to July 2024',
    location: 'Media.net',
    title: 'Site Reliability Engineer',
    content: (
      <>
        <p style={{marginBottom: '10px'}}>
          Leveraged <strong className="text-stone-100">Nix</strong> and{' '}
          <strong className="text-stone-100">Terraform</strong> to efficiently scale an existing Hadoop cluster on GCP
          and On-prem datacenters. Increased node count from <strong className="text-stone-100">20 to 70</strong> by
          revamping monolithic IaC codebase to enhance
          <strong className="text-stone-100"> modularity, inheritance structure, and scalability</strong> of individual
          components, which enabled said scaling with minimal code changes, reducing deployment time by{' '}
          <strong className="text-stone-100">50%</strong> and improved deployment frequency.
        </p>
        <p style={{marginBottom: '10px'}}>
          <strong className="text-stone-100">Optimized</strong> disk read and write latencies from{' '}
          <strong className="text-stone-100">20ms to under 1ms</strong> for HDFS and YARN applications by tuning
          operational ZFS parameters, thus mitigating more than <strong className="text-stone-100">80%</strong> frequent
          latency spikes during operational load.
        </p>
        <p style={{marginBottom: '10px'}}>
          Implemented CI/CD pipelines on self-managed Jenkins slaves.{' '}
          <strong className="text-stone-100">Automated</strong> deployment processes of Conda virtual environments from
          custom configuration files within the Hadoop cluster, resulting in a{' '}
          <strong className="text-stone-100">30%</strong> reduction in deployment time through standardized environment
          setup.
        </p>
        <p style={{marginBottom: '10px'}}>
          Led the company-wide deployment of Zeppelin and Hue for <strong className="text-stone-100">300</strong>{' '}
          developers. Optimized deployment speed, reliability and secret management using{' '}
          <strong className="text-stone-100">Nix and SOPS</strong> through Infrastructure as Code{' '}
          <strong className="text-stone-100">(IaC)</strong> methodologies, reducing deployment time by{' '}
          <strong className="text-stone-100">50%</strong>. Implemented NGINX optimizations, resulting in a reduction of
          application load times from <strong className="text-stone-100">~3s to ~500ms</strong>.
        </p>
        <p style={{marginBottom: '10px'}}>
          Implemented a streamlined resource pipeline for Hadoop teams, enhancing capacity planning through dynamic data
          analysis. Optimized cluster settings based on team-specific path size limits, generating granular data for
          reporting and aggregation, thus scaling the cluster by more than{' '}
          <strong className="text-stone-100">30%</strong> in capacity.
        </p>
        <p style={{marginBottom: '10px'}}>
          Proven on call proficiency in debugging live production issues during 24x7 on-call rotations. Ensured rapid
          resolution, minimizing downtimes and enhancing system resilience. Proficiently conducted and authored detailed
          RCA reports.
        </p>
      </>
    ),
  },
  {
    date: 'January 2022 - July 2022',
    location: 'Media.net',
    title: 'Site Reliability Engineer Intern',
    content: (
      <p>
        Conducted in-depth analysis of Java garbage collection times by scrutinizing server GC logs from a Hadoop
        cluster executing MapReduce applications. Utilized findings to fine-tune GC parameters, optimize heap size,
        resulting in a <strong className="text-stone-100">10%</strong> improvement in application performance and
        reduced memory consumption.
      </p>
    ),
  },
];

/**
 * Blog section
 */
export const blog: BlogSection = {
  imageSrc: blogImage,
  blogs: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value blogs include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality blogs with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Wanna reach out to me for a chat? Look nowhere else!',
  items: [
    {
      type: ContactType.Email,
      text: 'portfolio@thorin.theoakenshield.com',
      href: 'mailto:portfolio@thorin.theoakenshield.com',
    },
    {
      type: ContactType.Location,
      text: 'Bengaluru, India',
      href: 'https://maps.app.goo.gl/L6uP2haWq98ydbM1A',
    },
    {
      type: ContactType.LinkedIn,
      text: 'hritwiksinghal',
      href: 'https://www.linkedin.com/in/hritwiksinghal/',
    },
    {
      type: ContactType.Github,
      text: 'HritwikSinghal',
      href: 'https://github.com/HritwikSinghal',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/HritwikSinghal'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hritwiksinghal//'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
