'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Plus from "../../public/plus.png"
import Close from "../../public/close.png"

export default function Home() {
const [toggleSet, setToggleSet] = useState(false)

  const tests = [
    {
      title: "Structural Mechanics Midterm",
      description: "Focus on 3 questions practiced in class",
      date: "5 Dec 2023",
      degree: "High",
    },
    {
      title: "Engineering Drawing Assignment",
      description: "Submit design sheet 2 and 3",
      date: "8 Dec 2023",
      degree: "Medium",
    },
    {
      title: "Fluid Mechanics Exam",
      description: "Full syllabus coverage, focus on Bernoulli principle",
      date: "15 Dec 2023",
      degree: "Critical",
    },
        {
      title: "Fluid Mechanics Exam",
      description: "Full syllabus coverage, focus on Bernoulli principle",
      date: "15 Dec 2023",
      degree: "Low",
    },
  ];

  // Background color by degree (severity)
  const getDegreeColor = (degree: string) => {
    switch (degree) {
      case "Critical":
        return "bg-red-200 text-red-800";
      case "High":
        return "bg-purple-200 text-purple-800";
      case "Medium":
        return "bg-yellow-200 text-yellow-800";
      case "Low":
        return "bg-blue-200 text-blue-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <main className="p-7 space-y-8">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">Assessments</h1>
        <Link href="addItem">
        <div className='p-2.5 bg-blue-200 shadow cursor-pointer rounded-full flex items-center justify-center'>
          <Image src={Plus} alt='plus-icon' width={15} height={15}/>
        </div>
      </Link>
      </div>
      {tests.map((item, index) => (
        <section
          key={index}
          className="w-full p-4 bg-neutral-50 shadow-sm space-y-3 rounded-2xl hover:shadow-xl transition-shadow"
        >
          <div className="space-y-2">
            <h1 className="font-semibold text-xl">{item.title}</h1>
            <p className="opacity-65 text-base">{item.description}</p>
          </div>
          <div className="flex flex-row flex-wrap gap-2 text-sm justify-between items-center">
            <div className="flex flex-row gap-2">            
              <div className="px-2 py-1 bg-gray-200 rounded-md">{item.date}</div>
              <div className={`px-2 py-1 rounded-md ${getDegreeColor(item.degree)}`}>
              {item.degree}
            </div>
            
            </div>
            <div className="cursor-pointer relative">
              <Image width={22} height={22} alt="settings" src={Close} className="scale-60 z-50"/>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
