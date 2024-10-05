import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for fade-in effect
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

// Styled-components for splash screen design
const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: white;
  text-align: center;
`;

const ClockFace = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border: 5px solid white;
  border-radius: 50%;
`;

const Hand = styled.div<{ width: number; height: number }>`
  position: absolute;
  background-color: white;
  transform-origin: bottom;
  transform: rotate(90deg);
  left: 50%;
  bottom: 50%;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transition: transform 0.5s ease-in-out; /* Smooth transition */
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-top: 20px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  animation: ${fadeIn} 2.5s ease-in-out;
`;

// Main SplashScreen component
const SplashScreen: React.FC = () => {
  const [secondRotation, setSecondRotation] = useState(0);
  const [minuteRotation, setMinuteRotation] = useState(0);
  const [hourRotation, setHourRotation] = useState(0);

  // UseEffect to update the clock every second
  useEffect(() => {
    const updateClock = () => {
      const currentDate = new Date();
      const seconds = currentDate.getSeconds();
      const minutes = currentDate.getMinutes();
      const hours = currentDate.getHours();

      // Calculate the correct rotation for each hand
      setSecondRotation((seconds / 60) * 360);
      setMinuteRotation((minutes / 60) * 360);
      setHourRotation((hours / 12) * 360 + (minutes / 60) * 30);
    };

    // Call the updateClock function every second
    const interval = setInterval(updateClock, 1000);

    // Update the clock immediately without waiting for the first interval tick
    updateClock();

    return () => clearInterval(interval); // Clear the interval on unmount
  }, []);

  return (
    <SplashContainer>
      <ClockFace>
        {/* Hour hand */}
        <Hand
          width={2}
          height={50}
          style={{ transform: `rotate(${hourRotation}deg)` }}
        />
        {/* Minute hand */}
        <Hand
          width={2}
          height={60}
          style={{ transform: `rotate(${minuteRotation}deg)` }}
        />
        {/* Second hand */}
        <Hand
          width={1}
          height={70}
          style={{ transform: `rotate(${secondRotation}deg)` }}
        />
      </ClockFace>
      <Title>Due On</Title>
      <Tagline>Organize your future, one task at a time</Tagline>
    </SplashContainer>
  );
};

export default SplashScreen;
