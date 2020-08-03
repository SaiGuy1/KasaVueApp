<template>
  <div> 
    <!-- {{ $route.params.id }}  -->
  <h1>Your Reservation in {{reservation.city}}</h1>
  <div class="reservation">
    <b-card
      bg-variant="white"
      text-variant="dark"
    >

    <b-row>
      <b-col md="6">
        <b-card-img :src= "reservation.cityImage" ></b-card-img>
        <p><b> Rating: </b>  {{ reservation.rating }}</p>
      </b-col>
      <b-col md="6">
      <b-card-text>
        <p><b> Location </b> <br> {{ reservation.city }}</p>
        <p><b> Dates </b> <br> {{ reservation.checkInDate }} - {{ reservation.checkOutDate }}</p>
        <p><b> Confirmation Code </b> <br> #{{ reservation.confirmationCode }}</p>
      </b-card-text>
      </b-col>
    </b-row>
    </b-card>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Reservation from '../../../components/Reservation';

export default {
  data() {
      return {
          reservation: {}
      }
  },

  async created() {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
    

         try {

             // endpoint would have a search parameter using ${this.route.params.id} if I was to use an actual API

            const res = await axios.get('https://api.jsonbin.io/b/5f2369acdc263a7b80b0b3a5/4', config);
            console.log(res.data)

            let dataObject = res.data;

            console.log(navigator.connection)


            for (let i = 0; i < dataObject.length; i++){ 
                if (dataObject[i].confirmationCode === this.$route.params.id) {
                    this.reservation = dataObject[i];
                    // console.log("WE OUT HERE! ", dataObject[i].city)
                }
            }

         } catch (err) {
            console.log(err)
         }
  }
}
</script>

<style>

</style>