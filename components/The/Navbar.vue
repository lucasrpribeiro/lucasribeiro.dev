<template>
  <div :class="$style.header">
    <div :class="$style.logo">
      <a href="http://github.com/lukinhas711" target="_blank">Lucas Ribeiro</a>
      <TheNavButton id="button" v-model="openned">
        <TheBaseIcon name="hamburger" title="Fechar Menu" description="Fechar Menu" size="x6" />
      </TheNavButton>
    </div>
    <nav v-show="openned" :class="$style.navbar">
      <nuxt-link to="/" :class="$style.navItem">
        Inicio
      </nuxt-link>
      <nuxt-link to="/" :class="$style.navItem">
        Inicio
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
  data () {
    return {
      openned: false
    }
  }
}
</script>

<style lang='postcss' module>
  .header {
    @apply bg-primary w-full p-2 flex flex-col justify-between text-light fixed top-0 left-0 right-0;
  }

  .logo {
    @apply bg-primary w-full flex justify-between items-center font-bold p-2 uppercase border-b-2 border-secondary z-10;
  }

  .navbar{
    @apply p-2 z-0 flex flex-col gap-1;
  }

  .navItem {
    @apply uppercase tracking-wider hover:text-sweet-fuchsia-400 transition-all duration-300;
  }
</style>
