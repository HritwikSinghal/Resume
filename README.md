# React JS Resume Website Template

- [React JS Resume Website Template](#react-js-resume-website-template)
  - [React based template for software developer-focused resume websites](#react-based-template-for-software-developer-focused-resume-websites)
    - [View a live demo here.](#view-a-live-demo-here)
    - [🎉 Version 2 is here! New features:](#-version-2-is-here-new-features)
  - [Quick steps](#quick-steps)
    - [Run](#run)
    - [docker build](#docker-build)
    - [The refresh script](#the-refresh-script)
    - [Upgrade the project](#upgrade-the-project)
  - [Description](#description)
  - [Make it Your Own!](#make-it-your-own)
    - [1. Make sure you have what you need](#1-make-sure-you-have-what-you-need)
    - [2. Fork and download this repo (and star if you like!)](#2-fork-and-download-this-repo-and-star-if-you-like)
    - [3. Install dependencies and run](#3-install-dependencies-and-run)
    - [4. Customize the data to make it your own](#4-customize-the-data-to-make-it-your-own)
    - [5. Hook up contact form](#5-hook-up-contact-form)
    - [6. Make any other changes you like](#6-make-any-other-changes-you-like)
    - [7. Deploy to Vercel and enjoy your new Resume Website](#7-deploy-to-vercel-and-enjoy-your-new-resume-website)
  - [Project Created \& Maintained By](#project-created--maintained-by)
    - [Tim Baker](#tim-baker)
  - [Stargazers](#stargazers)
  - [Forkers](#forkers)

![ReactJS Resume Website Template](resume-screenshot.jpg?raw=true 'ReactJS Resume Website Template')

<div align="center">

<img alt="GitHub release (latest by date including pre-releases" src="https://img.shields.io/github/v/release/tbakerx/react-resume-template?include_prereleases">

<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/tbakerx/react-resume-template?style=flat">

<img alt="GitHub Repo forks" src="https://img.shields.io/github/forks/tbakerx/react-resume-template?style=flat&color=success">

<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/tbakerx/react-resume-template?style=flat&color=yellow">

<img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/tbakerx/react-resume-template/react?style=flat">

<img alt="Github Repo Sponsors" src="https://img.shields.io/github/sponsors/tbakerx?style=flat&color=blueviolet">

## React based template for software developer-focused resume websites

</div>

### View a [live demo here.](https://reactresume.com)

### 🎉 Version 2 is here! New features:

1. Completely rebuilt with React and full typescript support
2. Built on the [Next.js](https://nextjs.org/) framework for easy server side rendering/static generation, image optimization, api routes, and deployment
3. Styled entirely with [TailwindCss](https://tailwindcss.com/)
4. Re-organized data population file for customizing site.
5. Significant improvement/modernization of all site sections

## Quick steps

### Run

- `yarn install && yarn dev` to install dependencies and then run the project.
- `yarn build && yarn start` to deploy in prod.

In your terminal you should be given the url of the running instance (usually `http://localhost:3000` unless you have something else running).

### docker build

```sh
docker build -t my-nextjs-app .
docker run -p 3000:3000 my-nextjs-app
```

### The refresh script

```sh
hritwik@REDACTED:~/app$ cat refresh.sh
#!/bin/bash
# set -e
set -x

cd Resume
git reset HEAD~3 --hard && git pull
docker build -t my-nextjs-app .
docker ps -a | awk '{ print $1 }' | xargs docker stop
docker ps -a | awk '{ print $1 }' | xargs docker rm
docker run -d --restart unless-stopped -p 80:3000 my-nextjs-app
docker system prune --all --force

```

### Upgrade the project

- run `yarn upgrade-interactive --latest`
- Now try running and see what errors are there.
- sometimes i need to upgrade nextjs manually. see https://nextjs.org/docs/app/guides/upgrading/version-16
  - this can also be needed with tailwindCSS. so see their guides for more info. see
  - when i upgraded to v16, i had to manually remove webpack as turbopack was default in this version.
- sometimes after upgrade, the error is like `@tailwindcss/typography @tailwindcss/forms not found`. This is due to tailwind deps are not there in package.json.
  - run `yarn add @tailwindcss/typography @tailwindcss/forms`.

- relevant commits to look at from prev upgrades
  - https://github.com/HritwikSinghal/Resume/commit/f4344d0e17c06e6c417273ee2ddaf69ab6af2aff
  - https://github.com/HritwikSinghal/Resume/commit/0e320b5d41a78a4f8b3b9157c097b91ac9f611e4

## Description

This is a React based personal resume website template. Built with typescript on the Next.js framework, styled with Tailwind css, and populated with data from a single file, you can easily create, customize and host your own personal website in minutes. Even better, the site is fully mobile-optimized and server-side rendered to ensure fast loading and a clean UI on any device. Read on to learn how to make it your own.

## Make it Your Own!

### 1. Make sure you have what you need

To build this website, you will need to have the latest stable versions of Node and Yarn downloaded and installed on your machine. If you don't already have them, you can get Node [here,](https://nodejs.org/en/download/) and Yarn [here.](https://yarnpkg.com/getting-started/install)

### 2. Fork and download this repo (and star if you like!)

Next, find the `Fork` button in the top right of this page. This will allow you to make your own copy, for more info on forking repo's see [here.](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) After this, download to your development machine using the green `Code` button at the top of the repo page.

### 3. Install dependencies and run

Once you have your own copy of this repo forked and downloaded, open the folder in your favorite terminal and run `yarn install` to install dependencies. Following this, run `yarn dev` to run the project. In your terminal you should be given the url of the running instance (usually http://localhost:3000 unless you have something else running).

### 4. Customize the data to make it your own

All of the data for the site is driven via a file at `/src/data/data.tsx`. This is where you'll find the existing content, and updating the values here will be reflected on the site. If you have the site running as described above, you should see these changes reflected on save. The data types for all of these items are given in the same folder in the `dataDef.ts` file. Example images can be found at `src/images/` and are imported in the data file. To change, simply update these images using the same name and location, or add new images and update the imports.

### 5. Hook up contact form

Due to the variety of options available for contact form providers, I've hooked up the contact form only so far as handling inputs and state. Form submission and the actual sending of the email is open to your own implementation. My personal recommendation for email provider is [Sendgrid.](https://sendgrid.com/)

### 6. Make any other changes you like

Of course, all of the code is there and nothing is hidden from you so if you would like to make any other styling/data changes, feel free!

### 7. Deploy to Vercel and enjoy your new Resume Website

Deploying your new site to Vercel is simple, and can be done by following their guide [here.](https://vercel.com/guides/deploying-nextjs-with-vercel) When you're all done and the build succeeds, you should be given a url for your live site, go there and you'll see your new personal resume website! Congratulations!

## Project Created & Maintained By

### Tim Baker

<a href="https://twitter.com/timbakerx"><img src="https://github.com/aritraroy/social-icons/blob/master/twitter-icon.png?raw=true" width="60"></a><a href="https://instagram.com/tbakerx"><img src="https://github.com/aritraroy/social-icons/blob/master/instagram-icon.png?raw=true" width="60"></a>

[![GitHub followers](https://img.shields.io/github/followers/tbakerx.svg?style=social&label=Follow)](https://github.com/tbakerx/)

## Stargazers

[![Stargazers repo roster for @tbakerx/react-resume-template](https://reporoster.com/stars/dark/tbakerx/react-resume-template)](https://github.com/tbakerx/react-resume-template/stargazers)

## Forkers

[![Forkers repo roster for @tbakerx/react-resume-template](https://reporoster.com/forks/dark/tbakerx/react-resume-template)](https://github.com/tbakerx/react-resume-template/network/members)
