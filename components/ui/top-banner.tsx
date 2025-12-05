"use client";

// import { useEffect, useState } from "react";
import Link from "next/link";
// import { X } from "lucide-react";
// import { Button } from "../ui/button";

export default function TopBanner() {
  // const [isVisible, setIsVisible] = useState(false);

  // // Read from localStorage on component mount
  // useEffect(() => {
  //   const dismissed = localStorage.getItem("topBannerDismissed");
  //   if (!dismissed) {
  //     setIsVisible(true);
  //   }
  // }, []);

  // // Hide banner and set flag in localStorage
  // const handleClose = () => {
  //   localStorage.setItem("topBannerDismissed", "true");
  //   setIsVisible(false);
  // };

  // if (!isVisible) return null;

  return (
    <div className="lg:w-full dark:bg-white bg-black text-white dark:text-black  sm:px-6 md:px-8 lg:px-12 py-2 md:py-2.5 lg:py-3 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 md:gap-4">
      {/* Text + Link Section */}
      <div className="flex  sm:flex-row justify-center items-center flex-1 text-center sm:text-left gap-1 sm:gap-2">
        <span className="text-xs sm:text-sm md:text-base lg:text-base">
          Get this template on
        </span>
        <Link
          href="https://layrdui.in/templates"
          target="_blank"
          className="text-sm sm:text-base md:text-base lg:text-lg font-semibold hover:underline underline underline-offset-4 transition-all"
        >
          LayrdUI
        </Link>
      </div>

      {/* Buttons Section */}
      <div className=" gap-2 sm:gap-2.5 md:gap-3">
        <Link
          href="https://www.layrdui.in/templates/bloggify-template"
          target="_blank"
          className="bg-white dark:bg-black text-black dark:text-white px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2 lg:py-2.5 rounded-md text-xs sm:text-sm md:text-base font-semibold hover:bg-neutral-100 transition-colors whitespace-nowrap"
        >
          Get Template
        </Link>
        {/* <Button
          variant="default"
          size="icon"
          onClick={handleClose}
          className="hover:bg-blue-600 bg-blue-700 transition-colors p-1.5 sm:p-2 md:p-2 h-auto w-auto"
          aria-label="Close banner"
        >
          <X className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 text-white" />
        </Button> */}
      </div>
    </div>
  );
}