<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Sobre mim', href: '#' },
  { name: 'Serviços', href: '/#services' },
  { name: 'Portifolio', href: '/#portifolio' },
  { name: 'Caontato', href: '/#contact' },
]
</script>

<template>
  <div>
    <div class="relative overflow-hidden">
      <div class="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div class="mx-auto container px-4 sm:px-6">
            <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div class="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                <div class="flex w-full items-center justify-between md:w-auto">
                  <a href="#">
                    <span class="sr-only">Lucas Ribeiro - Web Developer</span>
                    <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton class="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-seance-500 to-haiti-500 p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-haiti-500 duration-300">
                      <span class="sr-only">Open main menu</span>
                      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:flex md:space-x-10">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="neon font-medium hover:text-lksYellow duration-300">{{ item.name }}</a>
              </div>
              <div class="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
                <span class="inline-flex rounded-md shadow">
                  <a href="#" class="inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-seance-500 to-haiti-500 px-4 py-2 text-base font-medium hover:shadow-lg hover:shadow-haiti-500/90 duration-300">Entre em contato!</a>
                </span>
              </div>
            </nav>
          </div>
          <!-- Mobile Menu Panel -->
          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
              <div class="overflow-hidden rounded-lg bg-haiti-900 shadow-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-purple-900 to-indigo-900 p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-haiti-500">
                      <span class="sr-only">Close main menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="space-y-1 px-2 pt-2 pb-3">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium  hover:bg-haiti-600 duration-300">{{ item.name }}</a>
                </div>
                <a href="#" class="block w-full bg-gradient-to-r from-seance-500 to-haiti-500 px-5 py-3 text-center font-medium text-white">Entre em contato!</a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <!-- Hero -->
        <div class="container flex flex-col items-center justify-center gap-6 lg:flex-row mx-auto pt-5 px-4">
          <div class="text-center lg:text-left flex-1">
            <h1 class="font-orbitron text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span class="block">Olá, eu sou <span class="text-transparent bg-clip-text bg-gradient-to-r from-lksYellow to-lksGreen">Lucas!</span></span>
              <span class="block">Programador Web</span>
            </h1>
            <p class="mt-3 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          </div>
          <section class="flex flex-col items-center justify-center py-6 flex-1 lg:max-w-[340px] xl:max-w-[500px]">
          <section>
            <picture class="relative">
              <!-- <source srcset="" media="(min-width: 900px)" />
              <source srcset="" media="(min-width: 600px)" /> -->
              <img draggable="false" src="/images/lucas.png" alt="Lucas Ribeiro" width="1024" class="relative z-10" />
              <div class="absolute top-0 -right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-seance-800 to-haiti-800 blur-[100px] animate-spin-slow hidden lg:block"></div>
            </picture>
            
          </section>
          <section class="relative -mt-11 pt-9 pb-4 w-full bg-haiti-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 text-6xl flex flex-col items-center justify-center font-orbitron text-lksYellow gap-4 z-20 justNeon">
            <div>
              <span>00:</span>
              <span>00:</span>
              <span>00</span>
            </div>
            <span class="text-base italic">Tempo de experiência</span>
            <!-- <img src="/images/3d-clock.png" class="absolute -bottom-12 w-24"/> -->
          </section>
        </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.neon:hover {
  text-shadow: #a7c735 1px 0 25px;
}

.justNeon {
  text-shadow: #a7c735 1px 0 25px;
}
</style>