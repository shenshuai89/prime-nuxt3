<template>
  <main class="main-content">
    <!-- Header Component Start -->
    <NavHeader></NavHeader>
    <!-- Header Component End-->

    <!-- Main Component Start -->
    <NuxtPage />
    <!-- Main Component Start -->

    <!-- Footer Component Start -->
    <NavFooter></NavFooter>
    <!-- Footer Component End-->
  </main>
</template>
<script setup>
  // Import Header Components
  import NavHeader from '../components/partials/NavHeader.vue';
  import NavFooter from '../components/partials/Footer.vue';
</script>
