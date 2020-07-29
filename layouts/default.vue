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

</style>
