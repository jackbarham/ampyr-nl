<template>
  <div class="people-slider">
    <div class="bg-white py-14 lg:py-24">
      <div class="max-w-sm md:max-w-5xl m-auto px-4 md:px-8">
        <h1 class="c-navy text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">Points of Contact</h1>
          
        <carousel ref="imageLargeSlider" v-bind="settings" :breakpoints="breakpoints">
          <slide v-for="(person, index) in people" :key="index">

            <div class="relative block group md:mr-6">
              <div class="relative h-96 md:h-[512px] w-full rounded-2xl overflow-hidden mb-4">
                <div 
                  class="toggle-bio absolute z-30 top-4 md:top-6 right-4 md:right-6 w-10 h-10 rounded-full p-2 c-bg-orange cursor-pointer hover:bg-white transition"
                  :class="{ '!bg-white': showBio === index }"
                  @click="toggleBio(index)"
                >
                  <svgo-plus filled class="fill-navy transition-all" :class="{ 'rotate-45': showBio === index }" />
                </div>
                <div 
                  class="bio absolute w-full h-full bg-indigo-950/80"
                  v-show="showBio === index"
                >
                  <p class="px-6 md:px-8 pt-20 md:pt-24 font-no text-base md:text-xl">{{ person.bio }}</p>
                  <div class="absolute bottom-6 md:bottom-8 left-6 md:left-8">
                    <a :href="person.linkedin" class="flex items-center c-orange tracking-wide font-no text md:text-base">
                      <span>LinkedIn</span>
                      <span class="inline-block w-5 h-5 ml-1">
                        <svgo-chevron-right filled />
                      </span>
                    </a>
                </div>
                </div>
                <img :src="person.image" alt="Description" class="w-full h-full object-cover" />
              </div>
              <div class="px-4 c-navy">
                <h2 class="text-2xl mb-2 pb-3 border-b border-gray-200">{{ person.name }}</h2>
                <p class="tracking-wide font-light">{{ person.position }}</p>
              </div>
            </div>

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
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: 'Tom van Dorp',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
    position: 'CEO',
    linkedin: '#',
    image: 'https://static.jackbarham.com/ampyr/profile.jpg',
  },
  {
    name: 'Enzo Overtoom',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
    position: 'Business Developer',
    linkedin: '#',
    image: 'https://static.jackbarham.com/ampyr/profile.jpg',
  },
  {
    name: 'Johan Overtoom',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
    position: 'Marketing Professional',
    linkedin: '#',
    image: 'https://static.jackbarham.com/ampyr/profile.jpg',
  },
  {
    name: 'Marco Blok',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
    position: 'Project - en Procesmanagement',
    linkedin: '#',
    image: 'https://static.jackbarham.com/ampyr/profile.jpg',
  },
  {
    name: 'Paulien Benschop',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
    position: 'Investment Analyst',
    linkedin: '#',
    image: 'https://static.jackbarham.com/ampyr/profile.jpg',
  },
  {
    name: 'Rebecca Kolfschoten',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
    position: 'Office Manager',
    linkedin: '#',
    image: 'https://static.jackbarham.com/ampyr/profile.jpg',
  },
]

const showBio = ref(null)

const toggleBio = (index) => {
  showBio.value = showBio.value === index ? null : index
}

const imageLargeSlider = ref(null)

function nextSlide() {
  imageLargeSlider.value.next()
}

function prevSlide() {
  imageLargeSlider.value.prev()
}

const settings = {
  itemsToShow: 1.1,
  snapAlign: 'center',
}

const breakpoints = {
  768: {
    itemsToShow: 1.7,
  },
  1024: {
    itemsToShow: 2.2,
  },
}
</script>

<style>
.people-slider .carousel__slide {
  padding: 0 4px;
}

.people-slider .carousel__viewport {
  overflow: visible;
}
.people-slider .carousel {
  text-align: left;
}

.people-slider .carousel__slide--sliding {
  transition: all 0.3s ease-in;
}

.people-slider .carousel__slide {
  opacity: 0.72;
}


.people-slider .carousel__slide--prev {
  opacity: 0.72;
}

.people-slider .carousel__slide--next {
  opacity: 0.72;
}

.people-slider .carousel__slide--active {
  opacity: 1;
  transform: scale(1);
}

@media only screen and (min-width: 768px) {
  .people-slider .carousel__slide {
    padding: 0;
  }
}
</style>