<template>
  <div>
    <div class="mt-3 mb-5">
      <v-card>
        <v-card-text>
          健屋さんからいつも元気をもらっています。
          <br />勝手に作ってすみません。
          <br />
          <br />よかったら宣伝してください。
          <div>
            <a
              href="https://twitter.com/share"
              class="twitter-share-button"
              data-url="https://albno273.github.io/sukoya-button/"
              data-text="すこやボタン"
              data-lang="ja"
              data-hashtags="すこやすこ"
              data-show-count="true"
              >Tweet</a
            >
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div class="mt-3 mb-10">
      <v-card>
        <v-card-title>オマージュ / 参考 / 先駆者さま</v-card-title>
        <v-card-text>
          <a src="https://www.natorisana.love/" target="_blank">さなボタン(2)</a>
          さま
        </v-card-text>
      </v-card>
    </div>
    <v-container fluid grid-list-md>
      <div class="headline">
        配信・動画名
      </div>
      <v-layout wrap>
        <v-flex xs6 sm4 md2>
          <v-card @click.stop>
            <v-card-text>セリフ1</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <v-card @click.stop>
            <v-card-text>セリフ2</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class App extends Vue {}
</script>
