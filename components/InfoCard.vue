<template>
  <div
    class="info-card opacity-0 w-full px-10 py-14 border border-primary rounded-lg bg-tertiary text-secondary shadow-lg"
  >
    <div class="flex w-20 md:w-24 mb-8 md:mb-12">
        <slot name="icon"></slot>
    </div>

    <h2 class="card-title tech-text text-4xl lg:text-6xl font-bold mb-8 md:mb-12">{{ title }}</h2>

    <p class="card-description">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
    name:"InfoCard",
    props:{
        title:{
            type:String,
            default:""
        }
    }
};
</script>

<style lang="scss" scoped></style>
