<script setup>
const services = [
  {
    name: 'Otimização de Busca (SEO)',
    role: 'Otimização para motores de busca para deixar seu site na primeira página do Google convertendo muito mais resultados.',
    imageUrl:
      'icones/lupa.png',
  },
  {
    name: 'Velocidade',
    role: 'Não perca clientes por conta da demora em carregar o seu site!',
    imageUrl:
      'icones/cronometro.png',
  },  {
    name: 'Design',
    role: 'Utilize o design como diferencial competitivo, gerando experiências inovadoras e criativas a seus clientes e consumidores.',
    imageUrl:
      'icones/apresentacao.png',
  },
  {
    name: 'Apresentação',
    role: 'Entregue uma boa impressão aí seu cliente, com sites modernos e adaptados as mais diversas telas.',
    imageUrl:
      'icones/click.png',
  },
  // More services...
]
</script>

<template>
  <div id="services">
    <div class="container mx-auto py-12 px-4 text-center sm:px-6">
      <div class="space-y-8 sm:space-y-12">
        <div class="space-y-5 sm:mx-auto sm:space-y-3">
          <h2 class="text-3xl font-bold font-orbitron text-transparent bg-clip-text bg-cyan-500 tracking-tight sm:text-4xl">Serviços</h2>
          <p class="text-xl">Como eu posso te ajudar a ser encontrado.</p>
        </div>
        <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:gap-x-12 lg:gap-y-12">
          <li v-for="service in services" :key="service.name">
            <div class="rounded-xl bg-zinc-800 shadow-md cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4 min-h-[296px] flex flex-col items-center  gap-4 hover:shadow-xl lg:hover:scale-110 hover:duration-300">
              <img class="mx-auto h-20 w-20 lg:h-24 lg:w-24 shadow-md" src="data:image/png;base64,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" alt="" />
              <div class="space-y-2">
                <div class="font-medium lg:text-sm space-y-2">
                  <h3 class="text-lg font-bold">{{ service.name }}</h3>
                  <p class="text-zinc-200">{{ service.role }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>