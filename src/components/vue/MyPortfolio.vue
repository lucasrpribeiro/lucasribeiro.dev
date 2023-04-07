<script setup lang="ts">
import TheButton from './TheButton.vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const projects = [
  {
    di: 1,
    name: 'Hunter.fm',
    description:
      'A sua rádio online! Desenvolvida para te entregar suas músicas favoritas de maneira eficiente. Neste projeto foi utilizado o Nuxt, TailwindCss e Tipescript. Além dessas ferramentas, foi utilizado o Axios para consumir as APIs que se comunicam com o backend, fazendo o CRUD para as interações de usuário e consumindo as informações necessárias para o funcionamento das músicas e rádios.',
    url: 'https://hunter.fm/',
    alt: 'Hunter',
    thumb: '/images/thumb/portfolio-hunter.png',
    screenshot: '/images/screenshots/hunter-screenshot.png',
    langs: [
      { name: 'nuxt', color: '#10b981' },
      { name: 'typescript', color: '#0284c7' },
      { name: 'tailwindcss', color: '#0ea5e9' },
      { name: 'axios', color: '#facc15' },
      { name: 'jest', color: '#f97316' },
    ],
  },
  {
    id: 2,
    name: 'Lenyeg',
    description:
      'Uma landing page construída em Astro um framework que segue a estratégia de ilhas para uma melhor desempenho, no desenvolvimento da página foi usado técnicas de SEO para um bom ranqueamento no Google, TailwindCss para a estilização e Vue para alguns componentes mais complexos.',
    url: 'https://lenyeg.com.br',
    alt: 'Lenyeg',
    thumb: '/images/thumb/portfolio-lenyeg.png',
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
      'Paranavai.app é um aplicativo para ajudar os serviços da cidade de Paranavaí a serem encontrados mais facilmente. A LP foi construída utilizando Nuxt, Typescript e TailwindCss seguindo boas práticas para uma melhor desempenho e SEO.',
    url: 'https://paranavai.app',
    alt: 'Paranavai.app',
    thumb: '/images/thumb/portfolio-pvaiapp.png',
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
      'Uma landing page construída em Astro um framework que segue a estratégia de ilhas para uma melhor desempenho, no desenvolvimento da página foi usado técnicas de SEO para um bom ranqueamento no Google, TailwindCss para a estilização e Vue para alguns componentes mais complexos.',
    url: 'https://osmarjr.adv.br',
    alt: 'OsmarJr Advogado',
    thumb: '/images/thumb/portfolio-osmar.png',
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
    description:
      'Uma landing page construída em Astro um framework que segue a estratégia de ilhas para uma melhor desempenho, no desenvolvimento da página foi usado técnicas de SEO para um bom ranqueamento no Google, TailwindCss para a estilização e possui uma integração com o Whatsapp para facilitar o atendimento ao cliente.',
    url: 'https://ieasyatacado.com/',
    alt: 'iEasy',
    thumb: '/images/thumb/portfolio-ieasy.png',
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
    description:
      'O Velog Rotas é uma aplicação de rotas, onde você pode fazer uma estimativa de quanto sua viagem pode te custar, calculando o quanto de combustível você irá gastar, os pedágio na rota trassada e se for um veículo de carga ela também mostra as balanças que existem durante o trajeto, a aplicação foi feita em Nuxt, usando o Pinia para gerenciamento de estado, Axios para consumo da api e Cypress para fazer os testes automatizados.',
    url: 'https://velog.com.br/',
    alt: 'iEasy',
    thumb: '/images/thumb/portfolio-velog.png',
    screenshot: '/images/screenshots/velog-screenshot.png',
    langs: [
      { name: 'nuxt', color: '#10b981' },
      { name: 'typescript', color: '#0284c7' },
      { name: 'tailwindcss', color: '#0ea5e9' },
      { name: 'cypress', color: '#c3c3c3' },
    ],
  },
]
</script>

<template>
  <div id="portfolio">
    <div
      class="container text-center mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24"
    >
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4">
          <h2
            class="text-lg font-medium border border-gray-500 p-2 px-4 rounded-3xl inline"
          >
            Meu Portfólio
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
              v-for="project of projects"
              :key="project.id"
              as="template"
              v-slot="{ selected }"
              class="border border-transparent rounded-md hover:border hover:border-white duration-300 cursor-pointer focus:outline-none focus:ring-0"
            >
              <img
                :src="project.thumb"
                :alt="project.alt"
                width="183"
                height="103"
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
              class="flex flex-col gap-8 justify-center items-center xl:flex-row xl:items-start"
            >
              <article class="flex flex-col text-start gap-4 flex-1">
                <section
                  class="flex flex-col text-start gap-4 max-w-[570px] 2xl:max-w-full 2xl:gap-8"
                >
                  <span class="text-2xl font-black">{{ proj.name }}</span>
                  <p class="text-justify text-xl 2xl:text-2xl">
                    {{ proj.description }}
                  </p>
                  <section
                    class="flex flex-col lg:flex-row lg:items-end justify-between gap-4"
                  >
                    <TheButton :link="proj.url">De uma olhada!</TheButton>
                    <ul class="flex flex-row items-center gap-2">
                      <li v-for="(lang, i) of proj.langs" :key="i">
                        <span
                          class="p-1 rounded-md text-sm"
                          :style="`background-color: ${lang.color}40; border: 1px solid ${lang.color};`"
                          >{{ lang.name }}</span
                        >
                      </li>
                    </ul>
                  </section>
                </section>
              </article>
              <img
                :src="proj.screenshot"
                alt="Hunter"
                class="flex-1 rounded-md"
                width="596"
                height="335"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  </div>
</template>

<style scoped>
#portfolio {
  background: radial-gradient(
      90.69% 50% at 50% 0%,
      rgba(28, 86, 184, 0.25) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #121214;
}
</style>
