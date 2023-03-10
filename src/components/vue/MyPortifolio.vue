<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const projects = [
  {
    di: 1,
    name: 'Hunter.fm',
    description:
      'A sua rádio online! Desenvolvida para te entregar suas músicas favoritas de maneira eficiente.',
    url: 'https://hunter.fm/',
    alt: 'Hunter',
    thumb: '/images/thumb/portifolio-hunter.png',
    screenshot: '/images/screenshots/hunter-screenshot.png',
    langs: [
      { name: 'vue', color: '#10b981' },
      { name: 'typescript', color: '#0284c7' },
      { name: 'tailwindcss', color: '#0ea5e9' },
    ],
  },
  {
    id: 2,
    name: 'Lenyeg',
    description:
      'Desenvolvemos produtos digitais,enquanto capacitamos novos profissionais.',
    url: 'https://lenyeg.com.br',
    alt: 'Lenyeg',
    thumb: '/images/thumb/portifolio-lenyeg.png',
    screenshot: '/images/screenshots/lenyeg-screenshot.png',
    langs: [
      { name: 'vue', color: '#10b981' },
      { name: 'astro', color: '#f97316' },
      { name: 'tailwindcss', color: '#0ea5e9' },
    ],
  },
  {
    id: 3,
    name: 'Paranavai.app',
    description:
      'Vá além da presença física e seja encontrado por quem precisa de você.',
    url: 'https://paranavai.app',
    alt: 'Paranavai.app',
    thumb: '/images/thumb/portifolio-pvaiapp.png',
    screenshot: '/images/screenshots/pvai-screenshot.png',
    langs: [
      { name: 'vue', color: '#10b981' },
      { name: 'typescript', color: '#0284c7' },
      { name: 'tailwindcss', color: '#0ea5e9' },
    ],
  },
  {
    id: 4,
    name: 'OsmarJr - Advogado',
    description:
      'Advogado especialista em direito criminal e direito famíliar.',
    url: 'https://osmarjr.adv.br',
    alt: 'OsmarJr Advogado',
    thumb: '/images/thumb/portifolio-osmar.png',
    screenshot: '/images/screenshots/osmar-screenshot.png',
    langs: [
      { name: 'vue', color: '#10b981' },
      { name: 'astro', color: '#f97316' },
      { name: 'tailwindcss', color: '#0ea5e9' },
    ],
  },
  {
    id: 5,
    name: 'iEasy',
    description: 'A maior do mundo no catálogo de aparelhos Apple no atacado!',
    url: 'https://ieasyatacado.com/',
    alt: 'iEasy',
    thumb: '/images/thumb/portifolio-ieasy.png',
    screenshot: '/images/screenshots/ieasy-screenshot.png',
    langs: [
      { name: 'vue', color: '#10b981' },
      { name: 'astro', color: '#f97316' },
      { name: 'tailwindcss', color: '#0ea5e9' },
    ],
  },
  {
    id: 6,
    name: 'Velog',
    description: 'A maior do mundo no catálogo de aparelhos Apple no atacado!',
    url: 'https://velog.com.br/',
    alt: 'iEasy',
    thumb: '/images/thumb/portifolio-velog.png',
    screenshot: '/images/screenshots/velog-screenshot.png',
    langs: [
      { name: 'vue', color: '#10b981' },
      { name: 'typescript', color: '#0284c7' },
      { name: 'tailwindcss', color: '#0ea5e9' },
    ],
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
          <h2
            class="text-lg font-medium border border-gray-500 p-2 px-4 rounded-3xl inline"
          >
            Meu Portifolio
          </h2>
          <p class="text-[32px] font-black">
            Confira alguns dos meus trabalhos recentes.
          </p>
        </div>
        <TabGroup as="div" class="flex flex-col gap-16">
          <TabList
            role="list"
            class="flex items-center xl:justify-center gap-4 2xl:gap-6 scrollbar-hide overflow-x-scroll cursor-grab snap-center first-of-type:ml-4 last-of-type:mr-4"
          >
            <Tab
              v-for="project in projects"
              :key="project"
              as="template"
              v-slot="{ selected }"
              class="border border-transparent rounded-md hover:border hover:border-white duration-300 cursor-pointer focus:outline-none focus:ring-0"
            >
              <img
                :src="project.thumb"
                :alt="project.alt"
                width="183"
                :class="[
                  'rounded-md',
                  selected
                    ? 'border border-white'
                    : 'border border-transparent',
                ]"
              />
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel
              v-for="(proj, index) in Object.values(projects)"
              :key="index"
              class="flex flex-col gap-4 justify-center items-center xl:flex-row xl:items-start"
            >
              <article class="flex flex-col text-start gap-4 flex-1">
                <span class="text-2xl font-black">{{ proj.name }}</span>
                <p class="text-xl">
                  {{ proj.description }}
                </p>
                <ul class="flex flex-row items-center gap-2">
                  <li v-for="lang in proj.langs" :key="lang">
                    <span
                      class="p-1 rounded-md text-sm"
                      :style="`background-color: ${lang.color}40; border: 1px solid ${lang.color};`"
                      >{{ lang.name }}</span
                    >
                  </li>
                </ul>
              </article>
              <img
                :src="proj.screenshot"
                alt="Hunter"
                class="flex-1 rounded-md"
                width="596"
              />
            </TabPanel>
          </TabPanels>
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

