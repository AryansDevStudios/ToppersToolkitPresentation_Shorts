import React, { useState, useEffect } from "react";
import { Presentation } from "./components/Presentation";
import { Expand, Shrink } from "lucide-react"; // Import fullscreen icons

export default function App() {
  // 1. State to track if the app is in fullscreen mode
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 2. Function to toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // If not in fullscreen, request it
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      // If in fullscreen, exit it
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // 3. Effect to listen for fullscreen changes (like pressing Esc)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    // Add event listener when the component mounts
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []); // The empty dependency array ensures this runs only once

  return (
    // Add `relative` to this div to position the button correctly
    <div className="relative h-screen w-screen bg-gray-900 p-[5px] flex items-center justify-center">
      <Presentation />

      {/* 4. The Fullscreen Toggle Button */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-20 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors"
        aria-label="Toggle Fullscreen"
      >
        {isFullscreen ? (
          <Shrink className="w-5 h-5" /> // Icon to show when in fullscreen
        ) : (
          <Expand className="w-5 h-5" /> // Icon to show when not in fullscreen
        )}
      </button>
    </div>
  );
}