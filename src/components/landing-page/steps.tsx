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
      <div className="grid md:grid-cols-4 gap-4 items-center">
        {step === 1 && (<>
          <h2 className="md:hidden text-2xl">Set Your Prompt</h2> {/* for small screens */}
          <h3 className="hidden md:inline text-3xl">Set Your Prompt</h3>
          <div className="col-span-3">
            <Step1 setStep={setStep} />
          </div>
          </>
        )}

        {step === 2 && (<>
          <h2 className="md:hidden text-2xl mt-8">Real-Time Data and AI-Powered Analysis</h2> {/* for small screens */}
          <h3 className="hidden md:inline text-3xl">Real-Time Data and AI-Powered<br/>Analysis</h3>
          <div className="col-span-3">
            <Step2 setStep={setStep} />
          </div>
          </>
        )}

        {step === 3 && (<>
          <h2 className="md:hidden text-2xl mt-8">Receive Tailored, In-Depth Reports</h2> {/* for small screens */}
          <h3 className="hidden md:inline text-3xl">Receive Tailored, In-Depth Reports</h3>
          <div className="col-span-3">
            <Step3 setStep={setStep} />
          </div>
          </>
        )}

        {step === 4 && (<>
          <h2 className="md:hidden text-2xl mt-8">Receive Tailored, In-Depth Reports</h2> {/* for small screens */}
          <h3 className="hidden md:inline text-3xl">Receive Tailored, In-Depth Reports</h3>
          <div className="col-span-3">
            <Step4 />
          </div>
          </>
        )}
      </div>
    </div>
  )
}
