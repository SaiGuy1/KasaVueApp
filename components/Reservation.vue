<template>
  <div class="reservation">
    <b-card
      bg-variant="light"
      text-variant="dark"
      title="Your Reservation"
    >
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
</template>;

<script>
export default {
    name: 'Reservation',
    props: ['reservation', 'id', 'picture']
}
</script>

<style>

</style>