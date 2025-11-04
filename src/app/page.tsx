'use client'

import { useState } from "react";
import Image from "next/image";
import Settings from "../../public/settings.png"

export default function Home() {
const [toggleset, setToggleSet] = useState(false)

  const tests = [
    {
      title: "Structural Mechanics Midterm",
      description: "Focus on 3 questions practiced in class",
      date: "5 Dec 2023",
      type: "Midterm",
      degree: "High",
    },
    {
      title: "Engineering Drawing Assignment",
      description: "Submit design sheet 2 and 3",
      date: "8 Dec 2023",
      type: "Assignment",
      degree: "Medium",
    },
    {
      title: "Fluid Mechanics Exam",
      description: "Full syllabus coverage, focus on Bernoulli principle",
      date: "15 Dec 2023",
      type: "Exam",
      degree: "Critical",
    },
        {
      title: "Fluid Mechanics Exam",
      description: "Full syllabus coverage, focus on Bernoulli principle",
      date: "15 Dec 2023",
      type: "Exam",
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

  const toggleSettings = () => {
    setToggleSet(toggleset);
  }

  return (
    <main className="p-7 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Assessments</h1>
      </div>
      {tests.map((item, index) => (
        <section
          key={index}
          className="w-full p-4 cursor-pointer bg-neutral-50 shadow-sm space-y-3 rounded-2xl hover:shadow-xl transition-shadow"
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
            <div onClick={() => toggleSettings()}>
              <Image width={30} height={5} alt="settings" src={Settings} className="scale-60 z-50"/>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
