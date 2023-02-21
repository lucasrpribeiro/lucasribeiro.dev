<script setup lang="ts">
const links = [
  { href: 'https://instagram.com/', icon: '/images/icones/footer/instagram.svg', alt: 'instagram'},
  { href: 'https://www.linkedin.com/in/lucasribeirolr/', icon: '/images/icones/footer/linkedin.svg', alt: 'linkedin'},
  { href: 'https://github.com/lukinhas711', icon: '/images/icones/footer/github.svg', alt: 'github'}
]
</script>


<template>
<footer class="container mx-auto flex flex-col items-center justify-center gap-4 p-6">
  <section class="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between lg:w-11/12 lg:items-end">
    <section class="flex flex-col items-center justify-center gap-4 lg:items-start">
      <img src="" alt="Lucas Ribeiro logo" class="bg-white w-20 h-11"/>
      <span class="text-center">2023 © Lucas Ribeiro. Todos os direitos reservados.</span>
    </section>
    <ul class="flex justify-center items-center gap-2 text-white lg:justify-end">
      <li v-for="link in links" :key="link.icon">
        <a :href="link.href" :alt="link.alt" target="_blank">
          <span class="sr-only">{{ link.alt }}</span>
          <img :src="link.icon" :alt="link.alt" class="w-10 h-10 p-2 border border-gray-700 rounded hover:border-white duration-300"/>
        </a>
      </li>
    </ul>
  </section>
  <section class="border-t border-gray-600 pt-4 w-11/12 text-center">
    <span>
      Design por <a href="" target="_blank" alt="Pedro Henrique" class="font-bold">Pedro Henrique</a>  
      & desenvolvido por <a href="https://www.linkedin.com/in/lucasribeirolr/" target="_blank" alt="Lucas Ribeiro" class="font-bold"></a> Lucas Ribeiro
    </span>
  </section>
</footer>

</template>