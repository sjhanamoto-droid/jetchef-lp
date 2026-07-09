import { IMG } from './images'

/* Order destinations — verified official take-eats.jp endpoints.
   Edit URLs here to change every order CTA on the site. */

export interface PersonalOrder {
  label: string
  sub: string
  url: string
}

export const PERSONAL_ORDERS: PersonalOrder[] = [
  {
    label: '即時配達・テイクアウト',
    sub: '東京23区エリア・当日配達対応',
    url: 'https://nisshintasuke.take-eats.jp/',
  },
  {
    label: 'オンライン通販でお取り寄せ',
    sub: '美味しさそのままチルド便で全国へお届け',
    url: 'https://nisshintasuke-tsuhan.take-eats.jp/',
  },
]

export interface CorporateOrder {
  region: string
  image: string
  url: string
}

export const CORPORATE_ORDERS: CorporateOrder[] = [
  { region: '東京23区', image: IMG.areaTokyo, url: 'https://nisshintasuke-hojin-tokyo.take-eats.jp/' },
  { region: '西東京地域', image: IMG.areaNishiTokyo, url: 'https://nisshintasuke-hojin-nishitokyo.take-eats.jp/' },
  { region: '埼玉地域', image: IMG.areaSaitama, url: 'https://nisshintasuke-hojin-saitama.take-eats.jp/' },
  { region: '神奈川地域', image: IMG.areaKanagawa, url: 'https://nisshintasuke-hojin-kanagawa.take-eats.jp/' },
  { region: '千葉地域', image: IMG.areaChiba, url: 'https://nisshintasuke-hojin-chiba.take-eats.jp/' },
]

export const CORPORATE_NOTE =
  'その他の地域やお届け可能エリアについても、お気軽にお問い合わせください。'
