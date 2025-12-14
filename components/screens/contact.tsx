import {
  ChevronDown,
  ChevronRight,
  File,
  Folder,
  Mail,
  Phone,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Input from "../input";
import Textarea from "../textarea";
import Purple from "../colorText/purple";
import Indigo from "../colorText/indigo";
import Orange from "../colorText/orange";
import ThankYou from "../thankYou";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const formIsValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  return (
    <div className="w-full h-full flex">
      {/* Nav section */}
      <div className="flex w-[312px] border-r border-themeStroke">
        <div className="h-full w-full ">
          <div className="px-7 py-4 flex items-center gap-2 border-b border-themeStroke mb-2">
            <Image
              src="/images/chevronDown.png"
              alt="chevron down"
              width={16}
              height={16}
            />
            contacts
          </div>
          <div className="px-7 py-2 flex items-center gap-2 text-sm">
            <Mail className="w-[14px]" /> maisiriquinton@gmail.com
          </div>
          <div className="px-7 py-2 pt-1 flex items-center gap-2 text-sm">
            <Phone className="w-[14px]" /> +263 776 441 883
          </div>
        </div>
      </div>

      {/* Displayed Content */}
      <div className="h-full flex flex-col flex-1">
        {/* Open file name container */}
        <div className="w-full h-max px-5 border-r py-4 border-themeStroke ">
          <div className="flex items-center justify-between text-themeBg">
            contact
          </div>
        </div>
        {/* Open file content */}
        <div className="h-full flex w-full">
          <div className=" px-8 py-4 w-2/5 h-full border-t border-r border-themeStroke">
            <div className="flex items-center justify-center h-full w-full">
              {sent ? (
                <ThankYou />
              ) : (
                <form action="" className="space-y-4">
                  <Input
                    label="_name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <Input
                    label="_email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <Textarea
                    label="_message"
                    value={formData.message}
                    placeholder="your message here..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                  <button
                    type="submit"
                    className={`mt-2 px-[12px] py-[10px] text-sm w-max rounded-lg transition ${
                      !formIsValid()
                        ? "opacity-50 bg-slate-600 cursor-not-allowed text-white"
                        : "bg-primary cursor-pointer text-themeBackdrop"
                    }`}
                    disabled={!formIsValid()}
                  >
                    submit-message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Code snippet showcase */}
          <div className=" px-8 py-4 w-3/5 h-full border-t border-r border-themeStroke">
            <div className="flex">
              {/* Line numbers */}
              <div className="text-[#64748b] text-right pr-6 select-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              <div>
                <pre>
                  <code>
                    <Purple text="const " />
                    <Indigo text="button " />
                    <Purple text="= " />
                    <Purple text="document" />
                    .<Purple text="querySelector" />
                    {"("}
                    <Orange text="'#sendBtn'" />
                    {");"}
                    {"\n\n"}
                    <Purple text="const " />
                    <Indigo text="message " />
                    <Purple text="= " />
                    {"{"}
                    {"\n"}
                    {"  "}
                    <Indigo text="name" />
                    <Purple text=": " />
                    <Orange text={formData.name || '""'} />
                    {","}
                    {"\n"}
                    {"  "}
                    <Indigo text="email" />
                    <Purple text=": " />
                    <Orange text={formData.email || '""'} />
                    {","}
                    {"\n"}
                    {"  "}
                    <Indigo text="message" />
                    <Purple text=": " />
                    <Orange text={formData.message || '""'} />
                    {","}
                    {"\n"}
                    {"  "}
                    <Indigo text="date" />
                    <Purple text=": " />
                    <Orange text={new Date().toDateString()} />
                    {"\n"}
                    {"}"}
                    {"\n\n"}
                    <Indigo text="button" />
                    .<Purple text="addEventListener" />
                    {"("}
                    <Orange text="'click'" />
                    {", "}
                    {"() => {"}
                    {"\n"}
                    {"  "}
                    <Indigo text="form" />
                    .<Purple text="send" />
                    {"("}
                    <Indigo text="message" />
                    {");"}
                    {"\n"}
                    {"})"}
                    {")"}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          <div className="h-full border-t border-r w-[32px] border-themeStroke p-2 pt-4">
            <div className="bg-themeStroke w-full h-2 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
