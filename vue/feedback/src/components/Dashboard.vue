<template>
  <div class="vue-weather">
    <h1>Weather</h1>
    <md-field>
      <label>Search city</label>
      <md-input v-model="selectedCity"></md-input>
    </md-field>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {},
  data() {
    return {
      api_key: "81def5aa7e0e4176a9b74756233001",
      selectedCity: "",
      weatherData: null
    };
  },
  watch: {
    selectedCity: async function () {
      if (this.selectedCity.length > 2) {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${this.api_key}&q=${this.selectedCity}`
        );
        const data = await response.json();
        this.weatherData = {
          current: data.current,
          location: data.location
        }
        console.log(this.weatherData);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
