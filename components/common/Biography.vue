<template>
  <div>
    <div align="center">
      <img :src="profilePicSrc" width="60%" />
    </div>
    <div class="name pt-4" align="center">
      <span class="large"> 健屋 花那<br /> </span>
      すこや かな / Kana Sukoya
    </div>
    <div class="subscription" align="center">
      病院で働く女の子。彼女の笑顔で健康になった人は多い。<br />
      世界中の人々を元気付けようと、ライバー活動を始めた。<br />
      <br />
      不器用で、採血は苦手。
    </div>
    <v-row>
      <v-col />
      <v-col align="center" justify="center">
        <a :href="twitterUrl" target="_blank">
          <fa :icon="faTwitter" size="3x" :style="{ color: '#00acee' }" />
        </a>
      </v-col>
      <v-col align="center" justify="center">
        <a :href="youTubeUrl" target="_blank">
          <fa :icon="faYouTube" size="3x" :style="{ color: 'red' }" />
        </a>
      </v-col>
      <v-col />
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component
export default class Biography extends Vue {
  /* data */
  profilePicSrc = 'https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Kana_Sukoya.png';
  youTubeUrl = 'https://www.youtube.com/channel/UC8C1LLhBhf_E2IBPLSDJXlQ';
  twitterUrl = 'https://twitter.com/sukosuko_sukoya';

  /* computed */
  get faTwitter() {
    return faTwitter;
  }

  get faYouTube() {
    return faYoutube;
  }

  get profilePicWidth(): string {
    return window.innerWidth * 0.75 + 'px';
  }
}
</script>
