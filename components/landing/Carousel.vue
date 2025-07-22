<template>
  <Carousel
    :value="products"
    :responsiveOptions="responsiveOptions"
    circular
    :autoplayInterval="3000"
    :showIndicators="false"
    class="custom-carousel w-full"
  >
    <template #item="slotProps">
      <div class="relative w-full rounded bg-slate-400 dark:border-surface-700">
        <div class="absolute left-[5%] top-[10%] w-1/2 md:top-1/4 md:w-1/3">
          <p class="text-3xl font-bold text-white md:text-7xl">{{ slotProps.data.title }}</p>
          <p class="mt-4 text-[10px] font-light tracking-wide text-white md:text-2xl">{{
            slotProps.data.desc
          }}</p>
          <Button
            class="mt-4 md:mt-8"
            label="Learn more"
            :size="activeBreakpoint < 2 ? 'small' : 'large'"
          />
        </div>
        <img :src="slotProps.data.image" mode="scaleToFill" />
      </div>
    </template>
  </Carousel>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Carousel from 'primevue/carousel';
  import image1 from '~/assets/images/slider1.jpg';
  import image2 from '~/assets/images/slider2.jpg';

  const products = ref([
    {
      title: 'High quality design',
      desc: 'But in practice, as many differences exist within these is resolve similar problems in the future.',
      image: image1,
    },
    {
      title: 'Digital product',
      desc: 'But in practice, as many differences exist within these is resolve similar problems in the future.',
      image: image2,
    },
  ]);

  const responsiveOptions = ref([
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1,
    },
  ]);

  const activeBreakpoint = ref(0);
  onMounted(() => {
    window.addEventListener('resize', () => {
      activeBreakpoint.value = getActiveBreakpoint();
    });
    activeBreakpoint.value = getActiveBreakpoint();
  });
</script>

<style scoped>
  :deep(.p-carousel-content) {
    position: relative;
    width: 100%;
  }
  :deep(.p-carousel-prev-button) {
    top: 50%;
    position: absolute !important;
    z-index: 999;
  }
  :deep(.p-carousel-next-button) {
    top: 50%;
    right: 0px;
    position: absolute !important;
    z-index: 999;
  }
</style>
