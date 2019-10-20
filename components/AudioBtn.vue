<template>
  <v-card
    class="mx-auto"
    @click.native="
      onClick(
        'https://raw.githubusercontent.com/sanabutton/sounds/master/%E3%81%95%E3%81%AA%E3%81%AE%E3%81%8A%E3%81%86%E3%81%9F%E3%80%82%E3%81%93%E3%81%93%E3%81%99%E3%81%93%E9%9B%91%E8%AB%87/5000%E5%84%84%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86.mp3',
      )
    "
  >
    <v-card-text class="pa-2">
      <v-row align="center" justify="center" class="mx-0">
        <v-col class="pa-0 status-icon" cols="1">
          <fa v-if="isPlaying" :icon="faStop" size="lg" :style="{ color: '#e91e63' }" />
          <fa v-else :icon="faPlay" size="lg" :style="{ color: '#e91e63' }" />
        </v-col>
        <v-col class="pl-1" cols="11">
          <v-row class="mx-0 quote">
            発言がここに入ります
          </v-row>
          <v-row class="mx-0 time">
            時間がここに入ります
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

  /* computed */
  get faPlay() {
    return faPlay;
  }

  get faStop() {
    return faStop;
  }

  /* methods */
  // [h:]mm:ss -> 「(h時間)mm分ss秒ごろ」に変換
  convertTime(time: string): string {
    const split = time.split(':');
    if (this.isTimeHasHour(time)) {
      return split[0] + '時間' + split[1] + '分' + split[2] + '秒ごろ';
    } else {
      return split[0] + '分' + split[1] + '秒ごろ';
    }
  }

  // 時間の文字列に「○時間」が含まれてるか確認するだけ
  isTimeHasHour(time: string): boolean {
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
  }

  onClick(src: string) {
    if (!this.isPlaying) {
      const audio = new Audio(src);
      audio.load();

      this.isPlaying = true;
      audio.play();

      audio.addEventListener('ended', () => {
        console.log('ended');
        this.isPlaying = false;
      });
    }
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
