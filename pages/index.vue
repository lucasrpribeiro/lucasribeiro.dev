<template>
  <section :class="$style.mySection">
    <TheBoxMe />
  </section>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="postcss" module>
  .mySection {
    @apply min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-sky-500 to-full-blue-500;
  }
</style>
