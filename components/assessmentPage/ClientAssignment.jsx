"use client";
import { useState } from "react";
import { questions, steps } from "@/lib/assessmentUtil";
import { Button } from "../ui/button";
import { StepIndicator } from "./StepsIndicator";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import AssessmentComplete from "./AssessmentComplete";

const getOperationsScore = (answers = {}) => {
  let totalScore = 0;
  let maxPossibleScore = 0;

  questions.forEach((question) => {
    const answerValue = answers[question.id];
    if (answerValue) {
      const selectedOption = question.options.find(
        (option) => option.value === answerValue
      );
      if (selectedOption) {
        totalScore += selectedOption.score;
      }
    }
    const maxQuestionScore = Math.max(
      ...question.options.map((option) => option.score)
    );
    maxPossibleScore += maxQuestionScore;
  });

  return Math.round((totalScore / maxPossibleScore) * 100);
};

const getScoreColor = (score) => {
  if (score >= 75) return "text-green-400";
  if (score >= 50) return "text-yellow-400";
  return "text-red-400";
};

const getScoreGrade = (score) => {
  if (score >= 90) return "A+";
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
};

const getRecommendation = (score) => {
  if (score >= 75) {
    return "Excellent readiness! Your operations are well-positioned for scale. You have strong processes, good capacity, and are ready for advanced optimization strategies.";
  } else if (score >= 50) {
    return "Good foundation with room for improvement! You have solid processes in some areas but there are key gaps that could limit growth.";
  } else {
    return "Significant opportunity for improvement! Your operations need attention before scaling. Multiple areas require strengthening.";
  }
};

const getReadinessLevel = (score) => {
  if (score >= 75) return "High Readiness";
  if (score >= 50) return "Moderate Readiness";
  return "Low Readiness";
};

export function ClientAssignment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentStep = currentQuestion + 1;

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (isCompleted) {
    const score = getOperationsScore(answers);
    return (
      <AssessmentComplete
        score={score}
        grade={getScoreGrade(getOperationsScore())}
        readinessLevel={getReadinessLevel(getOperationsScore())}
        recommendation={getRecommendation(getOperationsScore())}
        steps={steps}
        getScoreColor={getScoreColor}
      />
    );
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      {/* Step Indicator */}
      <StepIndicator currentStep={currentStep} totalSteps={questions.length} />

      {/* Main Content Card */}
      <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl text-white mb-4">
              {steps[currentQuestion].title.toUpperCase()}
            </h1>
            <p className="text-gray-400 text-sm mb-2">* are required fields</p>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl text-white mb-4">
                {questions[currentQuestion].question}
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Select the option that best describes your current situation
              </p>

              <RadioGroup
                value={answers[questions[currentQuestion].id] || ""}
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {questions[currentQuestion].options.map((option, index) => {
                  const isSelected =
                    option.value === answers[questions[currentQuestion].id];

                  return (
                    <div key={option.value} className="relative">
                      <div
                        className={`
                          flex items-center space-x-4 p-4 border-2 rounded-lg transition-all duration-200 cursor-pointer
                          ${
                            isSelected
                              ? "border-green-500 bg-green-500/10"
                              : "border-gray-600 hover:border-gray-500 bg-gray-800"
                          }
                        `}
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="border-gray-500 text-green-500"
                        />
                        <Label
                          htmlFor={option.value}
                          className="text-white cursor-pointer flex-1"
                        >
                          {option.label}
                        </Label>
                      </div>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>
          </div>

          <div className="flex justify-between border-t border-gray-700 pt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-6 py-2 rounded-lg disabled:opacity-50"
            >
              Previous
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-lg transition-all duration-200 disabled:opacity-50"
              onClick={handleNext}
              disabled={!answers[questions[currentQuestion].id]}
            >
              {currentQuestion === questions.length - 1
                ? "Complete Assessment"
                : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
