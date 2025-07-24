import { steps } from "@/lib/assessmentUtil";
import { CheckCircle } from "lucide-react";

export const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-white">Complete the assessment</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <div key={step.id} className="flex flex-col items-center relative">
              {/* Step Label */}
              <div
                className={`
                text-xs mb-3 transition-all duration-200 min-w-[80px] text-center
                ${isCurrent ? "text-green-400" : ""}
                ${isCompleted ? "text-green-400" : ""}
                ${isUpcoming ? "text-gray-500" : ""}
              `}
              >
                {step.shortTitle}
              </div>

              {/* Step Circle */}
              <div
                className={`
                w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 relative z-10
                ${isCompleted ? "bg-green-500 text-white" : ""}
                ${isCurrent ? "bg-green-500 text-white" : ""}
                ${
                  isUpcoming
                    ? "bg-gray-800 text-gray-500 border-2 border-gray-600"
                    : ""
                }
              `}
              >
                {isCompleted ? <CheckCircle className="w-6 h-6" /> : step.icon}
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`
                  absolute top-[52px] left-1/2 w-full h-0.5 transition-all duration-200 z-0
                  ${stepNumber < currentStep ? "bg-green-500" : "bg-gray-700"}
                `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
