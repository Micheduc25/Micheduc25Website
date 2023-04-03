<template>
  <div class="home-page">
    <main class="page-content overflow-hidden ">
      <section class="top-band flex items-center justify-center py-4 mb-6">
        <div class="content-wrapper">
          <div
            ref="bandTitle"
            class="animate__animated flex flex-col items-center opacity-0"
          >
            <img src="@/assets/images/logo-white.png" alt="micheduc25 logo" />

            <h1
              class=" text-center mb-8 text-tertiary tech-text text-6xl md:text-8xl"
            >
              Welcome to the Micheduc25 Tech Platform
            </h1>
          </div>

          <p
            class="band-text text-justify mb-16 animate__animated animate__fadeInUp animate__delay-2s"
          >
            Discover the world of technology and IT like you have never seen it
            before. At Micheduc25 we offer you services related to a variety of
            technological aspects.
            <nuxt-link
              to="/services"
              class=" text-primary underline hover:text-primary_light transition-colors"
              >Web Development</nuxt-link
            >,
            <nuxt-link
              to="/services"
              class=" text-primary underline hover:text-primary_light transition-colors"
              >Mobile Development</nuxt-link
            >,
            <nuxt-link
              to="/services"
              class=" text-primary underline hover:text-primary_light transition-colors"
              >Video Editing</nuxt-link
            >,
            <nuxt-link
              to="/services"
              class=" text-primary underline hover:text-primary_light transition-colors"
              >Graphic Design</nuxt-link
            >
            and other tech related services. Make your business more productive
            and profitable by hiring our expert skills in various IT domains
          </p>

          <div
            class="explore-buttons animate__animated animate__fadeInUp animate__delay-3s flex-col xs:flex-row"
          >
            <nuxt-link
              to="/services"
              class="explore-button mb-6 xs:mr-4 xs:mb-0"
              >Explore</nuxt-link
            >
            <nuxt-link to="/services" class="explore-button"
              >Contact Us</nuxt-link
            >
          </div>
        </div>
      </section>

      <section class="other-bands px-10 md:px-20">
        <band-item
          :image="item.image"
          :title="item.title"
          :reversed="index % 2 == 0"
          :showActions="true"
          v-for="(item, index) in bandData"
          :key="`item${index}`"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          illo eligendi cupiditate ea quas vel maxime exercitationem nobis,
          laboriosam explicabo ad incidunt aliquam hic tenetur assumenda officia
          nam ducimus sed molestiae! Soluta, consectetur temporibus? Delectus
          ipsa recusandae veniam beatae eaque repellat repellendus porro labore
          qui praesentium, modi eos soluta vitae, expedita quidem suscipit.
          Iure, iste incidunt hic praesentium voluptate qui porro excepturi
          fugit totam accusamus dolorem veniam sint, itaque atque.
        </band-item>
      </section>

      <section class="productivity-section px-10 md:px-20 mb-16">
        <info-card
          v-for="(item, index) in prodData"
          :key="`prod${index}`"
          :title="item.title"
        >
          <template #icon>
            <img
              :src="require(`@/assets/images/${item.image}`)"
              alt="rocket icon"
            />
          </template>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          illo eligendi cupiditate ea quas vel maxime exercitationem nobis,
          laboriosam explicabo ad incidunt aliquam hic tenetur assumenda.
        </info-card>
      </section>

      <section
        class="stats-band bg-white py-10 rounded-lg shadow-lg flex justify-around mx-10 md:mx-20 mb-12 p-2"
      >
        <div
          v-for="(item, index) in statsData"
          :key="`stats${index}`"
          class="stat-item flex flex-col items-center "
        >
          <div class="mb-6 flex justify-center w-20 xs:w-32 md:w-40">
            <img
              :src="require(`@/assets/images/${item.image}`)"
              alt="stats icon"
            />
          </div>
          <div
            class="stats-number tech-text text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            0
          </div>
          <div
            class="stats-name text-center tech-text text-3xl xs:text-4xl md:text-5xl font-bold"
          >
            {{ item.title }}
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import BandItem from "~/components/BandItem.vue";
import animateCSS from "~/assets/js/animate";

