<template>
  <AppHeader />
  <main class="pt-[60px] min-h-[calc(100vh-60px)]">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl text-green-600 font-bold dark:text-white"> 欢迎使用 </h1>
      <p class="mt-4"> 这是一个支持暗黑模式的页面 </p>
    </div>
  </main>
  <h1 class="text-3xl font-bold text-center mt-10 dark:text-white">欢迎来到首页</h1>
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
