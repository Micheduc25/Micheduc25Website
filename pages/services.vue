<template>
  <div class="services-page">
    <div
      class="services-topband flex justify-start items-center px-10 md:px-20"
    >
      <div class="content-wrapper w-6/12 text-tertiary">
        <h1 class="band-title tech-text text-9xl mb-6">
          Our Services
        </h1>
        <p class="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          placeat distinctio ullam iure, eius incidunt magni libero, quae est,
          sunt at quam obcaecati blanditiis esse!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import animateCSS from "@/assets/js/animate";
export default {
  name: "Services",

  mounted(){
      this.$nextTick(()=>{
          animateCSS(document.querySelector('.content-wrapper'),"fadeInDown")
      });
  }
};
</script>

<style lang="scss" scoped>
.services-topband {
  background-image: url("@/assets/images/services/service-top.jpg");
  background-color: rgba(0, 0, 0, 1);
  background-position: right center;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;

  min-height: 90vh;
}

.band-title {
  background-image: url("@/assets/images/home/software1.jpg");
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased;
  background-size: cover;

}


</style>
