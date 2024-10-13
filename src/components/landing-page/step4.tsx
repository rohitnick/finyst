'use client'

import { useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { ArrowRightIcon, CheckIcon, CopyIcon, FileIcon, LayersIcon, Link2Icon, ReaderIcon } from '@radix-ui/react-icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '../ui/button'

export default function Component() {
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
    { id: 1, title: "Tata Consultancy Services Ltd....", domain: "trendlyne.com", url: "https://trendlyne.com/...", icon: "T", color: "bg-blue-500" },
    { id: 2, title: "PDF 11 October 2024 Results Review Q2FY2...", domain: "hdfsec.com", url: "https://hdfsec.com/...", icon: "+", color: "bg-red-500" },
    { id: 3, title: "TCS Q2 Results: What to expect from Rs 15 lakh...", domain: "indiatimes.com", url: "https://indiatimes.com/...", icon: "ET", color: "bg-pink-500" },
  ]

  const relatedQuestions = [
    "What are the key factors driving the expected growth in TCS's BFSI sector, and how sustainable are these factors?",
    "How does TCS's recent performance compare to its competitors in the Indian IT services sector, and what are the key differentiators?",
    "What are the potential risks and challenges TCS might face in the coming quarters, and how is the company mitigating these risks?",
  ]

  const copyReportToClipboard = async () => {
    const reportText = reportSections.map(section => `${section.title}\n\n${section.content}\n\n`).join('')
    
    try {
      await navigator.clipboard.writeText(reportText)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 3500)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="flex text-left flex-col bg-transparen drop-shadow-lg p-4 rounded-lg border text-card-foreground shadow-sm">
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
                        <ScrollArea className="h-[200px] w-full pr-4">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
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
                    <div className="text-xs font-medium">{index + 1}</div>
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
            <li key={index} className="flex items-start hover:underline cursor-pointer">
              <ArrowRightIcon className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{question}</span>
            </li>
          ))}
        </ul>
      </div>
      </div>
      
    </div>
  )
}