<template>
  <button
    :aria-controls="controls"
    :aria-expanded="`${value}`"
    :class="$style.hamburger"
    type="button"
    aria-label="Toggle navigation"
    @click="change"
  >
    <BaseIcon v-if="icon" :name="icon.name" :title="icon.title" :description="icon.description" size="md" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TheMenuIcon',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Toggle navigation'
    },
    controls: {
      type: String,
      default: 'navbar_collapse'
    }
  },
  computed: {
    icon () {
      const status = [
        {
          name: 'hamburger',
          title: 'Abrir menu',
          description: 'Aperte para abrir o menu'
        },
        {
          name: 'cross',
          title: 'Fechar menu',
          description: 'Aperte para fechar o menu'
        }
      ]
      return status[this.value ? 1 : 0]
    }
  }
})
</script>

<style lang="postcss" module>
.hamburger {
  @apply col-start-5 col-end-6 mx-auto;
}
</style>
