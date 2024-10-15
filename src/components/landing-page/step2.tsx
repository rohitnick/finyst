'use client'

import { Dispatch, SetStateAction } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Card } from '@/components/ui/card'
import PulsatingDot from '@/components/pulsating-dot'

export default function Step2({setStep}: {setStep: Dispatch<SetStateAction<number>>}) {

  const researchOptions = [
    { id: 'financial', label: 'Financial Performance' },
    { id: 'products', label: 'Products and Services' },
    { id: 'history', label: 'Market Capitalization' },
    { id: 'leadership', label: 'Analyst Insights' },
    { id: 'competitors', label: 'Valuation Analysis' },
  ]

  return (
    <div className="flex text-left flex-col bg-transparent p-4 rounded-lg border text-card-foreground">
      <header className="w-full flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Step 2: Refine Keywords</h1>
      </header>
      <div className="w-full space-y-6">
        {/* <h1 className="text-xl font-bold mb-4">Create a research report on Tata Consultancy Services Ltd (TCS)</h1> */}
        <div className='relative'>
          <Input 
              id="other"
              type="text"
              value="Create a research report on Tata Consultancy Services Ltd (TCS)"
              readOnly
              className="pr-20 border-primary focus:border-0"
          />
          <Button className="absolute right-0 top-0 h-full cursor-default" variant="link">
            <PaperPlaneIcon className="w-6 h-6" />
          </Button>
        </div>
        
        <Card className="relative p-4">
          <div className="space-y-4">
            <div className="text-md">What specific aspects of TCS would you like me to focus on in the research report?</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              {researchOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox id={option.id} className="data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400" />
                  <Label htmlFor={option.id} className="">{option.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 mt-8 text-muted-foreground">
            <Label htmlFor="other">If other, please specify</Label>
            <Input 
              id="other"
              type="text"
              placeholder="e.g., Management remuneration, Cash flow analysis "
              className="pr-20"
              readOnly
            />
          </div>

          <div className="flex justify-between mt-4">
            <Button size="sm" className="border relative" onClick={() => setStep(1)}>
              Back
              <PulsatingDot positionClass="-top-1 -right-1" message="Click here" />
            </Button>
            <div className='space-x-4'>
              <Button size="sm" variant="outline" disabled className="border">
                Skip
              </Button>
              <Button size="sm" className="relative" onClick={() => setStep(3)}>
                Add Keywords
                <PulsatingDot positionClass="-top-1 -right-1" message="Click here" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}