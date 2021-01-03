<template>
  <div>
    <what-is-this class="spacer" />
    <acknowledgements class="spacer" />
    <update class="spacer" />
    <biography />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import WhatIsThis from '~/components/top/WhatIsThis.vue';
import Acknowledgements from '~/components/top/Acknowledgements.vue';
import Update from '~/components/top/Update.vue';
import Biography from '~/components/top/Biography.vue';

@Component({
  components: {
    WhatIsThis,
    Acknowledgements,
    Update,
    Biography,
  },
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.spacer {
  margin-bottom: 25px;
}
</style>
