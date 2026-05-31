/* Contact channels shown in the side Contact panel and the お問い合わせ section.
   Values confirmed by the client (phone, 公式LINE, contact form). */

export const CONTACT = {
  phone: '0120-17-0521',
  phoneHref: 'tel:0120170521',
  phoneHours: '受付時間 10:00〜21:00（年中無休）',

  line: 'https://line.me/R/ti/p/@953mjiaf',
  lineLabel: '公式LINEで相談する',

  email: 'https://nisshintasuke.co.jp/contact/',
  emailLabel: 'お問い合わせフォームへ',
} as const

/* Store info shown in the footer. */
export const STORE = {
  name: '築地うなぎ食堂 / 築地焼肉苑',
  postal: '〒104-0045',
  address: '東京都中央区築地4-13-18（築地場外市場内）',
} as const
