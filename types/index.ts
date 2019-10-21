// ルートオブジェクト
export interface VoiceData {
  broadcasts: BroadcastData[]; // 配信の一覧
}

// 各配信のデータ
export interface BroadcastData {
  title: string; // 配信タイトル
  date: string; // 配信日
  link: string; // 配信の URL
  quotes: QuoteData[]; // 発言の一覧
}

// 発言のデータ
export interface QuoteData {
  quote: string; // セリフ
  time: string; // 発言した時間
}
