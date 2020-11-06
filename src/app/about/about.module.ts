import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { HansPipe } from './hans.pipe';
import { BookService } from '../books/book.service';

@NgModule({
  declarations: [AboutComponent, InfoBoxComponent, TitleBoxComponent, HansPipe],
  imports: [CommonModule, AboutRoutingModule],
  providers: [BookService],
})
export class AboutModule {}
