<template>
  <main>
    <section class="bg-[#f1f1f1]">
      <div
        class="container flex flex-col lg:flex-row items-center py-20 gap-10"
      >
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Master the Kitchen with Ease: Unleash Your Inner Chef Today!
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Discover recipes helping you to find the easiest way to cook.
          </p>
          <NuxtLink
            :to="{
              path: '/',
              hash: '#recipes',
            }"
          >
            <UButton
              label="Browse recipes"
              size="xl"
              class="px-6 text-lg lg:text-xl"
              color="violet"
            />
          </NuxtLink>
        </div>
        <div class="flex-1 order-1 lg:order-2">
          <NuxtImg
            sizes="xs:100vw sm:700px"
            src="/nuxt-course-hero.png"
            format="webp"
            densities="x1"
            alt=""
            preload
            draggable="false"
          />
        </div>
      </div>
    </section>
    <section class="py-20 container" id="recipes">
      <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
      <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>
      <div
        v-if="!error"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
      >
        <RecipeCard
          v-for="recipe in data?.recipes"
          :key="recipe.id"
          :recipe="recipe"
        />
      </div>
      <p v-if="error" class="text-xl">
        Opps, something went wrong. Please try again later
      </p>
    </section>
  </main>
</template>

<script lang="ts" setup>
import type { Recipes } from "~~/types/types";

const { data, error } = await useAsyncData<Recipes>("recipes", () =>
  $fetch("https://dummyjson.com/recipes?limit=12")
);

if (error.value) {
  throw createError({
    status: error.value?.statusCode,
    message: error.value?.statusMessage,
  });
}

useSeoMeta({
  title: "Recipes",
  description: "Recipes for you to cook!",
  ogTitle: "Recipes",
  ogDescription: "Recipes for you to cook!",
  ogImage: "/nuxt-course-hero.png",
  ogUrl: `http://localhost:3000`,
  twitterTitle: "Recipes",
  twitterDescription: "Recipes for you to cook!",
  twitterImage: "/nuxt-course-hero.png",
  twitterCard: "summary",
});
</script>

<style></style>
