import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FAQ() {
  const faqs = [
    {
      question: "How does this platform improve my financial research process?",
      answer: "Finyst automates and enhances financial research, providing deep insights and comprehensive analysis, allowing you to make informed investment decisions with ease"
    },
    {
      question: "What measures are in place to ensure data accuracy and reliability?",
      answer: "The platform uses real-time data from trusted sources and advanced AI algorithms to ensure insights are both accurate and timely, giving you confidence in your financial analysis."
    },
    {
      question: "Can I create custom reports for specific stocks or sectors?",
      answer: "Yes, Finyst can generate detailed and customizable research reports for any stock or sector, tailored to your specific requirements."
    },
    {
      question: "How can this tool assist me in making better investment decisions?",
      answer: "The platform breaks down complex financial data into clear insights, enabling you to make confident, data-driven investment decisions backed by reliable analysis."
    },
    {
      question: "What kind of data insights can I expect from using Finyst?",
      answer: "Finyst provides deep insights into market trends, company performance, financial metrics, and turns complex data into actionable intelligence."
    },
    {
      question: "Is this tool suitable for both professional investors and beginners?",
      answer: "The user-friendly interface is designed for both beginners and experienced investors, making it easy to navigate and gain valuable insights, even if you're just starting out."
    }
  ]

  return (
    <Card className="w-full mx-auto px-8 py-12 bg-transparent">
      <CardHeader className="text-center p-0">
        <CardTitle className="text-3xl font-bold mb-2">Everything you need to know</CardTitle>
        <p className="text-muted-foreground">Here are the questions most people always ask about.</p>
      </CardHeader>
      <CardContent className="p-0 mt-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-11 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}