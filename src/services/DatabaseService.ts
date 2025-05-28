export interface StudentInquiry {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  courseInterest?: string;
  preferredCountry?: string;
  budget?: string;
  messages: {
    text: string;
    sender: 'bot' | 'user';
    timestamp: Date;
  }[];
  createdAt: Date;
}

class DatabaseService {
  private static instance: DatabaseService;
  
  // This would be replaced with actual database connection in production
  private inquiries: StudentInquiry[] = [];
  
  private constructor() {}
  
  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }
  
  public saveInquiry(inquiry: StudentInquiry): Promise<StudentInquiry> {
    // In a real implementation, this would save to a database
    this.inquiries.push(inquiry);
    
    // Log for development purposes - would be removed in production
    console.log('Saved student inquiry:', inquiry);
    
    // Simulating API delay
    return new Promise(resolve => {
      setTimeout(() => resolve(inquiry), 300);
    });
  }
  
  public updateInquiry(id: string, updates: Partial<StudentInquiry>): Promise<StudentInquiry | null> {
    const index = this.inquiries.findIndex(inquiry => inquiry.id === id);
    
    if (index === -1) return Promise.resolve(null);
    
    this.inquiries[index] = { ...this.inquiries[index], ...updates };
    
    // Log for development purposes
    console.log('Updated inquiry:', this.inquiries[index]);
    
    return Promise.resolve(this.inquiries[index]);
  }
  
  public getInquiries(): Promise<StudentInquiry[]> {
    return Promise.resolve([...this.inquiries]);
  }
  
  // In a real implementation, we would have methods to:
  // - Connect to actual database
  // - Handle errors
  // - Implement authentication
}

export default DatabaseService.getInstance();
