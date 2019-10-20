<template>
  <div class="mt-3 mb-5">
    <v-card outlined>
      <v-card-text>
        健屋さんからいつも元気をもらっています。<br />
        勝手に作ってすみません。<br />
        <br />
        よかったら宣伝してください。
        <twitter-share /><br />
        問い合わせや音声の追加依頼はこちらにお願いします: <a :href="gitHubIssueUrl" target_="blank">GitHub issue</a> or
        <a :href="twitterUrl" target="_blank">Twitter</a>
      </v-card-text>
      <v-divider />
      <v-card-title>オマージュ / 参考 / 先駆者さま</v-card-title>
      <v-card-text>
        <a :href="sanaButtonUrl" target="_blank">さなボタン(2)</a> さま<br />
        <a :href="nijiSanjiWikiButtonUrl" target="_blank">にじさんじ所属ライバー ボタン</a> 製作者の皆さま
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import TwitterShare from './TwitterShare.vue';

@Component({
  components: {
    TwitterShare,
  },
})
export default class Information extends Vue {
  /* data */
  sanaButtonUrl = 'https://www.natorisana.love/';
  nijiSanjiWikiButtonUrl = 'https://wikiwiki.jp/nijisanji/%E2%97%8B%E2%97%8B%E3%83%9C%E3%82%BF%E3%83%B3';
  gitHubIssueUrl = 'https://github.com/albno273/sukoya-button/issues';
  twitterUrl = 'https://twitter.com/albNo273';
}
</script>
