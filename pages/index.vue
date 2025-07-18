<template>
  <main class="min-h-[calc(100vh-88px)]">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl text-green-600 font-bold dark:text-white"> 欢迎使用 </h1>
      <p class="mt-4"> 这是一个支持暗黑模式的页面 </p>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const date = ref(new Date());
</script>
<style lang="scss" scoped></style>
