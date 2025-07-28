<script setup lang="ts">
  import aboutImage from '~/assets/images/b2.jpg';
  defineOptions({
    name: 'about',
  });
</script>

<template>
  <section>
    <div class="about-bg mb-10 h-64 w-full text-center md:mb-20 md:h-96">
      <h2 class="text-xl leading-none text-white md:text-2xl">About You are currently here! </h2>
      <p class="text-2xl font-bold leading-none text-white md:text-5xl">AboutUs</p>
      <!-- <img src="~assets/images/aboutUs.jpg" class="h-full w-full object-cover" /> -->
    </div>
    <container>
      <div class="grid md:grid md:grid-cols-2 md:gap-8">
        <div class="w-full text-center lg:text-left">
          <h1 class="text-4xl font-bold leading-none text-blue-800 lg:text-5xl xl:text-6xl"
            >Main title of your landing page</h1
          >
          <p class="mt-6 text-xl font-thin text-yellow-900 lg:text-3xl"
            >Over 25 years working in IT services developing software applicatio and mobile apps for
            clients all over the world.</p
          >
          <p class="mt-6 text-lg font-light lg:text-xl"
            >Free landing page template to promote your business startup and generate leads for the
            offered services</p
          >
          <div class="pt-8">
            <div class="mb-4 flex justify-center text-left md:justify-start">
              <i class="pi pi-camera !text-7xl text-blue-800"></i>
              <div class="ml-6">
                <p class="text-2xl font-bold text-blue-800">Our Services</p>
                <span>
                  We provide IT services developing software applications and mobile apps for
                  clients all over the world.</span
                >
              </div>
            </div>
            <div class="mb-4 flex justify-center text-left md:justify-start">
              <i class="pi pi-bell !text-7xl text-blue-800"></i>
              <div class="ml-6">
                <p class="text-2xl font-bold text-blue-800">Company Award</p>
                <span>
                  IT services developing software applications and mobile apps for clients all over
                  the world.</span
                >
              </div>
            </div>
          </div>
          <p class="my-8 md:my-12"
            ><button
              type="button"
              class="rounded bg-blue-600 px-12 py-4 text-white hover:bg-blue-700"
              >About US</button
            >
          </p>
        </div>
        <div class="w-full">
          <img :src="aboutImage" alt="" class="w-full rounded-lg" />
        </div>
      </div>
    </container>
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
