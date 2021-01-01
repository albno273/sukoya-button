import { hayase, shellin, tomoe } from '~/constraints/vtubers';
import { YouTubeVideo } from '~/types';

export const sukoyaSongs: Array<YouTubeVideo> = [
  {
    videoId: 'EpEJlvpP0RU',
    song: {
      title: 'KING',
      isOriginal: false,
      artist: 'Kanaria feat. GUMI',
      lyricist: 'Kanaria',
      composer: 'Kanaria',
    },
    date: '2020-12-16',
  },
  {
    videoId: 'TdM11hdAZy0',
    song: {
      title: 'フラレガイガール',
      isOriginal: false,
      artist: '酸欠少女さユり',
      lyricist: '野田洋次郎',
      composer: '野田洋次郎',
    },
    date: '2020-12-02',
  },
  {
    videoId: 'cBpL2bCYuYU',
    song: {
      title: 'ヴィラン',
      isOriginal: false,
      artist: 'てにをは feat. flower',
      lyricist: 'てにをは',
      composer: 'てにをは',
    },
    coStars: [tomoe],
    date: '2020-10-31',
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
    date: '2020-03-21',
  },
  {
    videoId: 'GfTY3q3e2Mk',
    song: {
      title: '神のまにまに',
      isOriginal: false,
      artist: 'れるりり feat. 初音ミク, 鏡音リン, GUMI',
      lyricist: 'れるりり',
      composer: 'れるりり',
    },
    coStars: [hayase, shellin],
    date: '2020-03-19',
  },
];
