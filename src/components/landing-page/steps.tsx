import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card"

export default function Steps() {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-2">How it works</h2>
            <p className="text-center text-xl mb-8 text-muted-foreground">Financial analysis and insights in three easy steps.</p>
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <h2 className="md:hidden text-2xl">Set Your Prompt</h2> {/* for small screens */}
              <ImageCard src="/step1.png" alt="Step 1"  />
              <h3 className="hidden md:inline text-3xl">Set Your Prompt</h3>
              <h2 className="md:hidden text-2xl mt-8">Real-Time Data and AI-Powered Analysis</h2> {/* for small screens */}
              <h3 className="hidden md:inline text-3xl">Real-Time Data and AI-Powered<br/>Analysis</h3>
              <ImageCard src="/step2.png" alt="Step 2"  />
              <h2 className="md:hidden text-2xl mt-8">Receive Tailored, In-Depth Reports</h2> {/* for small screens */}
              <ImageCard src="/step3.png" alt="Step 3"  />
              <h3 className="hidden md:inline text-3xl">Receive Tailored, In-Depth Reports</h3>
            </div>
        </div>
    )
}
  
  function ImageCard({ src, alt }: {src: string, alt: string}) {
    return (
      <Card className="bg-transparent drop-shadow-lg border-0 md:border">
        <CardContent className="p-0">
          <Image src={src} alt={alt} width={0} height={0} sizes="100vw" className="h-[550px] w-full rounded-lg" />
        </CardContent>
      </Card>
    )
  }