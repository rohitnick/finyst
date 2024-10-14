'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PaperPlaneIcon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import { ThemeToggle } from '../theme-toggle'
import { Card } from '../ui/card'
import PulsatingDot from '../pulsating-dot'
import Link from 'next/link'

export default function Step3({setStep}: {setStep: Dispatch<SetStateAction<number>>}) {
  const [newUrl, setNewUrl] = useState('')
  const [urls, setUrls] = useState([
    { id: '1', value: 'https://trendlyne.com/research-reports/stock/1372/TCS/', checked: true },
    { id: '2', value: 'https://www.screener.in/company/TCS/consolidated/', checked: true },
    { id: '3', value: 'https://simplywall.st/stocks/in/software/nse-tcs/tata-consultancy-services-shares', checked: true },
    { id: '4', value: 'https://www.tcs.com/content/dam/tcs/investor-relations/financial-statements/2023-24/ar/annual-report-2023-2024.pdf', checked: true },
  ])

  const toggleUrl = (id: string) => {
    setUrls(urls.map(url => 
      url.id === id ? { ...url, checked: !url.checked } : url
    ))
  }

  const addUrl = () => {
    if (newUrl) {
      setUrls([...urls, { id: Date.now().toString(), value: newUrl, checked: false }])
      setNewUrl('')
    }
  }

  const removeUrl = (id: string) => {
    setUrls(urls.filter(url => url.id !== id))
  }

  return (
    <div className="flex text-left flex-col bg-transparent p-4 rounded-lg border text-card-foreground">
      <header className="w-full flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Step 3: Select Sources to Analyze</h1>
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
          <Button className="absolute right-0 top-0 h-full cursor-default" variant="link">
            <PaperPlaneIcon className="w-6 h-6" />
          </Button>
        </div>
        <Card className="relative p-4">
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-md">Which URLs would you like us to analyze in the research report?</h2>
                </div>
                
                <div className="space-y-2 text-muted-foreground">
                    {urls.map((url) => (
                    <div key={url.id} className="flex space-x-2 items-center justify-between">
                        <Checkbox 
                        id={url.id} 
                        checked={url.checked}
                        onCheckedChange={() => toggleUrl(url.id)}
                        className="data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400"
                        />
                        <Link target='_blank' href={url.value} className="flex-grow	break-all">{url.value}</Link>
                        <Button variant="ghost" size="icon" onClick={() => removeUrl(url.id)} className='min-w-10'>
                          <TrashIcon className="h-5 w-5" />
                        </Button>
                    </div>
                    ))}
                </div>
            </div>

            <div className="space-y-2 mt-6 text-muted-foreground">
                <Label htmlFor="newUrl">If required, add a new URL</Label>
                <div className="flex space-x-2">
                    <Input
                    id="newUrl"
                    placeholder="https://example.com"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    className="flex-grow"
                    readOnly
                    />
                    <Button 
                    onClick={addUrl}
                    className="bg-primary"
                    >
                    <PlusIcon className="h-4 w-4" />
                    </Button>
                </div>
            </div>
          <div className="flex justify-between mt-4">
            <Button size="sm" className="border relative" onClick={() => setStep(2)}>
              Back
              <PulsatingDot positionClass="-top-1 -right-1" message="Click here" />
            </Button>
            <div className='space-x-4'>
              <Button size="sm" variant="outline" disabled className="border">
                Skip
              </Button>
              <Button size="sm" className="relative" onClick={() => setStep(4)}>
                Send
                <PulsatingDot positionClass="-top-1 -right-1" message="Click here" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}