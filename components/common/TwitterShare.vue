<template>
  <div>
    <a
      href="https://twitter.com/share"
      class="twitter-share-button"
      data-url="https://www.sukoya-kana.live"
      data-text="すこやボタン"
      data-lang="ja"
      data-hashtags="すこやカルテ"
      data-show-count="true"
      >Tweet</a
    >
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class TwitterShare extends Vue {}
</script>