import webDevImage from "@/assets/images/home/web-dev.jpg";
import mobiledevImage from "@/assets/images/home/mobile-dev.jpg";
import videoEdImage from "@/assets/images/home/video-editing.jpg";
import graphicDesImage from "@/assets/images/home/graphic-design.jpg";
import OtherSerImage from "@/assets/images/home/other-services.jpg";
import InfoCard from "~/components/InfoCard.vue";
export default {
  components: { BandItem, InfoCard },
  name: "HomePage",

  data() {
    return {
      isLoadingStats: false,
      enableAnimations: true,
      bandData: [
        {
          title: "Web Development",
          image: webDevImage
        },
        {
          title: "Mobile Development",
          image: mobiledevImage
        },
        {
          title: "Video Editing",
          image: videoEdImage
        },
        {
          title: "Graphic Design",
          image: graphicDesImage
        },
        {
          title: "Other IT services",
          image: OtherSerImage
        }
      ],

      prodData: [
        {
          title: "An experienced team for you projects",
          image: "rocket.svg"
        },
        {
          title: "Creation of innovative products",
          image: "trophy.svg"
        },
        {
          title: "Expertise of our team guaranteed",
          image: "code-sign.svg"
        },
        {
          title: "Reliable partner",
          image: "handshake.svg"
        }
      ],

      statsData: [
        {
          image: "complete.png",
          value: 20,
          title: "Completed Projects"
        },
        {
          image: "review.png",
          value: 20,
          title: "Satisfied Customers"
        },
        {
          image: "winner.png",
          value: 4,
          title: "Awards"
        }
      ]
    };
  },

  methods: {
    /**
     *
     * @param {Element} el
     */
    isElementVisible(el) {
      const pos = el.getBoundingClientRect();
      if (
        pos.top >= 20 &&
        pos.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      )
        return true;
      else return false;
    },

    animateBands(bandItems) {
      for (let i = 0; i < bandItems.length; i++) {
        const item = bandItems[i];
        if (
          this.isElementVisible(item) &&
          !item.classList.contains("opacity-100")
        ) {
          console.log("visible!");
          animateCSS(item, i % 2 == 0 ? "fadeInLeft" : "fadeInRight");
          item.classList.replace("opacity-0", "opacity-100");
        }
      }
    },

    animateStatsBand() {
      const statsNumbers = document.getElementsByClassName("stats-number");
      const statsBand = document.querySelector(".stats-band");

      //animate stats numbers when visible1
      if (this.isElementVisible(statsBand) && !this.isLoadingStats) {
        
        for (let i = 0; i < this.statsData.length; i++) {
          let j = 0;
          const interval = setInterval(() => {
            statsNumbers[i].innerHTML = `${j}`;
            if (j === this.statsData[i].value) clearInterval(interval);
            else j++;
          }, 200);
        }
        this.isLoadingStats = true;
      }
    }
  },

  created() {

  },

  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    //       if (!sessionStorage.getItem("isFirstLoad")) {
    //   this.enableAnimations = true;
    //   sessionStorage.setItem("isFirstLoad","true");
    // }

      if (this.enableAnimations) {
        //make band items appear on scroll
        const bandItems = document.getElementsByClassName("band-item");
        const prodItems = document.getElementsByClassName("info-card");
        const statsNumbers = document.getElementsByClassName("stats-number");
        const statsBand = document.querySelector(".stats-band");
        const appHeader = document.querySelector(".app-header");
        this.animateBands(bandItems);
        this.animateBands(prodItems);
        this.animateStatsBand();

        window.addEventListener("scroll", e => {
          this.animateBands(bandItems);
          this.animateBands(prodItems);
          this.animateStatsBand();

          //   if (window.scrollY === document.querySelector(".top-band").clientHeight) {
          //   appHeader.classList.replace(
          //     "bg-transparent",
          //     "bg-secondary"
          //   );
          // } else {
          //   if (appHeader.classList.contains("bg-secondary"))
          //     appHeader.classList.replace(
          //       "bg-secondary",
          //       "bg-transparent"
          //     );
          // }
        });
        this.$refs.bandTitle.classList.add("animate__fadeInUp");
        this.$refs.bandTitle.classList.replace("opacity-0", "opacity-100");
      }
    });
  },
  beforeDestroy() {
    if (this.enableAnimations) window.removeEventListener("scroll",(e)=>{});
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  .top-band {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("@/assets/images/home/cover1.jpg");
    background-size: cover;
    background-attachment: fixed;
    min-height: 95vh;
    color: white;

    @media only screen and (max-width: 1600px) {
      min-height: 90vh;
    }

    .content-wrapper {
      max-width: 80%;
      margin: 0 auto;
    }

    .explore-buttons {
      @apply flex items-center justify-center;
      .explore-button {
        border-radius: 10px;
        width: 300px;

        @apply flex items-center justify-center text-4xl;
        @apply bg-primary hover:bg-primary_light transition-all px-10 py-4 md:px-12 md:py-6;

        @apply transform hover:-translate-y-2 hover:shadow-md duration-300 transition-all;
      }
    }
  }

  .productivity-section {
    @apply grid grid-cols-1 auto-rows-auto gap-3;

    @screen md {
      @apply grid grid-cols-2 grid-rows-2 gap-3;
    }
  }
}
</style>
