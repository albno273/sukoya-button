<template>
  <div>
    <information />
    <broadcast
      v-for="broadcast in data.broadcasts"
      :key="broadcast.link"
      :date="broadcast.date"
      :title="broadcast.title"
      :link="broadcast.link"
      :quotes="broadcast.quotes"
    />
    <profile />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { VoiceData } from '../types/index';
import Information from '../components/Information.vue';
import Broadcast from '../components/Broadcast.vue';
import Profile from '../components/Profile.vue';

@Component({
  components: {
    Information,
    Broadcast,
    Profile,
  },
})
export default class App extends Vue {
  /* data */
  data: VoiceData = {
    broadcasts: [
      {
        title:
          '【９万人記念】ケーキ食べて少しだけ歌いました、皆さんいつもありがとうございます！【健屋花那/にじさんじ】',
        date: '20191020',
        link: 'https://www.youtube.com/watch?v=OgO6ghgBSLo',
        quotes: [
          {
            quote: 'brrrr',
            time: '00:41',
          },
        ],
      },
    ],
  };
}
</script>
