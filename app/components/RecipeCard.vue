<template>
  <div class="flex flex-col shadow rounded-md">
    <NuxtImg
      :src="recipe.image"
      sizes="xs:100vw sm:50vw lg:400px"
      format="webp"
      draggable="false"
      densities="x1"
      preload
      alt=""
      class="rounded-t-md cursor-pointer hover:opacity-75 transition"
    />
    <div class="flex flex-col py-6 px-4 flex-1">
      <p class="text-xl lg:text-2xl font-semibold mb-2">
        {{ recipe.name }}
      </p>
      <div
        class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto"
      >
        <div class="flex items-center gap-1">
          <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
          <span>{{ recipe.cookTimeMinutes }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:fire" style="color: #f79f1a" />
          <span>{{ recipe.caloriesPerServing }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:star" style="color: #f79f1a" />
          <span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
        </div>
      </div>
      <NuxtLink :to="`/recipes/${recipe.id}`">
        <UButton
          label="view"
          size="xl"
          class="px-6 text-lg lg:text-xl mt-2"
          color="violet"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Recipe } from "~~/types/types";

defineProps<{
  recipe: Recipe;
}>();
</script>

<style></style>
