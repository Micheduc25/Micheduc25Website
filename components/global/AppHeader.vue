<template>
    <header class="app-header bg-secondary flex justify-between shadow-lg sticky top-0 px-4 py-2">
        <nuxt-link class="app-logo" to="/">
            <img src="@/assets/images/logo-white.png" class=" w-32" alt="micheduc25 logo">
        </nuxt-link>
        <div class="searchbar px-3 my-2 bg-white flex items-center rounded-md ">
            <input type="search" name="search-bar" id="search-bar" placeholder="Search Something..." class="focus:outline-none">
            <fa-icon :icon="faSearch" :style="{color:'#109e92'}"/>
        </div>
        <nav class="app-header__navigation flex items-center">
            <nuxt-link  to="/services" class="services nav-link">Services</nuxt-link>
            <nuxt-link  to="/about" class="about nav-link">About Us</nuxt-link>
            <nuxt-link  to="/contact" class="contact nav-link">Contact</nuxt-link>
        </nav>
    </header>
</template>

<script>
    import {faSearch} from '@fortawesome/free-solid-svg-icons'

    export default {
        name:"AppHeader",
        computed:{
            faSearch(){
                return faSearch
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>