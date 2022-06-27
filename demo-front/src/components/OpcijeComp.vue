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
                    <td v-on:click="dodavanjeNovogMenadzera()" v-if = "uloga === 'ADMIN' ">Dodaj novog menadžera</td>
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

    dodavanjeNovogMenadzera: function () {
      this.$router.push("/novi-menadzer");
    },

    
    
  },
}
</script>

<style scoped>

</style>
