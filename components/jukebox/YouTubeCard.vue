<template>
  <div>
    <v-card outlined shaped class="mx-auto" color="official--text">
      <v-img :src="thumbnailUrl" :aspect-ratio="16 / 9" @click.stop="isOpenModal = true" />
      <v-card-title>{{ title }} </v-card-title>
      <v-card-subtitle> {{ date }} </v-card-subtitle>
      <v-card-text>
        <you-tube-card-text-card :song="videoData.song" :co-stars="videoData.coStars" />
      </v-card-text>
    </v-card>
    <!-- FIXME: 幅 700px 以下だと下枠が微妙に余る -->
    <v-dialog v-model="isOpenModal" :max-width="640" @click:outside="onCloseModal">
      <v-responsive :max-width="640" :max-height="360" :aspect-ratio="16 / 9">
        <youtube
          ref="youtube"
          :video-id="videoData.videoId"
          :resize="true"
          :resize-delay="1"
          :fit-parent="true"
          @ready="ready"
          @ended="ended"
          @playing="playing"
        />
      </v-responsive>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { DateTime } from 'luxon';
import { YouTubeVideo } from '~/types/index';
import YouTubeCardDescription from '~/components/jukebox/YouTubeCardDescription.vue';

@Component({
  components: {
    YouTubeCardDescription,
  },
})
export default class YouTubeCard extends Vue {
  @Prop({ type: Object }) videoData: YouTubeVideo;

  /* data */
  isOpenModal = false;

  /* computed */
  get thumbnailUrl(): string {
    return 'https://img.youtube.com/vi/' + this.videoData.videoId + '/sddefault.jpg';
  }

  // 歌動画かどうか
  get isSong(): boolean {
    return this.videoData.song !== undefined;
  }

  get title(): string {
    if (this.isSong && this.videoData.song) {
      return this.videoData.song.title;
    } else {
      return this.videoData.title || '';
    }
  }

  get date(): string {
    return DateTime.fromISO(this.videoData.date).toFormat('yyyy/M/d');
  }

  ready(): void {
    // console.log('ready');
  }

  ended(): void {
    // console.log('ended');
  }

  playing(): void {
    // console.log('stop');
  }

  onCloseModal(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const youtube: any = this.$refs.youtube;
    youtube.player.pauseVideo();
  }
}
</script>
