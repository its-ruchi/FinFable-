import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-blue-800 text-center">Contact Us</h1>
      <p className="text-blue-600 text-center">Have questions or need support? Were here to help!</p>
      <Card className="bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-800">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-blue-700">Name</label>
              <Input id="name" placeholder="Your name" className="border-blue-300 focus:border-blue-500 text-black placeholder:text-black" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-blue-700">Email</label>
              <Input id="email" type="email" placeholder="Your email" className="border-blue-300 focus:border-blue-500 text-black placeholder:text-black" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-blue-700">Message</label>
              <Textarea id="message" placeholder="Your message" rows={5} className="border-blue-300 focus:border-blue-500 text-black placeholder:text-black" />
            </div>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

