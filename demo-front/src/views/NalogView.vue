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
            <opcije-comp :uloga="ulogovaniKorisnik.uloga"></opcije-comp>
          </div>

          
        </div>
    </div>






    <div class="row">
      <div class="col s4">
          
    </div>

    <div class="col s4">
          <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator card_image" src="@/assets/female_avatar.jpg" alt="TEKS">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4 margin_left_9">Card Title<i class="material-icons right">more_vert</i></span>
              <p><a href="#">This is a link</a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
              </div>
    </div>
    </div>

    <div class="row">

        <div class="col s4">



            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator card_image" src="@/assets/male_avatar.jpg" alt="TEKS">
              </div>

              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4 margin_left_9">Card Title<i class="material-icons right">more_vert</i></span>
                <p><i>This is a link</i></p>
              </div>

              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                 <table class="striped">
              <tbody>
                <tr>
                  <td><b>Korisničko ime:</b></td>
                  <td>{{ulogovaniKorisnik.korisnickoIme}}</td>
                </tr>
                <tr>
                  <td><b>Ime:</b></td>
                  <td>{{ulogovaniKorisnik.ime}}</td>
                </tr>
                
              </tbody>
            </table>
              </div>
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