import { HomeCardModel } from '../models/home-card.model';

const baseUrl = '/assets/images';

export const GAMING_ACCESSORIES: HomeCardModel[] = [
  {
    imageLink: `${baseUrl}/gaming/headset.jpg`,
    title: 'Headset'
  },
  {
    imageLink: `${baseUrl}/gaming/keyboard.jpg`,
    title: 'Keyboard'
  },
  {
    imageLink: `${baseUrl}/gaming/mouse.jpg`,
    title: 'Mouse'
  },
  {
    imageLink: `${baseUrl}/gaming/gaming-chair.jpg`,
    title: 'Gaming Chair'
  }
];
export const SHOP_DEAL: HomeCardModel[] = [
  {
    imageLink: `${baseUrl}/outfit/dress.jpg`,
    title: 'Dress under $30'
  },
  {
    imageLink: `${baseUrl}/outfit/jeans.jpg`,
    title: 'Jeans under $50'
  },
  {
    imageLink: `${baseUrl}/outfit/shoes.jpg`,
    title: 'Shoes under $50'
  },
  {
    imageLink: `${baseUrl}/outfit/top.jpg`,
    title: 'Top under $25'
  }
];
export const DEAL_PC: HomeCardModel[] = [
  {
    imageLink: `${baseUrl}/gaming/pc.jpg`
  }
];
export const PHONE_DEAL: HomeCardModel[] = [
  {
    imageLink: `${baseUrl}/phone/smartphone.jpg`,
    title: 'Smartphone'
  },
  {
    imageLink: `${baseUrl}/phone/laptop.jpg`,
    title: 'Laptop'
  },
  {
    imageLink: `${baseUrl}/phone/tablet.jpg`,
    title: 'Tablets'
  },
  {
    imageLink: `${baseUrl}/phone/tv.jpg`,
    title: 'TVs'
  }
];
