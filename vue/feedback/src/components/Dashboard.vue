<template>
  <div class="vue-weather">
    <h1>Vue Weather</h1>
    <div>
      <md-field>
        <label>Select City</label>
        <md-select v-model="selectedCity">
          <md-option v-for="city in cities" :key="city" :value="city">{{
            city
          }}</md-option>
        </md-select>
      </md-field>
      <button id="vue-search-button" @click="getWeatherData()">search</button>
    </div>
  </div>
</template>

<script>
import { MessageBus } from '@podium/browser';
export default {
  name: "Dashboard",
  props: {},
  data() {
    return {
      api_key: "81def5aa7e0e4176a9b74756233001",
      selectedCity: "",
      cities: [
        "Amsterdam",
        "Andorra la Vella",
        "Athens",
        "Baku",
        "Belgrade",
        "Berlin",
        "Bern",
        "Bratislava",
        "Brussels",
        "Bucharest",
        "Budapest",
        "Chisinau",
        "Copenhagen",
        "Dublin",
        "Helsinki",
        "Kiev",
        "Lisbon",
        "Ljubljana",
        "London",
        "Luxembourg",
        "Madrid",
        "Minsk",
        "Monaco",
        "Moscow",
        "Nicosia",
        "Oslo",
        "Paris",
        "Podgorica",
        "Prague",
        "Pristina",
        "Reykjavik",
        "Riga",
        "Rome",
        "San Marino",
        "Sarajevo",
        "Skopje",
        "Sofia",
        "Stockholm",
        "Tallinn",
        "Tirana",
        "Vaduz",
        "Valletta",
        "Vatican City",
        "Vienna",
        "Vilnius",
        "Warsaw",
        "Zagreb",
        "Zurich",
      ],
    };
  },
  methods: {
    getWeatherData() {
      if (this.selectedCity === "") {
        alert("Please select a city");
        return;
      }
      const messageBus = new MessageBus();
      messageBus.publish('city-data', 'city', this.selectedCity);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-weather {
  width: 100%;
  height: 100%;
  padding: 5%;
  border: 1px solid #4caf50;
}

#vue-search-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  border-radius: 5px;
}

#vue-search-button:hover {
  background-color: #3e8e41;
  transition: 0.5s;
}
</style>
