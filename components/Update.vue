<template>
  <v-card class="mt-2" outlined>
    <v-expansion-panels>
      <v-expansion-panel class="flat">
        <v-expansion-panel-header class="mx-2 update-header">
          更新情報
        </v-expansion-panel-header>
        <v-expansion-panel-content class="mx-2 update-content">
          [2019/10/27] 同日の第五人格配信の音声を追加<br />
          [2019/10/23] Dark Deception 第2回配信の音声を追加 / ボタン微修正<br />
          [2019/10/22] 9万人記念配信の音声を追加<br />
          [2019/10/21] サイト公開
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Update extends Vue {}
</script>
<style scoped>
.flat::before {
  box-shadow: none;
}

.update-header {
  font-size: 1.25rem;
}

.update-content {
  font-size: 0.875rem;
}
</style>
