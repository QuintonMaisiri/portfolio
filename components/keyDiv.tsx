export default function KeyDiv({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[48px] p-4 border border-[#314158] rounded-[8px] bg-[#0A0A0A] flex items-center justify-center">
      {children}
    </div>
  );
}