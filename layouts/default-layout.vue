<template>
    <div>
        <app-header/>
        <nuxt/>
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

</style>