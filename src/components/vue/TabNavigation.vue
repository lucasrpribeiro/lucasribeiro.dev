<template>
  <div>
    <div class="tab-buttons">
      <button v-for="(tab, index) in tabs" :key="index" @click="selectTab(tab)">
        {{ tab }}
      </button>
    </div>
    <div class="tab-content">
      <slot :name="selectedTab"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const selectedTab = ref(props.tabs[0])

    function selectTab(tab: unknown) {
      selectedTab.value = tab
    }

    return {
      selectedTab,
      selectTab,
    }
  },
})
</script>
