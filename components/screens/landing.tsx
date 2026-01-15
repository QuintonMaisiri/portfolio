import Image from "next/image";
import Link from "next/link";
import SnakeGame from "../games/snake";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  X,
} from "lucide-react";
import KeyDiv from "../keyDiv";
import Food from "./food";
import { useState } from "react";

export default function Landing() {
  const [foodRemaining, setFoodRemaining] = useState(5);

 const handleEatFood = () => {
  setFoodRemaining((prev) => {
    const next = Math.max(0, prev - 1);

    if (next === 0) {
      window.location.href = "/about-me";
    }

    return next;
  });
};

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="space-y-10 w-[500px]">
        <div className="space-y-4">
          <p>Hi all. I am</p>
          <h1 className="text-white">Quinton T Maisiri</h1>
          <h4 className="text-indigo-500">&gt; Full-stack developer</h4>
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
      <div className="relative">
        <Image
          src="/images/blurs.png"
          alt="blurs"
          width={780}
          height={742}
          className="absolute"
        />
        <div className="flex relative p-[32px] gap-[32px] border border-[#314158] rounded-[8px] bg-gradient-to-br from-[#175553] to-[#43D9AD]/13 backdrop-blur-sm w-max">
          <div className="absolute top-2 left-2 object-cover ">
            <div className="relative h-[14px] w-[14px] rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),rgba(0,0,0,0.15)_70%)] shadow-[0_0_60px_rgba(80,255,220,0.25)]">
              <div
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]"
              ></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <X className="w-3 text-teal-900" />
              </div>
            </div>
          </div>
          <div className="absolute top-2 right-2 object-cover ">
            <div className="relative h-[14px] w-[14px] rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),rgba(0,0,0,0.15)_70%)] shadow-[0_0_60px_rgba(80,255,220,0.25)]">
              <div
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]"
              ></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <X className="w-3 text-teal-900" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-2 left-2 object-cover ">
            <div className="relative h-[14px] w-[14px] rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),rgba(0,0,0,0.15)_70%)] shadow-[0_0_60px_rgba(80,255,220,0.25)]">
              <div
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]"
              ></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <X className="w-3 text-teal-900" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-2 right-2 object-cover ">
            <div className="relative h-[14px] w-[14px] rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),rgba(0,0,0,0.15)_70%)] shadow-[0_0_60px_rgba(80,255,220,0.25)]">
              <div
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]"
              ></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <X className="w-3 text-teal-900" />
              </div>
            </div>
          </div>
        
       
          <SnakeGame onEatFood={handleEatFood} />
          <div className="flex flex-col justify-between text-white">
            <div className="flex flex-col gap-[32px]">
              <div className="bg-slate-800 p-4 rounded-[8px] ">
                <p>// use keyboard</p>
                <p>// arrow to play</p>
                <div className="flex flex-col gap-4 items-center mt-6">
                  <KeyDiv>
                    <ChevronUp className="text-white w-[16px]" />
                  </KeyDiv>
                  <div className="flex gap-4">
                    <KeyDiv>
                      <ChevronLeft className="text-white w-[16px]" />
                    </KeyDiv>
                    <KeyDiv>
                      <ChevronDown className="text-white w-[16px]" />
                    </KeyDiv>
                    <KeyDiv>
                      <ChevronRight className="text-white w-[16px]" />
                    </KeyDiv>
                  </div>
                </div>
              </div>
              <div>
                // food left
                <div className="grid grid-cols-5 mt-4">
                 { Array.from({ length: 5 }).map((_, i) => (
                    <Food key={i} active={foodRemaining > i} />
                  ))}
                 
                </div>
              </div>
            </div>
           <Link href="/about-me">
            <div className="border w-max p-4 rounded-[10px] ml-auto">skip</div>
           </Link>
          </div> 
        </div>
      </div>
    </div>
  );
}
