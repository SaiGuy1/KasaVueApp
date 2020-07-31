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
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
