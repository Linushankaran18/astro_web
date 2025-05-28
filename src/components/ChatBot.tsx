import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import DatabaseService, { StudentInquiry } from '../services/DatabaseService';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  isQuestion?: boolean;
  expectedDataType?: 'name' | 'email' | 'phone' | 'country' | 'course' | 'budget';
}

// Student data collection states
type CollectionState = 'idle' | 'collecting_name' | 'collecting_email' | 'collecting_course' | 'collecting_country' | 'completed';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [sessionId] = useState(() => Date.now().toString());
  const [collectionState, setCollectionState] = useState<CollectionState>('idle');
  const [studentData, setStudentData] = useState<Partial<StudentInquiry>>({
    id: sessionId,
    messages: [],
    createdAt: new Date()
  });
  
  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      const initialMessage: Message = {
        id: Date.now().toString(),
        text: "Hi there! 👋 I'm Astro Assistant. I can help you with your study abroad plans. Would you mind sharing some information so I can assist you better?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([initialMessage]);
      
      // Add a short delay then ask for name
      setTimeout(() => {
        askForStudentName();
      }, 1000);
    }
  }, [messages.length]);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Save messages to database when they change
  useEffect(() => {
    if (messages.length > 0) {
      const messagesForDB = messages.map(msg => ({
        text: msg.text,
        sender: msg.sender,
        timestamp: msg.timestamp
      }));
      
      DatabaseService.updateInquiry(sessionId, {
        messages: messagesForDB
      });
    }
  }, [messages, sessionId]);

  // Ask for student name
  const askForStudentName = () => {
    setIsTyping(true);
    
    setTimeout(() => {
      const nameQuestion: Message = {
        id: Date.now().toString(),
        text: "To get started, could you please tell me your name?",
        sender: 'bot',
        timestamp: new Date(),
        isQuestion: true,
        expectedDataType: 'name'
      };
      
      setMessages(prev => [...prev, nameQuestion]);
      setCollectionState('collecting_name');
      setIsTyping(false);
    }, 1000);
  };

  // Ask for email after name is provided
  const askForEmail = () => {
    setIsTyping(true);
    
    setTimeout(() => {
      const nameResponse: Message = {
        id: Date.now().toString(),
        text: `Nice to meet you, ${studentData.name}! What's your email address so we can send you relevant information?`,
        sender: 'bot',
        timestamp: new Date(),
        isQuestion: true,
        expectedDataType: 'email'
      };
      
      setMessages(prev => [...prev, nameResponse]);
      setCollectionState('collecting_email');
      setIsTyping(false);
    }, 1000);
  };

  // Ask about course interest
  const askAboutCourse = () => {
    setIsTyping(true);
    
    setTimeout(() => {
      const courseQuestion: Message = {
        id: Date.now().toString(),
        text: "Thanks! What course or field of study are you interested in?",
        sender: 'bot',
        timestamp: new Date(),
        isQuestion: true,
        expectedDataType: 'course'
      };
      
      setMessages(prev => [...prev, courseQuestion]);
      setCollectionState('collecting_course');
      setIsTyping(false);
    }, 1000);
  };

  // Ask about preferred country
  const askAboutCountry = () => {
    setIsTyping(true);
    
    setTimeout(() => {
      const countryQuestion: Message = {
        id: Date.now().toString(),
        text: "Great choice! Which country are you considering for your studies?",
        sender: 'bot',
        timestamp: new Date(),
        isQuestion: true,
        expectedDataType: 'country'
      };
      
      setMessages(prev => [...prev, countryQuestion]);
      setCollectionState('collecting_country');
      setIsTyping(false);
    }, 1000);
  };

  // Complete the information gathering
  const completeDataCollection = () => {
    setIsTyping(true);
    
    setTimeout(() => {
      const thankYouMessage: Message = {
        id: Date.now().toString(),
        text: `Thank you for sharing this information, ${studentData.name}! I can now provide you with more personalized assistance for studying ${studentData.courseInterest} in ${studentData.preferredCountry}. What specific questions do you have about the application process?`,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, thankYouMessage]);
      setCollectionState('completed');
      setIsTyping(false);
      
      // Save completed student inquiry
      DatabaseService.saveInquiry(studentData as StudentInquiry);
    }, 1500);
  };

  // Process user input based on the current collection state
  const processCollectionState = (userInput: string) => {
    switch (collectionState) {
      case 'collecting_name':
        setStudentData(prev => ({ ...prev, name: userInput }));
        askForEmail();
        return true;
      
      case 'collecting_email':
        setStudentData(prev => ({ ...prev, email: userInput }));
        askAboutCourse();
        return true;
      
      case 'collecting_course':
        setStudentData(prev => ({ ...prev, courseInterest: userInput }));
        askAboutCountry();
        return true;
      
      case 'collecting_country':
        setStudentData(prev => ({ ...prev, preferredCountry: userInput }));
        completeDataCollection();
        return true;
      
      default:
        return false;
    }
  };

  // Predefined responses
  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return `Hello ${studentData.name || ''}! How can I assist you with your overseas education plans today?`;
    }
    
    if (input.includes('study') && input.includes('uk')) {
      return "We offer complete UK student visa assistance, including university applications, course selection, and visa processing. Would you like to know more about our UK study packages?";
    }
    
    if (input.includes('visa') && (input.includes('requirements') || input.includes('document'))) {
      return "For student visas, you'll typically need: acceptance letter from an institution, proof of sufficient funds, valid passport, and English proficiency test results. The specific requirements vary by country. Would you like details for a specific country?";
    }
    
    if (input.includes('cost') || input.includes('fee') || input.includes('price')) {
      return "Our consultation fee depends on the service you need. Basic consultations start free, comprehensive packages range from $500-$1500. Would you like to schedule a free initial consultation to discuss your specific needs?";
    }
    
    if (input.includes('scholarship')) {
      return "Many universities offer scholarships based on academic merit, financial need, or specific talents. We can help you identify and apply for scholarships that match your profile. Would you like to discuss your scholarship options?";
    }
    
    // Personalized response using collected data
    if (studentData.name && studentData.courseInterest && studentData.preferredCountry) {
      return `Based on your interest in ${studentData.courseInterest} and plans to study in ${studentData.preferredCountry}, I'd recommend scheduling a consultation with our specialists. They can provide detailed guidance tailored to your specific situation. Would you like me to arrange that for you?`;
    }
    
    return "Thanks for your message! That's a good question. For the most accurate information, I'd suggest speaking with one of our education consultants. Would you like to schedule a free consultation call?";
  };

  // Handle sending a message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Check if we're in a data collection state
    const isCollecting = processCollectionState(input);
    
    // If not collecting data, provide normal response
    if (!isCollecting) {
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(input),
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000); // Random delay between 1-2s for realism
    }
  };

  // Format timestamp
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat window */}
      <div 
        className={`fixed bottom-20 right-6 z-40 w-[350px] bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        } border border-gray-200`}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-4">
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2 mr-3">
              <MessageSquare className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Astro Assistant</h3>
              <p className="text-xs text-blue-100">Online | Quick answers to your questions</p>
            </div>
          </div>
        </div>
        
        {/* Messages container */}
        <div className="h-80 p-4 overflow-y-auto bg-gray-50">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className={`text-xs mt-1 block text-right ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </div>
          ))}
          
          {/* Bot typing indicator */}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-white p-3 rounded-lg border border-gray-200 rounded-bl-none">
                <div className="flex items-center">
                  <Loader2 className="h-4 w-4 text-blue-600 animate-spin mr-2" />
                  <span className="text-sm text-gray-500">Typing...</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input form */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
        
        {/* Footer */}
        <div className="bg-gray-50 px-4 py-2 text-center border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Need more help? <Link to="/contact" className="text-blue-600 hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
