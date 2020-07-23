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
      backgroundUrl
    };
  },
  components: {
    ChuckNorris
  }
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
  color: #393c3f;
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
  background-image: linear-gradient(
    to right bottom,
    rgba(110, 179, 239, 0.795),
    rgba(43, 104, 158, 0.808)
  );
  background-repeat: no-repeat;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 87%, 0 100%);
}
</style>
