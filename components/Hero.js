import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react";
import { Container } from "./Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../components/SocialIcons.js";

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 cursor-pointer  transition fill-zinc-400 group-hover:fill-zinc-300" />
    </Link>
  );
}

export default function Hero() {
  return (
    <section className="text-neutral-300">
      <div className="flex lg:flex-row flex-col mx-auto mt-2">
        <Container className="mt-28">
          <div className="max-w-3xl flex-row justify-between">
            <h1 className="text-2xl font-bold tracking-tight  text-zinc-100 sm:text-5xl">
              Empowering Innovation, Software Developers from Rosario.
            </h1>
            <p className="mt-6 text-base  text-zinc-400">
              We are two passionate software developers from Rosario, Argentina,
              eager to make a difference in the world through our skills and
              expertise. We have been working together for several years,
              collaborating on various projects and constantly pushing ourselves
              to learn and grow.
            </p>
            <div className="mt-10 flex gap-8">
              <SocialLink
                href="https://twitter.com"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
              />
              <SocialLink
                href="https://instagram.com"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
              <SocialLink
                href="https://github.com"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://linkedin.com"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          </div>
        </Container>
        <Container className="mt-20">
          <div className="max-w-3xl">
            <img
              src="/HomeImage.png"
              alt="billing"
              className="w-full h-auto object-cover object-center sm:w-auto sm:h-auto"
            />
          </div>
        </Container>
      </div>
      <div className="text-center mt-32 relative">
            <h3 className="font-bold tracking-tight text-zinc-100 sm:text-4xl">What we use for the App</h3>
            <span className="absolute inset-x-1 top-14 h-1.5 bg-gradient-to-r from-teal-400/0 via-teal-400/40 to-teal-400/0 " />
        <Icons />
      </div>
    </section>
  );
}
