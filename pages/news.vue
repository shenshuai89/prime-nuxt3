<script setup lang="ts">
  defineOptions({
    name: 'news',
  });
</script>

<template>
  <section>
    <div class="about-bg mb-10 h-64 w-full text-center md:mb-20 md:h-96">
      <h2 class="text-xl leading-none text-white md:text-2xl">About You are currently here! </h2>
      <p class="text-2xl font-bold leading-none text-white md:text-5xl">News</p>
      <!-- <img src="~assets/images/aboutUs.jpg" class="h-full w-full object-cover" /> -->
    </div>
    <Container>
      <div class="my-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          class="flex flex-col items-center justify-center rounded bg-white p-4 py-16 shadow-lg hover:shadow-xl"
        >
          <i class="pi pi-crown !text-6xl text-blue-500"></i>
          <h1 class="my-4 text-center text-2xl font-bold text-gray-600">Awesome Work Place</h1>
          <p class="text-center text-gray-500"
            >You can rely on our 24/7 tech support that will gladly solve any app issue you may
            have.</p
          >
        </div>
        <div
          class="flex flex-col items-center justify-center rounded bg-white p-4 py-16 shadow-lg hover:shadow-xl"
        >
          <i class="pi pi-expand !text-6xl text-blue-500"></i>
          <h1 class="my-4 text-center text-2xl font-bold text-gray-600">Unlimited facility</h1>
          <p class="text-center text-gray-500"
            >You can rely on our 24/7 tech support that will gladly solve any app issue you may
            have.</p
          >
        </div>
        <div
          class="flex flex-col items-center justify-center rounded bg-white p-4 py-16 shadow-lg hover:shadow-xl"
        >
          <i class="pi pi-desktop !text-6xl text-blue-500"></i>
          <h1 class="my-4 text-center text-2xl font-bold text-gray-600">Responsive Design</h1>
          <p class="text-center text-gray-500"
            >You can rely on our 24/7 tech support that will gladly solve any app issue you may
            have.</p
          >
        </div>
      </div>
    </Container>
    <ContainerFull class="mb-20 bg-slate-900 py-20">
      <div class="m-auto w-[640px] text-center text-5xl font-bold text-white"
        >We run all kinds of service that your success</div
      >
      <Container class="my-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          class="flex flex-col items-center justify-center rounded border border-blue-800 p-4 py-16 text-white hover:border-blue-900 hover:bg-blue-700"
        >
          <i class="pi pi-stopwatch !text-6xl text-white"></i>
          <h1 class="my-4 text-center text-2xl font-bold">Unlimited Support</h1>
          <p class="text-center"
            >You can rely on our 24/7 tech support that will gladly solve any app issue you may
            have.</p
          >
        </div>
        <div
          class="flex flex-col items-center justify-center rounded border border-blue-800 p-4 py-16 text-white hover:border-blue-900 hover:bg-blue-700"
        >
          <i class="pi pi-megaphone !text-6xl text-white"></i>
          <h1 class="my-4 text-center text-2xl font-bold">Digital Services</h1>
          <p class="text-center"
            >You can rely on our 24/7 tech support that will gladly solve any app issue you may
            have.</p
          >
        </div>
        <div
          class="flex flex-col items-center justify-center rounded border border-blue-800 p-4 py-16 text-white hover:border-blue-900 hover:bg-blue-700"
        >
          <i class="pi pi-palette !text-6xl text-white"></i>
          <h1 class="my-4 text-center text-2xl font-bold">Clean Design</h1>
          <p class="text-center"
            >You can rely on our 24/7 tech support that will gladly solve any app issue you may
            have.</p
          >
        </div>
      </Container>
    </ContainerFull>
  </section>
</template>

<style scoped>
  .about-bg {
    background-color: rgba(0, 0, 0, 0.89);
    background: rgba(0, 0, 0, 0.7) url('~/assets/images/aboutUs.jpg');
    padding: 140px 0px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
