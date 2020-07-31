<template>
  <div class="reservation">
    <b-card
      bg-variant="light"
      text-variant="dark"
      title="Your Reservation"
    >
      <b-card-text>
        <p>{{ reservation }}</p>
      </b-card-text>
    </b-card>
  </div>
</template>;

<script>
export default {
    name: 'Reservation',
    props: ['reservation', 'id']
}
</script>

<style>

</style>