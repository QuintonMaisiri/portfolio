import Image from "next/image";
import Link from "next/link";
import SnakeGame from "../games/snake";

export default function Landing() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="space-y-10 w-[500px]">
        <div className="space-y-4">
          <p>Hi all. I am</p>
          <h1 className="text-white">Quinton T Maisiri</h1>
          <h4 className="text-indigo-500">&gt; Frontend Developer</h4>
        </div>
        <div className="space-y-4 text-sm">
          <p>// complete the game to continue</p>
          <p>// find my profile on Github:</p>
          <p>
            <span className="text-indigo-500">const</span>{" "}
            <span className="text-teal-400">githubLink</span> ={" "}
            <Link
              href="https://github.com/QuintonMaisiri2"
              className="text-[#FFA1AD]"
              target="_blank"
            >
              "https://github.com/QuintonMaisiri"
            </Link>
          </p>
        </div>
      </div>
      <div className="w-[780px] h-full relative">
        <Image
          src="/images/blurs.png"
          alt="blurs"
          width={780}
          height={742}
          className="absolute"
        />
        <SnakeGame />
      </div>
    </div>
  );
}
