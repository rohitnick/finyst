'use client'

import { Dispatch, SetStateAction } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { ThemeToggle } from '../theme-toggle'
import { Card } from '../ui/card'

export default function Step2({setStep}: {setStep: Dispatch<SetStateAction<number>>}) {

  const researchOptions = [
    { id: 'financial', label: 'Financial Performance' },
    { id: 'products', label: 'Products and Services' },
    { id: 'history', label: 'Company History' },
    { id: 'leadership', label: 'Leadership Team' },
    { id: 'competitors', label: 'Competitor Analysis' },
  ]

  return (
    <div className="flex text-left flex-col bg-transparen drop-shadow-lg p-4 rounded-lg border text-card-foreground shadow-sm">
      <header className="w-full flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Finyst</h1>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </header>
      <div className="w-full space-y-6 rounded-xl">
        {/* <h1 className="text-xl font-bold mb-4">Create a research report on Tata Consultancy Services Ltd (TCS)</h1> */}
        <div className='relative'>
          <Input 
              id="other"
              type="text"
              value="Create a research report on Tata Consultancy Services Ltd (TCS)"
              readOnly
              className="pr-20 border-primary focus:border-0"
          />
          <Button className="absolute right-0 top-0 h-full" variant="link">
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
              placeholder="e.g., Sustainability initiatives"
              className="pr-20"
            />
          </div>

          <div className="flex justify-end space-x-4 mt-4">
            <Button size="sm" variant="outline" className="border">
              Skip
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setStep(3)}>
              Send
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}