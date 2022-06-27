<template>
  <header-comp></header-comp>  
    <div class="container">
        <div class="row">
          <div class="col s8">
            <h1 class="left-align">Pronađi restoran</h1>
            <div class="divider"></div>
            <p class="left-align fontsize1_25em">Ulogovani korisnik : <b>{{ulogovaniKorisnik.korisnickoIme}}</b></p>
            <p class="left-align fontsize1_25em">Uloga: <b>{{ulogovaniKorisnik.uloga}}</b></p>
            
            <h6>Pretraga</h6>
            <input type="text" placeholder="Naziv..."  v-model="searchObj.naziv" />
            <input type="text" placeholder="Tip restorana..." v-model="searchObj.tipRestorana">
            <input type="text" placeholder="Adersa..." v-model="searchObj.adresaLokacije">
            
            <a class="waves-effect waves-light btn" v-on:click="pretraga()">Pretrazi</a>
            
            <ul class="collapsible">
                <li v-for="restoran in restorani" :key="restoran.id">
                    <div class="collapsible-header"><i class="material-icons">restaurant</i>{{restoran.naziv}}</div>
                    <div class="collapsible-body">
                        <span><i class="material-icons">location_on</i>{{restoran.adresaLokacije}}</span><br>
                        <span><i class="material-icons">restaurant</i>{{restoran.tipRestorana}}</span><br>
                    </div>
                </li>
            </ul>

          </div>

          <div class="col s4">
            <opcije-comp :uloga="ulogovaniKorisnik.uloga"></opcije-comp>
          </div>
        </div>
    </div>
  <footer-comp></footer-comp>
</template>

<script>
import FooterComp from '../components/FooterComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
import OpcijeComp from '../components/OpcijeComp.vue'
export default {
    name: "RestoraniView",
    components:{
    HeaderComp,
    FooterComp,
    OpcijeComp,
  },
    data: function(){
      return{
        ulogovaniKorisnik:{
            restoran:{},
        },

        searchObj:{
            naziv:"",
            tipRestorana:"",
            adresaLokacije:"", 
        },

        restorani: [],
        
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
      
  },
   methods: {
    
    pretraga: function () {
      
       fetch("http://localhost:8081/api/pretraga", {
        method: "GET",
        credentials: 'include',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.searchObj),
      })
        .then((response) => response.json)
        .then((data) => {
           console.log("Success:", data); this.restorani = data
          //this.$router.push("/restorani-pretraga");
        })
        .catch((err) => {
          console.log("Error : " + err);
          alert(err);
        });
    },
  },
}
</script>

<style scoped>
</style>