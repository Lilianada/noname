<template>
  <div class="mx-auto max-w-7xl text-center py-4">
    <h1 class="text-3xl font-bold">Top Stories</h1>
  </div>
  <div class="grid grid-cols-3 gap-4 justify-center mx-auto max-w-7xl p-12">
    <div v-for="(post, index) in posts.slice(0, 6)" :key="post.id"
      :style="index % 3 === 0 ? `background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${getFeaturedImageUrl(post)}') no-repeat center center / cover;` : ''"
      class="card bordered bg-base-100 shadow-md rounded-md overflow-hidden">
      <div class="h-48">
        <img v-if="index % 3 !== 0" :src="getFeaturedImageUrl(post)" alt="Featured Image"
          class="w-full object-cover h-48 rounded-t-md hover:scale-105 transform-gpu transition-transform duration-300 ease-in-out">
      </div>
      <div class="card-body flex flex-col justify-between p-4">
        <h2 :class="index % 3 === 0 ? 'text-xl font-bold mb-2 text-white' : 'text-xl font-bold mb-2'">{{ post.attributes.title }}</h2>
        <div v-if="index % 3 !== 0"
          class="text-sm font-semibold text-left mt-4">
          {{ 'By ' + post.attributes.author.data.attributes.username }}</div>
        <!-- Hashtags as badges -->
        <div class="card-actions justify-start mb-4">
          <div v-for="hashtag in post.attributes.hashtags.split(',')" :key="hashtag" class="badge badge-outline">{{ '#' +
            hashtag.trim().toUpperCase() }}</div>
        </div>
      </div>
    </div>
    <!-- Add more placeholder cards -->
    <div v-for="index in (6 - posts.length)" :key="index"
      class="card bordered bg-base-100 p-4 shadow-md rounded-md opacity-50 overflow-hidden">
      <img src="https://via.placeholder.com/150" alt="Placeholder Image"
        class="w-full object-cover h-48 mb-4 rounded-t-md hover:scale-105 transform-gpu transition-transform duration-300 ease-in-out">
      <div class="card-body flex flex-col justify-between p-4">
        <h2 class="text-xl font-bold mb-2">Lorem Ipsum</h2>
        <div class="text-sm font-semibold text-left mt-4">By Author</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const API_URL = import.meta.env.VITE_API_URL || 'https://islandhopperco.com/api'

const posts = ref([])

onMounted(async () => {
  try {
    const response = await fetch(`${API_URL}/articles?populate=featured_image,author`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    posts.value = data.data || []
  } catch (error) {
    console.error('Failed to fetch posts', error)
  }
})

// Function to get the featured image URL from the post
const getFeaturedImageUrl = (post) => {
  const featuredImage = post.attributes.featured_image

  if (featuredImage) {
    const url = featuredImage.data.attributes.url
    return `https://islandhopperco.com${url}`
  }

  return ''
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card-actions {
  justify-content: flex-start;
}
</style>
