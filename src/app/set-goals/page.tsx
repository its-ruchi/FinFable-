'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';

export default function SetGoals() {
  const [goalAmount, setGoalAmount] = useState('');
  const [monthlySavings, setMonthlySavings] = useState('');
  const [savingFor, setSavingFor] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (savingFor && goalAmount && monthlySavings) {
      localStorage.setItem('savingFor', savingFor);
      localStorage.setItem('savingsGoal', goalAmount);
      localStorage.setItem('monthlySavings', monthlySavings);
      router.push('/dashboard');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 text-center">
        Set Your Savings Goals
      </h1>
      <Card className="bg-blue-50 shadow-md">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl lg:text-2xl text-blue-800 text-center">
            Your Financial Journey Starts Here
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 sm:gap-6 lg:gap-8"
          >
            {/* Savings Goal Input */}
            <div>
              <Label
                htmlFor="savingFor"
                className="block text-blue-700 text-sm sm:text-base lg:text-lg"
              >
                What are you saving for?
              </Label>
              <Input
                id="savingFor"
                type="text"
                placeholder="Enter your savings goal (e.g., Home, Vacation)"
                value={savingFor}
                onChange={(e) => setSavingFor(e.target.value)}
                className="w-full border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            {/* Goal Amount Input */}
            <div>
              <Label
                htmlFor="goalAmount"
                className="block text-blue-700 text-sm sm:text-base lg:text-lg"
              >
                How much do you want to save?
              </Label>
              <Input
                id="goalAmount"
                type="number"
                placeholder="Enter your savings goal amount"
                value={goalAmount}
                onChange={(e) => setGoalAmount(e.target.value)}
                className="w-full border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            {/* Monthly Savings Input */}
            <div>
              <Label
                htmlFor="monthlySavings"
                className="block text-blue-700 text-sm sm:text-base lg:text-lg"
              >
                How much can you save monthly?
              </Label>
              <Input
                id="monthlySavings"
                type="number"
                placeholder="Enter your monthly savings"
                value={monthlySavings}
                onChange={(e) => setMonthlySavings(e.target.value)}
                className="w-full border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base lg:text-lg"
            >
              Start Your Journey
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
