<template>
  <HeroFull :content="heroFull" />
  <CardsLarge :content="cardsLarge" />
  <CardsNumber :content="cardsNumber" />
  <ImageHalf :content="caseStudy" />
  <ContactForm :content="contactForm" />
  <ImageTextMiddle :content="imageTextMiddle" />
  <GridLong :content="gridLong" />
  <ImageLargeSlider :content="imageLargeSlider" />
  <CardsGrid />
  <VideoFull />
  <FeaturedSlider />
  <Testimonial />
  <ImageFullCurve />
  <GridFeed />
  <Statistics :content="statistics" />
  <CardsIcon />
  <GridText />
  <PeopleGrid />
  <CardsLocation />
  <Numbers />
  <PeopleSlider />
  <ImageTextLeft :content="imageTextLeft" />
  <CardsArticle />
</template>

<script setup>
const { setMenuClass } = useMenuClass()

const heroFull = {
  heading: 'All Components',
  text: 'Temporary page! A list all components. Some component updates, images and text are in development.',
}

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

const contactForm = {
  heading: 'If you wish to contact us, please fill in the form below.',
  theme: 'white',
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

const imageTextMiddle = {
  text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Image description',
  button: {
    text: 'Button not linked',
    link: '#',
  }
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

const imageTextLeft = {
  heading: 'Our Commitment To Sustainability',
  text: 'We develop land for ground-mounted PV installations in a holistic way, taking into account the needs of each particular region to ensure sustainable power generation. For local communities and regions, we strive to help accelerate their journey to zero-carbon.',
  buttonText: 'Find out more',
  buttonLink: 'sustainability',
  image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  alt: 'Description of image',
}


onMounted(() => {
  setMenuClass('menu-light')
})
</script>