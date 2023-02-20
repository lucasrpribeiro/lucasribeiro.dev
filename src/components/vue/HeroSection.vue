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
      <div class="relative sm:pb-24">
        <Popover>
          <div class="mx-auto lg:container p-4">
            <nav
              class="
                relative
                flex
                items-center
                justify-between
                sm:h-10
                md:justify-end
              "
              aria-label="Global"
            >
              <div
                class="
                  flex flex-1
                  items-center
                  md:absolute md:inset-y-0 md:left-0
                "
              >
                <div class="flex w-full items-center justify-between md:w-auto">
                  <a href="#">
                    <span class="sr-only">Lucas Ribeiro - Web Developer</span>
                    <img
                      class="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                  <div class="flex items-center md:hidden">
                    <PopoverButton
                      class="
                        inline-flex
                        items-center
                        justify-center
                        rounded-md
                        bg-white bg-opacity-5
                        p-2
                        text-white
                        focus:outline-none focus:ring-0 focus:ring-customBlue
                        duration-300
                      "
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
                  class="font-medium hover:text-customBlue duration-300"
                  >{{ item.name }}</a
                >
              </div>
              <div
                class="
                  hidden
                  md:absolute
                  md:inset-y-0
                  md:right-0
                  md:flex
                  md:items-center
                  md:justify-end
                "
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
              class="
                absolute
                inset-x-0
                top-0
                z-30
                origin-top-right
                transform
                transition
                md:hidden
              "
            >
              <div class="overflow-hidden">
                <div class="flex items-center justify-between p-4">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </div>
                  <div>
                    <PopoverButton
                      class="
                        inline-flex
                        items-center
                        justify-center
                        rounded-md
                        bg-clip-padding
                        backdrop-filter backdrop-blur-md
                        bg-opacity-[0.02] bg-white
                        p-2
                        text-white
                        focus:outline-none focus:ring-0
                        duration-300
                      "
                    >
                      <span class="sr-only">Close main menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div
                  class="
                    bg-[#121214E5]
                    shadow-xl
                    bg-clip-padding
                    backdrop-filter backdrop-blur-md
                    bg-opacity-80
                    space-y-1
                    p-4
                    mx-4
                    rounded-lg
                  "
                >
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="
                      block
                      rounded-md
                      px-5
                      py-3
                      bg-white bg-clip-padding
                      backdrop-filter backdrop-blur-md
                      bg-opacity-5
                      text-base
                      font-medium
                      duration-300
                    "
                    >{{ item.name }}</a
                  >
                  <a
                    href="#"
                    class="
                      block
                      bg-customBlue
                      px-5
                      py-3
                      text-center
                      font-medium
                      rounded-lg
                    "
                    >Entre em contato!</a
                  >
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <!-- Hero -->
        <div
          class="
            container
            flex flex-col
            items-center
            justify-center
            gap-6
            xl:flex-row
            mx-auto
            pt-5
            px-4
          "
        >
          <div
            class="
              flex flex-col
              items-center
              justify-center
              text-center
              xl:text-left
              flex-1
              xl:items-start
            "
          >
            <h1
              class="
                font-orbitron
                text-4xl
                font-bold
                tracking-tight
                lg:text-6xl
              "
            >
              <span class="block"
                >Olá, eu sou <span class="text-customBlue">Lucas!</span></span
              >
              <span class="block">Programador Web</span>
            </h1>
            <p class="mt-3 max-w-md md:mt-10 md:max-w-3xl md:text-3xl">
              Como desenvolvedor web especializado em SEO e performance, posso
              ajudar seu negócio a alcançar novos patamares de sucesso online.
            </p>
            <a
              href="#"
              class="
                mt-4
                lg:mt-10
                block
                w-44
                px-5
                py-3
                text-center
                font-medium
                rounded-lg
                bg-customBlue
              "
              >Entre em contato!</a
            >
          </div>
          <section
            class="flex flex-col items-center justify-center py-6 flex-1"
          >
            <section>
              <picture class="relative">
                <source
                  srcset="/images/hero-mobile.png"
                  width="343"
                  media="(max-width: 900px)"
                />
                <img
                  draggable="false"
                  src="/images/hero-desktop.png"
                  alt="Lucas Ribeiro"
                  width="1024"
                  class="relative z-10"
                />
                <div
                  class="
                    absolute
                    top-0
                    right-2
                    w-[400px]
                    h-[400px]
                    rounded-full
                    bg-customBlue bg-opacity-10
                    blur-[100px]
                  "
                ></div>
              </picture>
            </section>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>