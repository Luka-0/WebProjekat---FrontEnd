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
                <tr>
                    <td v-on:click="pregledRestoranaMenadzera()" v-if = "uloga === 'MENADZER' ">Pregled svog restorana</td>
                </tr>
                <tr>
                    <td v-on:click="pregledPorudzbinaKupca()" v-if = "uloga === 'KUPAC' ">Pregled porudzbina kupca</td>
                </tr>
                <tr>
                    <td v-on:click="pregledPorudzbinaDostavljac()" v-if = "uloga === 'DOSTAVLJAC' ">Pregled porudzbina - dostavljac</td>
                </tr>
                <tr>
                    <td v-on:click="pregledPorudzbinaMenadzer()" v-if = "uloga === 'MENADZER' ">Pregled porudzbina - menadzer</td>
                </tr>
                <tr>
                    <td v-on:click="zapocniNarucivanje()" v-if = "uloga === 'KUPAC' ">Naručivanje</td>
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

    pregledRestoranaMenadzera: function () {
      this.$router.push("/pregled-restorana-menadzera");
    },

    pregledPorudzbinaKupca: function () {
      this.$router.push("/pregled-porudzbina-kupca");
    },

    pregledPorudzbinaDostavljac: function () {
      this.$router.push("/pregled-porudzbina-dostavljac");
    },

    pregledPorudzbinaMenadzer: function () {
      this.$router.push("/pregled-porudzbina-menadzer");
    },

    zapocniNarucivanje: function () {
      this.$router.push("/zapocni-narucivanje");
    },

    
    
  },
}
</script>

<style scoped>

</style>
