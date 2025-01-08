<template>
  <div class="flex flex-col min-h-screen">
    <header class="fixed top-0 left-0 w-full bg-[#292D32] h-auto p-7 z-10">
      <nav class="text-left">
        <router-link to="/" class="text-2xl text-white"
          >Movies For You</router-link
        >
      </nav>
    </header>

    <main class="flex-1 pt-24 pb-16">
      <slot></slot>
    </main>

    <footer class="bg-[#292D32] p-4 text-white">
      <div class="flex w-[90%] justify-between m-auto items-center">
        <div class="text-left">
          <p>Movie Application 2025</p>
        </div>
        <div class="text-left">
          <a href="#" class="hover:underline">518-363-2171 91</a>
          <p>Park St. Fairhope, AL 36532</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>
