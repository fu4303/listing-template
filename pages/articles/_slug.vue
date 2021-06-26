<template>
  <main>
    <div class="prose dark:prose-light mx-auto py-16 px-4">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" />
      <hr />
      <div class="flex items-center justify-between text-sm">
        <a
          :href="article.author_social_link"
          target="_blank"
          rel="noopener"
          style="text-decoration: none"
        >
          <p>By @{{ article.author_handle }}</p>
        </a>
        <p>Last Updated: {{ timeago }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import * as timeago from "timeago.js";

export default {
  scrollToTop: true,
  head() {
    return {
      title: `${this.article.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    return { article };
  },

  computed: {
    timeago() {
      return timeago.format(this.article.updatedAt);
    },
  },
};
</script>