import { PaperPlaneIcon, GlobeIcon, FileTextIcon, BarChartIcon, PieChartIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from '@/components/theme-toggle'
import { Dispatch, SetStateAction } from 'react'

interface OptionCardProps {
  icon: React.ReactNode,
  text: string
}

export default function Step1({setStep}: {setStep: Dispatch<SetStateAction<number>>}) {

  const OptionCard = ({ icon, text }: OptionCardProps) => {
    return (
      <Card className="flex items-center p-4 hover:bg-secondary cursor-pointer transition-colors" onClick={() => setStep(2)} >
        <div className="text-primary mr-4">{icon}</div>
        <p className="text-sm">{text}</p>
      </Card>
    )
  }

  return (
    <main className="flex flex-col bg-transparent drop-shadow-lg p-4 rounded-lg border text-card-foreground shadow-sm">
      <header className="w-full flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Finyst</h1>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </header>

      <div className="w-full mb-8">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Ask a question..." 
            className="pr-20 border-primary focus:border-0"
          />
          <Button className="absolute right-0 top-0 h-full" variant="link">
            <PaperPlaneIcon className="w-6 h-6 text-primary" />
          </Button>
        </div>
        <div className='w-full text-right'>
        <span className="text-sm text-muted-foreground">2000 Words</span>
        </div>
      </div>

      <div className="w-full space-y-4">
        <OptionCard 
          icon={<GlobeIcon className="w-6 h-6" />}
          text="Create a research report on Tata Consultancy Services Ltd (TCS)"
        />
        <OptionCard 
          icon={<FileTextIcon className="w-6 h-6" />}
          text="Balance Sheet Analysis of Trent Ltd. for the Financial Year 2023-2024"
        />
        <OptionCard 
          icon={<BarChartIcon className="w-6 h-6" />}
          text="Analyze the risk of investing in Adani Green Energy Ltd"
        />
        <OptionCard 
          icon={<PieChartIcon className="w-6 h-6" />}
          text="Generate a portfolio diversification strategy"
        />
        <OptionCard 
          icon={<ExclamationTriangleIcon className="w-6 h-6" />}
          text="Identify potential risks in the current market conditions"
        />
      </div>
    </main>
  )
}
