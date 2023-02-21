<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const projects = [
  {
    name: 'Hunter.fm',
    description:
      'A sua rádio online! Desenvolvida para te entregar suas músicas favoritas de maneira eficiente.',
    url: 'https://hunter.fm/',
    alt: 'Hunter',
    thumb: '/images/thumb/portifolio-hunter.png',
    screenshot: '/images/screenshots/hunter-screenshot.png',
  },
  {
    name: 'Lenyeg',
    description:
      'Desenvolvemos produtos digitais,enquanto capacitamos novos profissionais.',
    url: 'https://lenyeg.com.br',
    alt: 'Lenyeg',
    thumb: '/images/thumb/portifolio-lenyeg.png',
    screenshot: '/images/screenshots/lenyeg-screenshot.png',
  },
  {
    name: 'Paranavai.app',
    description:
      'Vá além da presença física e seja encontrado por quem precisa de você.',
    url: 'https://paranavai.app',
    alt: 'Paranavai.app',
    thumb: '/images/thumb/portifolio-pvaiapp.png',
    screenshot: '/images/screenshots/pvai-screenshot.png',
  },
  {
    name: 'OsmarJr - Advogado',
    description:
      'Advogado especialista em direito criminal e direito famíliar.',
    url: 'https://osmarjr.adv.br',
    alt: 'OsmarJr Advogado',
    thumb: '/images/thumb/portifolio-osmar.png',
    screenshot: '/images/screenshots/osmar-screenshot.png',
  },
  {
    name: 'iEasy',
    description: 'A maior do mundo no catálogo de aparelhos Apple no atacado!',
    url: 'https://ieasyatacado.com/',
    alt: 'iEasy',
    thumb: '/images/thumb/portifolio-ieasy.png',
    screenshot: '/images/screenshots/ieasy-screenshot.png',
  },
  {
    name: 'Velog',
    description: 'A maior do mundo no catálogo de aparelhos Apple no atacado!',
    url: 'https://velog.com.br/',
    alt: 'iEasy',
    thumb: '/images/thumb/portifolio-velog.png',
    screenshot: '/images/screenshots/velog-screenshot.png',
  },
]
</script>

<template>
  <div id="portifolio">
    <div
      class="container text-center mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24"
    >
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4">
          <span
            class="text-lg font-medium border border-gray-500 p-2 px-4 rounded-3xl"
            >Meu Portifolio</span
          >
          <p class="text-[32px] font-black">
            Confira alguns dos meus trabalhos recentes.
          </p>
        </div>
        <TabGroup as="div" class="flex flex-col gap-16">
          <TabList role="list" class="flex justify-center items-center gap-4">
            <Tab v-for="project in projects" :key="project.name" class="border border-transparent rounded-md hover:border hover:border-white duration-300 cursor-pointer">
              <img :src="project.thumb" :alt="project.alt" class="rounded-md" />
            </Tab>
          </TabList>
          <!-- <TabPanels>
            <TabPanel class="flex flex-col gap-4 lg:flex-row">
              <article class="flex flex-col text-start gap-4 flex-1">
                <span class="text-2xl font-black">Hunter.fm</span>
                <p class="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatem mollitia molestiae impedit, libero sit culpa ab veritatis earum rerum nihil aspernatur optio dolor sapiente repudiandae omnis explicabo illum quos!</p>
              </article>
              <img src="/images/screenshots/hunter-screenshot.png" alt="Hunter" class="flex-1 rounded-md">
            </TabPanel>
            <TabPanel class="flex gap-4">
              <article class="flex flex-col text-start gap-4 flex-1">
                <span class="text-2xl font-black">Lenyeg</span>
                <p class="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatem mollitia molestiae impedit, libero sit culpa ab veritatis earum rerum nihil aspernatur optio dolor sapiente repudiandae omnis explicabo illum quos!</p>
              </article>
              <img src="/images/screenshots/lenyeg-screenshot.png" alt="Lenyeg" class="flex-1 rounded-md">
            </TabPanel>
          </TabPanels> -->
        </TabGroup>
      </div>
    </div>
  </div>
</template>

<style scoped>
#portifolio {
  background: radial-gradient(
      90.69% 50% at 50% 0%,
      rgba(28, 86, 184, 0.25) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #121214;
}
</style>

