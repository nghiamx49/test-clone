import { Component, HostBinding, Input } from '@angular/core';
import { HomeCardModel } from '../../models/home-card.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss'
})
export class HomeCardComponent {
  @HostBinding('class') @Input() public variant: 'single' | 'first-large' | 'normal' = 'normal';
  @Input() public list: HomeCardModel[] = [];
  @Input() public title!: string;
  @Input() public linkTitle = 'Show now';
}
