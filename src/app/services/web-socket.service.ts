import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { Subject } from 'rxjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: any;
  private messagesSubject = new Subject<any>();
  messages = this.messagesSubject.asObservable();

  connect(nickname: string, fullname: string) {
    const socket = new SockJS('/ws');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(`/user/${nickname}/queue/messages`, (message: any) => {
        this.messagesSubject.next(JSON.parse(message.body));
      });
      this.stompClient.send("/app/user.addUser", {}, JSON.stringify({ nickName: nickname, fullName: fullname, status: 'ONLINE' }));
    });
  }

  sendMessage(message: any) {
    this.stompClient.send("/app/chat", {}, JSON.stringify(message));
  }

  async getConnectedUsers() {
    const response = await fetch('/users');
    return response.json();
  }

  disconnect() {
    if (this.stompClient) {
      this.stompClient.disconnect();
    }
  }
}
