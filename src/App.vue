<script setup>
  import patt from './assets/ar/pattern-173941091_835664203961409_5789995235306138562_n (1).patt'
  import blue from './assets/ar/blue.png'
</script>

<template>
  <a-scene embedded arjs>
    <a-marker type='pattern' :url='patt'>
      <a-image :src="blue"
               position= "0 1 0"
               scale= "1 1 1"
               rotation="0 2 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 7000"
      />
    </a-marker>
<!--    <a-marker type='pattern' url='pattern-174125789_594070895323093_37739543886445794_n.patt'>-->
<!--      <a-image src="klipartz.com.png"-->
<!--               position= "0 1 0"-->
<!--               scale= "1.5 1.5 1.5"-->
<!--               rotation="3 3 3" animation="property: rotation; to: 0 360 0; loop: true; dur: 7000"-->
<!--      />-->
<!--    </a-marker>-->
<!--    <a-marker type='pattern' url='yellowboots.patt'>-->
<!--      <a-image src="duck.png"-->
<!--               position= "0 1 0"-->
<!--               scale= "1 1 1"-->
<!--               rotation="3 3 3 " animation="property: rotation; to: 0 360 0; loop: true; dur: 7000"-->
<!--      />-->
<!--    </a-marker>-->
<!--    <a-marker type='pattern' url='pattern-174280781_2056937117782010_3230409652489401640_n.patt'>-->
<!--      <a-image src="greendino.png"-->
<!--               position= "0 1 0"-->
<!--               scale= "1 1 1"-->
<!--               rotation="3 3 3" animation="property: rotation; to: 0 360 0; loop: true; dur: 7000"-->
<!--      />-->
<!--    </a-marker>-->
<!--    <a-marker type='pattern' url='pattern-174368396_460947292023688_6554398429483939075_n.patt'>-->
<!--      <a-image src="krab.png"-->
<!--               position= "0 1 0"-->
<!--               scale= "1 1 1"-->
<!--               rotation="2 2 2" animation="property: rotation; to: 0 360 0; loop: true; dur: 7000"-->
<!--      />-->
<!--    </a-marker>-->
<!--    <a-marker type='pattern' url='pattern-174324655_3838406072920098_6987965916776405029_n.patt'>-->
<!--      <a-image src="butterfly.png"-->
<!--               position= "0 1 0"-->
<!--               scale= "1 1 1"-->
<!--               rotation="3 3 3" animation="property: rotation; to: 0 360 0; loop: true; dur: 7000"-->
<!--      />-->
<!--    </a-marker>-->
    <a-entity camera></a-entity>
  </a-scene>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
