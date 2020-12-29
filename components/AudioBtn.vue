<template>
  <v-card class="mx-auto" height="100%" :loading="isLoading" @click.native="onClick()">
    <v-card-text class="button-content pa-2">
      <v-row align="stretch" justify="center" class="button-content ml-1 mr-0">
        <v-col align-self="center" justify-self="center" class="pa-0 status-icon" cols="1">
          <fa v-if="isPlaying" :icon="faStop" size="lg" :style="{ color: '#e91e63' }" />
          <fa v-else :icon="faPlay" size="lg" :style="{ color: '#e91e63' }" />
        </v-col>
        <v-col align-self="center" justify-self="center" class="py-0 pl-3 pr-0" cols="11">
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
  @Prop(String) quote!: string; // 発言内容
  @Prop(String) time!: string; // 発言時間(h:mm:ss)
  @Prop(String) path!: string; // GitHub のファイルパス

  /* data */
  isPlaying = false; // 再生中かどうか
  isLoaded = false; // 音声ファイルロード済みかどうか
  isLoading = false; // 音声ファイルロード中かどうか
  audio = new Audio();

  /* computed */
  get faPlay() {
    return faPlay;
  }

  get faStop() {
    return faStop;
  }

  get voiceLink(): string {
    return 'https://raw.githubusercontent.com/albno273/sukoya-button-voices/master/' + this.path;
  }

  /* life cycle methods */
  mounted(): void {
    this.audio.addEventListener('ended', () => {
      this.onEnd();
    });
  }

  beforeDestroy(): void {
    this.audio.removeEventListener('ended', () => {
      this.onEnd();
    });
  }

  /* methods */
  // h:mm:ss -> 「(h時間)mm分ss秒ごろ」に変換
  convertTime(time: string | null): string {
    if (time) {
      const split = time.split(':');
      if (this.isTimeHasHour(time)) {
        return Number(split[0]) + '時間' + Number(split[1]) + '分' + split[2] + '秒ごろ';
      } else {
        return Number(split[1]) + '分' + split[2] + '秒ごろ';
      }
    } else {
      return '';
    }
  }

  // 時間の文字列に「○時間」を含めるか判定するだけ
  isTimeHasHour(time: string | null): boolean {
    if (time) {
      const hour = Number(time.split(':')[0]);
      return hour !== 0;
    } else {
      return false;
    }
  }

  onClick(): void {
    if (!this.isLoaded) {
      this.isLoading = true;
      // TODO: URL が不正だった場合のエラーハンドリングをどうするか
      this.audio.src = this.voiceLink;
      this.audio.load();
      this.isLoaded = true;
      this.isLoading = false;
    }

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
  onEnd(): void {
    this.isPlaying = false;
  }
}
</script>
<style>
.button-content {
  height: 100%;
}

.status-icon {
  text-align: center;
}

.quote {
  color: black;
}

.time {
  color: gray;
  font-size: 80%;
}
</style>
