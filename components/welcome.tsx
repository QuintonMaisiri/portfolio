import { FileSearch, Gamepad, Mail } from "lucide-react";
import Link from "next/link";

type WelcomeProps = {
  title: string;
};
export default function Welcome({ title }: WelcomeProps) {
  return (
    <div className="w-full h-full p-20 space-y-8">
      <div>
        <h2>{title}</h2>
        <p>My portfolio</p>
      </div>

      <div className="space-y-4">
        <h5>Start</h5>
        <div className="space-y-8">
          <div className="flex text-indigo-500">
            <FileSearch className="w-[16px] mr-4" />
            Use the tabs on the left to learn more about me.
          </div>
          <Link href="/contact">
            <div className="flex text-purple-400">
              <Mail className="w-[16px] mr-4" />
              Send me an email
            </div>
          </Link>
          <Link href="/">
            <div className="flex text-teal-400">
              <Gamepad className="w-[16px] mr-4" />
              Play game again
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
