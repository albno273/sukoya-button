<template>
  <div>
    <information />
    <broadcast />
    <profile />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
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
export default class App extends Vue {}
</script>
