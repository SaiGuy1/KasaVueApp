<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
  import Navigation from "../components/Nav"
  import Footer from "../components/Footer"
  export default {
    components: {
      Navigation,
      Footer
    }
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 10em;
  color: #35495e;
  letter-spacing: 1em;
}

.subtitle {
  font-weight: 300;
  font-size: 42em;
  color: #526488;
  word-spacing: 5em;
  padding-bottom: 15em;
}

.links {
  padding-top: 15em;
}
</style>
