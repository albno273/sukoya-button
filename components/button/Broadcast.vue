<template>
  <v-container fluid grid-list-md>
    <div class="broadcast-title">
      [{{ convertDate(date) }}] {{ title }}
      <!--
      <a :href="link" target="_blank">
        <fa :icon="faYouTubeSquare" size="lg" :style="{ color: 'red' }" />
      </a>
      -->
    </div>
    <v-layout row wrap>
      <v-flex v-for="quote in quotes" :key="quote.path" no-gutters>
        <audio-btn :quote="quote.quote" :time="quote.time" :path="quote.path" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { QuoteData } from '~/types';
import AudioBtn from '~/components/button/AudioBtn.vue';

@Component({
  components: {
    AudioBtn,
  },
})
export default class Broadcast extends Vue {
  /* props */
  @Prop(String) date!: string; // 配信日時(アーカイブ化された日に準拠 / YYYYMMDD)
  @Prop(String) title!: string; // 配信タイトル(アーカイブ化後)
  // @Prop(String) link!: string; // アーカイブの URL
  @Prop() quotes!: QuoteData; // 発言一覧

  /* computed */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get faYouTubeSquare() {
    return faYoutubeSquare;
  }

  /* methods */
  // 配信日にスラッシュ入れるだけ
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  convertDate(date: string) {
    const y = date.slice(0, 4);
    const m = date.slice(4, 6);
    const d = date.slice(6, 8);
    return `${y}/${m}/${d}`;
  }
}
</script>
<style lang="scss" scoped>
.broadcast-title {
  font-size: 1.25em;
  color: var(--v-official-base);
}
</style>
