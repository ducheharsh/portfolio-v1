import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3D-card";
import BlurFade from "../magicui/blur-fade";

export default function Image3D() {
  return (
    <BlurFade delay={0.04}>
      <div className="opacity-95 hidden xl:block">
        <CardContainer className="inter-var">
          <CardBody>
            <CardItem translateZ="100" className="w-full mt-4 ml-32">
              <Image
                src="/dev.jpeg"
                height="1000"
                width="1000"
                className="h-96 w-96 object-cover rounded-full group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </BlurFade>
  );
}
