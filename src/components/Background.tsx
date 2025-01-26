import React, { useState, useEffect } from "react";
import { FlipWordsDemo } from "./Flipwords";
import { Navbar } from "./Navbar";
import { FileUploadDemo } from "./Upload";
import { InfiniteMovingCardsDemo } from "./Infinitemovingcards";
import { Footer } from "./Footer";
import RotatingCardsLoader from "./Loader";

export function GridBackgroundDemo() {
    const [isLoading, setIsLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        // Simulate initial page load
        setTimeout(() => {
            setPageLoading(false);
        }, 2000); // Show loader for 2 seconds
    }, []);

    if (pageLoading) {
        return (
            <div className="h-screen w-full flex items-center justify-center dark:bg-black bg-black">
                <RotatingCardsLoader />
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <div className="bg-black">
                <Navbar />
            </div>
            <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative">
                {/* Radial gradient background with enhanced gradient */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-pink-50/20 dark:from-blue-900/10 dark:to-purple-900/10"></div>
                </div>

                {/* Main content container - reduced pt-20 to pt-12 and space-y-12 to space-y-8 */}
                <div className="relative z-20 flex flex-col items-center justify-start -t-48 px-4 space-y-8">
                    {/* Animated words */}
                    <div className="w-full max-w-2xl">
                        <FlipWordsDemo />
                    </div>

                    {/* Subheadings - reduced space-y-2 to space-y-1 */}
                    <div className="text-center space-y-1">
                        <p className="text-lg md:text-xl text-gray-500 font-medium -mt-48">
                            Learn Effortlessly: Convert PDFs into Scrollable Flashcards!
                        </p>
                        <p className="text-lg md:text-xl text-gray-500 font-medium">
                            Now learning is just a scroll away!
                        </p>
                    </div>

                    {/* CTA Button - reduced p-4 to p-3 and gap-4 to gap-3 */}
                    <div className=" w-full max-w-md bg-gray-500/50 backdrop-blur-sm p-3 rounded-full flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                        <div className="text-white text-center md:text-left text-sm md:text-base">
                            Join the future of learning now!
                        </div>
                        <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 transition-colors rounded-full py-2 px-6 text-white font-medium">
                            Get Started Now
                        </button>
                    </div>

                    {/* File upload section with loader */}
                    <div className="w-full max-w-2xl mt-8">
                        {isLoading ? (
                            <RotatingCardsLoader />
                        ) : (
                            <FileUploadDemo setIsLoading={setIsLoading} />
                        )}
                    </div>
                    <div className="">
                      <InfiniteMovingCardsDemo /> 
                    </div>
                    <div>
                       <Footer /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

