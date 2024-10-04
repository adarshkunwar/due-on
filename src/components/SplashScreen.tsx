import React from "react";

const SplashScreen = () => {
  return (
    <div style={styles.splashScreen}>
      <h1>Welcome to My App</h1>
    </div>
  );
};

const styles = {
  splashScreen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#4CAF50", // Customize background
    color: "white",
    fontSize: "2rem",
  },
};

export default SplashScreen;
