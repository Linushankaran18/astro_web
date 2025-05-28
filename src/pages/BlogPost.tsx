import React from 'react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';

// Import the same blog posts data
// In a real application, you would likely fetch this from an API
import { allBlogPosts } from './BlogsPage';

// Create a map for quick lookup of blog posts by slug
const blogPostsMap = Object.fromEntries(
  allBlogPosts.map(post => [post.slug, post])
);

// Content for the blog post with ID 1
const blogContent = {
  '2025-student-visa-updates': `
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
    
    <h2 class="text-2xl font-bold mb-3 mt-6">How We Can Help</h2>
    
    <p class="mb-4">Our team of visa specialists stays up-to-date with all international student visa requirements. We can help you navigate these changes and optimize your application to maximize your chances of approval.</p>
    
    <p class="mb-4">Contact us for a consultation to learn more about how these visa updates might affect your study abroad plans for 2025 and beyond.</p>
  `,
  // Add content for other blog posts as needed
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // If slug doesn't exist in our data, redirect to blogs page
  if (!slug || !blogPostsMap[slug]) {
    return <Navigate to="/blogs" replace />;
  }
  
  const post = blogPostsMap[slug];
  
  // Determine if this post has content, otherwise show a placeholder
  const postContent =
    slug in blogContent
      ? blogContent[slug as keyof typeof blogContent]
      : '<p>Full content for this article is coming soon.</p>';
  
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back button */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/blogs" className="inline-flex items-center text-blue-600 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Posts
          </Link>
          
          <span className="text-sm text-gray-500 flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            5 min read
          </span>
        </div>
        
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
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              {post.category}
            </span>
          </div>
          
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
          </div>
        </div>
        
        {/* Post Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600">
          <div dangerouslySetInnerHTML={{ __html: postContent }} />
        </article>
        
        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allBlogPosts
              .filter(relatedPost => 
                relatedPost.category === post.category && 
                relatedPost.id !== post.id
              )
              .slice(0, 2)
              .map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow p-4 flex">
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <h4 className="font-bold text-gray-900 hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
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
