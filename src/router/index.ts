// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Import your page components
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";

// Define routes
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/contact", component: Contact },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
