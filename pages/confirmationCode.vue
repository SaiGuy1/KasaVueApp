<template>
  <div>
      <h1>this is the detailed view of given reservation</h1>
      <Reservation v-for="reservation in reservations" :key="reservation.confirmationCode"
      :id="reservation.confirmationCode" :reservation="reservation.city" :picture="reservation.cityImage"/>
  </div>
</template>

<script>
import axios from "axios";
import Reservation from '../components/Reservation'

export default {
    components: {
        Reservation
    },
    data() {
        return {
            reservations: []
        }
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
            this.reservations = res.data;
         } catch (err) {
            console.log(err)
         }
    }

}
</script>

<style>

</style>