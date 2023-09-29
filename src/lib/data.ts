import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import photoprismImg from "@/public/photoprism.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Programmer Mathematician",
    location: "Szeged HU",
    description:
      "I graduated after 3 years of education.",
    icon: React.createElement(LuGraduationCap),
    date: "1997",
  },
  {
    title: "Developer, Dev. Lead",
    location: "Budapest HU, Beckum DE",
    description:
      "I worked as a developer for 1,5 years and dev. lead for another 1,5 years. My stack was C/Java, Oracle, DB2. It was really great opportunity to learn programming in real life problems.",
    icon: React.createElement(CgWorkAlt),
    date: "1997 - 2000",
  },
  {
    title: "Developer",
    location: "Sankt Pölten, AUS",
    description:
      "My responsibility was to create the frontend and the JNI layer for the home automation system written in C/C++. Technologies used: Java, Applet, WAP",
    icon: React.createElement(CgWorkAlt),
    date: "2000 - 2001",
  },
  {
    title: "Dev. Lead",
    location: "Budapest HU",
    description:
      "I worked as a dev. lead for 2 years. My stack was Java, Oracle, DB2.",
    icon: React.createElement(CgWorkAlt),
    date: "2001 - 2002",
  },
  {
    title: "Developer, System analyst",
    location: "Budapest HU",
    description:
      "I worked as a developer for 2 years and a system analyst for 2 more years. My stack was C, Java, Oracle.",
    icon: React.createElement(CgWorkAlt),
    date: "2002 - 2007",
  },
  {
    title: "System analyst, Dev. lead",
    location: "Budapest HU",
    description:
      "I worked as a system analyst for 2 years and then i became the dev. lead of the MW team. My stack was Java, Spring, Oracle, IBM MQ, Message Broker.",
    icon: React.createElement(CgWorkAlt),
    date: "2007 - 2013",
  },
  {
    title: "Technical and application architect",
    location: "Budapest HU, London EN, Manchester EN",
    description:
      "I was very happy that after a very successful project in my previous position, i joind the EMEA Architecture team being responsible for Java technologies. The tech. stack used was: Java, JEE, Spring, Spring Boot, Jenkins, TeamCity, Artifactory, Maven, Gradle, Tibco BW and Tibco PB, Liferay, Oracle, PostgreSQL, MySQL, MongoDB, Python.",
    icon: React.createElement(CgWorkAlt),
    date: "2013 - 2020",
  },
  {
    title: "Team lead",
    location: "Budapest HU",
    description:
      "My friend asked me to help out his team in a Java project. It was a really great challenge, as i built up the dev.team from scratch including the interviewing process, bilding up the development environemnt with complete CI/CD, etc. I was really happy that we was able to finish the project on time, on quality and on budget. Kubernetes, Docker, JHipster, Java, JEE, Spring, Spring Boot, Jenkins, DB2, Maven.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Freelancer",
    location: "",
    description:
      "This great experience -which changed my life- started as a challange. I was able to participate in several projects, learned new things. I used various tech.stacks, including: AWS, Serverless (Lambda, step function, SQS, DynamoDB, etc.), Python, GraphQL, NodeJS (JavaScript/TypeScript).",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2023",
  },
  {
    title: "Senior Dev. Engineer",
    location: "Budapest HU",
    description:
      "This project sounded so interesting, that i'm sacrificed my free-time and helped out the team. I was glad that besides well-known things, i could learn some new as well. My tech. stack was: Azure, Kubernetes, Python, FastAPI, Java, Maven, Spring Boot, Couchbase, PostgreSQL, Jenkins.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Emma Recognition",
    description:
      "The goal of this private project is to provide (some sort of) a tech.demo and also help our everyday life. This application downloads pictures from our phones, recognises if Emma (our daughter) is present on the picture and shares the same with the friends and family.",
    tags: ["React", "Next.js", "NodeJS", "AWS", "Lambda, StepFunctions, DynamoDB" ],
    imageUrl: photoprismImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GraphQL",
  "SQL",
  "Express",
  "PostgreSQL",
  "Python",
  "FastAPI",
  "AWS",
  "Serverless",
  "Java",
  "Spring Boot",
  "Terraform",
] as const;
