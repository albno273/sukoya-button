<template>
  <div>
    <v-navigation-drawer v-model="drawer" app expand-on-hover color="official2">
      <v-list>
        <v-list-item v-for="(page, i) in pages" :key="i" :to="page.to" router exact color="official">
          <v-list-item-action>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="page.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat color="official2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <!-- TODO: すこやのトレードマーク(角丸の十字)の SVG 作ってここに嵌める -->
        <v-icon large class="header-icon" color="official" @click.stop="drawer = !drawer">
          mdi-gamepad-round-outline mdi-spin-45
        </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="official--text font-weight-bold" v-text="title"> </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class AppHeader extends Vue {
  // data
  drawer = false;
  title = 'すこやすこ！';

  pages = [
    {
      icon: 'mdi-home',
      title: 'Top',
      to: '/',
    },
    {
      icon: 'mdi-comment-processing',
      title: 'Button',
      to: '/button',
    },
    {
      icon: 'mdi-music-circle',
      title: 'Juke Box',
      to: '/jukebox',
    },
  ];
}
</script>

<style lang="scss" scoped>
.header-icon {
  &::before {
    animation: mdi-spin 4s infinite linear;
  }
}

.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
</style>
