<template>
  <div> {{ $route.params.id }} </div>
</template>

<script>
import axios from 'axios'
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

            const res = await axios.get('https://api.jsonbin.io/b/5f2369acdc263a7b80b0b3a5/3', config);
            console.log(res.data)

            let dataObject = res.data;


            for (let i = 0; i < dataObject.length; i++){ 
                if (dataObject[i].confirmationCode === this.$route.params.id) {
                    this.reservation = dataObject[i];
                    console.log("WE OUT HERE! ", dataObject[i].city )
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