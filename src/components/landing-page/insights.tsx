import { Card, CardContent } from "@/components/ui/card"
import { AnalysisIcon, LineChartIcon, ResearchIcon } from "@/components/ui/icons"

export default function Insights() {
  return (
    <Card className="border-none bg-transparent">
      <CardContent className="p-0 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="flex items-start space-x-4">
          <div className="p-1 bg-card border rounded"><LineChartIcon className="h-6 flex-shrink-0" /></div>
          <div>
            <h3 className="text-xl font-semibold my-1">Data Insights</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Unlock deep insights from real-time financial data, transforming complex trends into clear, actionable intelligence for decision-making
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
        <div className="p-1 bg-card border rounded"><ResearchIcon className="h-6 flex-shrink-0" /></div>
          <div>
            <h3 className="text-xl font-semibold my-1">Research Reports</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Effortlessly generate comprehensive, data-rich research reports, providing you with detailed analysis and expert insights in minutes
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
        <div className="p-1 bg-card border rounded"><AnalysisIcon className="h-6 flex-shrink-0" /></div>
          <div>
            <h3 className="text-xl font-semibold my-1">Fundamental Analysis</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Gain a clear understanding of financial fundamentals with AI-driven analysis, simplifying complex metrics for confident investment decisions
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}