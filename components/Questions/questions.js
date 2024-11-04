import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Question({ asked, reply }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="justify-center flex flex-col bg-white rounded-lg border shadow gap-4 w-full">
      <div className={`flex justify-between cursor-pointer py-5 px-10 ${isOpen && 'pb-0'}`} onClick={() => setIsOpen(!isOpen)}>
        <p className="font-ton uppercase text-lg font-bold">{asked}</p>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && <hr />}
      <div className={`whitespace-pre-line transition-all px-10 py-2 ${isOpen ? 'block' : 'hidden'}`}>
        {reply}
      </div>
    </div>
  )
}
