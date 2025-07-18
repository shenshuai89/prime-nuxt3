<template>
  <header class="fixed top-0 left-0 w-full backdrop-blur-md border-b z-50">
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[60px]"
    >
      <!-- 左侧 Logo -->
      <div class="lg:flex-1 flex items-center gap-1.5 min-w-0">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-6 h-6 flex-shrink-0">
            <!-- 先用 favicon 代替logo图片 -->
            <img src="/favicon.ico" alt="Logo" class="w-full h-full object-contain" />
          </div>
          <span class="text-base font-medium">Site Name</span>
        </NuxtLink>
      </div>

      <!-- 中间导航 -->
      <nav class="items-center gap-x-8 hidden lg:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="text-sm font-medium hover:text-primary-500"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>

      <!-- 右侧功能区 -->
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <client-only>
          <Button @click="toggleMode" outlined class="flex items-center gap-2 p-button-text">
            <span class="pi" :class="modeIcon"></span>
            <span v-if="colorMode.preference === 'light'">Light</span>
            <span v-if="colorMode.preference === 'dark'">Dark</span>
            <span v-if="colorMode.preference === 'system'">Auto</span>
          </Button>
        </client-only>
        <Button label="登录" class="gap-2" link />
        <Button label="注册" severity="primary" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const navItems = ref([
    { name: '首页', path: '/' },
    { name: '产品', path: '/products' },
    { name: '关于', path: '/about' },
  ]);

  const colorMode = useColorMode();

  // 定义模式顺序：light -> dark -> system -> light
  const modes = ['light', 'dark', 'system'];

  // 计算当前图标
  const modeIcon = computed(() => {
    switch (colorMode.preference) {
      case 'dark':
        return 'pi pi-moon';
      case 'light':
        return 'pi pi-sun';
      default:
        return 'pi pi-desktop';
    }
  });

  // 切换模式
  const toggleMode = () => {
    const currentIndex = modes.indexOf(colorMode.preference);
    const nextIndex = (currentIndex + 1) % modes.length;
    colorMode.preference = modes[nextIndex];
  };
</script>
