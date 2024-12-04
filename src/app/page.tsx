"use client";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen w-full transition-colors duration-300 bg-gradient-to-br from-pink-300 to-red-300">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-6xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-pink-800 text-left sm:text-center max-w-4xl">
          warning: fun under construction
        </h1>
        <p className="mb-8 max-w-[42rem] text-pink-900 sm:text-xl sm:leading-8 underline underline-offset-8 text-left w-full sm:max-w-fit">
          Coming soon to turn your curiosity into reality
        </p>
        <Button
          disabled
          className="bg-white/80 text-pink-600 hover:bg-white shadow-md"
        >
          Join Waitlist
        </Button>
      </div>
      {/* Footer */}
      <div className="absolute bottom-4 w-full text-center">
        <a
          href="https://x.com/0xSarthak"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-800 hover:text-pink-950 transition-colors duration-200"
        >
          by 0xsarthak
        </a>
      </div>
    </div>
  );
}
