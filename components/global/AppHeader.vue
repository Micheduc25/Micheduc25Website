<template>
  <header
    ref="appHeader"
    class="app-header bg-secondary transition-all  shadow-lg sticky top-0 px-4 py-2 z-50"
  >
    <div class="page-content flex justify-between">
      <nuxt-link class="app-logo" to="/">
        <img
          src="@/assets/images/logo-white.png"
          class=" w-32"
          alt="micheduc25 logo"
        />
      </nuxt-link>
      <!-- <div class="searchbar px-3 my-2 bg-white flex items-center rounded-md ">
                <input type="search" name="search-bar" id="search-bar" placeholder="Search Something..." class="focus:outline-none">
                <fa-icon :icon="faSearch" :style="{color:'#109e92'}"/>
            </div> -->
      <nav ref="navMenu" class="app-header__navigation flex items-center">
        <nuxt-link to="/services" class="services nav-link">Services</nuxt-link>
        <nuxt-link to="/services" class="services nav-link">Projects</nuxt-link>
        <nuxt-link to="/about" class="about nav-link">About Me</nuxt-link>
        <nuxt-link to="/contact" class="contact nav-link">Contact</nuxt-link>
      </nav>
      <button
        @click.stop="toggleMenu"
        class="md:hidden w-max focus:outline-none text-white text-6xl font-bold"
      >
        <span>&#9776;</span>
      </button>
    </div>
  </header>
</template>

<script>
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "AppHeader",
  computed: {
    faSearch() {
      return faSearch;
    }
  },

  methods: {
    toggleMenu() {
      this.$refs.navMenu.classList.toggle("show");
      // document.getElementById().classList
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.addEventListener("click", () => {
        if (this.$refs.navMenu.classList.contains("show")) {
          this.$refs.navMenu.classList.remove("show");
        }
      });
    });
  },

  beforeDestroy() {
    document.removeEventListener("click");
  }
};
</script>

<style lang="scss" scoped>
.app-header__navigation {
  @apply fixed flex-col bg-secondary h-screen w-1/2 text-center items-center;
  right: -100%;
  top: 60px;
  transition: right 0.3s ease-in;
  .nav-link {
    padding: 10px 15px;
    border-radius: 0;
    @apply w-11/12 mx-auto;
    border-bottom: 1px solid white;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @screen md {
    @apply static right-auto top-auto flex-row bg-transparent h-auto w-auto;

    .nav-link {
      border-bottom: none;
      border-radius: 5px;
      @apply w-auto mx-auto;

      &:not(:last-child) {
        margin-right: 10px;
        margin-bottom: 0;
      }
    }
  }

  &.show {
    right: 0;
  }
}
</style>
