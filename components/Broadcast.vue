<template>
  <v-container fluid grid-list-md>
    <div class="headline title">
      {{ title }}
    </div>
    <v-layout wrap>
      <v-flex xs6 sm4 md4>
        <audio-btn />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import AudioBtn from './AudioBtn.vue';

@Component({
  components: {
    AudioBtn,
  },
})
export default class Broadcast extends Vue {
  /* props */
  @Prop(String) title = '配信タイトル'; // 配信タイトル(アーカイブ化後)
  @Prop(String) link!: string; // アーカイブの URL
}
</script>
<style>
.title {
  color: #03a9f4;
}
</style>
