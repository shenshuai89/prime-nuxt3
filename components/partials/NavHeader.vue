<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <!-- 左侧 Logo -->
      <div class="flex items-center">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="Company Logo"
          class="h-8 w-auto"
        />
      </div>

      <!-- 中间菜单 (桌面显示) -->
      <nav class="hidden md:flex space-x-6 items-center">
        <nuxt-link to="/" class="text-gray-700 dark:text-gray-200 hover:text-primary-500"
          >Home</nuxt-link
        >
        <nuxt-link to="/news" class="text-gray-700 dark:text-gray-200 hover:text-primary-500"
          >News</nuxt-link
        >

        <!-- 下拉菜单：Product -->
        <div
          class="relative group py-5"
          @mouseenter="productMenuOpen = true"
          @mouseleave.stop="productMenuOpen = false"
        >
          <button
            @click="productMenuOpen = !productMenuOpen"
            class="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-primary-500"
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
              class="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded shadow-lg z-10"
            >
              <nuxt-link
                to="/product1"
                class="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:text-primary-500 dark:hover:bg-gray-600"
                >Product 1</nuxt-link
              >
              <nuxt-link
                to="/product2"
                class="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:text-primary-500 dark:hover:bg-gray-600"
                >Product 2</nuxt-link
              >
            </div>
          </transition>
        </div>

        <nuxt-link to="/contact" class="text-gray-700 dark:text-gray-200 hover:text-primary-500"
          >Contact</nuxt-link
        >
      </nav>

      <!-- 右侧内容 -->
      <div class="flex items-center space-x-4">
        <!-- 搜索框 -->
        <div class="hidden md:block relative">
          <input
            type="text"
            placeholder="Search..."
            class="pl-4 pr-10 py-2 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <i class="pi pi-search absolute right-3 top-2.5 text-gray-500 dark:text-gray-400"></i>
        </div>

        <!-- 菜单按钮 (移动端显示) -->
        <button @click="toggleMobileMenu" class="md:hidden p-2 text-gray-700 dark:text-gray-200">
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
        class="md:hidden absolute w-full bg-white dark:bg-gray-800 px-4 py-2 shadow-inner"
      >
        <div class="flex flex-col space-y-3">
          <nuxt-link to="/" @click="closeMobileMenu" class="text-gray-700 dark:text-gray-200 py-2"
            >Home</nuxt-link
          >
          <nuxt-link
            to="/news"
            @click="closeMobileMenu"
            class="text-gray-700 dark:text-gray-200 py-2"
            >News</nuxt-link
          >

          <!-- 移动端 Product 下拉 -->
          <div class="border-t border-gray-200 dark:border-gray-700 pt-2">
            <div
              @click="toggleProductSubMenu"
              :class="[
                productSubMenuOpen ? 'text-primary-500' : '',
                'flex justify-between items-center text-gray-700 dark:text-gray-200 py-2',
              ]"
            >
              Product
              <i
                :class="{
                  'pi pi-plus': !productSubMenuOpen,
                  'pi pi-minus': productSubMenuOpen,
                }"
              ></i>
            </div>
            <transition name="slide">
              <div v-show="productSubMenuOpen" class="pl-4 space-y-2 bg-slate-100">
                <nuxt-link
                  to="/product1"
                  @click="closeMobileMenu"
                  class="block text-gray-700 dark:text-gray-200 py-2 border-b border-gray-200 dark:border-gray-700"
                  >Product 1</nuxt-link
                >
                <nuxt-link
                  to="/product2"
                  @click="closeMobileMenu"
                  class="block text-gray-700 dark:text-gray-200 py-2 border-b border-gray-200 dark:border-gray-700"
                  >Product 2</nuxt-link
                >
              </div>
            </transition>
          </div>

          <nuxt-link
            to="/contact"
            @click="closeMobileMenu"
            class="text-gray-700 dark:text-gray-200 py-2"
            >Contact</nuxt-link
          >
          <div class="relative mt-2">
            <input
              type="text"
              placeholder="Search..."
              class="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
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
