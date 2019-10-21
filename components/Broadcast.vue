<template>
  <v-container fluid grid-list-md>
    <div class="headline title">
      [{{ convertDate(date) }}] {{ title }}
      <a :href="link" target="_blank">
        <fa :icon="faYouTubeSquare" size="lg" :style="{ color: 'red' }" />
      </a>
    </div>
    <v-layout wrap>
      <v-flex xs6 sm4 md3>
        <audio-btn
          v-for="quote in quotes"
          :key="quote.quote"
          :date="date"
          :title="title"
          :quote="quote.quote"
          :time="quote.time"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { QuoteData } from '../types/index';
import AudioBtn from './AudioBtn.vue';

@Component({
  components: {
    AudioBtn,
  },
})
export default class Broadcast extends Vue {
  /* props */
  @Prop(String) date!: string; // 配信日時(アーカイブ化された日に準拠 / YYYYMMDD)
  @Prop(String) title!: string; // 配信タイトル(アーカイブ化後)
  @Prop(String) link!: string; // アーカイブの URL
  @Prop() quotes!: QuoteData; // 発言一覧

  /* computed */
  get faYouTubeSquare() {
    return faYoutubeSquare;
  }

  /* methods */
  // 配信日にスラッシュ入れるだけ
  convertDate(date: string) {
    const y = date.slice(0, 4);
    const m = date.slice(4, 6);
    const d = date.slice(6, 8);
    return `${y}/${m}/${d}`;
  }
}
</script>
<style>
.title {
  color: #03a9f4;
  margin: auto;
}
</style>
