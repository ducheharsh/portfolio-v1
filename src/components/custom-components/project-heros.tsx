"use client";
import localFont from 'next/font/local'
import { words } from "@/app/Data";
import BlurFadeText from "../magicui/blur-fade-text";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image3D from "./3d-image";
import Meteors from "../magicui/meteors";

const myFont = localFont({ src: '../fonts/Monograf.ttf' })
export default function ProjectHeros() {
  return (
    <div>
      <div className="xl:block hidden">
        <Meteors number={50} />
      </div>
      <div className="h-screen w-fit flex items-center mx-4">
        <div className="flex justify-center items-center flex-col md:p-0 xl:ml-14">
          <div>
            <div>
              <div className="md:flex ${myFont.className} w-fit px-1">
                <div>
                <BlurFadeText
                  text="👋 I'm,"
                  delay={0.2}
                  className={`xl:text-9xl mt-6 ${myFont.className} xl:mr-2 text-9xl text-white font-[800] w-fit opacity-95 `}
                ></BlurFadeText>
                </div>
                <div className=''>
                <BlurFadeText
                  text="Harsh"
                  delay={0.2}
                  className={`xl:text-[160px] text-orange-400 ${myFont.className} flex text-9xl mt-6 md:mt-0 xl:mt-0  font-[800] w-fit opacity-95 `}
                ></BlurFadeText>
                </div>
              </div>
              <TextGenerateEffect
                className={`opacity-95 ${myFont.className} w-fit  px-2 xl:w-[800px]`}
                words={words}
              />
              <br />
            </div>
          </div>
        </div>
        <Image3D />
      </div>
    </div>
  );
}
