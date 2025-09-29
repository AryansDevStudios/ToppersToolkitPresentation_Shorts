import React, { useState, useEffect } from "react";
import { Presentation } from "./components/Presentation";
import { Expand, Shrink } from "lucide-react";

export default function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    // This main container handles the background and centers the content.
    // The `relative` class is essential for positioning the fullscreen button.
    <div className="relative h-screen w-screen bg-gray-900 flex items-center justify-center">
      
      {/* 
        This is the key addition: The scaling wrapper from our previous conversation.
        It forces the <Presentation /> component into the correct 9:16 aspect ratio 
        and scales it down to fit the screen perfectly.
      */}
      <div className="w-full h-full max-w-[calc(100vh*9/16)] max-h-full aspect-[9/16] shadow-2xl">
        <Presentation />
      </div>

      {/* 
        Your fullscreen button remains here. It is positioned relative to the
        entire screen, floating on top of everything. This is perfect.
      */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-20 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors"
        aria-label="Toggle Fullscreen"
      >
        {isFullscreen ? (
          <Shrink className="w-5 h-5" />
        ) : (
          <Expand className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}