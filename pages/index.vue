<template>
  <h1 class="text-3xl font-bold text-center mt-10">欢迎来到首页</h1>
  <div class="flex justify-center mt-10">
    <Button label="Verify" />
    <DatePicker v-model="date" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const date = ref(new Date());
</script>
<style lang="scss" scoped></style>
