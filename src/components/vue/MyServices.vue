<script setup>
const services = [
  {
    name: 'Otimização de Busca (SEO)',
    role: 'Otimização para motores de busca para deixar seu site na primeira página do Google convertendo muito mais resultados.',
    imageUrl:
      '/images/icones/lupa.png',
  },
  {
    name: 'Velocidade',
    role: 'Não perca clientes por conta da demora em carregar o seu site!',
    imageUrl:
      '/images/icones/cronometro.png',
  },  {
    name: 'Design',
    role: 'Utilize o design como diferencial competitivo, gerando experiências inovadoras e criativas a seus clientes e consumidores.',
    imageUrl:
      '/images/icones/apresentacao.png',
  },
  {
    name: 'Apresentação',
    role: 'Entregue uma boa impressão aí seu cliente, com sites modernos e adaptados as mais diversas telas.',
    imageUrl:
      '/images/icones/click.png',
  },
  // More services...
]
</script>

<template>
  <div id="services">
    <div class="container mx-auto py-12 px-4 text-center sm:px-6">
      <div class="space-y-8 sm:space-y-12">
        <div class="space-y-5 sm:mx-auto sm:space-y-4">
          <h2 class="justNeon text-3xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 tracking-tight sm:text-4xl">Serviços</h2>
          <p class="text-xl">Como eu posso te ajudar a ser encontrado.</p>
        </div>
        <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:gap-x-12 lg:gap-y-12">
          <li v-for="service in services" :key="service.name">
            <div class="rounded-xl bg-black shadow-md cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4 min-h-[296px] flex flex-col items-center  gap-4 hover:shadow-lg hover:shadow-teal-500 lg:hover:-translate-y-4 hover:duration-300">
              <img class="mx-auto h-20 w-20 bg-gradient-to-tr from-cyan-700 to-teal-400 rounded-full lg:h-24 lg:w-24 shadow-md shadow-teal-500" :src="service.imageUrl" alt="" />
              <div class="space-y-2">
                <div class="text-xs font-medium lg:text-sm space-y-2">
                  <h3 class="font-orbitron font-bold">{{ service.name }}</h3>
                  <p class="font-light ">{{ service.role }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.justNeon {
  text-shadow: #12e7f6 1px 0 10px;
}
</style>