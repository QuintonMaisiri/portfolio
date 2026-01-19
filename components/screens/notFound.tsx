import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center lg:justify-center w-full h-full">
      <div className="flex flex-col lg:flex-row justify-center h-max lg:gap-[146px]">
        <div>
          <Image
            src="/images/404.png"
            alt="not found"
            width={312}
            height={180}
            className="w-[80%] lg:w-auto ml-8 lg:ml-0 mb-8 lg:mb-0"
          />
        </div>
        <div className="flex">
          {/* Line numbers */}
          <div className="select-none text-slate-500 text-right pr-4 pl-3 leading-6 hidden lg:block">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code */}
          <pre className="overflow-x-auto hidden lg:block">
            <code>
              <span className="text-sky-400">const</span> page ={" "}
              <span className="text-cyan-400">findPage</span>(
              <span className="text-emerald-300">'you-were-looking-for'</span>);
              {"\n\n"}
              <span className="text-sky-400">if</span> (!page) {"{"}
              {"\n"}
              {"  "}
              <span className="text-pink-400">console</span>.
              <span className="text-cyan-400">log</span>(
              <span className="text-emerald-300">
                "Oops! Looks like you took a wrong turn in the codebase."
              </span>
              );{"\n"}
              {"  "}
              <span className="text-pink-400">console</span>.
              <span className="text-cyan-400">log</span>(
              <span className="text-emerald-300">
                "But hey, since you're here..."
              </span>
              );{"\n"}
              {"  "}
              <span className="text-pink-400">console</span>.
              <span className="text-cyan-400">log</span>(
              <span className="text-emerald-300">
                "🪄 Go back to the homepage and explore more cool stuff!"
              </span>
              );{"\n"}
              {"  "}
              <span className="text-sky-400">throw new</span>{" "}
              <span className="text-cyan-400">Error</span>(
              <span className="text-emerald-300">
                "404: PageNotFoundError 🤭"
              </span>
              );{"\n"}
              {"}"}
              {"\n\n"}
              <span className="text-slate-500">/* Suggestions:</span>
              {"\n"}
              <span className="text-slate-500">
                {" "}
                * - Check the URL for typos
              </span>
              {"\n"}
              <span className="text-slate-500">
                {" "}
                * - Use the site navigation
              </span>
              {"\n"}
              <span className="text-slate-500">
                {" "}
                * - Or hit CMD+Z in real life 😅
              </span>
              {"\n"}
              <span className="text-slate-500"> */</span>
              {"\n\n"}
              <span className="text-cyan-400">redirect</span>(
              <span className="text-emerald-300">'home'</span>);
            </code>
          </pre>

          <pre className="overflow-x-auto p-8 lg:hidden">
            <code>
              <span className="text-sky-400">throw new</span>{" "}
              <span className="text-pink-400">Error(</span>
              {"\n"}
              <span className="text-emerald-300">
                "404: PageNotFoundError 🤭"
              </span>
              {"\n"}
              );
              {"\n\n"}
              <span className="text-pink-400">goBack() || goHome();</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
