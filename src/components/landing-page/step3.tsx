'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PaperPlaneIcon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import { ThemeToggle } from '../theme-toggle'
import { Card } from '../ui/card'

export default function Step3({setStep}: {setStep: Dispatch<SetStateAction<number>>}) {
  const [newUrl, setNewUrl] = useState('')
  const [urls, setUrls] = useState([
    { id: '1', value: 'https://example1.com', checked: true },
    { id: '2', value: 'https://example2.com', checked: true },
    { id: '3', value: 'https://example3.com', checked: true },
    { id: '4', value: 'https://example1.com', checked: true },
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
                <div className="flex justify-between items-center">
                    <h2 className="text-md">Which URLs would you like us to analyze in the research report?</h2>
                </div>
                
                <div className="space-y-2 text-muted-foreground">
                    {urls.map((url) => (
                    <div key={url.id} className="flex items-center space-x-2">
                        <Checkbox 
                        id={url.id} 
                        checked={url.checked}
                        onCheckedChange={() => toggleUrl(url.id)}
                        className="data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400"
                        />
                        <Label htmlFor={url.id} className=" flex-grow">{url.value}</Label>
                        <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeUrl(url.id)}
                        >
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
                    />
                    <Button 
                    onClick={addUrl}
                    className="bg-primary"
                    >
                    <PlusIcon className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="flex justify-end space-x-4 mt-4">
                <Button size="sm" variant="outline" className="border">
                Skip
                </Button>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setStep(4)} >
                Send
                </Button>
            </div>
        </Card>
      </div>
    </div>
  )
}