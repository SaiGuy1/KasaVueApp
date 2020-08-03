<template>
    <div>
      
      <b-form-input list="input-list" id="input-with-list"></b-form-input>
      <nuxt-link :to="'reservations/' + id">
      <b-form-datalist id="input-list" :options="options"></b-form-datalist>
      </nuxt-link>
      <b-button class="mt-3" block variant="primary">Find Reservation</b-button>
      

     <b-list-group>
        <b-list-group-item href="#" active class="flex-column align-items-start">

         <p class="mb-1">
            <b> Location </b> <br> {{ reservation }}
         </p>

         <small>Donec id elit non mi porta.</small>
        </b-list-group-item>
    </b-list-group>
    </div>
</template>

<script>
import axios from "axios";
export default {  
  name: 'ReservationFinder',
  props: ['reservation', 'id'],
  data() {
      return {
        options: []
      }
  },
  methods: {
      
  },

  async created() {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
    

         try {
            const res = await axios.get('https://api.jsonbin.io/b/5f2369acdc263a7b80b0b3a5/4', config);
            console.log(res.data)
            for (let i = 0; i < res.data.length; i++){
                this.options.push("#" + res.data[i].confirmationCode + ' '  + res.data[i].city)
                  
            }
         } catch (err) {
            console.log(err)
         }
  }
}

</script>

<style>

</style>