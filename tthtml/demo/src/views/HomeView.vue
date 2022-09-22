<template>
  <div class="home">
  <h4>天天</h4>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created(){
    axios({url:process.env.VUE_APP_BASE_V1}).then(res=>{
      console.log(res);
    }),
     axios({url:process.env.VUE_APP_BASE_V2}).then(res=>{
      console.log(res);
    })
  }
}
</script>
