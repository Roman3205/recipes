<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator
      color="green"
      :height="4"
      style="opacity: 100 !important"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
