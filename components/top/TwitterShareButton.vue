<template>
  <span>
    <v-btn
      outlined
      href="https://twitter.com/share?url=https://www.sukoya-kana.live&hashtags=すこやカルテ&text=すこやすこ！"
      target="_blank"
      class="outlined twitter-share"
      color="official"
    >
      <fa :icon="faTwitter" class="twitter-share-logo" />
      Tweet
    </v-btn>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component
export default class TwitterShare extends Vue {
  /* computed */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get faTwitter() {
    return faTwitter;
  }
}
</script>

<style lang="scss" scoped>
.twitter-share {
  color: var(--v-official-base);
  font-size: 12px;
  height: 25px !important;
  padding: 0 12px !important;
  border-radius: 12px 2px !important;
  text-transform: none;

  &-logo {
    margin-right: 5px;
  }
}
</style>
