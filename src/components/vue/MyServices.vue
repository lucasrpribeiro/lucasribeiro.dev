<script setup>
const services = [
  {
    name: 'Otimização de Busca (SEO)',
    role: 'SEO é a prática de otimizar um site para que ele seja facilmente encontrado e indexado pelos mecanismos de busca.',
    imageUrl: '/images/icones/seo.svg',
    imageAlt: 'SEO icon',
  },
  {
    name: 'Velocidade',
    role: 'Melhoria da experiência do usuário: pessoas tendem a desistir de um site que leva muito tempo para carregar.',
    imageUrl: '/images/icones/time.svg',
    imageAlt: 'Speed icon',
  },
  {
    name: 'Design',
    role: 'Um design intuitivo pode ajudar os visitantes a encontrar facilmente o que eles estão procurando no seu site e, assim, aumentar a chance de conversão.',
    imageUrl: '/images/icones/design.svg',
    imageAlt: 'Design icon',
  },
  {
    name: 'Apresentação',
    role: 'A aparência do seu site é a primeira coisa que as pessoas veem, criar uma boa primeira impressão pode aumentar a confiança do usuário no seu negócio.',
    imageUrl: '/images/icones/presentation.svg',
    imageAlt: 'Aparence icon',
  },
  // More services...
]
</script>

<template>
  <div id="services">
    <div class="container mx-auto py-12 px-4 pt-24 text-center sm:px-6">
      <div class="space-y-8 sm:space-y-12">
        <div class="space-y-5 sm:mx-auto sm:space-y-3">
          <h2
            class="text-lg font-medium border border-gray-500 p-2 px-4 rounded-3xl inline"
          >
            Serviços
          </h2>
          <p class="text-[32px] font-black">
            Como vou te ajudar a conseguir mais clientes.
          </p>
        </div>
        <ul
          role="list"
          class="mx-auto grid grid-cols-1 gap-x-4 gap-y-8 xl:grid-cols-4 lg:gap-x-12 lg:gap-y-12"
        >
          <li v-for="service in services" :key="service.name">
            <div
              class="group rounded-xl bg-white shadow-md cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-[0.04] p-4 h-[376px] min-h-[376px] flex flex-col items-center gap-6 border-b border-gray-700 hover:bg-zinc-700/40 hover:shadow-xl duration-300"
            >
              <img
                class="p-2 bg-white bg-opacity-[0.02] rounded-lg mt-12"
                :src="service.imageUrl"
                :alt="service.imageAlt"
                width="64"
              />
              <div class="space-y-2">
                <div class="space-y-2">
                  <h2 class="font-bold group-hover:text-[#528BEB] duration-300">
                    {{ service.name }}
                  </h2>
                  <p class="text-[#CCCCCC]">{{ service.role }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
#services {
  background: radial-gradient(
      90.69% 50% at 50% 100%,
      rgba(28, 86, 184, 0.25) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #121214;
}
</style>