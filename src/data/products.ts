import { IMG } from './images'

export interface Product {
  name: string
  rank?: string
  prefix?: string
  suffix?: string
  price: string
  image: string
  desc: string
}

export const UNAGI_PRODUCTS: Product[] = [
  {
    name: '金のうな重',
    rank: '連',
    price: '2,160',
    image: IMG.unaRen,
    desc: '当店自慢の関東風ふわトロうなぎを、贅沢に半尾敷き詰めたお手軽うな重。お求めやすい価格で、うなぎの旨みをしっかり堪能いただけます。初めての方やランチにもおすすめの一品です。',
  },
  {
    name: '金のうな重',
    rank: '王',
    price: '3,480',
    image: IMG.unaOu,
    desc: '大ぶり鰻を丸々一尾ドカンと敷き詰めた当店自慢の高級重（奈良漬付）。特製容器でひもを引っ張るだけで、関東風うなぎ特有のフワッ・トロッの焼き立て食感を見事に再現します。',
  },
  {
    name: '金のうな重',
    rank: '白蒲葵',
    price: '2,380',
    image: IMG.unaAoi,
    desc: 'これぞ鰻の二刀流。当店人気No.1の葵弁当で、蒲焼と白焼きを一度で同時にお楽しみいただけます。こだわりのブドウ山椒と粒ゆず胡椒で頂く鰻は、まさに絶品です。',
  },
]

export const YAKINIKU_PRODUCTS: Product[] = [
  {
    prefix: '特選築地の',
    name: '豚カルビビンバ重',
    price: '1,620',
    image: IMG.butaBibim,
    desc: '柔らかくジューシーな豚カルビ。別添えのビビンバを盛り付けてから紐を引っ張って下さい。特製コチジャンと最後まで熱々で楽しめる豚カルビビンバ弁当は、まさに絶品です。',
  },
  {
    prefix: '特選築地の',
    name: '鰻と2種のカルビ重',
    suffix: '(和牛・牛)',
    price: '2,980',
    image: IMG.unagiKalbi,
    desc: '自慢の鰻と、柔らかくジューシーな和牛・牛の2種カルビ。仕上げにコチジャンと柚子胡椒の味変ソースを添えることで、最後まで飽きずに楽しめる体験型のプレミアム弁当に仕立てました。',
  },
  {
    prefix: '特選築地の',
    name: '3種のカルビ重',
    suffix: '(和牛・牛・豚)',
    price: '2,160',
    image: IMG.kalbi3,
    desc: '柔らかくジューシーな和牛・牛・豚の3種のカルビ。ハニーマスタードとコチジャン、柚子胡椒の味変ソースを添えることで、最後まで飽きずに楽しめる特選弁当です。',
  },
]
