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

// 動画データ
export interface YouTubeVideo {
  videoId: string;
  title?: string; // 動画のタイトル
  song?: SongProfile; // 歌ってみたの場合の原作者
  with?: Array<VtuberProfile>; // 共演者
  date: Date; // 公開日
  isActive: false; // for lazy loading
}

// Vtuber のプロフィール
export interface VtuberProfile {
  name: string;
  unit: 'Nijisanji' | 'Hololive' | 'other'; // 所属する箱 いずれ増やす
  youTubeId: string;
  twitterId: string;
}

// 楽曲データ

export interface SongProfile {
  title: string;
  isOriginal: boolean; // オリジナル曲かどうか
  artist?: string; // (歌ってみたの場合の)歌手名
  lyricist: string; // 作詞者
  composer: string; // 作曲者
}
