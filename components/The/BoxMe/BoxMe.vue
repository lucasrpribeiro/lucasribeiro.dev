<template>
  <div :class="$style.boxMe">
    <img src="https://avatars.githubusercontent.com/u/49355209?v=4" alt="Uma foto minha" :class="$style.profImg">
    <div :class="$style.sec">
      <strong>Lucas Ribeiro</strong>
      <span>Olá, eu sou Lucas, desenvolvo para a web desde 2021 utilizando JavaScript, VueJS, NuxtJS e TailwindCSS</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheBoxMe'
}
</script>

<style lang="postcss" module>
.boxMe {
  @apply flex flex-col gap-2 justify-center items-center p-4 rounded-md w-1/2 bg-full-blue-100;
}

.sec {
  @apply flex flex-col text-center;
}

.profImg {
  @apply w-60 rounded-full m-auto;
}
</style>
