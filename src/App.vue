<template>
  <div id="app">
    <BackgroundElements />
    <MarqueeSection style="position: absolute;
     top: 344px;"/>
    <div class="spikes-button-link">
      <button>
        <a target="_blank" href="http://www.spikes-challenges.fr">www.spikes.dev</a>
      </button>
    </div>
  </div>
</template>

<script>
import BackgroundElements from "./components/BackgroundElements.vue";
import MarqueeSection from "./components/MarqueeSection.vue";

export default {
  components: {
    BackgroundElements,
    MarqueeSection,
  },
};
</script>

<style src="./assets/index.css">
</style>
