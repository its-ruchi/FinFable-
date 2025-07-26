import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

const blogs = [
  {
    id: "1",
    title: "The Power of Compound Interest",
    author: "Warren Buffett",
    excerpt: "Learn how compound interest can dramatically grow your wealth over time.",
    date: "2023-05-15",
    color: "bg-green-100",
    textColor: "text-green-800",
  },
  {
    id: "2",
    title: "Building a Successful Start-up",
    author: "Elon Musk",
    excerpt: "Insights into creating and scaling a successful start-up in today's competitive market.",
    date: "2023-06-22",
    color: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    id: "3",
    title: "Investing in Emerging Technologies",
    author: "Mark Zuckerberg",
    excerpt: "Explore the potential of investing in AI, VR, and other emerging technologies.",
    date: "2023-07-10",
    color: "bg-purple-100",
    textColor: "text-purple-800",
  },
]

export default function Blogs() {
  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-blue-800">Entrepreneur Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card key={blog.id} className={blog.color}>
            <CardHeader>
              <CardTitle className={blog.textColor}>{blog.title}</CardTitle>
              <CardDescription className={`${blog.textColor} opacity-75`}>By {blog.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className={blog.textColor}>{blog.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className={`text-sm ${blog.textColor} opacity-75`}>{blog.date}</span>
              <Link href={`/blogs/${blog.id}`} className={`${blog.textColor} hover:underline`}>
                Read more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

