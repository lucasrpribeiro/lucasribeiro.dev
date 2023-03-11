<script setup>
import TheButton from './TheButton.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Sobre mim', href: '#' },
  { name: 'Serviços', href: '/#services' },
  { name: 'Portfólio', href: '/#portfolio' },
  { name: 'Contato', href: '/#contact' },
]
</script>

<template>
  <div class="bg-primary">
    <div class="relative overflow-hidden">
      <div class="relative">
        <Popover>
          <div class="mx-auto lg:container p-4">
            <nav
              class="relative flex items-center justify-between sm:h-10 md:justify-end"
              aria-label="Global"
            >
              <div
                class="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0"
              >
                <div class="flex w-full items-center justify-between md:w-auto">
                  <a href="#">
                    <span class="sr-only">Lucas Ribeiro - Web Developer</span>
                    <span
                      class="h-8 sm:h-10 text-black bg-white rounded-xl py-2 px-6 font-black uppercase"
                      >🏗 Lucas <span class="hidden lg:inline">Ribeiro 🏗</span>
                    </span>

                    <!-- <img
                      class="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                      width="38"
                    /> -->
                  </a>
                  <div class="flex items-center md:hidden">
                    <PopoverButton
                      class="inline-flex items-center justify-center rounded-md bg-white bg-opacity-5 p-2 text-white focus:outline-none focus:ring-0 focus:ring-customBlue duration-300"
                    >
                      <span class="sr-only">Open main menu</span>
                      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:flex md:space-x-10">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="font-medium text-zinc-400 hover:text-white duration-300"
                  >{{ item.name }}</a
                >
              </div>
              <div
                class="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end"
              ></div>
            </nav>
          </div>
          <!-- Mobile Menu Panel -->
          <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              class="absolute inset-x-0 top-0 z-30 origin-top-right transform transition md:hidden"
            >
              <div class="overflow-hidden">
                <div class="flex items-center justify-between p-4">
                  <div>
                    <span
                      class="h-8 sm:h-10 text-black bg-white rounded-xl py-2 px-6 font-black uppercase"
                      >🏗 Lucas <span class="hidden lg:inline">Ribeiro 🏗</span>
                    </span>

                    <!-- <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                      width="38"
                    /> -->
                  </div>
                  <div>
                    <PopoverButton
                      class="inline-flex items-center justify-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-[0.02] bg-white p-2 text-white focus:outline-none focus:ring-0 duration-300"
                    >
                      <span class="sr-only">Close main menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div
                  class="bg-[#121214E5] shadow-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 space-y-1 p-4 mx-4 rounded-lg"
                >
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="block rounded-md px-5 py-3 bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 text-base font-medium duration-300"
                    >{{ item.name }}</a
                  >
                  <TheButton
                    link="mailto:lucas.ribeiro711@gmail.com?Subject=Ol%E1%2C%20vim%20parar%20aqui%20atrav%E9s%20de%20sua%20LP%2C%20vamos%20fazer%20algo%20juntos%21"
                    >Entre em contato!</TheButton
                  >
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <!-- Hero -->
        <div
          class="container flex flex-col items-center justify-center gap-6 xl:flex-row mx-auto pt-5 px-4"
        >
          <div
            class="flex flex-col items-center justify-center text-center gap-6 xl:text-left flex-1 xl:items-start"
          >
            <h1
              class="font-orbitron text-4xl font-black tracking-tight lg:text-6xl"
            >
              <span class="block">Olá, eu sou Lucas!</span>
              <span class="block">Programador Web</span>
            </h1>
            <p class="max-w-md md:max-w-3xl md:text-3xl text-[#CCCCCC]">
              Como desenvolvedor web especializado em SEO e performance, posso
              ajudar seu negócio a alcançar novos patamares de sucesso online.
            </p>
            <TheButton
              link="mailto:lucas.ribeiro711@gmail.com?Subject=Ol%E1%2C%20vim%20parar%20aqui%20atrav%E9s%20de%20sua%20LP%2C%20vamos%20fazer%20algo%20juntos%21"
              >Entre em contato!</TheButton
            >
          </div>
          <section
            class="flex flex-col items-center justify-center py-6 flex-1"
          >
            <section>
              <picture class="relative">
                <source
                  srcset="/images/hero-mobile.png"
                  width="656"
                  hidden="656"
                  media="(max-width: 765px)"
                />
                <img
                  draggable="false"
                  src="/images/hero-desktop.png"
                  alt="Lucas Ribeiro"
                  width="596"
                  height="625"
                  class="relative z-10"
                />
                <div
                  class="w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-customBlue bg-opacity-40 blur-[100px] absolute top-[12rem] right-[2rem] md:top-[23rem] md:right-[6.72rem] lg:top-[22rem] lg:right-[3.71rem]"
                ></div>
              </picture>
            </section>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>