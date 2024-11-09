import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {
  private apiUrl = 'http://localhost:8080/api/chatrooms';

  constructor(private http: HttpClient) {}

  getChatRooms(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }
}
