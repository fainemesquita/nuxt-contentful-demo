<template>
    <div>
        <!-- <h1 class="site-title">
            <nuxt-link :to="{ path: '/' }" class="site-title__link">
                Nuxt Demo
            </nuxt-link>
        </h1>
        <nuxt/> -->
            <global-header />
    <Nuxt />
    <call-to-action />
    <global-footer />
    </div>
</template>

<script>
import GlobalHeader from '~/components/Header/Header.vue'
import GlobalFooter from '~/components/Footer.vue'
import CallToAction from '~/components/CallToAction.vue'

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    CallToAction
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
