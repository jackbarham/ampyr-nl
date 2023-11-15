<template>
  <div class="featured-slider">
    <div class="relative bg-white py-14 lg:py-24">
      <div class="relative z-10 max-w-sm md:max-w-7xl m-auto px-4 md:px-8">

        <h1 class="c-navy text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">Featured Projects</h1>
          
        <carousel ref="featuredSlider" :items-to-show="1.2" :wrap-around="true" :breakpoints="breakpoints">
          <slide v-for="(project, index) in projects" :key="index">

            <NuxtLink :to="project.link" class="block relative w-full h-[384px] md:h-[512px] rounded-lg md:rounded-2xl overflow-hidden group">
              <div class="absolute w-full h-full z-30 p-6">
                <h2 class="text-white text-2xl lg:text-3xl font-normal mb-4">{{ project.heading }}</h2>
                <div class="absolute left-6 bottom-6 bg-white c-navy text-xs px-3 py-1 rounded-full capitalize">{{ project.category }}</div>
                <div class="absolute bottom-6 right-6 w-10 h-10 rounded-full p-0.5 c-bg-orange">
                  <svgo-arrow-right filled class="fill-p-navy" />
                </div>
              </div>
              <div class="absolute w-full h-44 bg-gradient-to-b from-black to-transparent"></div>
              <img :src="project.image" alt="Description" class="w-full h-full object-cover">
            </NuxtLink>
          </slide>
        </carousel>

        <div class="flex items-center justify-center h-full w-full max-w-6xl m-auto pt-12">
          <div @click="prevSlide()" class="w-10 h-10 border border-orange rounded-full p-0.5  bg-transparent hover:c-bg-orange transition-colors cursor-pointer rotate-180 mr-4">
            <svgo-arrow-right filled class="fill-p-navy" />
          </div>
          <div @click="nextSlide()" class="w-10 h-10 border border-orange rounded-full p-0.5  bg-transparent hover:c-bg-orange transition-colors cursor-pointer">
            <svgo-arrow-right filled class="fill-p-navy" />
          </div>
        </div>

      </div>
      <div class="absolute w-full h-full top-0 opacity-20">
        <svgo-blades-full filled />
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    heading: 'Edinburgh Airport',
    category: 'Category One',
    link: '/portfolio/case-study-name',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Somewhere Else',
    category: 'Category Three',
    link: '/portfolio/case-study-name',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Government Utility',
    category: 'Category Three',
    link: '/portfolio/case-study-name',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    heading: 'Power Networks',
    category: 'Category two',
    link: '/portfolio/case-study-name',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
]

const featuredSlider = ref(null)

function nextSlide() {
  featuredSlider.value.next()
}

function prevSlide() {
  featuredSlider.value.prev()
}

const breakpoints = {
  1024: {
    itemsToShow: 1.7,
  },
}
</script>

<style>
.featured-slider .carousel {
  text-align: left;
}
.featured-slider .carousel__slide {
  padding: 0 4px;
}

.featured-slider .carousel__viewport {
  overflow: visible;
}

.featured-slider .carousel__track {
  transform-style: preserve-3d;
}

.featured-slider .carousel__slide--sliding {
  transition: all 0.3s ease-in;
}

.featured-slider .carousel__slide {
  opacity: 0.8;
  transform: scale(0.94);
}

.featured-slider .carousel__slide--active ~ .carousel__slide {
  transform: scale(0.94);
}

.featured-slider .carousel__slide--prev {
  opacity: 0.8;
  transform: scale(0.94);
}

.featured-slider .carousel__slide--next {
  opacity: 0.8;
  transform: scale(0.94);
}

@media only screen and (min-width: 1024px) {
  .featured-slider .carousel__slide {
    padding: 0;
  }

  .featured-slider .carousel__slide {
    transform: scale(0.84);
  }

  .featured-slider .carousel__slide--active ~ .carousel__slide {
    transform: scale(0.84);
  }

  .featured-slider .carousel__slide--prev {
    transform: scale(0.84);
  }

  .featured-slider .carousel__slide--next {
    transform: scale(0.84);
  }
}

.featured-slider .carousel__slide--active {
  opacity: 1;
  transform: scale(1);
}
</style>