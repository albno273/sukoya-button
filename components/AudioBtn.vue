<template>
  <v-card class="mx-auto" height="100%" @click.native="onClick()">
    <v-card-text class="pa-2">
      <v-row align="center" justify="center" class="mx-0">
        <v-col class="py-0 pl-1 pr-0 status-icon" cols="1">
          <fa v-if="isPlaying" :icon="faStop" size="lg" :style="{ color: '#e91e63' }" />
          <fa v-else :icon="faPlay" size="lg" :style="{ color: '#e91e63' }" />
        </v-col>
        <v-col class="py-0 pl-3 pr-0" cols="11">
          <v-row class="mx-0 quote">
            {{ quote }}
          </v-row>
          <v-row class="mx-0 time">
            {{ convertTime(time) }}
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

@Component
export default class AudioBtn extends Vue {
  /* props */
  @Prop(String) date!: string; // 配信日時(アーカイブ化された日に準拠 / YYYYMMDD)
  @Prop(String) title!: string; // 配信タイトル(アーカイブ化後)
  @Prop(String) quote!: string; // 発言内容
  @Prop(String) time!: string; // 発言時間([h:]mm:ss)

  /* data */
  isPlaying = false; // 再生中かどうか
  audio = new Audio();

  /* computed */
  get faPlay() {
    return faPlay;
  }

  get faStop() {
    return faStop;
  }

  get voiceLink(): string {
    const repoUri = 'https://raw.githubusercontent.com/albno273/sukoya-button-voices/master/';
    const bcUri = this.date + '_' + encodeURIComponent(this.title.replace('/', ':'));
    const fileUri = this.time.replace(':', '_') + '_' + encodeURIComponent(this.quote.replace('/', ':'));
    return repoUri + bcUri + '/' + fileUri + '.mp3';
  }

  /* life cycle methods */
  mounted() {
    // TODO: URL が不正だった場合のエラーハンドリングをどうするか
    this.audio.src = this.voiceLink;
    this.audio.load();

    this.audio.addEventListener('ended', () => {
      this.onEnd();
    });
  }

  beforeDestroy() {
    this.audio.removeEventListener('ended', () => {
      this.onEnd();
    });
  }

  /* methods */
  // [h:]mm:ss -> 「(h時間)mm分ss秒ごろ」に変換
  convertTime(time: string | null): string {
    if (time) {
      const split = time.split(':');
      if (this.isTimeHasHour(time)) {
        return Number(split[0]) + '時間' + Number(split[1]) + '分' + split[2] + '秒ごろ';
      } else {
        return Number(split[0]) + '分' + split[1] + '秒ごろ';
      }
    } else {
      return '';
    }
  }

  // 時間の文字列に「○時間」が含まれてるか確認するだけ
  isTimeHasHour(time: string | null): boolean {
    if (time) {
      const colonCnt = time.split(':').length - 1;
      switch (colonCnt) {
        case 1:
          return false;
        case 2:
          return true;
        default:
          // ここに来たらなにかおかしい
          return false;
      }
    } else {
      return false;
    }
  }

  onClick() {
    if (this.isPlaying) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlaying = false;
    } else {
      this.isPlaying = true;
      this.audio.play();
    }
  }

  // 再生終了したとき
  onEnd() {
    this.isPlaying = false;
  }
}
</script>
<style>
.status-icon {
  text-align: center;
}

.quote {
  color: black;
}

.time {
  color: gray;
  font-size: small;
}
</style>
