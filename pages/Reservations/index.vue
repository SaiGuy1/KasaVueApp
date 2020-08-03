<template>
  <div>
         <b-card bg-variant="light" text-variant="dark" title="Find Your Reservation">
     <b-card-text>
      You can search by providing the city or the confirmation code of your reservation
     </b-card-text>
     <ReservationFinder />
     
   </b-card>
      <h1>Single Reservation  </h1>
      
      <Reservation v-for="reservation in reservations" :key="reservation.confirmationCode"
      :id="reservation.confirmationCode" :reservation="reservation.city" :picture="reservation.cityImage"/>
      <ReservationFinder v-for="reservation in reservations" :key="reservation.confirmationCode"
      :id="reservation.confirmationCode" :reservation="reservation.city" />
  </div>
</template>

<script>
import axios from "axios";
import Reservation from '../../components/Reservation';
import ReservationFinder from "../../components/ReservationFinder"

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
            const res = await axios.get('https://api.jsonbin.io/b/5f2369acdc263a7b80b0b3a5/4', config);
        
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