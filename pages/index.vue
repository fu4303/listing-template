<template>
  <div>
    <HomeHero />
    <HomeClients />
    <HomeItems :projects="projects" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content("projects").fetch();
    return { projects };
  },
};
</script>

