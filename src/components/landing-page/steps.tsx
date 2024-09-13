import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card"

export default function Steps() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8">How it works</h2>
            <p className="text-center mb-8 text-muted-foreground">Financial analysis and insights in three easy steps.</p>
            <div className="grid md:grid-cols-3 gap-8">
            <StepCard step="1" description="Set Your Prompt Instruction"  />
            <StepCard step="2" description="Real-Time Data and AI-Powered Analysis"  />
            <StepCard step="3" description="Receive Custom Reports"  />
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-4">
            <ImageCard src="/step1.png" alt="Step 1"  />
            <ImageCard src="/step2.png" alt="Step 2"  />
            <ImageCard src="/step3.png" alt="Step 3"  />
            </div>
        </div>
    )
}

function StepCard({ step, description }: {step: string, description: string}) {
    return (
      <div className="text-center">
        <h3 className="font-semibold mb-2">STEP {step}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    )
  }
  
  function ImageCard({ src, alt }: {src: string, alt: string}) {
    return (
      <Card className="bg-transparent drop-shadow-lg">
        <CardContent className="p-0">
          <Image src={src} alt={alt} width={0} height={0} sizes="100vw" className="h-full w-full rounded-lg" />
        </CardContent>
      </Card>
    )
  }