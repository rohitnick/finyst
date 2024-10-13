'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { ArrowRightIcon, CheckIcon, CopyIcon, LayersIcon, Link2Icon, PaperPlaneIcon, Pencil2Icon, ReaderIcon } from '@radix-ui/react-icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import PulsatingDot from '../pulsating-dot'

export default function Step4({setStep}: {setStep: Dispatch<SetStateAction<number>>}) {
  const [isCopied, setIsCopied] = useState(false)

  const reportSections = [
    { 
      id: "overview", 
      title: "Overview", 
      content: "Tata Consultancy Services Ltd (TCS) is one of the largest IT services companies in India and a subsidiary of the Tata Group. It provides a wide range of services including consulting, software development, infrastructure support, and business process outsourcing. TCS is known for its strong presence in various sectors such as banking, financial services, insurance (BFSI), retail, and telecommunications."
    },
    { 
      id: "financialPerformance", 
      title: "Financial Performance", 
      content: "As of October 2024, TCS is expected to report its quarterly results for the period ending September 2024. Analysts predict a net profit of approximately ₹12,573.69 crore for this quarter, reflecting a stable performance amidst a recovering market environment, particularly in the BFSI sector. The company's revenue for the fiscal year 2025 is projected to reach ₹2.58 trillion, indicating a growth of 3.7% compared to the previous year."
    },
    { 
      id: "marketCapitalization", 
      title: "Market Capitalization", 
      content: "TCS has a market capitalization exceeding ₹15 lakh crore, making it one of the most valuable companies in the Indian stock market. This valuation underscores its significant role in the IT sector and its resilience in navigating market challenges."
    },
    { 
      id: "analystInsights", 
      title: "Analyst Insights", 
      content: "Recent reports from various analysts indicate a consensus price target for TCS shares ranging from ₹4,227.40 to ₹4,482.44, reflecting a cautious optimism about the company's future performance. The upcoming earnings report is highly anticipated, as it will provide insights into the company's operational efficiency and market strategy."
    },
    { 
      id: "strategicInitiatives", 
      title: "Strategic Initiatives", 
      content: "TCS continues to focus on innovation and sustainability, as highlighted in its latest annual report. The company is investing in digital transformation initiatives and expanding its service offerings to meet the evolving needs of its clients."
    },
    { 
      id: "conclusion", 
      title: "Conclusion", 
      content: "Tata Consultancy Services Ltd remains a key player in the global IT services market, with strong financial performance and strategic initiatives aimed at sustaining growth. The upcoming quarterly results will be crucial in assessing its trajectory in the competitive landscape of IT services."
    }
  ];
  

  const sources = [
    {
      id: 1,
      title: "Tata Consultancy Services Ltd. Stock Analysis and Reports",
      domain: "trendlyne.com",
      url: "https://trendlyne.com/research-reports/stock/1372/TCS/",
      icon: "T",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "TCS Financial Overview on Screener",
      domain: "screener.in",
      url: "https://www.screener.in/company/TCS/consolidated/",
      icon: "S",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Tata Consultancy Services - Company Overview",
      domain: "simplywall.st",
      url: "https://simplywall.st/stocks/in/software/nse-tcs/tata-consultancy-services-shares",
      icon: "SW",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "TCS Annual Report 2023-2024",
      domain: "tcs.com",
      url: "https://www.tcs.com/content/dam/tcs/investor-relations/financial-statements/2023-24/ar/annual-report-2023-2024.pdf",
      icon: "PDF",
      color: "bg-gray-500"
    }
  ];

  const relatedQuestions = [
    "What are the key factors driving the expected growth in TCS's BFSI sector, and how sustainable are these factors?",
    "How does TCS's recent performance compare to its competitors in the Indian IT services sector, and what are the key differentiators?",
    "What are the potential risks and challenges TCS might face in the coming quarters, and how is the company mitigating these risks?",
  ]

  const copyReportToClipboard = async () => {
    const reportText = reportSections.map(section => `${section.title}\n${section.content}\n\n`).join('')
    
    try {
      await navigator.clipboard.writeText(reportText)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 3500)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="flex text-left flex-col bg-transparent drop-shadow-lg p-4 rounded-lg border text-card-foreground shadow-sm">
      <header className="w-full flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Step 4: Get Your Custom Report</h1>
      </header>
      <div className="max-w-4xl mx-auto space-y-4">      
        <div className="space-y-3">
          <h1 className="text-lg font-bold flex items-center leading-none gap-1">
            <ReaderIcon className='text-primary' />
            Research Report on Tata Consultancy Services Ltd (TCS)
          </h1>
          <Card className="relative px-4">
            <Accordion type="single" collapsible className="w-full">
              {reportSections.map((section, i) => (
                <AccordionItem key={section.id} value={section.id} className={`${i+1 === reportSections.length && 'border-b-0'}`}>
                  <AccordionTrigger
                    className='text-left py-4 data-[state=open]:text-primary'
                  >
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent>
                        <ScrollArea className="w-full pr-4">
                          <p className="">{section.content}</p>
                        </ScrollArea>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <div className="flex flex-col items-end text-xs text-muted-foreground">
            <a
              className="hover:text-primary flex items-center cursor-pointer"
              onClick={copyReportToClipboard}
            >
              {isCopied ? (
                <CheckIcon className="mr-1 h-4 w-4" />
              ) : (
                <CopyIcon className="mr-1 h-4 w-4" />
              )}
              {isCopied ? 'Copied!' : 'Copy text'}
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="flex items-center leading-none py-2 gap-1 text-md">
            <Link2Icon className='text-primary' />
            Sources
          </h2>
          <div className="grid grid-cols-1 grid-cols-3 md:grid-cols-5 gap-2">
            {sources.map((source, index) => (
              <Card key={source.id} className="bg-card overflow-hidden">
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="block p-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${source.color} flex items-center justify-center flex-shrink-0 rounded-sm`}>
                      <span className="text-xs font-bold">{source.icon}</span>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm truncate">{source.title}</p>
                      <p className="text-xs truncate">{source.domain}</p>
                    </div>
                  </div>
                </a>
              </Card>
            ))}
            <Card className="bg-card overflow-hidden">
              <div className="p-3 h-full flex items-center justify-center">
                <span className="text-sm font-medium">View 5 more</span>
              </div>
            </Card>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="flex items-center leading-none py-2 gap-1 text-md">
            <LayersIcon className='text-primary' />
            Related
          </h2>
          <ul className="space-y-1.5 text-muted-foreground text-sm">
            {relatedQuestions.map((question, index) => (
              <li key={index} className="flex items-start hover:underline">
                <ArrowRightIcon className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{question}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='space-y-2'>
          <h2 className="flex items-center leading-none py-2 gap-1 text-md">
            <Pencil2Icon className='text-primary' />
            Follow Up
          </h2>
          <div className='relative cursor-pointer' onClick={() => {setStep(1); globalThis.scrollBy({
            top: -250,
            left: 0,
            behavior: "smooth",
          });}}>
            <Input
              type="text"
              placeholder="Ask a question..."
              className="pr-20 border-primary focus:border-0"
            />
            <Button className="absolute right-0 top-0 h-full" variant="link">
              <PaperPlaneIcon className="w-6 h-6" />
            </Button>
            <PulsatingDot positionClass="-right-1 -top-1" message="Click here" />
          </div>
        </div>
      </div>
    </div>
  )
}