import React from 'react';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';

// Blog posts data
type BlogPostKey = '2025-student-visa-updates'; // Add more keys as needed

type BlogPostType = {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
};

const blogPostsData: Record<BlogPostKey, BlogPostType> = {
  '2025-student-visa-updates': {
    id: 1,
    title: '2025 Student Visa Updates: What You Need to Know',
    date: 'June 15, 2025',
    author: 'Emma Rodriguez',
    category: 'Visa Information',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="mb-4">International students planning to study abroad in 2025 should be aware of several important visa policy changes that will come into effect. These updates aim to streamline the application process but also introduce new requirements that applicants must meet.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Key Changes to Student Visa Policies</h2>
      
      <p class="mb-4">Starting January 2025, many popular study destinations are implementing significant changes to their student visa programs. Here's what you need to know:</p>
      
      <h3 class="text-xl font-bold mb-2 mt-4">United Kingdom</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>New financial requirement calculations that account for regional cost differences</li>
        <li>Extended post-study work permits for graduates in STEM fields</li>
        <li>Digital visa application process with reduced processing times</li>
        <li>Updated English language proficiency requirements with more testing options</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-2 mt-4">United States</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Revised F-1 visa requirements with longer OPT periods</li>
        <li>New interview waiver eligibility criteria</li>
        <li>Enhanced SEVIS tracking system</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-2 mt-4">Canada</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Updated Study Permit application process with faster processing</li>
        <li>Changes to Post-Graduation Work Permit eligibility</li>
        <li>New provincial nominee pathways for international students</li>
      </ul>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <h4 class="font-bold">Important Note:</h4>
        <p>These changes are scheduled to take effect in January 2025, but some aspects may be implemented earlier. We recommend starting your application process as early as possible to ensure compliance with all requirements.</p>
      </div>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">How to Prepare for the New Requirements</h2>
      
      <p class="mb-4">To ensure a smooth visa application process under the new regulations:</p>
      
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li>Begin gathering your financial documents early, ensuring they meet the updated requirements</li>
        <li>Schedule your English proficiency tests well in advance</li>
        <li>Consult with an education advisor who is familiar with the 2025 updates</li>
        <li>Start your application at least 6 months before your intended start date</li>
        <li>Keep track of any further announcements or policy adjustments</li>
      </ol>
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: BlogPostKey }>();

  // If slug doesn't exist in our data, redirect to home
  if (!slug || !blogPostsData[slug]) {
    return <Navigate to="/" replace />;
  }

  const post = blogPostsData[slug];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>
        
        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-[400px] object-cover"
          />
        </div>
        
        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-gray-600 gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
        
        {/* Post Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        
        {/* CTA Section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Need Help With Your Visa Application?</h2>
          <p className="text-blue-700 mb-4">Our visa experts can guide you through the latest requirements and increase your chances of approval.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-5 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
