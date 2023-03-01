<script setup>
  // import patt from './assets/ar/pattern-173941091_835664203961409_5789995235306138562_n (1)'
  import blue from './assets/ar/blue.png'
  import car from './assets/ar/car.glb'
  import nft from './assets/ar/nft.fset3'
</script>

<template>
<!--  <a-scene embedded arjs>-->
<!--&lt;!&ndash;    <a-marker type='pattern' :url='patt'>&ndash;&gt;-->
<!--&lt;!&ndash;    <a-assets>&ndash;&gt;-->
<!--&lt;!&ndash;      <a-asset-item id="CesiumMan" src="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/kalwalt/kalwalt-interactivity-AR/master/resources/models/CesiumMan/glTF/CesiumMan.gltf"></a-asset-item>&ndash;&gt;-->
<!--&lt;!&ndash;    </a-assets>&ndash;&gt;-->
<!--    <a-marker preset="hiro">-->
<!--      <a-image :src="blue"-->
<!--               position= "0 1 0"-->
<!--               scale= "1 1 1"-->
<!--               rotation="0 2 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 7000"-->
<!--      />-->
<!--      <a-entity gltf-model="#CesiumMan"-->
<!--                animation-mixer-->
<!--                position="0 0 0"-->
<!--                scale="1 1 1"-->
<!--                rotation="0 -90 0"-->
<!--      ></a-entity>-->
<!--    </a-marker>-->
<!--    <a-entity camera></a-entity>-->
<!--  </a-scene>-->


  <div class="arjs-loader">
    <div>Loading...</div>
  </div>
  <a-scene
      vr-mode-ui="enabled: false;"
      renderer='antialias: true; alpha: true; precision: mediump;'
      embedded arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'
  >
    <a-assets>
      <!-- <a-asset-item id="model" src="../resources/sample-entity.glb"></a-asset-item> -->
      <a-asset-item id="model" :src="car"></a-asset-item>
      <img id="tex-image" :src="blue">
    </a-assets>

    <!-- <a-nft
        samplehandler
        type='nft' url="../resources/ramen-1000px"
        smooth="true" smoothCount="10" smoothTolerance="0.01" smoothThreshold="5"
    > -->
    <a-nft
        samplehandler
        type='nft' :url="nft"
        smooth="true"
        smoothCount="10"
        smoothTolerance="0.01"
        smoothThreshold="5"
    >
      <!-- <a-entity modify-materials gltf-model="#model" material="src:#tex-image" play-all-model-animations="" position="0 0 0" rotation="0 0 0" scale="100 100 100" visible="true">
      </a-entity> -->
      <a-entity modify-materials gltf-model="#model" play-all-model-animations="" position="0 500 0" rotation="-90 0 0" scale="50 50 50" visible="true">
      </a-entity>
    </a-nft>
    <a-entity camera></a-entity>
  </a-scene>
</template>

<style lang="scss">
</style>
