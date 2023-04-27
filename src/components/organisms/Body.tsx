import CheckBoxes from '../molecules/CheckBoxes.tsx'

const prefList = [
  {
    region: '北海道・東北',
    pref: ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
  },
  {
    region: '関東',
    pref: ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県'],
  },
  {
    region: '中部',
    pref: [
      '新潟県',
      '富山県',
      '石川県',
      '福井県',
      '山梨県',
      '長野県',
      '岐阜県',
      '静岡県',
      '愛知県',
    ],
  },
  {
    region: '近畿',
    pref: ['三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県'],
  },
  {
    region: '中国・四国',
    pref: [
      '鳥取県',
      '島根県',
      '岡山県',
      '広島県',
      '山口県',
      '徳島県',
      '香川県',
      '愛媛県',
      '高知県',
    ],
  },
  {
    region: '九州',
    pref: ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'],
  },
]

const Body = () => {
  return (
    <>
      {prefList.map((obj) => (
        <CheckBoxes region={obj.region} pref={obj.pref} />
      ))}
    </>
  )
}

export default Body
