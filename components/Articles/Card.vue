<template>
  <NuxtLink :to="`/articles/${article.slug}`">
    <article class="space-y-2">
      <div
        class="relative overflow-hidden rounded-lg"
        style="padding-bottom: 50%"
      >
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
          :src="article.image"
          :alt="article.title"
          loading="lazy"
        />
      </div>
      <h1 class="text-lg font-semibold">{{ article.title }}</h1>
      <p class="text-xs font-semibold uppercase">
        by
        <span class="text-[#1DA1F2]">@{{ article.author_handle }}</span> &bull;
        <span>{{ timeago }}</span>
      </p>
      <p class="text-xs mt-6">{{ article.description.substr(0, 100) }}</p>
    </article>
  </NuxtLink>
</template>

<script>
import * as timeago from "timeago.js";

export default {
  props: {
    article: {
      type: Object,
      retuired: true,
    },
  },
  computed: {
    timeago() {
      return timeago.format(this.article.updatedAt);
    },
  },
};
</script>