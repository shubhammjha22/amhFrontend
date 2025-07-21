import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AssessmentComplete({
  score,
  grade,
  readinessLevel,
  recommendation,
  steps,

  getScoreColor,
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Back button */}
        <Link href={"/business-assessment"}>
          <Button
            variant="ghost"
            // onClick={onBack}
            className="text-gray-400 hover:text-white mb-8 hover:bg-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl text-white mb-4">Assessment Complete!</h1>
          <p className="text-gray-300 text-lg">
            Here's your Outscale Readiness Score
          </p>
        </div>

        {/* Score box */}
        <div className="bg-gray-900 p-12 rounded-2xl mb-8 border border-gray-800">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className={`text-8xl ${getScoreColor(score)}`}>{score}%</div>
              <div
                className={`text-6xl ${getScoreColor(
                  score
                )} border-2 border-current rounded-full w-24 h-24 flex items-center justify-center`}
              >
                {grade}
              </div>
            </div>
            <p className="text-gray-300 text-xl mb-2">
              Outscale Readiness Score
            </p>
            <p className={`text-lg ${getScoreColor(score)}`}>
              {readinessLevel}
            </p>
          </div>

          {/* Assessment and next steps */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl text-white">Your Assessment Results</h3>
              <p className="text-gray-300 leading-relaxed">{recommendation}</p>

              <div className="space-y-3">
                <h4 className="text-lg text-white">Key Areas Assessed:</h4>
                <div className="space-y-2 text-sm">
                  {steps.map((step) => (
                    <div key={step.id} className="flex justify-between">
                      <span className="text-gray-400">{step.title}</span>
                      <span className="text-green-400">✓</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl text-white">Recommended Next Steps</h3>
              <ul className="space-y-4">
                {[
                  "Download your personalized Operations Readiness Report",
                  "Schedule a free 30-minute consultation with our experts",
                  "Receive your custom Outscale Advantage Plan™",
                ].map((step, idx) => (
                  <li className="flex items-start" key={idx}>
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105">
            Get My Readiness Report
          </Button>
          <Button className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-8 py-3 rounded-lg transition-all duration-200">
            Schedule Consultation
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-8 py-3 rounded-lg"
            // onClick={onBack}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
