import { PostListModule } from './blog/list/post-list.module';
import { BlogModule } from './blog/blog.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    PostListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
