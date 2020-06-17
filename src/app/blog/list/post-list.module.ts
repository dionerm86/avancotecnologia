import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostlistComponent } from './postlist/postlist.component';
import {MatCardModule} from '@angular/material';



@NgModule({
  declarations: [
    PostlistComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[
    PostlistComponent
  ]
})
export class PostListModule { }
