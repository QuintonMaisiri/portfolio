export default function Food({active}: {active: boolean}) {
  return (
    <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-[#46ECD5]/10 ${active ? 'opacity-100' : 'opacity-30' }`}>
        <div className={`w-5 h-5 rounded-full flex items-center justify-center bg-[#46ECD5]/20`}>
            <div className={`w-3 h-3 rounded-full flex items-center justify-center bg-[#46ECD5]`}></div>
        </div>
    </div>
  );
}