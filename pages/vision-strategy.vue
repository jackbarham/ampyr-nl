<template>
  <HeroPage :content="heroPage" />
  <VideoFull />
  <CardsNumber :content="cardsNumber" />
  <ImageTextLeft :content="imageTextLeft" />
  <Statistics :content="statistics" />
  <GridLong :content="gridLong" />
  <ImageTextMiddle :content="imageTextMiddle" />
</template>

<script setup>
definePageMeta({
  middleware: ['header-theme'],
  headerTheme: 'header-light'
})

import ShapeHero1 from '~/assets/icons/shape-hero-1.svg'

const heroPage = {
  heading: 'Vision & Strategy',
  intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  variation: {
    type: 1,
    img1: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img2: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img3: 'https://static.jackbarham.com/ampyr/hero.jpg',
    svg: ShapeHero1,
  },
}

const cardsNumber = {
  heading: 'Our Strategy',
  cards: [
    {
      heading: 'Pharetra convallis posuere morbi leo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat. Eleifend mi in nulla posuere sollicitudin. Eu turpis egestas pretium aenean.',
      number: '01',
    },
    {
      heading: 'Pharetra convallis posuere morbi leo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat. Eleifend mi in nulla posuere sollicitudin. Eu turpis egestas pretium aenean.',
      number: '02',
    },
    {
      heading: 'Pharetra convallis posuere morbi leo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat. Eleifend mi in nulla posuere sollicitudin. Eu turpis egestas pretium aenean.',
      number: '03',
    },
  ]
}

const imageTextLeft = {
  heading: 'Leadership',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  buttonText: 'Meet the team',
  buttonLink: 'leadership-team',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Description of image',
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
      color: 'c-blue',
    },
    {
      country: 'Netherlands',
      flag: 'https://static.jackbarham.com/ampyr/flag-nl.png',
      mw: '1,890',
      projects: '68',
      devopment: '1,782',
      construction: '108',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      color: 'c-orange',
    },
    {
      country: 'Germany',
      flag: 'https://static.jackbarham.com/ampyr/flag-de.png',
      mw: '3,871',
      projects: '147',
      devopment: '3,856',
      construction: '15',
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      color: 'c-purple',
    },
  ]
}

const gridLong = {
  heading: 'Our values',
  items: [
    {
      heading: 'We are sustainable together',
      text: 'Together, we achieve sustainable success by dedicating ourselves to clean energy, emissions reduction, power resilience, and community-centred solar solutions.',
      image: 'https://static.jackbarham.com/ampyr/grid-shape-1.png',
    },
    {
      heading: 'We are positively holistic',
      text: 'We provide unique, end-to-end solar solutions integrating development, management, and optimisation, offering a seamless experience, understanding global responsibilities.',
      image: 'https://static.jackbarham.com/ampyr/grid-shape-2.png',
    },
    {
      heading: 'We put people first',
      text: 'We prioritise strong ties with landowners, municipalities, and customers, putting their needs first, knowing community trust is vital for mission success.',
      image: 'https://static.jackbarham.com/ampyr/grid-shape-3.png',
    },
    {
      heading: 'We are ever reliable',
      text: 'We consistently fulfil promises to colleagues, partners, and communities, building trust and enduring partnerships through open communication and unwavering honesty.',
      image: 'https://static.jackbarham.com/ampyr/grid-shape-4.png',
    },
    {
      heading: 'We bring expertise',
      text: 'Our extensive history in renewables and supply network enables us to offer unmatched industry knowledge, tools, and experience, elevating ambition and value for all partners.',
      image: 'https://static.jackbarham.com/ampyr/grid-shape-5.png',
    },
  ]
}

const imageTextMiddle = {
  brow: 'About us',
  text: 'Our vision is to become a leading European independent solar power producer, dedicated to helping communities and companies achieve their sustainability objectives by providing them with clean solar energy.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Image description',
  button: {
    text: 'Our company',
    link: 'ampyr-solar-europe',
  }
}
</script>