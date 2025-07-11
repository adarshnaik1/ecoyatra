
"use client";
import Navbar from "./Navbar";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function Hero() {
  const words = [
    { text: "Recycle" },
    { text: " ", },
    { text: "Smarter." },
    { text: " ", },
    { text: "Live" },
    { text: " ", },
    { text: "Greener.", className: "text-emerald-600 dark:text-emerald-400" },
  ];
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />
      <div className="fixed inset-0 z-0 w-screen h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-950">
      {/* Decorative blurred circles full screen */}
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-emerald-200 dark:bg-emerald-900 rounded-full blur-3xl opacity-40 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-[44rem] h-[44rem] bg-emerald-300 dark:bg-emerald-800 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <p className="text-neutral-600 dark:text-neutral-200 text-base md:text-lg mb-10 mt-8 font-normal tracking-wide">
          The road to environmental sustainability starts here
        </p>
        <TypewriterEffect words={words} className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" />
        <div
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <button
            className="w-40 h-12 rounded-2xl bg-emerald-600 border border-transparent dark:border-white text-white text-base font-semibold shadow-lg transition-all duration-200 hover:border-emerald-800 hover:scale-105 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">
            Signup
          </button>
          <button
            className="w-40 h-12 rounded-2xl bg-white text-emerald-700 border border-emerald-600 text-base font-semibold shadow-lg transition-all duration-200 hover:border-emerald-800 hover:scale-105 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400">
            Login
          </button>
        </div>
      </div>
      </div>
    </>
  );

}
