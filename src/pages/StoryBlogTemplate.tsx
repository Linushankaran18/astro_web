import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Camera } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';

// Story data structure
const storyPosts = {
  'student-success-journey': {
    title: "From Dream to Reality: A Student's Journey to Germany",
    subtitle: "How Astro Trend helped make studying abroad possible",
    author: "Astro Trend Team",
    date: "Auguest 31, 2025",
    category: "Success Stories",
    readTime: "8 min read",
    
    sections: [
      {
        id: 1,
        image: "/images/stories/student-journey-1.png",
        imageCaption: "",
        title: "The Initial Dream",
        content: `
          <p>Every great journey begins with a dream. This captures the aspiration of countless students who envision their future in Germany — a land of innovation, world-class universities, and boundless opportunities. With guidance and the right support, dreams like hers can turn into reality.</p>
          
        `
      },
      {
        id: 2,
        image: "/images/stories/student-journey-2.png",
        imageCaption: "",
        title: "Trust: The Key to Every Journey",
        content: `
          <p>Dreaming is the first step, but every student soon faces the big question — who will guide me on this journey? With so many choices, finding a consultancy you can truly trust becomes the turning point between doubt and confidence.</p>
          
        `
      },
      {
        id: 3,
        image: "/images/stories/student-journey-3.png",
        imageCaption: "",
        title: "A Guiding Light Appears",
        content: `
          <p>Here at Astro Trends, we believe no student should walk this journey alone. From applications to visas and beyond, we stand beside you — offering the right guidance, trusted support, and a clear path to make your dream of studying in Germany a reality</p>
        `
      },  
      {
        id: 4,
        image: "/images/stories/student-journey-4.png",
        imageCaption: "",
        title: "Understanding Your Path",
        content: `
          <p>At Astro Trends, we guide students every step of the way. When questions arise about eligibility or qualifications, we provide clear, personalized evaluations to help students understand which programs match their background. With our expertise, the path to studying in Germany becomes simple and transparent.</p>
        `
      },
      {
        id: 5,
        image: "/images/stories/student-journey-5.png",
        imageCaption: "",
        title: "Affording Your Dream",
        content: `
          <p>When students worry about costs, Astro Trends is here to clarify the real picture. Most German universities offer tuition-free education — students primarily need to plan for living expenses. With proper guidance, studying in Germany is more affordable than many imagine, turning dreams into achievable goals.</p>
        `
      },
      {
        id: 6,
        image: "/images/stories/student-journey-6.png",
        imageCaption: "",
        title: "Breaking the Language Barrier",
        content: `
          <p>Astro Trends provides complete guidance. We help you identify universities that offer English-taught programs and connect you with trusted German language courses, ensuring you’re fully prepared to succeed academically and socially in Germany.</p>
        `
      },
      {
        id: 7,
        image: "/images/stories/student-journey-7.png",
        imageCaption: "",
        title: "Dream Approved",
        content: `
          <p>The happiest moment for every student — holding the approved visa in hand. At Astro Trends, we celebrate this milestone with you. From the very first question to this life-changing approval, we stand by your side, making the journey to Germany smooth and stress-free.</p>
        `
      },
      {
        id: 8,
        image: "/images/stories/student-journey-8.png",
        imageCaption: "",
        title: "A New Beginning in Germany",
        content: `
          <p>Landing in Germany marks the moment when a dream turns into reality. From the first spark of ambition to stepping into a new country, Astro Trends has been there at every stage. With world-class education ahead and our continuous support, students are ready to begin their journey with confidence.</p>
        `
      },
      {
        id: 9,
        image: "/images/stories/student-journey-9.png",
        imageCaption: "",
        title: "Astro Trends — Your Partner in Success",
        content: `
          <p>At Astro Trends, we are more than just a consultancy; we are your dedicated partner in success. Our team is committed to providing personalized support, expert guidance, and a wealth of resources to help you navigate your journey to studying in Germany. Together, we can turn your aspirations into reality.</p>
        `
      },
      
      // Add more sections as needed...
    ]
  }
};

const StoryBlogTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !storyPosts[slug as keyof typeof storyPosts]) {
    return <Navigate to="/blogs" replace />;
  }
  
  const story = storyPosts[slug as keyof typeof storyPosts];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <Link to="/blogs" className="inline-flex items-center text-blue-600 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Posts
          </Link>
          <span className="text-sm text-gray-500 flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {story.readTime}
          </span>
        </div>
        
        <div className="mb-8">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              {story.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{story.title}</h1>
          {story.subtitle && (
            <p className="text-xl text-gray-600 mb-4">{story.subtitle}</p>
          )}
          <div className="flex flex-wrap items-center text-gray-600 gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{story.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{story.author}</span>
            </div>
          </div>
        </div>
        
        <article className="space-y-20">
          {story.sections.map((section) => (
            <div key={section.id} className="story-section flex flex-col md:flex-row items-stretch bg-white rounded-xl shadow-md overflow-hidden">
              {/* Left: Image */}
              <div className="flex-shrink-0 flex items-center justify-center bg-gray-100 md:w-1/2 w-full">
                {section.image ? (
                  <img
                    src={section.image}
                    alt={section.imageCaption || `Story image ${section.id}`}
                    className="w-full aspect-square object-contain rounded-lg bg-white"
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                ) : (
                  <div className="w-[350px] h-[350px] bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Camera className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-medium">Image {section.id} Placeholder</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Right: Content */}
              <div className="flex flex-col justify-center md:w-1/2 w-full p-8">
                <div className="prose prose-lg max-w-none mx-auto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
                  {section.imageCaption && (
                    <div className="mt-6 text-sm text-gray-500 italic">{section.imageCaption}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </article>
        
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Inspired by This Story?</h2>
          <p className="text-blue-700 mb-4">
            Start your own journey today. Our team is ready to help you achieve your dreams.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryBlogTemplate;

