<template>
    <section class="pt-4 pb-4" style="background-color: #1E365E">
      <div class="container text-center text-white">
        <h2 class="text-white mb-3">LEAP is everything you need to run a law firm</h2>
        <button class="btn btn-orange text-upper">
            <nuxt-link :to="'/contact'" id="CTAEnquireNow">
                Enquire now
            </nuxt-link>
        </button>
      </div>
    </section>
</template>

<script>
export default {
    mounted() {
        document.getElementById("CTAEnquireNow").addEventListener("click", function() {
            gtag('event', 'CTA Click - Enquire Now', {
                'event_category': 'CTA Click - Enquire Now',
                'event_label': 'CTA Click - Enquire Now'
            });
        });
    }
}
</script>