<script setup>
const projects = [
  {
    name: 'Hunter.fm',
    role: 'A sua rádio online! Desenvolvida para te entregar suas músicas favoritas de maneira eficiente.',
    link: 'https://hunter.fm/',
    imageUrl:
      '/images/portifolio-hunter.png',
  },
  {
    name: 'Lenyeg',
    role: 'Desenvolvemos produtos digitais,enquanto capacitamos novos profissionais.',
    link: 'https://lenyeg.com.br',
    imageUrl:
      '/images/portifolio-lenyeg.png',
  },
  {
    name: 'Paranavai.app',
    role: 'Vá além da presença física e seja encontrado por quem precisa de você.',
    link: 'https://paranavai.app',
    imageUrl:
      '/images/portifolio-pvaiapp.png',
  },
  {
    name: 'OsmarJr - Advogado',
    role: 'Advogado especialista em direito criminal e direito famíliar.',
    link: 'https://osmarjr.adv.br',
    imageUrl:
      '/images/portifolio-osmar.png',
  },
  {
    name: 'iEasy',
    role: 'A maior do mundo no catálogo de aparelhos Apple no atacado!',
    link: 'https://ieasyatacado.com/',
    imageUrl:
      '/images/portifolio-ieasy.png',
  },
  // More projects...
]
</script>

<template>
  <div id="portifolio" class="container mx-auto py-12 px-4 text-center sm:px-6">
    <div class="mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-bold font-orbitron text-transparent bg-clip-text bg-cyan-500 tracking-tight sm:text-4xl">Meu Portifolio</h2>
          <p class="text-xl">Este é o meu portfólio, onde você pode encontrar uma coleção de meus trabalhos recentes e relevantes.</p>
          <p class="text-xl">
            Sinta-se livre para navegar e verificar meus trabalhos, e não hesite em me contatar se tiver alguma dúvida ou deseja discutir um projeto futuro.
          </p>
        </div>
        <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          <li v-for="project in projects" :key="project.name">
            <a :href="project.link" target="_blank" alt="Site do Paranavai.app" class="group 2xl:min-h-[403px] block space-y-4 bg-zinc-800 p-2 rounded-xl hover:shadow-xl hover:bg-zinc-700/40 hover:border hover:border-cyan-500 lg:hover:scale-110 duration-300 cursor-pointer">
              <div class="aspect-w-3 aspect-h-2">
                <img draggable="false" class="rounded-lg object-cover shadow-lg" :src="project.imageUrl" alt="Paranavai.app" />
              </div>

              <div class="space-y-2 text-start">
                <div class="space-y-1 leading-6">
                  <h3 class="group-hover:text-cyan-500 text-lg font-medium ">{{ project.name }}</h3>
                  <p>{{ project.role }}</p>
                  <!-- <span class="text-sm">{{ project.tech }}</span> -->
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

