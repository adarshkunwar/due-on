"use client";
import SplashScreen from "@/components/SplashScreen";
import React, { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3-second delay for splash screen

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div>
      {isLoading ? (
        <SplashScreen /> // Show splash screen while loading
      ) : (
        <div>
          {/* Your main content goes here */}
          <h1>Main App Content</h1>
        </div>
      )}
    </div>
  );
};

export default App;
