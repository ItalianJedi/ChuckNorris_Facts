<template>
  <div>
    <div class="wrapper">
      <button v-on:click="norrisJoke()">Click Me</button>
    </div>
    <spinner v-if="showSpinner"></spinner>
    <div class="joke" v-if="currentJoke" v-html="currentJoke.joke">{{currentJoke.joke}}</div>
  </div>
</template>

<script>
import axios from "axios";
import CubeSpinner from "@/components/CubeSpinner";

export default {
  name: "ChuckNorris",
  components: {
    spinner: CubeSpinner,
  },
  data() {
    return {
      currentJoke: null,
      showSpinner: false,
    };
  },
  methods: {
    norrisJoke() {
      this.showSpinner = true;
      axios.get("https://api.icndb.com/jokes/random").then((response) => {
        this.showSpinner = false;
        this.currentJoke = response.data.value;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* eslint-disable */
.wrapper {
  padding-top: 400px;
  text-align: center;
}

button {
  position: relative;
  top: 45%;
  font-family: "Londrina Shadow", cursive;
  font-weight: bold;
  opacity: 0.9;
  /*background-color: #393c3f;*/
  background-color: #edf4fa;
  border: ridge gray;
  border: none;
  color: black;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
}

.joke {
  font-size: 15px;
  font-weight: bold;
  border: ridge gray;
  width: 350px;
  padding: 10px;
  margin: 60px;
  margin-top: 95px;
  margin-left: auto;
  margin-right: auto;
  background: #edf4fa;
}

/*Phone screens*/
@media only screen and (min-width: 320px) and (max-width: 700px) and (-webkit-min-device-pixel-ratio: 2) {
  .joke {
    font-size: 10px;
    font-weight: bold;
    border: ridge gray;
    width: 250px;
    padding: 10px;
    margin: 35px;
    margin-top: 35px;
    margin-left: auto;
    margin-right: auto;
    background: #edf4fa;
  }
  button {
    position: relative;
    top: 45%;
    font-family: "Londrina Shadow", cursive;
    font-weight: bold;
    opacity: 0.9;
    /*background-color: #393c3f;*/
    background: #edf4fa;
    border: ridge gray;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
}

/*Tablet Screens*/
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  button {
    margin-top: 500px;
  }
  .joke {
    font-size: 10px;
    font-weight: bold;
    border: ridge gray;
    width: 250px;
    padding: 10px;
    margin: 90px;
    margin-top: 95px;
    margin-left: auto;
    margin-right: auto;
    background: #edf4fa;
  }
}
</style>
