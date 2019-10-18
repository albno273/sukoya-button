<template>
  <v-app light>
    <v-app-bar :clipped-left="clipped" class="white--text" fixed app color="primary">
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer class="white--text" :fixed="fixed" app color="secondary">
      <!-- TODO: フッターになに書くか考える -->
      <span>&copy; 2019</span>
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
}
</script>
