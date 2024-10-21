import PulsatingDot from "@/components/pulsating-dot"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PaperPlaneIcon, GlobeIcon, FileTextIcon, BarChartIcon, PieChartIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { useState } from "react"

interface OptionCardProps {
  icon: React.ReactNode,
  text: React.ReactNode
}

export default function Demo() {
  const [input, setInput] = useState('')

  const exampleMessages: Record<string, React.ReactNode>[] = [
    {
      icon: <GlobeIcon className="w-6 h-6" />,
      text: 'Create a research report on Tata Consultancy Services Ltd (TCS)'
    },
    {
      icon:  <FileTextIcon className="w-6 h-6" />,
      text: 'Balance Sheet Analysis of Trent Ltd. for the Financial Year 2023-2024'
    },
    {
      icon: <BarChartIcon className="w-6 h-6" />,
      text: 'Analyze the risk of investing in Adani Green Energy Ltd'
    },
    {
      icon: <PieChartIcon className="w-6 h-6" />,
      text: 'Generate a portfolio diversification strategy'
    },
    {
      icon: <ExclamationTriangleIcon className="w-6 h-6" />,
      text: 'Identify potential risks in the current market conditions'
    }
  ]

  const OptionCard = ({ icon, text}: OptionCardProps) => {
    return (
      <Card className="flex items-center p-4 hover:bg-secondary transition-colors cursor-pointer">
        <div className="text-primary mr-4">{icon}</div>
        <p className="text-sm">{text}</p>
      </Card>
    )
  }

  return (
    <center>
      <Card className="max-w-2xl">
        <CardHeader>
          <div>
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Ask a question..." 
                className="pr-20 border-primary focus:border-0"
              />
              <Button className="absolute right-0 top-0 h-full" variant="link">
                <PaperPlaneIcon className="w-6 h-6" />
              </Button>
            </div>
            <div className='w-full text-right'>
              <span className="text-sm text-muted-foreground">2000 Words</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full space-y-4 relative">
            {exampleMessages.map((message, index) => (
              <OptionCard
                key={index}
                icon={message.icon}
                text={message.text}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </center>
  )
}