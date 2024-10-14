import { PaperPlaneIcon, GlobeIcon, FileTextIcon, BarChartIcon, PieChartIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from '@/components/theme-toggle'
import { Dispatch, SetStateAction } from 'react'
import PulsatingDot from '../pulsating-dot'

interface OptionCardProps {
  icon: React.ReactNode,
  text: string
}

export default function Step1({setStep}: {setStep: Dispatch<SetStateAction<number>>}) {

  const OptionCard = ({ icon, text}: OptionCardProps) => {
    return (
      <Card className="flex items-center p-4 hover:bg-secondary transition-colors" >
        <div className="text-primary mr-4">{icon}</div>
        <p className="text-sm">{text}</p>
      </Card>
    )
  }

  return (
    <div className="flex text-left flex-col bg-transparent p-4 rounded-lg border text-card-foreground">
      <header className="w-full flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Step 1: Set Your Query</h1>
      </header>

      <div className="w-full space-y-6">
        <div>
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Ask a question..." 
              className="pr-20 border-primary focus:border-0"
              readOnly
            />
            <Button className="absolute right-0 top-0 h-full cursor-default" variant="link">
              <PaperPlaneIcon className="w-6 h-6" />
            </Button>
          </div>
          <div className='w-full text-right'>
            <span className="text-sm text-muted-foreground">2000 Words</span>
          </div>
        </div>

        <div className="w-full space-y-4 relative">
          <a className='cursor-pointer' onClick={() => setStep(2)}>
            <OptionCard
              icon={<GlobeIcon className="w-6 h-6" />}
              text="Create a research report on Tata Consultancy Services Ltd (TCS)"
            />
            <PulsatingDot positionClass="-top-1 -right-1" message="Click here" />
          </a>
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
      </div>
    </div>
  )
}
