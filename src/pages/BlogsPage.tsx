import React from 'react';
import { Calendar, User, ArrowRight, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Export the blog data so it can be imported by BlogPost
export const allBlogPosts = [
   {
    id: 1,
    title: "From Dream to Reality: A Student's Journey to Germany",
    excerpt: "Journey from initial consultation to successfully studying at a German university.",
    image: "/images/stories/cover.png",
    date: "December 15, 2024",
    author: "Astro Trend Team",
    category: "Success Stories",
    slug: "student-success-journey",
    type: "story" // Add type field to distinguish story posts
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Top 10 Destinations for Budget Travelers in 2025',
    date: 'May 28, 2025',
    author: "Astro Trend Team",
    excerpt: 'Discover affordable yet amazing destinations that won\'t break the bank but will provide unforgettable experiences.',
    slug: 'budget-travel-destinations-2025',
    category: 'Travel Tips'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'How to Prepare for Your Visa Interview: Expert Tips',
    date: 'May 10, 2025',
    author: "Astro Trend Team",
    excerpt: 'Comprehensive guide to ace your visa interview with confidence and increase your chances of approval.',
    slug: 'visa-interview-expert-tips',
    category: 'Visa Information'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    titauthor: "Astro Trend Team",
    excerpt: 'Learn about the latest changes to UK student visa requirements and how to prepare your application.',
    slug: 'uk-student-visa-requirements-2025',
    category: 'Visa Information'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'How to Finance Your Study Abroad Journey',
    date: 'April 15, 2025',
    author: "Astro Trend Team",
    excerpt: 'Explore scholarships, loans, and creative funding strategies to make your international education dreams come true.',
    slug: 'financing-study-abroad',
    category: 'Education'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Top Universities for International Students in 2025',
    date: 'March 30, 2025',
    author: "Astro Trend Team",
    excerpt: 'Discover which universities around the world offer the best experience for international students.',
    slug: 'top-universities-international-students-2025',
    category: 'Education'
  },
  // Add story-type posts
  {
    id: 7,
    image: '/images/blog/studentvisa.jpg',
    title: '2025 Student Visa Updates: What You Need to Know',
    date: 'June 15, 2025',
    author: "Astro Trend Team",
    excerpt: 'Recent changes to student visa regulations and how they might affect your application process and study abroad plans.',
    slug: '2025-student-visa-updates',
    category: 'Visa Information'
  },
];

// Get all unique categories
const allCategories = ['All', ...new Set(allBlogPosts.map(post => post.category))];

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  // Filter posts based on search and category
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = (post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) || 
                          (post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <Link to="/" className="text-blue-600 hover:underline flex items-center mr-4">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Our Blog</h1>
          </div>
          <p className="text-lg text-gray-600">
            Stay updated with the latest news and insights about study abroad, visas, and international education.
          </p>
        </div>
        
        {/* Search & Filter Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search blog posts..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-700">Filter by:</span>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-sm rounded-full transition ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link to={`/blog/${post.slug}`}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover hover:opacity-90 transition"
                  />
                </Link>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                  </Link>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-600 text-lg">No blog posts found matching your search criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
