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
import blogImage from '../images/blog.webp';
import heroImage from '../images/header-background.webp';
import profilePic from '../images/profilepic.webp';
import projectImage1 from '../images/projects/portfolio-1.webp';
import projectImage2 from '../images/projects/portfolio-2.webp';
import projectImage3 from '../images/projects/portfolio-3.webp';
import projectImage4 from '../images/projects/portfolio-4.webp';
import projectImage5 from '../images/projects/portfolio-5.webp';
import projectImage6 from '../images/projects/portfolio-6.webp';
import projectImage7 from '../images/projects/portfolio-7.webp';
// import projectImage8 from '../images/projects/portfolio-8.jpg';
// import projectImage9 from '../images/projects/portfolio-9.jpg';
// import projectImage10 from '../images/projects/portfolio-10.jpg';
// import projectImage11 from '../images/projects/portfolio-11.jpg';

import pauseImage from '../images/pause.webp';
import gremlinImage from '../images/gremlin.webp';
import duckImage from '../images/duck.webp';

import {
  About,
  BlogSection,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  ProjectItem,
  PursuitItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hritwik Singhal',
  description: 'This is me, in progress.',
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
        <strong className="text-stone-100">3+ years</strong> of experience in building & maintaining resilient, scalable
        infrastructure in production environments. I am a dedicated, self-driven geek with a passion for Python, Linux &
        self-hosting and a strong zeal for open-source development.
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
  profileImageSrc: profilePic,
  description: (
    <>
      <p className="italic">
        <span className="font-extrabold">I'm Batman</span> &nbsp;
        <span className="text-xs">( jk )</span>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">So who am i really?</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am someone who likes to <strong className="text-stone-100">code</strong>, be it for my career or for solutions
        to problems that i create! (why spend 6 minutes doing something by hand when you can spend 6 hours to automate
        it xD). But seriously, this habit made me significantly better engineer over the past years.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Couldn't find a program to download songs or upgrade the ones in my library? Just code it. (i like to own my
        content)
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Too lazy to walk 10 steps to turn lights/fan on? Control it via Raspberry pi + Relay.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Frustrated about all the privacy invading crap in OEM android? Just build your own fork of Android and tinker
        with it. (Yep, i use forked AOSP to build my own rom and daily drive it, no more OEM BS).
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        These are just a handful of instances through which I learned coding. Don't believe me? Just have a look at my
        GitHub profile. I am a huge free software and OSS supporter, so all my work is open source. (it ain't much, but
        it's honest work)
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        You can always have a chat with me on Linux, Competitive coding and how computer systems work.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I have also began <strong className="text-stone-100">self-hosting</strong> recently to get into a
        privacy-focused life and have been hosting many services on my homelab{' '}
        <strong className="text-stone-100"> (TerraNixLab)</strong> which are direct replacements for many big-tech
        products.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Some of them include <strong className="text-stone-100">llama.cpp</strong> (local LLM's),{' '}
        <strong className="text-stone-100"> Nextcloud</strong> (Google/Microsoft workspace alt and CalDav/contacts
        server), <strong className="text-stone-100">Immich</strong> (Google photos alt),{' '}
        <strong className="text-stone-100">Forgejo</strong> (Github/Gitlab alt),{' '}
        <strong className="text-stone-100">SearX</strong> (search),{' '}
        <strong className="text-stone-100"> Bookstack</strong> (for documentation of my TerraNixLab & Life). And the
        list is ever growing!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Sunshine + Moonlight</strong> are my connection to video game world (and a
        2000km journey between me and my Gaming Rig!). My achievements are often short-lived, however, as I'm a
        connoisseur of the 'You Died' experience.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Apart from that, i love playing <strong className="text-stone-100">badminton</strong>, reading{' '}
        <strong className="text-stone-100">psychology</strong> books,{' '}
        <strong className="text-stone-100">trekking</strong> and a little bit of{' '}
        <strong className="text-stone-100">gaming</strong>. I have also been{' '}
        <strong className="text-stone-100">traveling</strong> solo for the past year and been loving it so far. Movies,
        Web-series aren't my cup of tea. (well expect for LOTR and mystery/thriller genre).
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Oh, I am also an <strong className="text-stone-100">Astronomy</strong> nerd. If you can tell me what a nebula is
        without Googling, you're instantly my new best friend!
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
        name: 'Terraform, Kubernetes',
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
    title: 'NixOS cloudImage',
    description: 'A barebones NixOS cloudImage for proxmox for use in terraform providers',
    url: 'https://github.com/HritwikSinghal/Nixos-cloudImage',
    image: projectImage1,
  },
  {
    title: 'Saavn song downloader',
    description: ' Download songs from Jiosaavn by just copying song, album, playlist link to clipboard.',
    url: 'https://github.com/HritwikSinghal/Clipboard-saavn-song-downloader',
    image: projectImage2,
  },
  {
    title: 'Room Control Server',
    description:
      " A simple FLASK WebServer to control things in your home using Raspberry Pi's GPIOs programmed as outputs (acting as actuators). ",
    url: 'https://github.com/HritwikSinghal/room_control_server',
    image: projectImage3,
  },
  {
    title: 'Filebrowser NixPkgs Maintainer',
    description: 'Official maintainer of filebrowser package in Nixpkgs',
    url: 'https://github.com/NixOS/nixpkgs/blob/master/pkgs/by-name/fi/filebrowser/package.nix',
    image: projectImage4,
  },
  {
    title: 'This Resume Website',
    description:
      'Props to Tim Baker for the original framework — but I rolled up my sleeves, built a few new components, customized it to fit my vision, and leveled up my React and web dev game in the process.',
    url: 'https://github.com/HritwikSinghal/Resume',
    image: projectImage5,
  },
  {
    title: 'Oakenshields Liar',
    description:
      '\n' +
      'TerraNixLab IaC Repo. Stateless, Immutable, Declarative Deployment of CT/VMs on Proxmox using Terraform and Nix. (This repo is private for the time being)',
    url: 'https://github.com/HritwikSinghal/oakenshields-liar',
    image: projectImage6,
  },

  {
    title: 'Music-library-upgrader',
    description: 'Upgrade songs in your folder seamlessly ',
    url: 'https://github.com/HritwikSinghal/Music-library-upgrader',
    image: projectImage7,
  },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: projectImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: projectImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: projectImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: projectImage11,
  // },
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
        Well, emergencies don't knock on your door; they just barge in and announce, ‘Time for a reset!’ So, I've been
        rediscovering all the things I forgot I loved – like finally tackling that coding project I'd been putting off,
        leveling up in my favorite game, and tinkering with my homelab without feeling guilty about neglecting work.
        Consider it an unexpected system reboot for my well-being.
      </p>
    ),
  },
  {
    date: 'Sept 2024 - Feb 2025',
    location: 'Tessell',
    title: 'Platform Engineer',
    content: (
      <>
        <p style={{marginBottom: '10px'}}>
          Led the architectural revamp of a monolithic <strong className="text-stone-100">Python</strong> backend
          codebase to a modular design, enhancing{' '}
          <strong className="text-stone-100">scalability, maintainability, and platform flexibility</strong>; enabling
          faster feature releases and quicker response to market demands. This included:
        </p>

        <p style={{marginBottom: '10px'}}>
          Refactoring the monolithic codebase to modular architecture, reducing code complexity by{' '}
          <strong className="text-stone-100">20%</strong>.
        </p>

        <p style={{marginBottom: '10px'}}>
          Designing and implementing a fully automated deployment pipeline for new database VMs across AWS & Azure using
          Argo Workflows and custom backend, reducing VM deployment time by{' '}
          <strong className="text-stone-100">~80%</strong> from{' '}
          <strong className="text-stone-100">2 days to 4 hours</strong>.
        </p>

        <p style={{marginBottom: '10px'}}>
          <strong className="text-stone-100">Eliminating</strong> developer dependency on our team for Database testing,
          fostering a self-service model and freeing up our team's capacity.
        </p>

        <p style={{marginBottom: '10px'}}>
          Adding seamless support for new cloud platforms, including successful deployments to Oracle Cloud
          Infrastructure (OCI), reducing onboarding time by <strong className="text-stone-100">25%</strong>.
        </p>

        <p style={{marginBottom: '10px'}}>
          Improving support for integration of new DB's, implemented checksum validation for data integrity, improving
          data accuracy and reducing error rates by <strong className="text-stone-100">10%</strong>.
        </p>

        <p style={{marginBottom: '10px'}}>
          Automated cleanup of AWS/Azure zombie resources, saving <strong className="text-stone-100">~5%</strong> infra
          costs.
        </p>
      </>
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
          <strong className="text-stone-100">Terraform</strong> to scale existing Hadoop cluster, on GCP and On-prem
          datacenters, from <strong className="text-stone-100">20 to 70</strong> nodes; thus reducing deployment time by{' '}
          <strong className="text-stone-100">80%</strong>.
        </p>
        <p style={{marginBottom: '10px'}}>
          Optimized disk read/write latencies from <strong className="text-stone-100">20ms</strong> to{' '}
          <strong className="text-stone-100">under 1ms</strong> for <strong className="text-stone-100">HDFS</strong> by
          fine-tuning various <strong className="text-stone-100">ZFS</strong> parameters; thus mitigating frequent
          latency spikes by <strong className="text-stone-100">80%</strong>.
        </p>
        <p style={{marginBottom: '10px'}}>
          Led company-wide deployment of Zeppelin & Hue for <strong className="text-stone-100">300</strong> devs using{' '}
          <strong className="text-stone-100">Nix</strong>, <strong className="text-stone-100">TF</strong> &{' '}
          <strong className="text-stone-100">SOPS</strong>. Used Infrastructure as Code (IaC) methodologies for
          optimized deployment speed, reliability and secret management.
        </p>
        <p style={{marginBottom: '10px'}}>
          Scaled Hadoop cluster by <strong className="text-stone-100">30%</strong> in capacity. Implemented resource
          pipelines to improve capacity planning by generating & aggregating team-specific data.
        </p>
        <p style={{marginBottom: '10px'}}>
          Implemented <strong className="text-stone-100">Jenkins CI/CD</strong> pipelines to automate the deployment of{' '}
          <strong className="text-stone-100">Conda</strong> virtual environments on Hadoop cluster, resulting in{' '}
          <strong className="text-stone-100">30%</strong> reduced app deployment time.
        </p>
        <p style={{marginBottom: '10px'}}>
          Proven on call proficiency in debugging live production issues during 24x7{' '}
          <strong className="text-stone-100">on-call rotations</strong>. Ensured rapid resolution, minimizing downtimes
          and enhancing system resilience. Proficiently conducted and authored detailed{' '}
          <strong className="text-stone-100">RCA</strong> reports.
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
        Conducted in-depth analysis of Java garbage collection times by analyzing GC logs from Hadoop cluster nodes.
        Fine-tuned GC parameters & optimized heap sizes, thus resulting in{' '}
        <strong className="text-stone-100">10%</strong> improvement of application performance and reduced memory
        consumption.
      </p>
    ),
  },
];

/**
 * Pursuits section
 */
export const pursuits: PursuitItem[] = [
  {
    date: 'Jan 2024',
    location: 'Gili Islands, Indonesia',
    title: 'PADI Open Water Scuba Diver',
    content: (
      <p>
        Qualified to a depth of 18m, can dive anywhere in the world using my own scuba gear. Turns out, the ocean is way
        more entertaining. Who needs Netflix when you have a pufferfish looking perpetually surprised!
      </p>
    ),
  },
  {
    date: '2022 - 2024',
    location: 'Corners of India (and southeast Asia)',
    title: 'Travelling Solo',
    content: (
      <p>
        Just me, my backpack and some wonderful nomads i met on the way. The result? A whole lot of unexpected
        discoveries and a perspective shift that's, let's just say, significant!
      </p>
    ),
  },
  {
    date: 'Jan 2021',
    location: 'Uttarakhand, IN',
    title: 'Trek to Summit of Mt. Kedarkantha',
    content: <p>Survived -10 °C for 6 days! But hey, the view from the top was pretty spectacular!</p>,
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
      text: 'This blog section is currently experiencing a temporary… creative sabbatical. Think of it as a strategic pause before the word explosion. Coming soon (probably).',
      image: pauseImage,
    },
    {
      name: 'Jane Doe',
      text: "The blog section is like a mischievous gremlin. I'm trying to coax it into cooperating, but it mostly just hides. Stay tuned for updates on the gremlin taming process!",
      image: gremlinImage,
    },
    {
      name: 'Someone else',
      text: 'The blog section is being held hostage by a severe case of ‘what should I write?’ Send rubber duckies and inspiration!',
      image: duckImage,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Wanna reach out to me? Look nowhere else!',
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
