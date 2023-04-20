<script setup>
import TheButton from './TheButton.vue'
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline/index.js'

const vueIcon = ref()
const astroIcon = ref()
const typescriptIcon = ref()

const refs = [vueIcon, astroIcon, typescriptIcon]

refs.forEach((ref, index) => {
  const { variant } = useMotion(ref, {
    initial: {
      x: 0,
      y: 0,
      opacity: 0,
    },
    enter: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 20,
        delay: index * 50,
        onComplete: () => {
          variant.value = 'levitate'
        },
      },
    },
    levitate: {
      x: 0,
      y: -10,
      transition: {
        duration: 2000,
        delay: index * 75,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'mirror',
      },
    },
  })
})

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
                      >Lucas <span class="hidden lg:inline">Ribeiro</span>
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
                      >Lucas <span class="hidden lg:inline">Ribeiro</span>
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
                    link="https://wa.me/5544991585968?text=ol%C3%A1,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20ser%20atendido"
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
              link="https://wa.me/5544991585968?text=ol%C3%A1,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20ser%20atendido"
              >Entre em contato!</TheButton
            >
          </div>
          <section
            class="flex flex-col items-center justify-center py-6 flex-1"
          >
            <section>
              <picture class="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="161"
                  height="161"
                  fill="none"
                  class="absolute top-48 right-16 md:right-28 z-40"
                  ref="typescriptIcon"
                >
                  <g filter="url(#a)">
                    <path
                      fill="#3178C6"
                      d="M60.69 56h38.625a4.69 4.69 0 0 1 4.69 4.69v38.625a4.69 4.69 0 0 1-4.69 4.69H60.69A4.695 4.695 0 0 1 56 99.31V60.69A4.687 4.687 0 0 1 60.69 56Z"
                    />
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M85.717 94.155v4.69c.758.393 1.69.686 2.717.883a17.7 17.7 0 0 0 3.283.293c1.128 0 2.155-.101 3.187-.317a8.05 8.05 0 0 0 2.626-1.032c.758-.5 1.406-1.123 1.78-1.968.375-.845.668-1.78.668-3 0-.854-.13-1.594-.384-2.251a4.463 4.463 0 0 0-1.124-1.69 7.381 7.381 0 0 0-1.69-1.31 20.912 20.912 0 0 0-2.25-1.123c-.62-.255-1.124-.5-1.69-.74-.49-.244-.907-.49-1.22-.73-.345-.254-.609-.513-.796-.786a1.653 1.653 0 0 1-.283-.936c0-.317.081-.61.254-.874.168-.264.403-.48.701-.667.302-.187.677-.327 1.123-.432.442-.101.927-.149 1.503-.149.393 0 .806.029 1.219.086a9.23 9.23 0 0 1 1.31.274c.442.12.874.274 1.31.46.413.188.797.404 1.124.649v-4.407c-.71-.273-1.503-.48-2.343-.61-.844-.129-1.78-.196-2.904-.196a14.1 14.1 0 0 0-3.187.355c-1.032.235-1.877.61-2.625 1.123-.759.504-1.31 1.124-1.781 1.968-.442.788-.658 1.69-.658 2.813 0 1.407.403 2.626 1.22 3.562.806 1.032 2.063 1.78 3.657 2.53.648.263 1.22.523 1.78.777.562.254 1.033.514 1.407.787.403.274.72.571.936.893.235.317.355.696.355 1.123 0 .303-.072.581-.216.845-.144.264-.364.49-.667.677a3.94 3.94 0 0 1-1.123.451c-.442.1-.936.158-1.594.158a8.512 8.512 0 0 1-3-.532 8.939 8.939 0 0 1-2.812-1.594l.187-.053Zm-7.872-11.53h6v-3.844H67.064v3.845h6V99.78h4.78V82.626Z"
                      clip-rule="evenodd"
                    />
                  </g>
                  <defs>
                    <filter
                      id="a"
                      width="160.005"
                      height="160.005"
                      x="0"
                      y="0"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="28" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        values="0 0 0 0 0.192157 0 0 0 0 0.470588 0 0 0 0 0.776471 0 0 0 1 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_51_78"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_51_78"
                        result="shape"
                      />
                      <feGaussianBlur
                        result="effect2_foregroundBlur_51_78"
                        stdDeviation="1"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="168"
                  height="160"
                  fill="none"
                  id="vue-icon"
                  class="absolute top-16 -left-6 md:top-24 md:left-12 z-40"
                  ref="vueIcon"
                >
                  <g filter="url(#a)">
                    <path
                      fill="#41B883"
                      d="M100.661 56h11.165l-27.913 48L56 56h21.355l6.558 11.13L90.333 56h10.328Z"
                    />
                    <path
                      fill="#41B883"
                      d="m56 56 27.913 48 27.913-48h-11.165L83.913 84.8 67.027 56H56Z"
                    />
                    <path
                      fill="#35495E"
                      d="m67.027 56 16.886 28.939L100.661 56H90.333l-6.42 11.13L77.355 56H67.027Z"
                    />
                  </g>
                  <defs>
                    <filter
                      id="a"
                      width="167.826"
                      height="160"
                      x="0"
                      y="0"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="28" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        values="0 0 0 0 0.254902 0 0 0 0 0.721569 0 0 0 0 0.513726 0 0 0 1 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_51_70"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_51_70"
                        result="shape"
                      />
                      <feGaussianBlur
                        result="effect2_foregroundBlur_51_70"
                        stdDeviation=".5"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="165"
                  fill="none"
                  id="astro-icon"
                  class="absolute top-0 right-4 md:right-32 z-40"
                  ref="astroIcon"
                >
                  <g fill-rule="evenodd" clip-rule="evenodd" filter="url(#a)">
                    <path
                      fill="url(#b)"
                      d="M82.697 58.14c.425.529.642 1.24 1.076 2.665l9.473 31.122a39.422 39.422 0 0 0-11.326-3.835l-6.168-20.845a.803.803 0 0 0-1.54.003l-6.094 20.832a39.423 39.423 0 0 0-11.378 3.84l9.52-31.124c.435-1.422.653-2.133 1.078-2.66a3.5 3.5 0 0 1 1.419-1.05c.628-.252 1.371-.252 2.859-.252h6.8c1.489 0 2.233 0 2.862.253a3.5 3.5 0 0 1 1.419 1.052Z"
                    />
                    <path
                      fill="#FF5D01"
                      d="M83.83 93.408c-1.561 1.335-4.678 2.246-8.269 2.246-4.407 0-8.1-1.372-9.081-3.217-.35 1.058-.429 2.268-.429 3.041 0 0-.23 3.796 2.41 6.437a2.482 2.482 0 0 1 2.482-2.482c2.35 0 2.348 2.05 2.346 3.713v.148a6.065 6.065 0 0 0 3.737 5.602 5.087 5.087 0 0 1-.512-2.231c0-2.408 1.414-3.305 3.057-4.347 1.307-.829 2.76-1.75 3.76-3.598a6.786 6.786 0 0 0 .82-3.242c0-.722-.112-1.417-.32-2.07Z"
                    />
                    <path
                      fill="url(#c)"
                      d="M83.83 93.408c-1.561 1.335-4.678 2.246-8.269 2.246-4.407 0-8.1-1.372-9.081-3.217-.35 1.058-.429 2.268-.429 3.041 0 0-.23 3.796 2.41 6.437a2.482 2.482 0 0 1 2.482-2.482c2.35 0 2.348 2.05 2.346 3.713v.148a6.065 6.065 0 0 0 3.737 5.602 5.087 5.087 0 0 1-.512-2.231c0-2.408 1.414-3.305 3.057-4.347 1.307-.829 2.76-1.75 3.76-3.598a6.786 6.786 0 0 0 .82-3.242c0-.722-.112-1.417-.32-2.07Z"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="b"
                      x1="85.67"
                      x2="74.993"
                      y1="55.186"
                      y2="91.927"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff" />
                      <stop offset="1" stop-color="#F9FAFB" />
                    </linearGradient>
                    <linearGradient
                      id="c"
                      x1="90.862"
                      x2="81.616"
                      y1="82.545"
                      y2="101.902"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF1639" />
                      <stop offset="1" stop-color="#FF1639" stop-opacity="0" />
                    </linearGradient>
                    <filter
                      id="a"
                      width="168.044"
                      height="168"
                      x="-9"
                      y="-2"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="28" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        values="0 0 0 0 1 0 0 0 0 0.333333 0 0 0 0 0.0313726 0 0 0 1 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_51_74"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_51_74"
                        result="shape"
                      />
                      <feGaussianBlur
                        result="effect2_foregroundBlur_51_74"
                        stdDeviation="1"
                      />
                    </filter>
                  </defs>
                </svg>
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
