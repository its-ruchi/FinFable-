"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the signup logic
    console.log("Signup attempt with:", { name, email, password })
    // For now, we'll just redirect to the dashboard
    router.push("/dashboard")
  }

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-800 text-center">Sign up for FinFable</CardTitle>
        </CardHeader>
        <CardContent>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <Label htmlFor="name" className="text-blue-800">Name</Label>
      <Input
        id="name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border-blue-300 focus:border-blue-500 text-black placeholder:text-black"
      />
    </div>
    <div>
      <Label htmlFor="email" className="text-blue-800">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border-blue-300 focus:border-blue-500 text-black placeholder:text-black"
      />
    </div>
    <div>
      <Label htmlFor="password" className="text-blue-800">Password</Label>
      <Input
        id="password"
        type="password"
        placeholder="Create a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border-blue-300 focus:border-blue-500 text-black placeholder:text-black"
      />
    </div>
    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
      Sign Up
    </Button>
  </form>
  <p className="mt-4 text-center text-sm text-gray-600">
    Already have an account?{" "}
    <Link href="/login" className="text-blue-600 hover:underline">
      Log in
    </Link>
  </p>
</CardContent>
      </Card>
    </div>
  )
}
