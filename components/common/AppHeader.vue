<template>
  <header>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(page, i) in pages" :key="i" :to="page.to" router exact>
          <v-list-item-action>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="page.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" class="white--text" fixed app color="primary">
      <v-app-bar-nav-icon :color="'nav-drawer'" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class AppHeader extends Vue {
  // data
  drawer = false;
  title = 'すこやボタン';

  pages = [
    {
      icon: 'mdi-volume-high',
      title: 'Button',
      to: '/',
    },
    {
      icon: 'mdi-music-clef-treble',
      title: 'Juke Box',
      to: '/jukebox',
    },
  ];
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.active {
  color: white;
}

.v-tab:not(.v-tab--active) {
  color: pink !important;
}
</style>
