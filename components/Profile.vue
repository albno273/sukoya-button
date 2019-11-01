<template>
  <div>
    <div v-if="isNarrowThan600px">
      <div class="mb-3">
        <v-card outlined>
          <v-container>
            <biography />
          </v-container>
        </v-card>
      </div>
      <v-card outlined>
        <twitter-time-line />
      </v-card>
    </div>
    <div v-else>
      <v-card outlined>
        <div class="pa-4">
          <v-row>
            <v-col cols="5">
              <biography />
            </v-col>
            <v-divider vertical />
            <v-col class="py-0">
              <twitter-time-line />
            </v-col>
          </v-row>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Biography from '../components/Biography.vue';
import TwitterTimeLine from '../components/TwitterTimeLine.vue';

@Component({
  components: {
    Biography,
    TwitterTimeLine,
  },
})
export default class Profile extends Vue {
  /* data */
  isNarrowThan600px = false;

  /* life cycle methods */
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
    }
  }

  /* methods */
  onResize() {
    this.isNarrowThan600px = window.innerWidth < 600;
  }
}
</script>
<style>
.name {
  font-weight: bold;
  margin: 5px 0;
}

.large {
  font-size: x-large;
}

.subscription {
  color: gray;
  margin: 20px 0;
}
</style>
