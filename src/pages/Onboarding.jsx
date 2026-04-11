import { useState } from "react";
import StepIdentity from "../components/onboarding/StepIdentity";
import StepSound from "../components/onboarding/StepSound";
import StepSuccess from "../components/onboarding/StepSuccess";
export default function Onboarding() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {step === 1 && <StepIdentity onNext={() => setStep(2)} />}
      {step === 2 && <StepSound onNext={() => setStep(3)} />}
      {step === 3 && <StepSuccess />}
    </div>
  );
}
