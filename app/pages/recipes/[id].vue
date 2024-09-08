<template>
  <div class="flex flex-col max-w-screen-lg container py-20">
    <div v-if="!data">
      <div class="flex flex-col mb-6">
        <USkeleton class="text-5xl h-12 w-1/3 mb-4 font-semibold"></USkeleton>
        <div class="flex gap-4 text-xl mb-6">
          <USkeleton class="h-12 w-32" />
          <USkeleton class="h-12 w-32" />
          <USkeleton class="h-12 w-32" />
        </div>
        <hr />
      </div>

      <!-- Image -->
      <USkeleton
        class="w-full min-h-[500px] rounded-md shadow-sm mb-12"
      ></USkeleton>

      <!-- Ingredients -->
      <div class="mb-8">
        <USkeleton class="text-5xl h-12 w-1/4 mb-4 font-semibold"></USkeleton>

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
          <li v-for="index in 8" :key="index">
            <USkeleton class="h-12 w-32" />
          </li>
        </ul>
      </div>

      <!-- Instructions -->
      <div>
        <USkeleton class="text-5xl h-12 w-1/4 mb-4 font-semibold"></USkeleton>

        <ul class="flex flex-col text-lg gap-4">
          <li v-for="index in 4" :key="index" class="flex gap-2">
            <USkeleton class="h-12 w-2/3" />
          </li>
        </ul>
      </div>
    </div>
    <!-- Header -->
    <div v-else>
      <div class="flex flex-col mb-6">
        <h2 class="text-5xl mb-4 font-semibold">{{ data?.name }}</h2>
        <div class="flex gap-4 text-xl mb-6">
          <div class="flex items-center gap-1">
            <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
            <span>{{ data?.cookTimeMinutes }}</span>
          </div>
          <div class="flex items-center gap-1">
            <Icon name="mdi:fire" style="color: #f79f1a" />
            <span>{{ data?.caloriesPerServing }}</span>
          </div>
          <div class="flex items-center gap-1">
            <Icon name="mdi:star" style="color: #f79f1a" />
            <span>{{ data?.rating }} ({{ data?.reviewCount }})</span>
          </div>
        </div>
        <hr />
      </div>

      <!-- Image -->
      <NuxtImg
        :src="data?.image"
        preload
        draggable="false"
        densities="x1"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw"
        class="w-full max-h-[500px] object-cover rounded-md shadow-sm mb-12"
        alt=""
      />

      <!-- Ingredients -->
      <div class="mb-8">
        <h2 class="text-3xl font-semibold mb-4">Ingredients</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
          <li v-for="ingredient in data?.ingredients" :key="ingredient">
            <label class="flex gap-2 items-center">
              <input class="hidden peer" type="checkbox" />
              <div
                class="relative w-6 h-6 rounded-full border-2 border-dodgeroll-gold flex items-center justify-center peer-checked:after:absolute peer-checked:after:w-4 peer-checked:after:h-4 peer-checked:after:bg-dodgeroll-gold peer-checked:after:rounded-full"
              ></div>
              <span class="peer-checked:line-through">
                {{ ingredient }}
              </span>
            </label>
          </li>
        </ul>
      </div>

      <!-- Instructions -->
      <div>
        <h2 class="text-3xl font-medium mb-4">Instructions</h2>
        <ul class="flex flex-col text-lg gap-4">
          <li
            v-for="(instruction, index) in data?.instructions"
            :key="instruction"
            class="flex gap-2"
          >
            <span
              class="flex items-center justify-center bg-dodgeroll-gold w-7 h-7 rounded-full text-white text-sm"
            >
              {{ index + 1 }}
            </span>
            <span class="flex-1">{{ instruction }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Recipe } from "~~/types/types";

const { id } = useRoute().params;
const { data, error } = await useFetch<Recipe>(
  `https://dummyjson.com/recipes/${id}`,
  {
    lazy: true,
    server: false,
  }
);

if (error.value) {
  throw createError({
    status: error.value?.statusCode,
    message: error.value?.statusMessage,
  });
}

useSeoMeta({
  title: data.value?.name,
  description: "Recipes for you to cook!",
  ogTitle: data.value?.name,
  ogDescription: "Recipes for you to cook!",
  ogImage: data.value?.image,
  ogUrl: `http://localhost:3000/recipes/${data.value?.id}`,
  twitterTitle: data.value?.name,
  twitterDescription: "Recipes for you to cook!",
  twitterImage: data.value?.image,
  twitterCard: "summary",
});
</script>

<style></style>
