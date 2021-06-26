<template>
  <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 px-4">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      <h1 class="text-4xl lg:text-5xl font-bold tracking-wide">
        Jamstack projects from
        <span class="mt-1 sm:block">the makers community.</span>
      </h1>
      <div class="space-y-6">
        <p class="text-gray-700 dark:text-gray-300">
          Showcases &amp; launches of Jamstack Projects Newsletter
          <span class="mt-1 sm:block"
            >in your inbox from around the world.</span
          >
        </p>
        <form
          @submit.prevent="subscribe"
          class="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <label class="block">
            <input
              type="email"
              class="
                form-input
                mt-1
                block
                w-full
                rounded-md
                bg-white
                dark:bg-gray-700
                border-transparent
                focus:border-gray-500
                focus:ring-0
              "
              required
              placeholder="Type your email here..."
              v-model="user.email"
            />
          </label>
          <button class="btn-primary btn-focus w-full lg:w-1/2">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: null,
        page: null,
      },
    };
  },
  methods: {
    subscribe() {},
  },
};
</script>

<style>
</style>