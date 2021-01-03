<template>
  <v-row>
    <!-- TODO: レスポンシブ対応 -->
    <v-col xs="0" sm="0" md="4" lg="4" xl="4">
      <v-card class="text-card fill-height" outlined shaped>
        <v-img :src="profilePicSrc" class="bio-image" />
      </v-card>
    </v-col>
    <v-col>
      <v-card class="text-card fill-height" outlined shaped>
        <v-card-title> Biography </v-card-title>
        <v-card-text class="description">
          <v-row>
            <v-col cols="4"> Name: </v-col>
            <v-col> 健屋 花那 (すこや かな / Sukoya Kana) </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">Introduction:</v-col>
            <v-col>
              病院で働く女の子。彼女の笑顔で健康になった人は多い。<br />
              世界中の人々を元気付けようと、ライバー活動を始めた。<br />
              不器用で、採血は苦手。
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">YouTube:</v-col>
            <v-col>
              <a :href="youTubeUrl" target="_blank">健屋花那【にじさんじ】KanaSukoya</a>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">HashTag:</v-col>
            <v-col>
              <a :href="hashTagUrl" target="_blank">#すこやカルテ</a>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">Twitter:</v-col>
            <v-col>
              <a :href="twitterUrl" target="_blank">@sukosuko_sukoya</a>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">TwitCasting:</v-col>
            <v-col>
              <a :href="twitCastingUrl" target="_blank">すこやカルテ出張版</a>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">TwiProfile:</v-col>
            <v-col>
              <a :href="twitCastingUrl" target="_blank">sukosuko_sukoya's Profile</a>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">Illust:</v-col>
            <v-col>
              <a :href="mamaUrl" target="_blank">かやはら (@kaya7hara)</a>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component
export default class Biography extends Vue {
  /* data */
  profilePicSrc =
    'https://nijisanji.ichikara.co.jp/wp-content/uploads/elementor/thumbs/Kana_Sukoya_homepage-oqigjmn8jw318pthm6f1ku3juu1urr5h4ffi3sh2sw.png';

  youTubeUrl = 'https://www.youtube.com/channel/UC8C1LLhBhf_E2IBPLSDJXlQ';
  twitterUrl = 'https://twitter.com/sukosuko_sukoya';
  twitCastingUrl = 'https://twitcasting.tv/sukosuko_sukoya/';
  twpfUrl = 'https://twpf.jp/sukosuko_sukoya';
  hashTagUrl = 'https://twitter.com/hashtag/%E3%81%99%E3%81%93%E3%82%84%E3%82%AB%E3%83%AB%E3%83%86';
  mamaUrl = 'https://twitter.com/kaya7hara';

  /* computed */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get faTwitter() {
    return faTwitter;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get faYouTube() {
    return faYoutube;
  }
}
</script>

<style lang="scss" scoped>
.bio-image {
  margin: 7% 27% 5% 18%;
}

.description {
  font-size: 1.1rem;
  padding: 32px !important;

  .row {
    padding-bottom: 20px;

    &:last-child {
      padding-bottom: 0;
    }
  }
}
</style>
