<template>
  <HeroPage :content="heroPage" />
  <CardsIcon :content="netZero" />
  <Statistics :content="statistics" />
  <ImageLargeSlider :content="imageLargeSlider" />
  <CardsIcon :content="socialImpact" />
</template>

<script setup>
definePageMeta({
  middleware: ['header-theme'],
  headerTheme: 'header-light'
})

import IconWorld from '~/assets/icons/world.svg'
import IconSun from '~/assets/icons/sun.svg'
import IconPlant from '~/assets/icons/plant.svg'
import IconUsers from '~/assets/icons/users.svg'
import IconUserCheck from '~/assets/icons/user-check.svg'
import IconSmile from '~/assets/icons/smile.svg'

import ShapeHero1 from '~/assets/icons/shape-hero-1.svg'

const heroPage = {
  heading: 'Sustainability',
  intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  variation: {
    type: 1,
    img1: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img2: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img3: 'https://static.jackbarham.com/ampyr/hero.jpg',
    svg: ShapeHero1,
  },
}

const netZero = {
  heading: 'Our Commitment to Achieving Net Zero',
  cards: [
    {
      heading: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icon: IconWorld,
    },
    {
      heading: 'Ac odio tempor orci',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icon: IconSun,
    },
    {
      heading: 'Bibendum neque',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icon: IconPlant,
    },
  ]
}

const statistics = {
  heading: 'Pan-European Pipeline of Solar Energy Solutions',
  stats: [
    {
      country: 'United Kingdom',
      flag: 'https://static.jackbarham.com/ampyr/flag-gb.png',
      mw: '1,695',
      projects: '34',
      devopment: '1,685',
      construction: '10',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      color: 'text-brand-uk',
    },
    {
      country: 'Netherlands',
      flag: 'https://static.jackbarham.com/ampyr/flag-nl.png',
      mw: '1,890',
      projects: '68',
      devopment: '1,782',
      construction: '108',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      color: 'text-brand-nl',
    },
    {
      country: 'Germany',
      flag: 'https://static.jackbarham.com/ampyr/flag-de.png',
      mw: '3,871',
      projects: '147',
      devopment: '3,856',
      construction: '15',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      color: 'text-brand-de',
    },
  ]
}

const imageLargeSlider = {
  slides: [
    {
      headline: 'Our environmental impact',
      heading: 'Biodiversity',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      headline: 'Our environmental impact',
      heading: 'Water',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
    {
      headline: 'Our environmental impact',
      heading: 'Air',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
    },
  ]
}

const socialImpact = {
  heading: 'Our Social Impact',
  cards: [
    {
      heading: 'Communities',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icon: IconUsers,
    },
    {
      heading: 'Human Rights',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icon: IconUserCheck,
    },
    {
      heading: 'Employee Welfare',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icon: IconSmile,
    },
  ]
}
</script>