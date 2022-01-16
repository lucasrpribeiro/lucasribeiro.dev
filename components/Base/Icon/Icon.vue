<template>
  <svg-icon
    :class="[
      $style.icon,
      {
        [$style.sm]: size === 'sm',
        [$style.lg]: size === 'lg',
        [$style.md]: size === 'md',
        [$style.x2]: size === 'x2',
        [$style.x3]: size === 'x3',
        [$style.x4]: size === 'x4',
        [$style.x5]: size === 'x5',
        [$style.x6]: size === 'x6',
        [$style.x8]: size === 'x8',
        [$style.x10]: size === 'x10',
        [$style.x12]: size === 'x12',
        [$style.x14]: size === 'x14',
        [$style.x16]: size === 'x16',
      },
    ]"
    :name="name"
    :title="title"
    :desc="description"
  />
</template>

<script lang="ts">
import Vue from 'vue'
const allowedSizes = ['sm', 'md', 'lg', 'x2', 'x3', 'x4', 'x5', 'x6', 'x8', 'x10', 'x12', 'x14', 'x16']
export default Vue.extend({
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md',
      validator: value => allowedSizes.includes(value)
    }
  }
})
</script>

<style lang="postcss" module>
.icon {
  @apply fill-current flex w-auto;
}
.sm {
  @apply w-2 h-2;
}
.md {
  @apply w-4 h-4;
}
.lg {
  @apply w-8 h-8;
}
.x2 {
  @apply w-2 h-2;
}
.x3 {
  @apply w-3 h-3;
}
.x4 {
  @apply w-4 h-4;
}
.x5 {
  @apply w-5 h-5;
}
.x6 {
  @apply w-6 h-6;
}
.x8 {
  @apply w-8 h-8;
}
.x10 {
  @apply w-10 h-10;
}
.x12 {
  @apply w-12 h-12;
}
.x14 {
  @apply w-14 h-14;
}
.x16 {
  @apply w-16 h-16;
}
</style>
