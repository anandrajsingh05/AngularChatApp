import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatRoomComponent,
    UserFormComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
