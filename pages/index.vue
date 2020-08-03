<template>
  <div class="container">
   <b-card bg-variant="light" text-variant="dark" title="Find Your Reservation">
     <b-card-text>
      You can search by providing the city or the confirmation code of your reservation
     </b-card-text>
     <ReservationFinder />
     
   </b-card>
  </div>
</template>

<script>
  import ReservationFinder from "../components/ReservationFinder"

  // original check for whether service worker is supported in current browser
  if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
      .register('../sw.js')
      .then(reg => console.log('Service Worker: registered'))
      .catch(err => console.log(err))
    })
    // console.log('Service Worker Supported')
  }

  export default {}
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
  font-size: 100rem;
  color: #35495e;
  letter-spacing: 1em;
}

.subtitle {
  font-weight: 300;
  font-size: 42rem;
  color: #526488;
  word-spacing: 5em;
  padding-bottom: 15em;
}

.links {
  padding-top: 15em;
}
</style>
