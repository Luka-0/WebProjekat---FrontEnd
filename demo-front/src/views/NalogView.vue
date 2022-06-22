<template>
  <header-comp></header-comp>  
    <div class="container">
        <div class="row">
          <div class="col s8">
            <h1 class="left-align">Pregled ličnih informacija</h1>
            <p>Korisnicko ime: {{ulogovaniKorisnik.ime}}</p>
            <p>Ime: {{ulogovaniKorisnik.ime}}</p>
            <p>Prezime: {{ulogovaniKorisnik.Prezime}}</p>


            <!-- <table class="striped">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table> -->
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
export default {
    name: "nalog",
    components:{
    HeaderComp,
    FooterComp
  },

    data: function(){
      return{
        ulogovaniKorisnik: {},
      };
    },

    mounted: function () {
      fetch("http://localhost:8081/api/pregled-licni-podaci", {
        method: "GET",
        credentials: 'include',
        // mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:8081'
        },

      })
        .then((response) => response.json)
        .then((data) => {
          console.log("Success : " + data);
          // this.$router.push("/employees");
        })
        .catch((err) => {
          console.log("Error : " + err);
          alert(err);
        });
      

  },

}
</script>

<style scoped>
  
</style>