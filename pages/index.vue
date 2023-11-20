<template>
  <HeroFull />
  <CardsLarge :content="cardsLarge" />
  <Statistics :content="statistics" />
  <ImageTextLeft :content="sustainability" />
  <ImageHalf :content="caseStudy" />
  <ImageTextLeft :content="leadership" />
  <CardsArticle />
</template>

<script setup>
const { setMenuClass } = useMenuClass()

const cardsLarge = {
  cards: [
    {
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      heading: 'For Landowners',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/landowners',
    },
    {
      image: 'https://static.jackbarham.com/ampyr/hero.jpg',
      heading: 'For Municipalities',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/municipalities',
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

const sustainability = {
  heading: 'Our Commitment To Sustainability',
  text: 'We develop land for ground-mounted PV installations in a holistic way, taking into account the needs of each particular region to ensure sustainable power generation. For local communities and regions, we strive to help accelerate their journey to zero-carbon.',
  buttonText: 'Find out more',
  buttonLink: 'sustainability',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Description of image',
}

const caseStudy = {
  category: 'Category name',
  heading: 'Case Study Name',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  button: {
    text: 'Read the case study',
    link: '/portfolio/case-study-name',
  }
}

const leadership = {
  heading: 'Leadership',
  text: 'Add some brief information about the leadership team here. Recommended max characters: 260.',
  buttonText: 'Meet the team',
  buttonLink: 'leadership-team',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Description of image',
}

onMounted(() => {
  setMenuClass('menu-light')
})
</script>