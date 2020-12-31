import { hayase, shellin } from './vtubers';
import { YouTubeVideo } from '~/types';

export const sukoyaSongs: Array<YouTubeVideo> = [
  {
    videoId: 'GfTY3q3e2Mk',
    song: {
      title: '神のまにまに',
      isOriginal: false,
      artist: 'れるりり feat. 初音ミク, 鏡音リン, GUMI',
      lyricist: 'れるりり',
      composer: 'れるりり',
    },
    with: [hayase, shellin],
    date: new Date('2020-03-19'),
    isActive: false,
  },
  {
    videoId: 'fxzBmLVfLOw',
    song: {
      title: 'インタビュア',
      isOriginal: false,
      artist: 'クワガタP feat. 巡音ルカ',
      lyricist: 'クワガタP',
      composer: 'クワガタP',
    },
    date: new Date('2020-03-21'),
    isActive: false,
  },
];
