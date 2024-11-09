export interface Message {
  id?: string;
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: Date;
}