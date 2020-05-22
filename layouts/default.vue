<template>
  <v-app light>
    <v-app-bar :clipped-left="clipped" class="white--text" fixed app color="primary">
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container fluid px-4 py-6>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer class="white--text" :fixed="fixed" app color="secondary">
      <span class="footer">音声の著作権は、全て「にじさんじ所属 公式バーチャルライバー 健屋花那」に帰属します。</span>
      <span class="footer">コードは <a :href="mitLicenseUrl" target="_blank">MIT License</a> で公開しています。</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Default extends Vue {
  /* data */
  items = [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/',
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire',
    },
  ];

  title = 'すこやボタン';

  mitLicenseUrl = 'https://opensource.org/licenses/MIT';
}
</script>
<style scoped>
.footer {
  font-size: 0.875rem;
}
</style>
