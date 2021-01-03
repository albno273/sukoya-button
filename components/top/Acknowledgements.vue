<template>
  <v-card class="text-card" outlined shaped>
    <v-card-title> Acknowledgements </v-card-title>
    <v-card-text>
      <a :href="sanaButtonUrl" target="_blank">さなボタン(2)</a><br />
      <a :href="nijiSanjiWikiButtonUrl" target="_blank">にじさんじ所属ライバー ボタン</a> 製作者の皆さま<br />
      <a :href="sakegusaUrl" target="_blank">三枝全力支援</a>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Acknowledgements extends Vue {
  /* data */
  sanaButtonUrl = 'https://www.natorisana.love/';
  sakegusaUrl = 'https://detawane.com/';
  nijiSanjiWikiButtonUrl = 'https://wikiwiki.jp/nijisanji/%E2%97%8B%E2%97%8B%E3%83%9C%E3%82%BF%E3%83%B3';
}
</script>

<style lang="scss" scoped>
.top-paragraph {
  margin: 5px 0;
}
</style>
