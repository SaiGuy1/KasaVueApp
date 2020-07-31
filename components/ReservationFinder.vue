<template>
    <div>
      <b-form-input list="input-list" id="input-with-list"></b-form-input>
      <b-form-datalist id="input-list" :options="options"></b-form-datalist>
    </div>
</template>

<script>
export default {  
  name: 'ReservationFinder',
  data() {
      return {
        options: ['San Francisco, CA', 'Los Angeles, CA', 'New York City, NY']
      }
  }
}
</script>

<style>

</style>