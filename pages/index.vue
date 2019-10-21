<template>
  <div>
    <information />
    <broadcast
      v-for="broadcast in voices.broadcasts"
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
import { voices } from '../voice';
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
  voices = voices;
}
</script>
