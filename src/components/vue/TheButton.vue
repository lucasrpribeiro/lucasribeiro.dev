<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
  },
})
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="block w-full rounded-md bg-customBlue hover:bg-blue-600 py-3 px-5 text-center text-base font-medium shadow-md duration-300 sm:inline-block sm:w-auto"
  >
    <slot />
  </a>
</template>