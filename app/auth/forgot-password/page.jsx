"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Mail } from "lucide-react";
import Loader from "@/components/Loader";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle password reset logic here
      console.log("Password reset requested for", email);
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <Loader />
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">

      <div className="w-full max-w-md">
        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
          <CardHeader className="text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 sm:p-8">
            <CardTitle className="text-xl sm:text-2xl font-bold">Reset Password</CardTitle>
            <CardDescription className="text-orange-100 text-sm sm:text-base">
              {isSubmitted 
                ? "Check your email for instructions" 
                : "Enter your email to reset your password"}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-100">
                  <svg className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-gray-900">Check your email</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">
                  We've sent password reset instructions to <span className="font-semibold">{email}</span>
                </p>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
                  Didn't receive the email? Check your spam folder or{" "}
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="font-medium text-orange-600 hover:text-orange-500"
                  >
                    try again
                  </button>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 text-sm sm:text-base">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`pl-10 py-5 sm:py-6 rounded-xl border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.email ? "border-red-500" : ""} text-sm sm:text-base`}
                    />
                  </div>
                  {errors.email && <p className="text-xs sm:text-sm text-red-500">{errors.email}</p>}
                  <p className="text-xs sm:text-sm text-gray-500">
                    We'll send you instructions to reset your password
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-5 sm:py-6 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  Send Reset Instructions
                </Button>
              </form>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 p-6 sm:p-8 bg-gray-50">
            <p className="text-center text-xs sm:text-sm text-gray-600">
              Remember your password?{" "}
              <Link href="/auth/login" className="font-semibold text-orange-600 hover:text-orange-700">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
    </div>


  );
}