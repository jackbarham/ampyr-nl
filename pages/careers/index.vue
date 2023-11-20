<template>
  <HeroPage :content="hero" />
  <ImageTextLeft :content="imageLarge" />
  <GridLong :content="values" />
  <CardsGrid />
  <CardsArticle />
</template>

<script setup>
const { setMenuClass } = useMenuClass()
import HeroSvg1 from '~/assets/icons/hero-svg-1.svg'

const hero = {
  heading: 'Join Us',
  intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttonText: 'Button not linked',
  buttonLink: '#',
  shapes: {
    type: 1,
    img1: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img2: 'https://static.jackbarham.com/ampyr/hero.jpg',
    img3: 'https://static.jackbarham.com/ampyr/hero.jpg',
    svg: HeroSvg1,
  },
}

const imageLarge = {
  heading: 'Experience Our Inspiring Company Culture',
  text: 'At AMPYR Solar Europe, our people are the heartbeat of our success. We are a team that values collaboration, innovation, and continuous growth. We embrace diversity, encourage open communication, and empower every employee to be their best self. Our commitment to work-life balance, professional development, and a positive, inclusive atmosphere creates an environment where you can thrive. Join us to be part of a company culture that celebrates your individuality and champions your success.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Description of image',
}

const values = {
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

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>