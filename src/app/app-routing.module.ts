import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'chat-rooms', component: ChatRoomComponent },
  { path: 'chat', component: MessageComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: '', redirectTo: '/user-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
