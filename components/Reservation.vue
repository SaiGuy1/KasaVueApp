<template>
  <nuxt-link :to="'reservations/' + id">
  <div class="reservation">
    <b-card
      bg-variant="light"
      text-variant="dark"
    >
    <h2> Your Reservation in {{ reservation }} </h2>
    <b-row>
      <b-col md="6">
        <b-card-img :src= "picture" v-bind:alt="picture"></b-card-img>
      </b-col>
      <b-col md="6">
      <b-card-text>
        <p>Reservation City: {{ reservation }}</p>
        <p>Confirmation Code: {{ id }}</p>
      </b-card-text>
      </b-col>
    </b-row>
    </b-card>
  </div>
  </nuxt-link>
</template>;

<script>
export default {
    name: 'Reservation',
    props: ['reservation', 'id', 'picture']
}
</script>

<style>

</style>