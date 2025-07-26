import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-800 text-center">About FinFable</h1>
      
      <Card className="bg-green-100">
        <CardHeader>
          <CardTitle className="text-2xl text-green-800">Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-700">
            Our mission is to empower individuals and families to take control of their financial future by making financial planning easy, personalized, and fun through storytelling, collaboration, and AI-driven insights.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-blue-100">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Who We Are</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700">
              FinFable is a team of passionate financial experts, storytellers, and technologists. We believe that everyone deserves access to powerful financial planning tools and insights, presented in an engaging and understandable way.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-purple-100">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800">What We Do</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-700">
              We combine cutting-edge AI technology with the art of storytelling to create a unique financial planning experience. Our platform turns your financial journey into an interactive story, making it easier to understand, engage with, and achieve your financial goals.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-yellow-100">
        <CardHeader>
          <CardTitle className="text-2xl text-yellow-800">Our Values</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-yellow-700">
            <li>Empowerment through education</li>
            <li>Transparency in financial planning</li>
            <li>Innovation in technology and storytelling</li>
            <li>Collaboration and community support</li>
            <li>Personalization for individual needs</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

