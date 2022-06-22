<template>
  <header-comp></header-comp>  
    <div class="container">
        <div class="row">
          <div class="col s8">
            <h1 class="left-align">Nalog</h1>
            <div class="divider"></div>
            <p class="left-align fontsize1_25em">Dobrodošli <b>{{ulogovaniKorisnik.korisnickoIme}}</b>!</p>
          </div>

          <div class="col s4">
            <opcije-comp></opcije-comp>
          </div>

          
        </div>
    </div>










  
    <p>ddddddd</p><br>
    <p>ddddddd</p><br>

    <p>ddddddd</p><br>
    <p>ddddddd</p><br>

    <p>ddddddd</p><br>
    <p>ddddddd</p><br>
    <p>ddddddd</p><br>
    <p>ddddddd</p><br>
    <p>ddddddd</p><br>
    <p>ddddddd</p><br>

    <p>ddddddd</p><br>
    <p>ddddddd</p><br>
    <p>ddddddd</p><br>
  <footer-comp></footer-comp>
</template>

<script>
import FooterComp from '../components/FooterComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
import OpcijeComp from '../components/OpcijeComp.vue'
export default {
    name: "nalog",
    components:{
    HeaderComp,
    FooterComp,
    OpcijeComp,
  },

    data: function(){
      return{
        ulogovaniKorisnik: {},
      };
    },

    mounted: function () {
      fetch('http://localhost:8081/api/pregled-licni-podaci/', {
        credentials: 'include'
      })
        .then(response => response.json())
        .then(data => {console.log("Success:", data); this.ulogovaniKorisnik = data})
        .catch((error) => {
          console.error("Error:", error);
        });
      

  },

  methods: {

  },

}
</script>

<style scoped>
  
</style>