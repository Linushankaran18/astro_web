import React from 'react'
import { Calendar, User, ArrowRight } from 'lucide-react'

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, date, author, excerpt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Read More
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: '2025 Student Visa Updates: What You Need to Know',
      date: 'June 15, 2025',
      author: 'Emma Rodriguez',
      excerpt: 'Recent changes to student visa regulations and how they might affect your application process and study abroad plans.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Top 10 Destinations for Budget Travelers in 2025',
      date: 'May 28, 2025',
      author: 'Alex Thompson',
      excerpt: 'Discover affordable yet amazing destinations that won\'t break the bank but will provide unforgettable experiences.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'How to Prepare for Your Visa Interview: Expert Tips',
      date: 'May 10, 2025',
      author: 'Sarah Johnson',
      excerpt: 'Comprehensive guide to ace your visa interview with confidence and increase your chances of approval.'
    }
  ]

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Latest Travel Insights</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest travel news, visa regulations, and destination guides
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard 
              key={post.id}
              image={post.image}
              title={post.title}
              date={post.date}
              author={post.author}
              excerpt={post.excerpt}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog