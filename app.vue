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
      <div class="flex-none">
        <input type="checkbox" class="toggle toggle-warning" checked />
      </div>
    </div>

    <main class="pt-24">
      <NuxtPage />
    </main>

    <footer class="footer p-10 bg-base-200 text-base-content">
      <div>
        <img class="h-20 w-auto sm:h-24" src="~/assets/Logo-gradient_no-bg.png" alt="Logo">
        <p>Your Company Name<br/>Your company's tagline</p>
      </div> 
      <div>
        <span class="footer-title">Services</span> 
        <a class="link link-hover">Branding</a> 
        <a class="link link-hover">Design</a> 
        <a class="link link-hover">Marketing</a> 
        <a class="link link-hover">Advertisement</a>
      </div> 
      <div>
        <span class="footer-title">Company</span> 
        <a class="link link-hover">About us</a> 
        <a class="link link-hover">Contact</a> 
        <a class="link link-hover">Jobs</a> 
        <a class="link link-hover">Press kit</a>
      </div> 
      <div>
        <span class="footer-title">Legal</span> 
        <a class="link link-hover">Terms of use</a> 
        <a class="link link-hover">Privacy policy</a> 
        <a class="link link-hover">Cookie policy</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.gradient-bg {
  background: linear-gradient(180deg,#000,transparent);
  position: absolute;
}
.footer-title {
  /* Add your styles for footer title */
}
.link {
  /* Add your styles for link */
}
.link-hover:hover {
  /* Add your styles for link hover state */
}
</style>
