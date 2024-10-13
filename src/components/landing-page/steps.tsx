import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card"
import Step1 from "@/components/landing-page/step1";
import Step2 from "@/components/landing-page/step2";
import Step3 from "@/components/landing-page/step3";
import Step4 from "./step4";
import { useState } from "react";

export default function Steps() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-bold text-center mb-2">How it works</h2>
      <p className="text-center text-md md:text-xl mb-8 text-accent-foreground/50">Financial analysis and insights in three easy steps.</p>
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
      {step === 4 && <Step4 setStep={setStep} />}
    </div>
  )
}
