<template>
  <v-footer app color="official2">
    <span class="footer">
      音声の著作権は、全て「
      <a :href="youtubeChannelUrl" target="_blank">にじさんじ所属 公式バーチャルライバー 健屋花那</a>
      」に帰属します。
    </span>
    <span class="footer">
      コードは
      <a :href="mitLicenseUrl" target="_blank">MIT License</a>
      で
      <a :href="repositoryUrl" target="_blank">公開しています</a>
      。
    </span>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class AppFooter extends Vue {
  /* data */
  youtubeChannelUrl = 'https://www.youtube.com/channel/UC8C1LLhBhf_E2IBPLSDJXlQ';
  mitLicenseUrl = 'https://opensource.org/licenses/MIT';
  repositoryUrl = 'https://github.com/albno273/sukoya-button';
}
</script>

<style lang="scss" scoped>
.footer {
  font-size: 0.875rem;

  a {
    color: var(--v-official-base);
  }
}
</style>
