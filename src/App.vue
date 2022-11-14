<template>
  <div class="app">
    <progress max="100" value="0"></progress>
    <div class="header">
      <div class="header_left"></div>
      <div class="header_right">
        <a id="project" class="header_btn mask" @mouseover="startProject('project')">PROJECT</a>
        <div id="keep" class="header_btn" @mouseover="startKeep('keep')">THE KEEP</div>
        <div id="factions" class="header_btn" @mouseover="startFactions('factions')">FACTIONS</div>
        <div id="world" class="header_btn" @mouseover="startWorld('world')">THE WORLD</div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrambleText from "scramble-text";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

// import * as TweenMax from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js';
// import * as TweenLite from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenLite.min.js';

export default {
  name: "App",
  components: {},
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('progress', {
      value: 100,
      ease: 'none',   
      scrollTrigger: { scrub: 0.3 }
    });
  },
  data() {
    return {
      element: '',
      scrambleText: '',
    };
  },
  methods: {
    startProject() {
      this.element = document.getElementById("project");
      this.scrambleText = new ScrambleText(this.element, {
        chars: ["P", "R", "O", "J", "E", "C", "T"],
      }).play();
      this.scrambleText.start();

      // TweenLite.defaultEase = Power0.easeNone;
      // TweenMax.set(".mask", {transformOrigin:"100% 50%"});
      // TweenMax.from(".mask1", 2.2, {width:"0px",  ease:Power0.easeNone, repeat:-1, repeatDelay:2});
    },
    startKeep() {
      var element = document.getElementById("keep");
      var scrambleText = new ScrambleText(element, {
        chars: ["E", "K", "P"],
      }).play();
      scrambleText.start();
    }, 
    startFactions() {
      var element = document.getElementById("factions");
      var scrambleText = new ScrambleText(element, {
        chars: ["A", "C", "F", "N", "O", "S", "T"],
      }).play();
      scrambleText.start();
    }, 
    startWorld() {
      var element = document.getElementById("world");
      var scrambleText = new ScrambleText(element, {
        chars: ["L", "O", "R", "W"],
      }).play();
      scrambleText.start();
    }, 
  },
};
</script>

<style>
.app {
  height: 1500px;
  margin: 0px;
  padding: 0px;
}
  .header {
    display: flex;
    position: fixed;
    padding-top: 20px;
    font-family: "ABCWhyte";
    font-size: 11px;
    font-weight: 350;
    letter-spacing: normal;
  }
  .header_left {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 20px;
    height: 50px;
    border-top: 2px solid black;
    border-top-left-radius: 12px;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    width: 7vw;
  }
  .header_right {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 20px;
    height: 50px;
    border: 2px solid black;
    border-top-right-radius: 12px;
    width: 90vw;
  }
  .header_btn {
    display: grid;
    justify-content: center;
    align-content: center;
    cursor: pointer;
  }

  progress {
    position: fixed;
    top: 30px;
    left: 0;
    padding-left: calc(20px + 7vw);
    -webkit-appearance: none;
    appearance: none;
    width: 97%;
    border-top-right-radius: 12px;
    height: 50px;
    background: transparent;
  }

  .mask {
     margin: 5px;
    width:300px;
    height: 90px;
    background-color: aqua;
    overflow:hidden;
}
</style>
