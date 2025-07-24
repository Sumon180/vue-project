<template>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="text-2xl font-bold text-blue-600">
        MyLogo
      </router-link>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex gap-6 text-gray-700">
        <router-link to="/" class="hover:text-blue-600">Home</router-link>
        <router-link to="/about" class="hover:text-blue-600">About</router-link>
        <router-link to="/services" class="hover:text-blue-600"
          >Services</router-link
        >
        <router-link to="/contact" class="hover:text-blue-600"
          >Contact</router-link
        >
      </nav>

      <!-- Mobile Menu Button -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-gray-700 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4">
      <nav class="flex flex-col gap-2 text-gray-700">
        <router-link to="/" class="hover:text-blue-600">Home</router-link>
        <router-link to="/about" class="hover:text-blue-600">About</router-link>
        <router-link to="/services" class="hover:text-blue-600"
          >Services</router-link
        >
        <router-link to="/contact" class="hover:text-blue-600"
          >Contact</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
</script>
