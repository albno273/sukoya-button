<template>
  <div>
    <broadcast
      v-for="broadcast in broadcasts"
      :key="broadcast.link"
      :date="broadcast.date"
      :title="broadcast.title"
      :quotes="broadcast.quotes"
    />
    <!-- :link="broadcast.link" -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import {} from '@nuxtjs/axios';
import { BroadcastData, QuoteData, VoiceFile } from '~/types/index';
import { Context } from '~/types/nuxt';
import Broadcast from '~/components/button/Broadcast.vue';

@Component({
  components: {
    Broadcast,
  },
})
export default class Button extends Vue {
  /* data */
  results: VoiceFile[] = [];
  broadcasts: BroadcastData[] = [];

  /* methods */
  mounted(): void {
    // 配信ごとに区切って整形する
    this.broadcasts = this.splitQuoteArr(this.results);
  }

  async asyncData({ $axios }: Context): Promise<{ results: Array<VoiceFile> }> {
    let tree: Array<VoiceFile> = [];

    const getHeadUrl = 'https://api.github.com/repos/albno273/sukoya-button-voices/commits/master';
    const head = await $axios.$get(getHeadUrl);

    const hash: string = head.sha;
    if (hash) {
      const getTreeUrl = `https://api.github.com/repos/albno273/sukoya-button-voices/git/trees/${hash}?recursive=1`;
      const res = await $axios.$get(getTreeUrl);
      tree = res.tree;
      // console.log(tree);
    }

    return {
      results: tree,
    };
  }

  splitQuoteArr(voices: VoiceFile[]): BroadcastData[] {
    // ディレクトリと README に関するファイルを除外
    const blobs = voices.filter((voice, _) => {
      return voice.type !== 'tree' && !voice.path.endsWith('.md') && !voice.path.endsWith('.png');
    });

    let quotes: QuoteData[] = [];
    const broadcasts: BroadcastData[] = [];

    let path = blobs[0].path;
    let df = path.split('/');
    let dirname = df[0];
    let filename = df[1];

    let dt = dirname.split('_');
    let date = dt[0];
    let title = dt[1].replace(':', '/');

    let tq = filename.split(/_/g);
    let quote = tq[tq.length - 1].replace('.mp3', '');
    let time = filename.replace(`_${quote}.mp3`, '').replace(/_/g, ':');

    for (let index = 0; index < blobs.length; index++) {
      // 最後の要素
      if (index === blobs.length - 1) {
        path = blobs[index].path;
        df = path.split('/');

        if (dirname !== blobs[index].path.split('/')[0]) {
          dirname = df[0];

          dt = dirname.split('_');
          date = dt[0];
          title = dt[1].replace(':', '/');
        }

        filename = df[1];

        tq = filename.split(/_/g);
        quote = tq[tq.length - 1].replace('.mp3', '');
        time = filename.replace(`_${quote}.mp3`, '').replace(/_/g, ':');

        quotes.push({
          quote,
          time,
          path,
        });

        broadcasts.push({
          title,
          date,
          quotes,
        });

        break;
      }

      if (dirname !== blobs[index + 1].path.split('/')[0]) {
        // ここまでの quotes を書き出してリセット

        quotes.push({
          quote,
          time,
          path,
        });

        broadcasts.push({
          title,
          date,
          quotes,
        });

        quotes = [];
      } else {
        quotes.push({
          quote,
          time,
          path,
        });
      }

      path = blobs[index + 1].path;
      df = path.split('/');
      dirname = df[0];
      filename = df[1];

      dt = dirname.split('_');
      date = dt[0];
      title = dt[1].replace(':', '/');

      tq = filename.split(/_/g);
      quote = tq[tq.length - 1].replace('.mp3', '');
      time = filename.replace(`_${quote}.mp3`, '').replace(/_/g, ':');
    }

    // console.log(broadcasts);
    return broadcasts;
  }
}
</script>
