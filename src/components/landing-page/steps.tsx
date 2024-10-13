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
    <div>
      <h2 className="text-4xl font-bold text-center mb-2">How it works</h2>
      <p className="text-center text-md md:text-xl mb-8 text-muted-foreground">Financial analysis and insights in three easy steps.</p>
      {step === 1 && (
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <h3 className="sm:text-2xl md:text-3xl">Set Your Prompt</h3>
          <Step1 setStep={setStep} />
        </div>
      )}

      {step === 2 && (
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <h3 className="sm:text-2xl md:text-3xl">Real-Time Data and AI-Powered<br/>Analysis</h3>
          <Step2 setStep={setStep} />
        </div>
      )}

      {step === 3 && (
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <h3 className="sm:text-2xl md:text-3xl">Receive Tailored, In-Depth Reports</h3>
          <Step3 setStep={setStep} />
        </div>
      )}

      {step === 4 && (
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <h3 className="sm:text-2xl md:text-3xl">Receive Tailored, In-Depth Reports</h3>
          <Step4 />
        </div>
      )}
    </div>
  )
}
