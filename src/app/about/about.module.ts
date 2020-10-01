import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { TitleBoxComponent } from './title-box/title-box.component';

@NgModule({
  declarations: [AboutComponent, InfoBoxComponent, TitleBoxComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
