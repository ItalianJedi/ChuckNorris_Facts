<template>
  <div id="app">
    <header class="header" :style="{backgroundImage:`url(${backgroundUrl})`}">
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">Chuck Norris Facts!</span>
        </h1>
        <chuck-norris />
      </div>
    </header>
  </div>
</template>

<script>
import ChuckNorris from "./components/ChuckNorris.vue";
import backgroundUrl from "./assets/chucknorris.png";

export default {
  name: "App",
  data() {
    return {
      backgroundUrl,
    };
  },
  components: {
    ChuckNorris,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.heading-primary-main {
  font-family: "Londrina Shadow", cursive;
  font-size: 80px;
  /*color: #393c3f;*/
  color: #edf4fa;
  text-shadow: 0 0 3px black, 0 0 10px black;
  font-weight: bold;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

body {
  background: #818182;
  /*background: #4f5051;*/
  padding: 30px;
}

.header {
  height: 95vh;
  background-repeat: no-repeat;
  background-position: top;
  /*clip-path: polygon(0 0, 100% 0, 100% 87%, 0 100%);*/
}

/*Phone screens*/
@media only screen and (min-width: 320px) and (max-width: 700px) and (-webkit-min-device-pixel-ratio: 2) {
  .heading-primary-main {
    font-family: "Londrina Shadow", cursive;
    font-size: 60px;
    /*color: #393c3f;*/
    color: #edf4fa;
    font-weight: bold;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .header {
    height: 95vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    clip-path: 0, 0, 0, 0;
  }
}
</style>
