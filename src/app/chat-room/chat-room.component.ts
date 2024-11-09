import { Component, OnInit } from '@angular/core';
import { ChatRoomService } from '../services/chat-room.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html'
})
export class ChatRoomComponent implements OnInit {
  chatRooms: any[] = [];

  constructor(private chatRoomService: ChatRoomService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user')!);
    this.chatRoomService.getChatRooms(user.id).subscribe((rooms) => {
      this.chatRooms = rooms;
    });
  }
}
