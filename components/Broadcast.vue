<template>
  <v-container fluid grid-list-md>
    <div class="headline title">
      配信・動画名
    </div>
    <v-layout wrap>
      <v-flex xs6 sm4 md2>
        <v-card @click.stop>
          <v-card-text>セリフ1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md2>
        <v-card @click.stop>
          <v-card-text>セリフ2</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Broadcast extends Vue {}
</script>
<style>
.title {
  color: #03a9f4;
}
</style>
