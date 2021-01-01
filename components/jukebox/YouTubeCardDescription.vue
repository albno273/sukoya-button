<template>
  <div>
    <div>
      <span v-if="coStars"> 共演: </span>
      <span v-for="(vtuber, index) in coStars" :key="index" class="yt-desc-costars">
        <span>{{ vtuber.name }}</span>
      </span>
    </div>
    <div>
      <span v-if="isOriginal"> 作曲: </span>
      <span v-else> 原曲: </span>
      <span>
        {{ artist }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { SongProfile, VtuberProfile } from '~/types';

@Component
export default class YouTubeCardDescription extends Vue {
  @Prop({ type: Object }) song: SongProfile;
  @Prop({ type: Array }) coStars: Array<VtuberProfile> | undefined;

  // computed
  get artist(): string {
    return this.song.artist || this.song.composer;
  }

  get isOriginal(): boolean {
    return this.song.isOriginal;
  }
}
</script>
<style lang="scss" scoped>
.yt-desc-costars {
  display: inline-block;

  & + .yt-desc-costars:before {
    content: ', ';
  }
}
</style>
