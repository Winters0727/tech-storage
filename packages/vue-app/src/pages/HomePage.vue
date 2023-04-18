<template lang="">
  <div>
    <span>{{ test }}</span>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const test = ref('This is test :)');
    return { test };
  },
});
</script>

<style lang="scss" module></style>
