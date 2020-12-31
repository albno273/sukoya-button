<template>
  <div>
    <top />
    <update />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Top from '~/components/common/Top.vue';
import Update from '~/components/common/Update.vue';

@Component({
  components: {
    Top,
    Update,
  },
})
export default class Information extends Vue {}
</script>
