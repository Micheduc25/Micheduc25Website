<template>
    <div>
        <app-header/>
        <nuxt class="main-nuxt"/>
        <app-footer/>
    </div>
</template>

<script>
import AppFooter from '~/components/global/AppFooter.vue'
import AppHeader from '~/components/global/AppHeader.vue'
    export default {
        name:"DefaultLayout",
        components: { AppHeader,AppFooter  },
   }
</script>

<style lang="scss" scoped>
    .main-nuxt{
        min-height: 80vh;
    }
</style>