<script setup>
const services = [
  {
    name: 'Otimização de Busca (SEO)',
    role: 'Seja prioridade na busca do Google!',
    imageUrl:
      '/images/icones/lupa.png',
  },
  {
    name: 'Velocidade',
    role: 'Não perca clientes por conta da velocidade do seu site!',
    imageUrl:
      '/images/icones/cronometro.png',
  },  {
    name: 'Engajamento',
    role: 'Sua marca precisa estar onde as pessoas estão, na internet!',
    imageUrl:
      '/images/icones/click.png',
  },
  {
    name: 'Apresentação',
    role: 'Não basta ser encontrado, você precisa causar uma boa impreção!',
    imageUrl:
      '/images/icones/apresentacao.png',
  },
  // More services...
]
</script>

<template>
  <div id="services">
    <div class="container mx-auto py-12 px-4 text-center sm:px-6">
      <div class="space-y-8 sm:space-y-12">
        <div class="space-y-5 sm:mx-auto sm:space-y-4">
          <h2 class="text-3xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-lksYellow to-lksGreen tracking-tight sm:text-4xl">Serviços</h2>
          <p class="text-xl">Como eu posso te ajudar a ser encontrado.</p>
        </div>
        <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:gap-x-12 lg:gap-y-12">
          <li v-for="service in services" :key="service.name">
            <div class="space-y-4 rounded-xl bg-gray-900 shadow-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4 h-52 md:h-60 flex flex-col items-center justify-center gap-2">
              <img class="mx-auto h-20 w-20 bg-gradient-to-tr from-lksYellow to-lksGreen rounded-full lg:h-24 lg:w-24 shadow-md shadow-lksYellow" :src="service.imageUrl" alt="" />
              <div class="space-y-2">
                <div class="text-xs font-medium lg:text-sm space-y-2">
                  <h3>{{ service.name }}</h3>
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