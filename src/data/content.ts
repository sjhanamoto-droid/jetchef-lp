import { IMG } from './images'

/* ---- 活用シーン (6 scenes — BtoB / 施設) ---- */
export interface Scene { title: string; desc: string; image: string }
export const SCENES: Scene[] = [
  { title: '会議・役員会', desc: '長時間の会議や役員会に、温かく満足感のある食事を。おもてなしの質が場の印象を左右します。', image: IMG.sceneMeeting },
  { title: '研修・セミナー', desc: '参加者の満足度を高め、研修全体の印象向上に。大人数でも一斉に“温かい”を提供できます。', image: IMG.sceneSeminar },
  { title: '接待・来客対応', desc: '冷めた弁当ではない特別感を演出。大切なお客様へのおもてなしにふさわしい一品を。', image: IMG.sceneHospitality },
  { title: '製薬会社・MR向け', desc: '説明会・勉強会など限られた時間でも、印象に残る食事提供で関係構築を後押しします。', image: IMG.sceneMr },
  { title: 'イベント・ロケ弁', desc: '屋外・控室など電子レンジが使えない場所でも、食べる直前に温かい食事をお届けします。', image: IMG.sceneEvent },
  { title: '高齢者施設・介護施設', desc: '外食が難しい方にも、温かく美味しい食事を。食べる直前に香り立つ食事体験を届けます。', image: IMG.careScene },
]

/* ---- 法人弁当に選ばれる理由 (4) ---- */
export interface Reason { no: string; title: string; desc: string }
export const REASONS: Reason[] = [
  { no: '01', title: '電子レンジ不要で、どこでも温かい', desc: '電源も電子レンジも不要。紐を引くだけで、食べる直前に温かい食事を提供できます。' },
  { no: '02', title: 'レストラン品質の満足感', desc: '築地うなぎ食堂の調理技術による本格的な味わい。お弁当とは思えない満足感をお届けします。' },
  { no: '03', title: '会議・研修・接待の印象を高める', desc: '温かく特別感のある食事は、主催者側の評価向上にも直結。場の格を引き上げます。' },
  { no: '04', title: '高齢者施設・介護現場にも展開可能', desc: '加熱設備のない現場でも温かい食事を。食のバリアフリーの実現を支えます。' },
]

/* ---- 築地うなぎ食堂の実績 ---- */
export interface Stat { value: string; unit?: string; label: string }
export const STATS: Stat[] = [
  { value: '100', unit: '万個', label: 'デリバリー弁当 累計販売（以上）' },
  { value: '1', unit: '位', label: 'Uber Eats 総合評価（同店表示）' },
  { value: '4.6', unit: '点', label: '平均評価・レビュー5,000件以上' },
  { value: '2026', unit: '優秀賞', label: '惣菜・べんとうグランプリ' },
]
export const ACHIEVEMENTS: string[] = [
  'デリバリー弁当販売実績：累計100万個以上',
  'Uber Eats：総合評価1位店として表示／評価4.6以上・5,000件以上',
  '2026年 惣菜・べんとうグランプリ 優秀賞受賞',
  '会議・研修・接待・イベント向けに、法人弁当の販売実績多数',
]

/* ---- お客様の声 ---- */
export interface Review { title: string; rating: number; author: string; text: string }
export const REVIEWS: Review[] = [
  {
    title: '会議中でも出来立ての味に感動！',
    rating: 5,
    author: '製造業・役員秘書 様',
    text: '役員会議のお昼に利用しました。紐を引くだけで、会議室がまるでレストランに早変わり。お弁当とは思えないクオリティで、特別な場面にぴったりです。',
  },
  {
    title: 'セミナーの大量注文でも大活躍！',
    rating: 5,
    author: '人材サービス・主催者 様',
    text: '電子レンジが足りず温められない…そんな悩みをJET CHEFが解決。ここまで“出来立て感”を味わえるなんて驚きです。参加者にも喜んでもらえました。',
  },
]
