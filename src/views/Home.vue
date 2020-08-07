<template>
  <div class="home">
  <div class="split left">
    <div class="centered">
      <h2>Waifus</h2>
    </div>
  </div>
  <div class="split right">
    <div class="centered">
      <h2>Husbandos</h2>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>


<style>
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Control the left side */
.left {
  left: 0;
  background-image: linear-gradient(-225deg, #FFE6FA 0%, #E3FDF5 100%);
    background-image: linear-gradient(to top, #fed6e3 0%,  #a8edea 100%);
}

/* Control the right side */
.right {
  right: 0;
      background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
}

/* If you want the content centered horizontally and vertically */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>