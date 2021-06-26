<template>
  <button
    class="
      w-14
      h-8
      flex
      items-center
      bg-gray-300
      rounded-full
      p-1
      duration-300
      cursor-pointer
      btn-focus
    "
    :class="{ 'bg-gray-700': isDarkMode }"
    :aria-checked="isDarkMode.toString()"
    @click="toggle"
  >
    <div
      class="bg-white w-6 h-6 rounded-full shadow-md transform duration-300"
      :class="{ 'translate-x-6': isDarkMode }"
    ></div>
  </button>
</template>

<script>
export default {
  computed: {
    isDarkMode() {
      return this.$colorMode.preference === "dark" ? true : false;
    },
  },
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
    },
  },
};
</script>