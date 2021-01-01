<template>
  <v-app light>
    <app-header />
    <v-content color="white">
      <v-container fluid px-4 py-6>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app color="primary white--text">
      <span class="footer"> 音声の著作権は、全て「にじさんじ所属 公式バーチャルライバー 健屋花那」に帰属します。 </span>
      <span class="footer"
        >コードは
        <a :href="mitLicenseUrl" target="_blank">MIT License</a>
        で公開しています。</span
      >
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import AppHeader from '~/components/common/AppHeader.vue';

@Component({
  components: {
    AppHeader,
  },
})
export default class Default extends Vue {
  mitLicenseUrl = 'https://opensource.org/licenses/MIT';
}
</script>
<style scoped>
.footer {
  font-size: 0.875rem;
}
</style>
