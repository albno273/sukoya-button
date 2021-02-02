<template>
  <v-card class="text-card" outlined shaped>
    <v-card-title> What is this? </v-card-title>
    <v-card-text>
      <div class="top-paragraph">
        このサイトは、にじさんじ所属 Vtuber
        健屋花那さんをささやかに応援するために個人で作成した非公式のファンサイトです。
        <br />
        元々、ボイスボタンまとめ「すこやボタン」として立ち上げたサイトだったものをリニューアルしたものです。
        <br />
        (勝手に作ってすみません。問題があれば削除します。)
      </div>
      <div class="top-paragraph">
        よかったら宣伝してください:
        <twitter-share-button />
      </div>
      <div class="top-paragraph">
        問い合わせや音声の追加依頼はこちらにお願いします:
        <a :href="gitHubIssueUrl" target="_blank">GitHub issue</a> or
        <a :href="twitterUrl" target="_blank">Twitter</a>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import TwitterShareButton from '~/components/top/TwitterShareButton.vue';

@Component({
  components: {
    TwitterShareButton,
  },
})
export default class WhatIsThis extends Vue {
  /* data */
  gitHubIssueUrl =
    'https://github.com/albno273/sukoya-button/issues/new?assignees=&labels=add+voice&template=add-voice.md&title=';

  twitterUrl = 'https://twitter.com/albNo273';
}
</script>

<style lang="scss" scoped>
.top-paragraph {
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
