<template>
  <div>
    <LandingCarousel />
    <LandingIndexCard />
    <LandingFrameworks />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const date = ref(new Date());
</script>
<style lang="scss" scoped></style>
