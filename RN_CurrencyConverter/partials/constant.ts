export const countries = [
  {country: 'United States', currency: '$', rate: 1 / 73.66, flag: '🇺🇸'},
  {country: 'China', currency: '¥', rate: 6.36 / 73.66, flag: '🇨🇳'},
  {country: 'Japan', currency: '¥', rate: 110.96 / 73.66, flag: '🇯🇵'},
  {country: 'Germany', currency: '€', rate: 0.87 / 73.66, flag: '🇩🇪'},
  {country: 'United Kingdom', currency: '£', rate: 0.73 / 73.66, flag: '🇬🇧'},
  {country: 'India', currency: '₹', rate: 1, flag: '🇮🇳'},
  {country: 'Brazil', currency: 'R$', rate: 5.26 / 73.66, flag: '🇧🇷'},
  {country: 'Russia', currency: '₽', rate: 79.19 / 73.66, flag: '🇷🇺'},
  {country: 'France', currency: '€', rate: 0.87 / 73.66, flag: '🇫🇷'},
  {country: 'Italy', currency: '€', rate: 0.87 / 73.66, flag: '🇮🇹'},
];
export interface ICountry {
  country: string;
  currency: string;
  rate: number;
  flag: string;
}
