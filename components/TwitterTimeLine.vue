<template>
  <div>
    <a
      class="twitter-timeline"
      data-height="630"
      data-lang="ja"
      data-border-color="#e91e63"
      data-chrome="noheader nofooter"
      href="https://twitter.com/sukosuko_sukoya?ref_src=twsrc%5Etfw"
    >
      Tweets by sukosuko_sukoya
    </a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Biography extends Vue {}
</script>
