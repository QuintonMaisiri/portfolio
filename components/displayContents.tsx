import { formatToCommentBlock } from "@/lib/helper";

export default function DisplayContents({ contents }: { contents: string }) {
    const extraLinesAdded = 2;
    const numberOfLines = contents.split('\n').length + extraLinesAdded;
  return (
    <div className="xl:w-4/5 h-full flex">
      <div className=" p-4 xl:px-8 xl:py-4 w-full h-full border-t border-r border-themeStroke overflow-y-scroll no-scrollbar">
        <div className="flex text-sm">
          {/* Line numbers */}
          <div className="text-[#64748b] text-right pr-4 xl:pr-6 select-none">
            {Array.from({ length: numberOfLines }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code content */}
          <pre className="whitespace-pre-wrap">
            {formatToCommentBlock(contents)}
          </pre>
        </div>
      </div>
      {/* Scroll bar */}
      <div className="h-full border-t border-r w-[20px] xl:w-[32px] border-themeStroke p-2 pt-4">
        <div className="bg-themeStroke w-full h-2 mx-auto"></div>
      </div>
    </div>
  );
}
