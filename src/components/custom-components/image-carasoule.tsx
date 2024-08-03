"use client";
import { Content } from "@/app/Data";
import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";
export default function ImageCarasoule() {
  return (
    <TracingBeam className="px-6 col-span-4 md:col-span-4 h-fit">
      <div className="ml-12 antialiased pt-4 relative">
        {Content.map((item, index) => (
          <div
            key={`content-${index}`}
            className=" xl:flex w-full col-span-4 group"
          >
            <div className="mb-10 col">
              <h2 className="bg-white mt-7 text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-white">{item.title}</p>

              <div className="text-sm font-mono   text-white prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="500"
                    width="2600"
                    className="mt-4 rounded-lg mb-10 object-cover opacity-90 brightness-75 group-hover:opacity-100 group-hover:brightness-100"
                  />
                )}
              </div>
            </div>
            <div className="isolate  md:mt-28 xl:ml-6 h-fit px-4 text-sm ring-1 bg-white/5 backdrop-blur-sm ring-white/10 shadow-lg py-2 rounded-md text-white xl:w-[180%] w-[100%] ">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
