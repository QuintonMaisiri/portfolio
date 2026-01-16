'use client';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";
import {useMediaQuery} from 'react-responsive';

export default function CodeSnippet() {

  
const ismobile = useMediaQuery({ query: '(max-width: 768px)' });
const isSmallScreen = useMediaQuery({ query: '(max-width: 1024px)' });

  const snippets = [
    {
      date: "created 5 months ago",
      code: `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`,
    },
    {
      date: "created 8 months ago",
      code: `function fetchData(url: string): Promise<Response> {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response;
    });
}`,
    },
    {
      date: "created 1 year ago",
      code: `function calculateSum(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}`,
    },
    {
      date: "created 2 years ago",
      code: `function isPrime(num: number): boolean {
  if (num <= 1) return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}`,
    },
  ];

  return (
    <div className="overflow-y-scroll h-full no-scrollbar w-full">
      <p className="text-[18px] mt-4"> // Code snippet showcase:</p>
      <div className="space-y-8 mt-8">
        {snippets.map((snippet, index) => (
          <div className="space-y-4">
            <div>
              <div className="flex gap-4">
                <Image
                  src={"/images/projects/wardrobe-worth.png"}
                  alt="wardrobe worth"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] rounded-full object-cover"
                />
                <div>
                  <p className="text-[#615FFF] font-bold">@quintonmaisiri</p>
                  <p className="">{snippet.date}</p>
                </div>
              </div>
            </div>
            <SyntaxHighlighter
              language="typescript"
              style={oneDark}
              customStyle={{
                padding: "1.25rem",
                fontSize: isSmallScreen ? "0.7rem" : "0.875rem",
                lineHeight: "1.6",
                background: "#020617",
                borderRadius: "16px",
                border: "1px solid #314158",
              }}
              codeTagProps={{
                style: {
                  background: "transparent",
                },
              }}
            >
              {snippet.code}
            </SyntaxHighlighter>
          </div>
        ))}
      </div>
    </div>
  );
}
