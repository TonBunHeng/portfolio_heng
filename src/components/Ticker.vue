<template>
  <div class="bg-[#110e0a] py-5 overflow-hidden border-y border-white/10">
    <div class="ticker-track flex w-max">
      <div v-for="(item, idx) in tickerItems" :key="idx" class="flex items-center gap-6 px-10 font-mono text-xs tracking-widest uppercase text-[#fdf9f2]/50 whitespace-nowrap">
        <span class="w-1 h-1 rounded-full bg-[#c4622d] shrink-0"></span>{{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ['Vue.js', 'Laravel', 'PHP', 'Tailwind CSS', 'JavaScript', 'HTML5', 'MySQL', 'REST APIs', 'Git', 'UI/UX'];
const tickerItems = [...items, ...items];
</script>
