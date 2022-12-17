<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'item1', href: '#' },
  { name: 'item2', href: '#' },
  { name: 'item3', href: '#' },
  { name: 'item4', href: '#' },
]
</script>

<template>
  <div>
    <div class="relative overflow-hidden">
      <div class="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div class="flex flex-1 items-center">
              <div class="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span class="sr-only">Lucas Ribeiro - Desenvolvimento Web</span>
                  <!-- <img class="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> -->
                  <h1>LR</h1>
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton
                    class="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Abrir o menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div class="hidden md:flex md:space-x-10">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
            </div>
          </nav>

          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus
              class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
              <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="" /> -->
                    <span>LR</span>
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Close main menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="space-y-1 px-2 pt-2 pb-3">
                  <a v-for="item in navigation" :key="item.name" :href="item.href"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">{{
    item.name
                    }}</a>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <div class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-roboto text-gray-900 sm:text-5xl md:text-6xl">
              <span
                class="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500">Lucas
                Ribeiro</span>
              <span class="block">Desenvolvedor
                Web</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>