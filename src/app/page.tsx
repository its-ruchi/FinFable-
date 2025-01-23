import Link from 'next/link';
import { Button } from './components/ui/button';

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto space-y-16 p-4 md:p-8 lg:p-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800">
          Welcome to FinFable
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-blue-700">
          Make financial planning more engaging through storytelling
        </p>
        <Button
          asChild
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md focus-visible:ring focus-visible:ring-green-400 focus-visible:ring-offset-2"
        >
          <Link href="/set-goals">Start Your Financial Journey</Link>
        </Button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          title="Visual Journey"
          description="See your financial goals come to life through interactive visualizations."
          color="bg-purple-100"
          textColor="text-purple-800"
        />
        <FeatureCard
          title="What-If Scenarios"
          description="Explore different financial paths with our interactive scenario planner."
          color="bg-green-200"
          textColor="text-green-800"
        />
        <FeatureCard
          title="Achievement System"
          description="Earn rewards and track your progress as you reach financial milestones."
          color="bg-yellow-100"
          textColor="text-yellow-800"
        />
        <FeatureCard
          title="Family Planning"
          description="Collaborate with family members on shared financial goals."
          color="bg-red-100"
          textColor="text-red-800"
        />
      </section>

      {/* Insights Section */}
      <section className="text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
          AI-Powered Insights
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-blue-600">
          Get personalized financial advice based on your spending patterns and goals.
        </p>
        <Button
          variant="outline"
          asChild
          className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-md focus-visible:ring focus-visible:ring-blue-300 focus-visible:ring-offset-2"
        >
          <Link href="/dashboard">View Your Insights</Link>
        </Button>
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  color,
  textColor,
}: {
  title: string;
  description: string;
  color: string;
  textColor: string;
}) {
  return (
    <div
      className={`${color} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center`}
    >
      <h3 className={`text-lg md:text-xl font-bold mb-2 ${textColor}`}>
        {title}
      </h3>
      <p className={`${textColor} text-sm md:text-base`}>{description}</p>
    </div>
  );
}
