// 各配信のデータ
export interface BroadcastData {
  title: string; // 配信タイトル
  date: string; // 配信日
  link?: string; // 配信の URL
  quotes: QuoteData[]; // 発言の一覧
}

// 発言のデータ
export interface QuoteData {
  quote: string; // セリフ
  time: string; // 発言した時間
  path: string; // GitHub のファイルパス
}

// GitHub Tree API で取得できるファイル一覧の JSON オブジェクト
export interface VoiceFile {
  mode: string;
  path: string;
  sha: string;
  size?: number;
  type: string; // "tree" or "blob" かも
  url: string;
}
