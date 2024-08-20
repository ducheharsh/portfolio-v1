"use server";

import { MyTechStack } from "@/components/ui/card-hover-effect";
import { MyDock } from "@/components/custom-components/mydock";
import ImageCarasoule from "@/components/custom-components/image-carasoule";
import ProjectHeros from "@/components/custom-components/project-heros";
import ProjectMarque from "@/components/custom-components/project-marque";
export default async function HeroHighlightDemo() {
  return (
    <div className="min-h-fit min-w-screen m-0 bg-black bg-grid-white/[0.2] relative ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0  text-white  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <MyDock />
      <ProjectHeros />
      <div className="grid grid-cols-4 h-full">
        <div className="col-span-4 md:col-span-4">
          <ProjectMarque />
          <MyTechStack />
          <ImageCarasoule />
        </div>
      </div>
    </div>
  );
}
