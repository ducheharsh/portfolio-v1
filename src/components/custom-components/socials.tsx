import Image from "next/image";

export default function Socials() {
  return (
    <div className="flex text-white opacity-85 w-fit">
    <a href="mailto:ducheharsh@gmail.com">
      <Image
        src="/gmail.svg"
        className="pr-3 hover:animate-bounce"
        color="white"
        alt="gmail"
        height="50"
        width="50"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/harsh-duche/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/li.svg"
        className="pr-3 hover:animate-bounce"
        color="white"
        alt="gmail"
        height="50"
        width="50"
      />
    </a>
    <a
      href="https://github.com/ducheharsh"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/ghl.svg"
        className=" pr-3 hover:animate-bounce"
        alt="gmail"
        height="50"
        width="50"
      />
    </a>
  </div>
  );
}