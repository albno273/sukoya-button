<template>
  <v-card class="text-card" outlined shaped>
    <v-card-title> Update </v-card-title>
    <v-card-text>
      [2021/01/03] サイトリニューアル<br />
      [2019/10/27] 同日の第五人格配信の音声を追加<br />
      [2019/10/23] Dark Deception 第2回配信の音声を追加 / ボタン微修正<br />
      [2019/10/22] 9万人記念配信の音声を追加<br />
      [2019/10/21] サイト公開
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Update extends Vue {}
</script>

<style lang="scss" scoped>
.flat {
  background-color: transparent !important;

  &::before {
    box-shadow: none;
  }
}

.update-header {
  font-size: 1.25rem;
}

.update-content {
  font-size: 0.875rem;
}
</style>
