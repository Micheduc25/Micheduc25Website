<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center" v-if="error.statusCode === 404">
      <img
        class=" w-96 mb-4"
        src="@/assets/images/404.png"
        alt="not found icon"
      />
      <h1 class="text-primary mb-4 text-6xl md:text-8xl">Page Not Found</h1>
      <NuxtLink
        class=" text-primary underline hover:text-primary_light transition-colors duration-300"
        to="/"
        >Return to Home page</NuxtLink
      >
    </div>
    <h1 v-else>An error occurred{{ error.statusCode }}</h1>
  </div>
</template>

<script>
export default {
  props: ["error"]
  //   layout: 'blog' // you can set a custom layout for the error page
};
</script>
