// types.ts

export interface Project {
    id: string;
    title: string;
    description: string;
  }
  
  export interface Experience {
    id: string;
    Title: string;
    Description: string;
  }
  
  export interface Message {
    id: string;
    sender: string;
    content: string;
    timestamp: Date;
  }