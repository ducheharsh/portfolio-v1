"use client";
import { project } from "@/app/Data";
import Marquee from "../magicui/marquee";
import { ProjectCard } from "./project-card";
import BlurFade from "../magicui/blur-fade";

export default function ProjectMarque() {
  const BLUR_FADE_DELAY = 0.04;
  return (
    <div>
      <h1 className="text-6xl col-span-3 mb-8  px-6 font-bold text-white">
        Projects
      </h1>
      <div className="text-white col-span-4 flex ">
        <Marquee pauseOnHover className="[--duration:20s]">
          {project.map((p, id) => (
            <div key={p.title} className="ml-3  z-10  w-96 opacity-1">
              <BlurFade key={p.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ProjectCard
                  href={p.href}
                  key={p.title}
                  title={p.title}
                  description={p.description}
                  dates={p.dates}
                  tags={p.technologies}
                  image={p.image}
                  video={p.video}
                  links={p.links}
                />
              </BlurFade>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
