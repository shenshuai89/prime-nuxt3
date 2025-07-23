<template>
  <div class="mx-auto">
    <div class="mt-10 px-6 md:mt-12" v-if="$slots.title">
      <h3 class="text-2xl font-semibold text-black md:text-4xl"><slot name="title"></slot></h3>
    </div>
    <slot />
  </div>
</template>
