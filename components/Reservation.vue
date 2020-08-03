<template>
  <nuxt-link :to="'reservations/' + id">
  <div class="reservation">
    <b-card
      bg-variant="white"
      text-variant="dark"
    >
    
    <h2> {{ reservation }} </h2>
        <p><b> Confirmation Code </b> <br> #{{ id }}</p>
    </b-card>
  </div>
  </nuxt-link>
</template>;

<script>
export default {
    name: 'Reservation',
    props: ['reservation', 'id']
}
</script>

<style>

</style>