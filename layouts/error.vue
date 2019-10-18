<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Error extends Vue {
  /* layout def */
  public static layout = 'empty';

  /* props */
  @Prop({ type: Object, default: null }) error!: object;

  /* data */
  pageNotFound = '404 Not Found';
  otherError = 'An error occurred';

  /* head */
  head() {
    if ('statusCode' in this.error) {
      // FIXME: object のプロパティ存在判定チェックどう通ればいいんだ…
      const err = this.error as { statusCode?: number };
      const title = err.statusCode === 404 ? this.pageNotFound : this.otherError;

      return title;
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
