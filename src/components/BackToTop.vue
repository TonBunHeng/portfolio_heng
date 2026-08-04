<template>
  <button
    class="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-[#c4622d] text-[#fdf9f2] grid place-items-center shadow-lg shadow-[#c4622d]/30 opacity-0 pointer-events-none transition-all duration-300 hover:-translate-y-1"
    :class="{ '!opacity-100 !pointer-events-auto': showBackToTop }"
    id="backToTop"
    aria-label="Back to top"
    @click="scrollToTop"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  </button>
</template>

<script setup>
defineProps({
  showBackToTop: Boolean
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
