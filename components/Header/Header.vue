<template>
    <header class="header" :class="{scrolled: scrollPosition > 50}">
      <div class="container container-nav">
        <nuxt-link :to="'/'" class="nav-logo image-replacement" alt="LEAP logo">LEAP Legal Software</nuxt-link>
        <transition name="fade">
        <nav class="site-nav"  v-bind:style='{"display" : (isActive ? "block" : "none" )}'>
          <!-- v-bind:class="[isActive ? 'hidden' : 'visible']" -->
          <ul class="nav-ul">
            <!-- <li><nuxt-link :to="'/'">Features</nuxt-link></li>
            <li><nuxt-link :to="'/'">Migrations</nuxt-link></li>
            <li><nuxt-link :to="'/'">Cloud Tech</nuxt-link></li> -->
            <li><a href="tel:4164342639" class="nav-list text-upper"
            @click="gtag('event', 'Header Click - Call Us', {
                        'event_category': 'Header Click - Call Us',
                        'event_label':  'Header Click - Call Us'});">Call Us<span class="font-weight-400"> 416 434 2639</span></a></li>
            <!-- <button class="btn btn-orange text-upper btn-nav">Enquire Now</button> -->
          <button class="btn btn-orange text-upper btn-nav">
            <a href="https://leaplegalsoftware.ca/contact/"
                        id="HeaderEnquireNow"
                        style="padding:0;">
                Enquire Now
            </a>
          </button>
          </ul>
        </nav>
        </transition>
        <a href="#/" class="activate-nav image-replacement">Click to open website menu</a>
        <div class="nav-icon activate-nav" v-bind:class="[isActive ? 'open' : 'closed']" @click="isActive = !isActive">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'global-header',
    data() {
      return {
          scrollPosition: null,
          isActive: false,
          open: false,
      }
    },
    methods: {
        updateScroll: function() {
            this.scrollPosition = window.scrollY;
        },
        toggleClass: function(){
          this.isActive = !this.isActive;}
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
      document.getElementById("HeaderEnquireNow").addEventListener("click", function() {
        gtag('event', 'Hader Click - Enquire Now', {
            'event_category': 'Hader Click - Enquire Now',
            'event_label': 'Hader Click - Enquire Now'
        });
      });
    }
}
</script>

<style lang="scss" scoped>
@import 'Header';

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
