'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import { getItem } from "../../utils/localStorage";

interface GroupMember {
  name: string;
  saved: number;
}

interface SavingsGoal {
  savingFor: string;
  goalAmount: string;
  monthlySavings: string;
  isGroupSaving: boolean;
  groupSize: string;
}

// Helper function to format currency in Indian Rupees
const formatIndianRupees = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function Dashboard() {
  const [savingFor, setSavingFor] = useState('');
  const [savingsGoal, setSavingsGoal] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [isGroupSaving, setIsGroupSaving] = useState(false);
  const [groupMembers, setGroupMembers] = useState<GroupMember[]>([]);
  const [groupSize, setGroupSize] = useState(0);

  useEffect(() => {
    const savedGoal = getItem("savingsGoal") as SavingsGoal;
    if (savedGoal) {
      setSavingFor(savedGoal.savingFor);
      setSavingsGoal(Number(savedGoal.goalAmount));
      setMonthlySavings(Number(savedGoal.monthlySavings));
      setIsGroupSaving(savedGoal.isGroupSaving);
      setGroupSize(Number(savedGoal.groupSize));

      if (savedGoal.isGroupSaving) {
        const savedMembers = getItem("groupMembers") as GroupMember[];
        if (savedMembers) {
          setGroupMembers(savedMembers);
          const totalSaved = savedMembers.reduce((sum, member) => sum + member.saved, 0);
          setCurrentSavings(totalSaved);
        } else {
          const initialMembers = Array.from({ length: Number(savedGoal.groupSize) }, (_, i) => ({
            name: `Member ${i + 1}`,
            saved: 0
          }));
          setGroupMembers(initialMembers);
        }
      } else {
        const savedProgress = getItem("currentSavings");
        if (savedProgress) {
          setCurrentSavings(Number(savedProgress));
        }
      }
    }
  }, []);

  const handleAddSavings = (memberIndex?: number) => {
    if (isGroupSaving && typeof memberIndex === 'number') {
      const individualMonthlySavings = monthlySavings / groupSize;
      
      setGroupMembers(prevMembers => {
        const updatedMembers = [...prevMembers];
        const member = updatedMembers[memberIndex];
        const newSavedAmount = Math.min(
          member.saved + individualMonthlySavings,
          savingsGoal / groupSize
        );
        updatedMembers[memberIndex] = { ...member, saved: newSavedAmount };
        localStorage.setItem('groupMembers', JSON.stringify(updatedMembers));
        return updatedMembers;
      });

      setCurrentSavings(prev => {
        const newTotal = Math.min(prev + individualMonthlySavings, savingsGoal);
        localStorage.setItem('currentSavings', newTotal.toString());
        return newTotal;
      });
    } else if (!isGroupSaving) {
      setCurrentSavings(prev => {
        const newTotal = Math.min(prev + monthlySavings, savingsGoal);
        localStorage.setItem('currentSavings', newTotal.toString());
        return newTotal;
      });
    }
  };

  const handleResetProgress = () => {
    if (isGroupSaving) {
      const resetMembers = groupMembers.map(member => ({ ...member, saved: 0 }));
      setGroupMembers(resetMembers);
      localStorage.setItem('groupMembers', JSON.stringify(resetMembers));
    }
    setCurrentSavings(0);
    localStorage.setItem('currentSavings', '0');
  };

  const monthsToGoal = Math.ceil((savingsGoal - currentSavings) / monthlySavings);
  const individualGoal = isGroupSaving ? savingsGoal / groupSize : savingsGoal;
  const individualMonthlySavings = isGroupSaving ? monthlySavings / groupSize : monthlySavings;
  const progressPercentage = (currentSavings / savingsGoal) * 100;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 text-center">
        {isGroupSaving ? 'Group Savings Dashboard' : 'Your Financial Dashboard'}
      </h1>

      {/* Overall Progress Card */}
      <Card className="bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl text-green-800 text-center">
            Overall Progress: {savingFor}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress
            value={progressPercentage}
            className="h-2 bg-green-200"
            indicatorClassName="bg-green-500"
          />
          <p className="text-green-700 text-sm sm:text-base lg:text-lg">
            Total saved: {formatIndianRupees(currentSavings)} out of {formatIndianRupees(savingsGoal)}
          </p>
          {!isGroupSaving && (
            <Button
              onClick={() => handleAddSavings()}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              Add {formatIndianRupees(monthlySavings)} Monthly Savings
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Group Members Progress */}
      {isGroupSaving && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groupMembers.map((member, index) => (
            <Card key={index} className="bg-blue-50 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">
                  {member.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress
                  value={(member.saved / individualGoal) * 100}
                  className="h-2 bg-blue-200"
                  indicatorClassName="bg-blue-500"
                />
                <p className="text-blue-700">
                  Saved: {formatIndianRupees(member.saved)} / {formatIndianRupees(individualGoal)}
                </p>
                <Button
                  onClick={() => handleAddSavings(index)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Add {formatIndianRupees(individualMonthlySavings)} Monthly Savings
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Savings Plan Card */}
        <Card className="bg-purple-50 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-purple-800 text-center">
              Savings Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {isGroupSaving ? (
              <>
                <p className="text-purple-700 text-sm sm:text-base">
                  Each member contributes {formatIndianRupees(individualMonthlySavings)} monthly
                </p>
                <p className="text-purple-700 text-sm sm:text-base">
                  Individual goal: {formatIndianRupees(individualGoal)}
                </p>
              </>
            ) : (
              <p className="text-purple-700 text-sm sm:text-base">
                Your plan is to save {formatIndianRupees(monthlySavings)} monthly
              </p>
            )}
            <p className="text-purple-700 text-sm sm:text-base">
              Estimated completion: {monthsToGoal} months
            </p>
          </CardContent>
        </Card>

        {/* Next Milestone Card */}
        <Card className="bg-orange-50 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-orange-800 text-center">
              Next Milestone
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-orange-700 text-sm sm:text-base">
              {formatIndianRupees(savingsGoal - currentSavings)} remaining to reach the {savingFor} goal
            </p>
            {isGroupSaving && (
              <p className="text-orange-700 text-sm sm:text-base">
                {formatIndianRupees((savingsGoal - currentSavings) / groupSize)} per person
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Reset Progress Button */}
      <Card className="bg-red-50 shadow-md">
        <CardContent className="p-4">
          <Button
            onClick={handleResetProgress}
            className="w-full bg-red-500 hover:bg-red-600 text-white"
          >
            Reset Progress
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}