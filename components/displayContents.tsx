import { formatToCommentBlock } from "@/lib/helper";

export default function DisplayContents({ contents }: { contents: string }) {
    const extraLinesAdded = 2;
    const numberOfLines = contents.split('\n').length + extraLinesAdded;
  return (
    <div className="w-4/5 h-full flex">
      <div className=" px-8 py-4 w-full h-full border-t border-r border-themeStroke">
        <div className="flex">
          {/* Line numbers */}
          <div className="text-[#64748b] text-right pr-6 select-none">
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
      <div className="h-full border-t border-r w-[32px] border-themeStroke p-2 pt-4">
        <div className="bg-themeStroke w-full h-2 mx-auto"></div>
      </div>
    </div>
  );
}
