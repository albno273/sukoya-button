<template>
  <v-btn block class="voice-button" color="btn-primary" :loading="isLoading" @click.native="onClick()">
    <div class="voice-button-status-icon">
      <fa v-if="isPlaying" :icon="faStop" size="lg" :style="{ color: 'white' }" />
      <fa v-else :icon="faPlay" size="lg" :style="{ color: 'white' }" />
    </div>
    <div class="voice-button-content">
      <div class="voice-button-content-quote">
        {{ quote }}
      </div>
      <div class="voice-button-content-time">
        {{ convertTime(time) }}
      </div>
    </div>
  </v-btn>
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
<style lang="scss" scoped>
.voice-button {
  height: 45px !important;
  padding: 0 5px !important;

  &-status-icon {
    width: 20px;
    text-align: center;
    margin: 0 5px;
  }

  &-content {
    width: calc(100% - 20px);

    &-quote {
      color: white;
    }

    &-time {
      color: pink;
      font-size: 80%;
    }
  }
}
</style>
