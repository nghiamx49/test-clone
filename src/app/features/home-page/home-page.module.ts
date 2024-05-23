import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { routes } from './home-page.route';
import { HomeCardComponent } from './components/home-card/home-card.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HomeCardComponent]
})
export class HomePageModule {}
