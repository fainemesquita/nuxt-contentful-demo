<template>
    <div class="container">

        <h1 class="title mt-8 mb-4">Header created on Nuxt</h1>
        <section v-for="post in posts" :key="post.fields.slug">
        <!-- <div
            class="image"
            :style="
            `background: url(https:${post.fields.heroImage.fields.file.url}) center center no-repeat`
            "
        ></div> -->
        <h3 class="title">
            <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
        </h3>
        <!-- <p class="author">By {{ post.fields.author.fields.name }}</p> -->
        <p class="description">
            {{ post.fields.description }}<br />
            <nuxt-link :to="post.fields.slug" class="more">Read more ⟶</nuxt-link>
        </p>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$store.state.posts
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('posts/getPosts', params.slug)
    },
     head: {
   title: "LEAP Canada Homepage"
 }
//  ,
//     posts() {
//      return this.$store.state.posts;
//    }

}

</script>