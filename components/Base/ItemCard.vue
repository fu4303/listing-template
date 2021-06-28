<template>
  <div
    class="
      rounded-lg
      border
      overflow-hidden
      border-gray-100
      dark:border-gray-800
    "
  >
    <div class="relative overflow-hidden" style="padding-bottom: 50%">
      <div
        class="
          w-full
          h-full
          flex
          items-center
          justify-center
          bg-gray-300
          dark:bg-gray-700
          animate-pulse
          absolute
          top-0
        "
      >
        <p class="text-xs font-semibold uppercase text-gray-500">
          Loading Image
        </p>
      </div>
      <img
        class="w-full h-full object-cover absolute top-0"
        :src="project.image"
        :alt="project.name"
        loading="lazy"
      />
    </div>
    <div class="px-4 py-3 space-y-2">
      <div class="flex items-center justify-between">
        <p class="text-lg font-semibold">{{ project.name }}</p>
        <p class="text-gray-600 dark:text-gray-400">
          {{ project.paid ? "Paid" : "Free" }}
        </p>
      </div>
      <p class="text-sm truncate">{{ project.description }}</p>
      <div class="flex flex-row -space-x-2 hover:space-x-1">
        <div
          v-for="(stack, i) in project.stack"
          :key="i"
          class="
            h-10
            w-10
            rounded-full
            overflow-hidden
            flex
            items-center
            justify-center
            simple-icon
            cursor-pointer
          "
          :style="{ 'background-color': `#${getIcon(stack.slug).hex}` }"
          v-tooltip.bottom-center="{
            content: stack.name,
            classes: 'tooltip',
            offset: '12',
          }"
        >
          <div class="h-5 w-5" v-html="getIcon(stack.slug).svg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import simpleIcons from "simple-icons";

export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getIcon(icon) {
      return simpleIcons.Get(icon);
    },
  },
};
</script>

<style>
.simple-icon svg {
  fill: #fff;
}
</style>