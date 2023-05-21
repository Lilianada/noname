<template>
  <div>
    <header>
      <nav class="p-6 bg-blue-500 text-white">
        <div class="flex items-center justify-between">
          <a href="/" class="text-xl font-bold">Logo</a>
          <div>
            <nuxt-link to="/blog" class="text-white">Blog</nuxt-link>
          </div>
        </div>
      </nav>
    </header>
    
    <main>
      <View />
    </main>
    
    <footer>
      <!-- footer content goes here -->
    </footer>
  </div>
</template>
