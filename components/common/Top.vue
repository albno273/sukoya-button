<template>
  <v-card outlined>
    <div class="px-4">
      <v-card-text>
        健屋さんからいつも元気をもらっています。勝手に作ってすみません。問題があれば削除します。<br />
        <br />
        よかったら宣伝してください。
        <twitter-share /><br />
        問い合わせや音声の追加依頼はこちらにお願いします:
        <a :href="gitHubIssueUrl" target="_blank">GitHub issue</a> or
        <a :href="twitterUrl" target="_blank">Twitter</a>
      </v-card-text>
      <v-divider />
      <v-card-title> オマージュ / 参考 / 先駆者さま </v-card-title>
      <v-card-text>
        <a :href="sanaButtonUrl" target="_blank">さなボタン(2)</a> さま<br />
        <a :href="nijiSanjiWikiButtonUrl" target="_blank">にじさんじ所属ライバー ボタン</a> 製作者の皆さま
      </v-card-text>
    </div>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import TwitterShare from '~/components/common/TwitterShare.vue';

@Component({
  components: {
    TwitterShare,
  },
})
export default class Top extends Vue {
  /* data */
  sanaButtonUrl = 'https://www.natorisana.love/';
  nijiSanjiWikiButtonUrl = 'https://wikiwiki.jp/nijisanji/%E2%97%8B%E2%97%8B%E3%83%9C%E3%82%BF%E3%83%B3';
  gitHubIssueUrl =
    'https://github.com/albno273/sukoya-button/issues/new?assignees=&labels=add+voice&template=add-voice.md&title=';

  twitterUrl = 'https://twitter.com/albNo273';
}
</script>
