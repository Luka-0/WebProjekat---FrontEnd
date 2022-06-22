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
                    <td>Ažuriranhe ličnih podataka</td>
                </tr>
                <tr>
                    <td>Jonathan</td>
                </tr>
            </tbody>
        </table>
</template>

<script>
export default {
    name:'OpcijeView',
    methods: {
    pregledLicnihPodataka: function () {
      this.$router.push("/pregled-licnih-podataka");
    },

    seeNalog: function () {
      this.$router.push("/nalog");
    },
  },
}
</script>

<style scoped>

</style>
