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
    <div className="mx-auto grid items-center md:grid-cols-2 gap-3 md:border rounded-lg py-6 px-3 md:py-12 md:px-8">
      {/* First Section */}
      <div className="flex justify-start md:order-1 order-2">
        {step === 1 && <Step1 setStep={setStep} />}
        {step === 2 && <Step2 setStep={setStep} />}
        {step === 3 && <Step3 setStep={setStep} />}
        {step === 4 && <Step4 setStep={setStep} />}
      </div>
      {/* Second Section */}
      <div className="flex flex-col gap-1 md:gap-2 md:order-2 order-1">
        <h1 className="text-3xl lg:text-4xl font-bold">How It Works</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Financial analysis and insights in four easy steps.
        </p>
      </div>
    </div>
  )
}
