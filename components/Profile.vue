<template>
  <div class="mt-3 mb-5">
    <v-card outlined>
      <v-container>
        <v-row>
          <v-col cols="5">
            <div class="container">
              <div align="center">
                <img :src="profilePicSrc" width="300" />
              </div>
              <div class="name" align="center">
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
          </v-col>
          <v-divider vertical />
          <v-col>
            <a
              class="twitter-timeline"
              data-height="600"
              data-lang="ja"
              data-border-color="#e91e63"
              data-chrome="noheader nofooter"
              href="https://twitter.com/sukosuko_sukoya?ref_src=twsrc%5Etfw"
            >
              Tweets by sukosuko_sukoya
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component
export default class Profile extends Vue {
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
}
</script>
<style>
.container {
  justify-content: center;
  align-items: center;
}

.name {
  font-weight: bold;
  margin: 5px 0;
}

.large {
  font-size: x-large;
}

.subscription {
  color: gray;
  margin: 20px 0;
}
</style>
