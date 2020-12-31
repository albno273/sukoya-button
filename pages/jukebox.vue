<template>
  <v-row class="fill-height overflow-y-auto">
    <v-col v-for="(song, index) in songs" :key="index" cols="12" xs="12" sm="12" md="6" lg="4" xl="3">
      <v-sheet min-height="250" class="fill-height" color="transparent">
        <v-lazy
          v-model="song.isActive"
          :options="{
            threshold: 0.5,
          }"
          class="fill-height"
        >
          <you-tube-card class="fill-height" :video-data="song" />
        </v-lazy>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import YouTubeCard from '~/components/jukebox/YouTubeCard.vue';
import { sukoyaSongs } from '~/constraints/songs';

@Component({
  components: {
    YouTubeCard,
  },
})
export default class JukeBox extends Vue {
  isActive = false;
  // TODO: YouTube API から取得してはめ込むようにしたいね…
  songs = sukoyaSongs;
}
</script>
