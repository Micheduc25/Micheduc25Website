<template>
  <div
    :class="{'md:flex-row-reverse': reversed }"
    class="band-item opacity-0 flex flex-col md:flex-row"
  >
    <div class="band-image">
      <img :src="image" :alt="title + ' image'" />
    </div>

    <div class="band-description">
      <h2 class="band-description__title tech-text">
        {{ title }}
      </h2>

      <p class="band-description__text mb-6">
        <slot></slot>
      </p>

      <div v-if="showActions" class="band-description__actions">
        <nuxt-link to="/services" class="seemore-but bg-primary text-tertiary">See more <span>&rarr;</span ></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BandItem",
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    showActions: {
      type: Boolean,
      default: false
    },

    reversed: {
      type: Boolean,
      default: false
    }
  },

  created(){
      console.log(this.image);
  }
};
</script>

<style lang="scss" scoped>
.band-item {
    @apply mb-20;
    align-items: stretch;
    
  .band-image {
    display: flex;
    flex:1;
    @apply mr-6;
    img{
        object-fit: cover;
    }



    @screen md{
        flex:1 1 40%;
        width:40%;
    }
  }

  .band-description{
    flex:1;

    @screen md{
        flex:1 1 60%;
        width:60%;
    }
    

      @apply flex flex-col items-start justify-center;
      &__title{
          @apply font-bold text-5xl md:text-7xl mb-6;
          
      }

      &__text{

      }

      &__actions{
          .seemore-but{
              @apply px-10 py-4 rounded-md hover:bg-primary_light transition-all;
              span{
                  @apply opacity-0 transition-all duration-300;
                  transform:translateX(-10px);

              }

              &:hover{

                  span{
                    @apply opacity-100;
                    transform: translateX(0);
                  }

              }
          }
      }
  }
}
</style>
