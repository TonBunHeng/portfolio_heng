<template>
  <header class="site-header">
    <a href="#main-content" class="skip-link">Skip to content</a>
    
    <router-link to="/" class="site-logo" aria-label="Ton Bunheng — home">
      <img src="/logo/TBH.png" alt="TBH Logo" class="site-logo-img" width="45" height="45" />
      <span class="site-logo-text">Ton Bunheng</span>
    </router-link>

    <nav class="nav-links" aria-label="Primary">
      <router-link to="/about" class="nav-link" active-class="active">About</router-link>
      <router-link to="/resume" class="nav-link" active-class="active">Resume</router-link>
      <router-link to="/projects" class="nav-link" active-class="active">Projects</router-link>
      <router-link to="/writing" class="nav-link" active-class="active">Writing</router-link>
      <router-link to="/stats" class="nav-link" active-class="active">Stats</router-link>
      <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
    </nav>

    <div class="nav-actions">
      <!-- Theme Toggle Button -->
      <button
        type="button"
        class="theme-toggle-btn"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggleTheme"
      >
        <!-- Sun Icon (shown in dark mode) -->
        <svg v-if="isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <!-- Moon Icon (shown in light mode) -->
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>

      <!-- Hamburger Menu Button (Mobile) -->
      <button
        type="button"
        class="hamburger-button"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle navigation menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <svg v-if="!isMobileMenuOpen" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Mobile Drawer & Overlay -->
    <Teleport to="body">
      <div
        v-if="isMobileMenuOpen"
        class="mobile-menu-overlay"
        @click="isMobileMenuOpen = false"
      ></div>
      <div
        v-if="isMobileMenuOpen"
        class="mobile-nav-drawer"
      >
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">
            <router-link to="/" class="site-logo" @click="isMobileMenuOpen = false">
              <img src="/logo/TBH.png" alt="TBH Logo" class="site-logo-img" width="45" height="45" />
              <span class="site-logo-text">Ton Bunheng</span>
            </router-link>
            <button
              type="button"
              class="theme-toggle-btn"
              @click="isMobileMenuOpen = false"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav style="display: flex; flex-direction: column; gap: 0.75rem;">
            <router-link to="/" class="nav-link" active-class="active" @click="isMobileMenuOpen = false" style="font-size: 1rem; padding: 0.75rem 1rem;">Home</router-link>
            <router-link to="/about" class="nav-link" active-class="active" @click="isMobileMenuOpen = false" style="font-size: 1rem; padding: 0.75rem 1rem;">About</router-link>
            <router-link to="/resume" class="nav-link" active-class="active" @click="isMobileMenuOpen = false" style="font-size: 1rem; padding: 0.75rem 1rem;">Resume</router-link>
            <router-link to="/projects" class="nav-link" active-class="active" @click="isMobileMenuOpen = false" style="font-size: 1rem; padding: 0.75rem 1rem;">Projects</router-link>
            <router-link to="/writing" class="nav-link" active-class="active" @click="isMobileMenuOpen = false" style="font-size: 1rem; padding: 0.75rem 1rem;">Writing</router-link>
            <router-link to="/stats" class="nav-link" active-class="active" @click="isMobileMenuOpen = false" style="font-size: 1rem; padding: 0.75rem 1rem;">Stats</router-link>
            <router-link to="/contact" class="nav-link" active-class="active" @click="isMobileMenuOpen = false" style="font-size: 1rem; padding: 0.75rem 1rem;">Contact</router-link>
          </nav>
        </div>

        <div style="padding-top: 2rem; border-top: var(--rule) solid var(--color-border);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
            <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-fg-muted); text-transform: uppercase;">Theme</span>
            <button
              type="button"
              class="theme-toggle-btn"
              @click="toggleTheme"
            >
              <svg v-if="isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
          </div>
          <p style="font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--color-fg-muted);">
            &copy; 2026 Ton Bunheng
          </p>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);
const isMobileMenuOpen = ref(false);

const updateThemeState = () => {
  const current = document.documentElement.getAttribute('data-theme');
  isDark.value = current === 'dark';
};

const toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch(e) {}
  isDark.value = next === 'dark';
};

onMounted(() => {
  updateThemeState();
  
  // Listen to system preference changes if no manual theme stored
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        const t = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', t);
        isDark.value = e.matches;
      }
    });
  }
});
</script>
