<template>
        <h1 class="left-align">Opcije</h1>
        <div class="divider"></div>
            <table class="highlight">
            <tbody>
                <tr>
                    <td v-on:click="seeNalog()">Nalog</td>
                </tr>
                <tr>
                    <td v-on:click="pregledLicnihPodataka()">  Pregled ličnih podataka </td>
                </tr>
                <tr>
                    <td v-on:click="azuriranjeLicnihPodataka()">Ažuriranhe ličnih podataka</td>
                </tr>
                <tr>
                    <td v-on:click="pregledSvihKorisnika()" v-if = "uloga === 'ADMIN' ">Pregled svih korisnika</td>
                </tr>
            </tbody>
        </table>
</template>

<script>
export default {
    name:'OpcijeView',
    data: function(){
      return{
        ulogovaniKorisnik: {},
      };
    },
    props: ["uloga"],

    methods: {
  //     mounted: function () {
  //     fetch('http://localhost:8081/api/pregled-licni-podaci/', {
  //       credentials: 'include'
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         // console.log("Restoran : ", data.restoran.naziv)
  //         console.log("Success:", data); this.ulogovaniKorisnik = data
        
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
      
  // },
    pregledLicnihPodataka: function () {
      this.$router.push("/pregled-licnih-podataka");
    },

    seeNalog: function () {
      this.$router.push("/nalog");
    },

    azuriranjeLicnihPodataka: function () {
      this.$router.push("/azuriranje-licnih-podataka");
    },

    pregledSvihKorisnika: function () {
      this.$router.push("/pregled-svih-korisnika");
    },
    
  },
}
</script>

<style scoped>

</style>
