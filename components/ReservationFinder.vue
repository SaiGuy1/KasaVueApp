<template>
    <div>
      <b-form-input list="input-list" id="input-with-list"></b-form-input>
      <b-form-datalist id="input-list" :options="options"></b-form-datalist>
      <b-button class="mt-3" block variant="primary">Find Reservation</b-button>
    </div>
</template>

<script>
import axios from "axios";
export default {  
  name: 'ReservationFinder',
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
            const res = await axios.get('https://api.jsonbin.io/b/5f2369acdc263a7b80b0b3a5/3', config);
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