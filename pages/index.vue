<template>
  <div class="container">
  <div>
      <Reservation v-for="reservation in reservations" :key="reservation.confirmationCode"
      :id="reservation.confirmationCode" :reservation="reservation.city"/>
   </div>
  </div>
</template>

<script>

import axios from "axios";
import Reservation from '../components/Reservation'

  // original check for whether service worker is supported in current browser
  if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
      .register('../sw.js')
      .then(reg => console.log('Service Worker: registered'))
      .catch(err => console.log(err))
    })
    // console.log('Service Worker Supported')
  }

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
.container {
  margin: 0 auto;
  margin-top: 10vh;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100rem;
  color: #35495e;
  letter-spacing: 1em;
}

.subtitle {
  font-weight: 300;
  font-size: 42rem;
  color: #526488;
  word-spacing: 5em;
  padding-bottom: 15em;
}

.links {
  padding-top: 15em;
}
</style>
