<template>
  <div>
    <v-navigation-drawer v-model="drawer" color="white--text primary" dark permanent expand-on-hover app>
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
    <v-app-bar app flat color="primary">
      <!--
      <v-app-bar-nav-icon class="primary" color="white" @click.stop="drawer = !drawer" />
      -->
      <v-icon class="header-icon" color="white" large> mdi-gamepad-round-outline mdi-rotate-45 </v-icon>
      <v-toolbar-title class="white--text font-weight-bold" v-text="title" />
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
.header-icon {
  padding-right: 10px;
}

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
