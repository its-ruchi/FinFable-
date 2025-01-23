'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';

export default function Dashboard() {
  const [savingFor, setSavingFor] = useState('');
  const [savingsGoal, setSavingsGoal] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [currentSavings, setCurrentSavings] = useState(0);

  useEffect(() => {
    const storedSavingFor = localStorage.getItem('savingFor');
    const storedGoal = localStorage.getItem('savingsGoal');
    const storedMonthlySavings = localStorage.getItem('monthlySavings');
    if (storedSavingFor) setSavingFor(storedSavingFor);
    if (storedGoal) setSavingsGoal(Number(storedGoal));
    if (storedMonthlySavings) setMonthlySavings(Number(storedMonthlySavings));
  }, []);

  const handleAddSavings = () => {
    setCurrentSavings((prev) => Math.min(prev + monthlySavings, savingsGoal));
  };

  const monthsToGoal = Math.ceil((savingsGoal - currentSavings) / monthlySavings);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 text-center">
        Your Financial Dashboard
      </h1>

      {/* Savings Goal Progress */}
      <Card className="bg-green-100 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl text-green-800 text-center">
            Savings Goal Progress: {savingFor}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress
            value={(currentSavings / savingsGoal) * 100}
            className="h-2 bg-green-200"
            indicatorClassName="bg-green-500"
          />
          <p className="text-green-700 text-sm sm:text-base lg:text-lg">
            You&apos;ve saved ${currentSavings} out of your ${savingsGoal} goal for {savingFor}.
          </p>
          <Button
            onClick={handleAddSavings}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base"
          >
            Add ${monthlySavings} Monthly Savings
          </Button>
        </CardContent>
      </Card>

      {/* Additional Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Savings Plan Card */}
        <Card className="bg-blue-100 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-blue-800 text-center">Savings Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-blue-700 text-sm sm:text-base">
              Your current plan is to save ${monthlySavings} per month for your {savingFor} goal.
            </p>
            <p className="text-blue-700 text-sm sm:text-base">
              At this rate, you&apos;ll reach your goal in approximately {monthsToGoal} months.
            </p>
          </CardContent>
        </Card>

        {/* Next Milestone Card */}
        <Card className="bg-purple-100 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-purple-800 text-center">Next Milestone</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-purple-700 text-sm sm:text-base">
              You&apos;re ${savingsGoal - currentSavings} away from your {savingFor} savings goal.
              Keep it up!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
