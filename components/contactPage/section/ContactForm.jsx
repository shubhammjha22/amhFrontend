"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function ContactForm({ onBack = () => {} }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    businessInquiry: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dialog, setShowDialog] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setShowDialog(true);
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      businessInquiry: "",
      message: "",
    });
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.businessInquiry &&
    formData.message;

  // if (isSubmitted) {
  //   return (
  //     <Dialog>
  //       <div className="min-h-screen bg-black text-white">
  //         <div className="container mx-auto px-6 py-12 max-w-4xl">
  //           <div className="text-center">
  //             <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
  //               <CheckCircle2 className="w-12 h-12 text-white" />
  //             </div>
  //             <h1 className="text-4xl text-white mb-4">Thank You!</h1>
  //             <p className="text-gray-300 text-lg mb-8">
  //               Your message has been received. We'll get back to you within 24
  //               hours.
  //             </p>

  //             <div className="bg-gray-900 p-8 rounded-2xl mb-8 border border-gray-800">
  //               <h3 className="text-xl text-white mb-4">What happens next?</h3>
  //               <div className="space-y-4">
  //                 <div className="flex items-start space-x-3">
  //                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
  //                     <div className="w-2 h-2 bg-white rounded-full"></div>
  //                   </div>
  //                   <span className="text-gray-300">
  //                     We'll review your inquiry and match you with the right
  //                     expert
  //                   </span>
  //                 </div>
  //                 <div className="flex items-start space-x-3">
  //                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
  //                     <div className="w-2 h-2 bg-white rounded-full"></div>
  //                   </div>
  //                   <span className="text-gray-300">
  //                     You'll receive a personal response within 24 hours
  //                   </span>
  //                 </div>
  //                 <div className="flex items-start space-x-3">
  //                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
  //                     <div className="w-2 h-2 bg-white rounded-full"></div>
  //                   </div>
  //                   <span className="text-gray-300">
  //                     We'll schedule a consultation if it's a good fit
  //                   </span>
  //                 </div>
  //               </div>
  //             </div>

  //             <Button
  //               className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
  //               //   onClick={onBack}
  //             >
  //               Back to Home
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     </Dialog>
  //   );
  // }

  return (
    <>
      <Card className="bg-gradient-to-br from-gray-900/80 to-black/60 border-gray-800 backdrop-blur-sm">
        <CardContent className="p-8 lg:p-12">
          <div className="mb-8">
            <h3 className="text-3xl text-white mb-4">
              Let's Start the Conversation
            </h3>
            <p className="text-gray-400 text-lg">
              Share your details and we'll connect you with the right
              specialist.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Form Progress Indicator */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (Object.values(formData).filter(
                        (value) => value.trim() !== ""
                      ).length /
                        5) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <span className="text-sm text-gray-400">
                {
                  Object.values(formData).filter((value) => value.trim() !== "")
                    .length
                }
                /5 Complete
              </span>
            </div>

            {/* Personal Information */}
            <div className="space-y-6">
              <h4 className="text-xl text-white flex items-center">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 text-sm">1</span>
                </div>
                Personal Information
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white text-sm">
                    Full Name *
                  </Label>
                  <div className="relative">
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 h-12 transition-all duration-200"
                      placeholder="Enter your full name"
                      required
                    />
                    {formData.name && (
                      <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-sm">
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 h-12 transition-all duration-200"
                      placeholder="example@company.com"
                      required
                    />
                    {formData.email && formData.email.includes("@") && (
                      <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobileNumber" className="text-white text-sm">
                  Phone Number
                </Label>
                <div className="relative">
                  <Input
                    id="mobileNumber"
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) =>
                      handleInputChange("mobileNumber", e.target.value)
                    }
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 h-12 transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                  {formData.mobileNumber && (
                    <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                  )}
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div className="space-y-6">
              <h4 className="text-xl text-white flex items-center">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-400 text-sm">2</span>
                </div>
                Business Information
              </h4>

              <div className="space-y-2">
                <Label htmlFor="businessInquiry" className="text-white text-sm">
                  Type of Inquiry *
                </Label>
                <div className="relative">
                  <Select
                    value={formData.businessInquiry}
                    onValueChange={(value) =>
                      handleInputChange("businessInquiry", value)
                    }
                  >
                    <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white focus:border-green-500 focus:ring-green-500/20 h-12 transition-all duration-200">
                      <SelectValue placeholder="What can we help you with?" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="assessment">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Free Operations Assessment</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="hr">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>Human Resources Services</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="finance">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>Finance & Accounting</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="technology">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <span>Technology & Automation</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="consulting">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span>Strategic Consulting</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="partnership">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                          <span>Partnership Opportunities</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="other">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span>Other</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.businessInquiry && (
                    <CheckCircle2 className="absolute right-10 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                  )}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-6">
              <h4 className="text-xl text-white flex items-center">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-400 text-sm">3</span>
                </div>
                Tell Us About Your Challenge
              </h4>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white text-sm">
                  Message *
                </Label>
                <div className="relative">
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 min-h-[140px] transition-all duration-200 resize-none"
                    placeholder="Tell us about your business challenges, goals, and how we can help you scale without the chaos..."
                    required
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                    {formData.message.length}/500
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="pt-6 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>
                    Your information is secure and will never be shared.
                  </span>
                </div>

                <Button
                  type="submit"
                  className={`w-full py-4 rounded-xl text-lg transition-all duration-300 ${
                    isFormValid
                      ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black hover:scale-[1.02] shadow-lg hover:shadow-green-500/25"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!isFormValid}
                >
                  {isFormValid ? (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  ) : (
                    "Please complete all required fields"
                  )}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  Expected response time:{" "}
                  <span className="text-green-400">Within 24 hours</span>
                </p>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <Dialog open={dialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-black text-white p-8 rounded-2xl border border-gray-800 max-w-2xl">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>

            <DialogTitle className="text-4xl mb-4">Thank You!</DialogTitle>

            <p className="text-gray-300 mb-6">
              Your message has been received. We'll get back to you within 24
              hours.
            </p>

            <div className="bg-gray-900 p-6 rounded-xl mb-6 border border-gray-800 text-left space-y-4">
              <p>
                ✅ We'll review your inquiry and match you with the right expert
              </p>
              <p>✅ You'll receive a personal response within 24 hours</p>
              <p>✅ We'll schedule a consultation if it's a good fit</p>
            </div>

            <Button
              onClick={onBack}
              className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full"
            >
              Back to Home
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
