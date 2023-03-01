<script setup>
  // import patt from './assets/ar/pattern-173941091_835664203961409_5789995235306138562_n (1)'
  import blue from './assets/ar/blue.png'
  // import car from './assets/ar/car.glb'
  import car from './assets/ar/cub.gltf'
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




    <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
      <!-- a-nft is the anchor that defines an Image Tracking entity -->
      <!-- on 'url' use the path to the Image Descriptors created before. -->
      <!-- the path should end with the name without the extension e.g. if file is trex.fset' the path should end with trex -->
      <a-nft
          type='nft'
          url="https://testenv.ro/files/nft"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5">
        <!-- as a child of the a-nft entity, you can define the content to show. here's a GLTF model entity -->
        <a-entity
            :gltf-model="car"
            scale="5 5 5"
            position="100 100 0"
        >
        </a-entity>
      </a-nft>
      <!-- static camera that moves according to the device movemenents -->
      <a-entity camera></a-entity>
    </a-scene>
</template>

<style lang="scss">
</style>
