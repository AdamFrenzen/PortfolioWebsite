import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import {NgOptimizedImage} from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { GreatWaveComponent } from './great-wave/great-wave.component';



@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    SkillsComponent,
    HeaderComponent,
    GreatWaveComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgOptimizedImage,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
