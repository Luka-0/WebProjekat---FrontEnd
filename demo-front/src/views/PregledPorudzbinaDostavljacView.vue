<template>
  <header-comp></header-comp>  
    <div class="container">
        <div class="row">
          <div class="col s8">
            <h1 class="left-align">Pregled porudžbina - dostavljač</h1>
            <div class="divider"></div>
            <p class="left-align fontsize1_25em">Ulogovani korisnik : <b>{{ulogovaniKorisnik.korisnickoIme}}</b></p>
            <p class="left-align fontsize1_25em">Uloga: <b>{{ulogovaniKorisnik.uloga}}</b></p>
          </div>

          <div class="col s4">
            <opcije-comp :uloga="ulogovaniKorisnik.uloga"></opcije-comp>
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <porudzbina-comp
            v-for="porudzbina in porudzbineDostavljaca"
            :key="porudzbina.uuid"
            :porudzbina="porudzbina"
            :kupac=null
            :restoran=null
            >
            </porudzbina-comp>
          </div>
        </div>
    </div>
  <footer-comp></footer-comp>
</template>

<script>
import FooterComp from '../components/FooterComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
import OpcijeComp from '../components/OpcijeComp.vue'
import PorudzbinaComp from '../components/PorudzbinaComp.vue'
export default {
    name: "pregledMenadzeraRestorana",
    components:{
    HeaderComp,
    FooterComp,
    OpcijeComp,
    PorudzbinaComp,
  },

    data: function(){
      return{
        ulogovaniKorisnik:{},
        porudzbineDostavljaca: {
          stavkePorudzbine:{},
        }
      };
    },

    mounted: function () {
      fetch('http://localhost:8081/api/pregled-licni-podaci/', {
        credentials: 'include'
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data); this.ulogovaniKorisnik = data
        
        })
        .catch((error) => {
          console.error("Error:", error);
        });

        fetch('http://localhost:8081/api/dostavljac-pregled-porudzbina', {
        credentials: 'include'
      })
        .then(response => response.json())
        .then(data => {
          console.log("Porudzbine:", data); this.porudzbineDostavljaca = data
        
        })
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