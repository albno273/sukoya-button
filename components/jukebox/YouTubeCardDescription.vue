<template>
  <div>
    <div class="yt-desc yt-desc-costars-box">
      <div v-if="coStars" class="yt-desc-costars-box-title">共演:</div>
      <div class="yt-desc-costars-box-items">
        <div v-for="(vtuber, index) in coStars" :key="index">
          <span>
            {{ vtuber.name }}
          </span>
          <v-btn icon small color="red" :href="vtuberChUrl(vtuber)" target="=blank">
            <v-icon> mdi-youtube </v-icon>
          </v-btn>
          <v-btn icon small color="cyan" :href="vtuberTwUrl(vtuber)" target="=blank">
            <v-icon> mdi-twitter </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div v-if="!isOriginal && song.artist" class="yt-desc">原曲: {{ song.artist }}</div>
    <div v-if="song.from" class="yt-desc">{{ song.from }} より</div>
    <div class="yt-desc">
      <div v-if="song.lyricist === song.composer">
        <div v-if="song.lyricist && song.composer" class="yt-desc">作詞曲: {{ song.lyricist }}</div>
      </div>
      <div v-else>
        <div v-if="song.lyricist" class="yt-desc">作詞: {{ song.lyricist }}</div>
        <div v-if="song.composer" class="yt-desc">作曲: {{ song.composer }}</div>
      </div>
    </div>
    <div v-if="song.remixed" class="yt-desc">リミックス: {{ song.remixed }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { SongProfile, VtuberProfile } from '~/types';

@Component
export default class YouTubeCardDescription extends Vue {
  @Prop({ type: Object }) song: SongProfile;
  @Prop({ type: Array }) coStars: Array<VtuberProfile> | undefined;

  /* computed */
  get isOriginal(): boolean {
    return this.song.isOriginal;
  }

  vtuberChUrl(vtuber: VtuberProfile): string {
    return 'https://www.youtube.com/channel/' + vtuber.youTubeId;
  }

  vtuberTwUrl(vtuber: VtuberProfile): string {
    return 'https://twitter.com/' + vtuber.twitterId;
  }
}
</script>

<style lang="scss" scoped>
.yt-desc {
  &:not(:last-child) {
    margin-bottom: 5px;
  }

  &-costars-box {
    display: -webkit-flex;
    display: flex;

    &-title {
      margin-top: 3px;
    }

    &-title {
      margin-right: 4px;
    }
  }
}
</style>
