import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {
  nickname: string | null = '';
  fullname: string | null = '';
  connectedUsers: any[] = [];
  selectedUser: any = null;
  messages: any[] = [];
  messageContent: string = '';
  isConnected: boolean = false;

  constructor(private websocketService: WebSocketService) {}

  ngOnInit() {
    this.nickname = localStorage.getItem('nickname');
    this.fullname = localStorage.getItem('fullname');

    if (this.nickname && this.fullname) {
      this.isConnected = true;
      this.websocketService.connect(this.nickname, this.fullname);
      this.websocketService.messages.subscribe((message) => this.handleMessage(message));
      this.websocketService.getConnectedUsers().then(users => this.connectedUsers = users);
    }
  }

  selectUser(user: any) {
    this.selectedUser = user;
    this.messages = []; // Fetch previous messages logic
  }

  sendMessage() {
    if (this.messageContent.trim()) {
      const chatMessage = {
        senderId: this.nickname,
        recipientId: this.selectedUser.nickName,
        content: this.messageContent
      };
      this.websocketService.sendMessage(chatMessage);
      this.messages.push(chatMessage);
      this.messageContent = '';
    }
  }

  handleMessage(message: any) {
    // Display received message logic
  }

  logout() {
    this.websocketService.disconnect();
    localStorage.clear();
    window.location.reload();
  }

  ngOnDestroy() {
    this.websocketService.disconnect();
  }
}
