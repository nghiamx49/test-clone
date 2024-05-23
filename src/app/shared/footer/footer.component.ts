import { Component } from '@angular/core';
import { FOOTER_LIST } from './constants/footer.constant';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public readonly footerList = FOOTER_LIST;
}
