<template>
  <v-app light>
    <app-header />
    <v-content>
      <v-container fluid px-6 py-6>
        <nuxt />
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import AppHeader from '~/components/common/AppHeader.vue';
import AppFooter from '~/components/common/AppFooter.vue';

@Component({
  components: {
    AppHeader,
    AppFooter,
  },
})
export default class Default extends Vue {}
</script>
