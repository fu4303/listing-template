<template>
  <main class="min-h-screen">
    <section class="container mx-auto py-12 px-4">
      <h1 class="text-6xl font-bold text-center mb-24">Articles</h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ArticlesCard
          v-for="(article, i) in articles"
          :key="i"
          :article="article"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only([
        "title",
        "description",
        "slug",
        "image",
        "updatedAt",
        "author_handle",
      ])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
    };
  },
};
</script>