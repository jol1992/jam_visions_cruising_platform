import "./App.css";
import { CallToActionButton } from "./Components/Buttons/CallToActionButton";
import { WelcomeVideo } from "./Components/Videos/WelcomeVideo";

export const App = () => {
  return (
    <>
      <CallToActionButton label="Im coming😊" />
      <h1>Back on the Valor! 🎉</h1>
      <p>
        WE ARE SAILING ON THE CARNIVAL VALOR AGAIN IN 2026 AND WE HOPE THAT YOU
        CAN SAIL WITH US{" "}
      </p>
      <WelcomeVideo />
    </>
  );
};
