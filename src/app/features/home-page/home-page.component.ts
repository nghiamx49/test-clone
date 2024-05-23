import { Component } from '@angular/core';

import { GAMING_ACCESSORIES, SHOP_DEAL, DEAL_PC, PHONE_DEAL } from './constants/home-mock.constant';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public readonly gamingDeal = GAMING_ACCESSORIES;
  public readonly shoppingDeal = SHOP_DEAL;
  public readonly pcDeal = DEAL_PC;
  public readonly phoneDeal = PHONE_DEAL;
}
