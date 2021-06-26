<template>
  <section class="py-12 container mx-auto px-4" id="projects">
    <h2 class="text-center text-4xl font-bold">
      List of Jamstack Makers Projects
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      <div
        v-for="(project, p) in projects"
        :key="p"
        class="
          rounded-lg
          border
          overflow-hidden
          border-gray-100
          dark:border-gray-800
        "
      >
        <nuxt-picture
          :src="project.image"
          fit="cover"
          format="webp"
          loading="lazy"
        />
        <div class="px-4 py-2">
          <p class="text-lg font-semibold">{{ project.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>