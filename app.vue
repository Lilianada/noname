<template>
  <div>
    <div :class="['navbar', $route.path === '/' ? 'gradient-bg' : 'bg-transparent', 'fixed w-full z-50']">
      <div class="flex-1">
        <a href="/">
          <img class="h-20 w-auto sm:h-24" src="~/assets/Logo-gradient_no-bg.png" alt="Logo">
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a :class="$route.path === '/' ? 'text-white' : ''" href="/blog">Blog</a></li>
          <li tabindex="0">
            <a :class="$route.path === '/' ? 'text-white' : ''">
              Parent
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
              </svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a :class="$route.path === '/' ? 'text-white' : ''">Item 3</a></li>
        </ul>
      </div>
    </div>

    <main class="pt-24">
      <NuxtPage />
    </main>

    <footer>
      <!-- footer content goes here -->
    </footer>
  </div>
</template>

<style scoped>
.gradient-bg {
  background: linear-gradient(180deg,#000,transparent);
  position: absolute;
}
</style>
