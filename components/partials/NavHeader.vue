<template>
  <header class="bg-white shadow-sm dark:bg-gray-800">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <!-- 左侧 Logo -->
      <div class="flex items-center">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="Company Logo"
          class="h-8 w-auto"
        />
      </div>

      <!-- 中间菜单 (桌面显示) -->
      <nav class="hidden items-center space-x-6 md:flex">
        <!-- hover -->
        <nuxt-link
          to="/"
          class="underline-scale relative inline-block text-gray-700 hover:text-primary-500 dark:text-gray-200"
          >Home
        </nuxt-link>

        <nuxt-link
          to="/news"
          class="underline-scale text-gray-700 hover:text-primary-500 dark:text-gray-200"
          >News</nuxt-link
        >

        <div
          class="group relative py-5"
          @mouseenter="productMenuOpen = true"
          @mouseleave.stop="productMenuOpen = false"
        >
          <button
            @click="productMenuOpen = !productMenuOpen"
            class="flex items-center space-x-2 text-gray-700 hover:text-primary-500 dark:text-gray-200"
          >
            <span :class="[productMenuOpen ? 'text-primary-500' : '', '']">Product</span>
            <i
              :class="[
                productMenuOpen ? 'pi pi-chevron-up text-primary-500' : 'pi pi-chevron-down',
                'text-sm',
              ]"
            ></i>
          </button>
          <transition name="dropdown-fade">
            <div
              v-show="productMenuOpen"
              class="absolute left-0 z-10 mt-2 w-32 rounded border-t-2 border-t-gray-100 bg-white shadow-lg dark:bg-gray-700"
            >
              <nuxt-link
                to="/product1"
                class="underline-scale block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500 dark:text-gray-200 dark:hover:bg-gray-600"
                >Product 1</nuxt-link
              >
              <nuxt-link
                to="/product2"
                class="underline-scale block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500 dark:text-gray-200 dark:hover:bg-gray-600"
                >Product 2</nuxt-link
              >
            </div>
          </transition>
        </div>
        <nuxt-link
          to="/contact"
          class="underline-scale text-gray-700 hover:text-primary-500 dark:text-gray-200"
          >Contact</nuxt-link
        >
      </nav>

      <!-- 右侧内容 -->
      <div class="flex items-center space-x-4">
        <!-- 搜索框 -->
        <div class="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            class="rounded-full border border-gray-300 py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <i class="pi pi-search absolute right-3 top-2.5 text-gray-500 dark:text-gray-400"></i>
        </div>

        <!-- 菜单按钮 (移动端显示) -->
        <button @click="toggleMobileMenu" class="p-2 text-gray-700 dark:text-gray-200 md:hidden">
          <i
            :class="{
              'pi pi-bars text-xl': !mobileMenuOpen,
              'pi pi-times text-xl': mobileMenuOpen,
            }"
          ></i>
        </button>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <transition name="slide">
      <div
        v-show="mobileMenuOpen"
        class="absolute w-full bg-white px-4 py-2 shadow-inner dark:bg-gray-800 md:hidden"
      >
        <div class="flex flex-col space-y-3">
          <nuxt-link to="/" @click="closeMobileMenu" class="py-2 text-gray-700 dark:text-gray-200"
            >Home</nuxt-link
          >
          <nuxt-link
            to="/news"
            @click="closeMobileMenu"
            class="py-2 text-gray-700 dark:text-gray-200"
            >News</nuxt-link
          >

          <!-- 移动端 Product 下拉 -->
          <div class="border-t border-gray-200 pt-2 dark:border-gray-700">
            <div
              @click="toggleProductSubMenu"
              :class="[
                productSubMenuOpen ? 'text-primary-500' : '',
                'flex items-center justify-between py-2 text-gray-700 dark:text-gray-200',
              ]"
            >
              Product
              <i
                :class="{
                  'pi pi-plus': !productSubMenuOpen,
                  'pi pi-minus': productSubMenuOpen,
                }"
                class="cursor-pointer"
              ></i>
            </div>
            <transition name="slide">
              <div v-show="productSubMenuOpen" class="space-y-2 bg-slate-100 pl-4">
                <nuxt-link
                  to="/product1"
                  @click="closeMobileMenu"
                  class="block border-b border-gray-200 py-2 text-gray-700 dark:border-gray-700 dark:text-gray-200"
                  >Product 1</nuxt-link
                >
                <nuxt-link
                  to="/product2"
                  @click="closeMobileMenu"
                  class="block border-b border-gray-200 py-2 text-gray-700 dark:border-gray-700 dark:text-gray-200"
                  >Product 2</nuxt-link
                >
              </div>
            </transition>
          </div>

          <nuxt-link
            to="/contact"
            @click="closeMobileMenu"
            class="py-2 text-gray-700 dark:text-gray-200"
            >Contact</nuxt-link
          >
          <div class="relative mt-2">
            <input
              type="text"
              placeholder="Search..."
              class="w-full rounded-full border border-gray-300 py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <i class="pi pi-search absolute right-3 top-2.5 text-gray-500 dark:text-gray-400"></i>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
  import { ref } from 'vue';

  const productMenuOpen = ref(false);

  const mobileMenuOpen = ref(false);
  const productSubMenuOpen = ref(false);

  const items = ref([
    {
      label: 'Projects',
      items: [
        {
          label: 'Components',
          icon: 'pi pi-bolt',
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server',
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil',
        },
      ],
    },
  ]);

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    if (!mobileMenuOpen.value) {
      productSubMenuOpen.value = false;
    }
  };

  const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
    productSubMenuOpen.value = false;
  };

  const toggleProductSubMenu = () => {
    productSubMenuOpen.value = !productSubMenuOpen.value;
  };
</script>

<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease;
  }
  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }

  /* 添加下拉菜单动画 */
  .dropdown-fade-enter-active,
  .dropdown-fade-leave-active {
    transition: all 0.3s ease-out;
  }
  .dropdown-fade-enter-from,
  .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>
