<template>
  <section id="services" class="py-14 sm:py-16 relative z-10 bg-[#1a1612] text-[#e1dfdb]">
    <div class="w-[min(1200px,calc(100%-3rem))] mx-auto">
      <div class="reveal mb-14">
        <div class="font-mono text-xs tracking-widest uppercase text-[#c8962c] flex items-center gap-3 mb-4">
          <span class="w-7 h-[1.5px] bg-[#c4622d] shrink-0"></span>
          Services
        </div>
        <h2 class="font-serif text-[clamp(2.2rem,3.8vw,3.75rem)] font-bold tracking-tight text-[#e1dfdb]">What I <em class="not-italic text-[#c4622d]">offer</em></h2>
      </div>

      <div class="reveal">
        <div v-for="service in services" :key="service.num" class="group flex flex-col md:grid md:grid-cols-[80px_1fr_1fr_auto] gap-4 md:gap-8 items-start md:items-center py-8 border-b border-white/10 px-6 -mx-6 rounded-xl hover:bg-white/5 hover:!delay-0 transition-all duration-300 ease-out first:border-t first:border-white/10">
          <div class="font-serif text-3xl md:text-4xl font-bold text-transparent select-none leading-none group-hover:text-[#c8962c]/30 transition-colors duration-300" style="-webkit-text-stroke: 1px rgba(253,249,242,0.2)">{{ service.num }}</div>
          <div class="font-serif text-xl font-bold text-[#e1dfdb] group-hover:text-[#c8962c] transition-colors duration-300">{{ service.title }}</div>
          <div class="text-sm text-white/50 leading-relaxed group-hover:text-white/75 transition-colors duration-300">{{ service.desc }}</div>
          <div class="w-10 h-10 rounded-full border border-white/15 hidden md:grid place-items-center text-white/40 group-hover:border-[#c4622d] group-hover:text-white group-hover:bg-[#c4622d] group-hover:rotate-45 transition-all duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    num: '01',
    title: 'Web Design & Development',
    desc: 'Beautiful, responsive websites built from scratch — optimized for speed, accessibility, and conversion. Landing pages, corporate sites, portfolios.'
  },
  {
    num: '02',
    title: 'Fullstack Web Applications',
    desc: 'End-to-end web applications with robust backends, REST APIs, and polished reactive frontends. SPAs, admin panels, data-driven apps.'
  },
  {
    num: '03',
    title: 'UI/UX & Frontend Implementation',
    desc: 'Translating Figma designs or wireframes into pixel-perfect, animated, accessible user interfaces. Figma to code, animations, design systems.'
  },
  {
    num: '04',
    title: 'Maintenance & Support',
    desc: 'Ongoing support, performance monitoring, bug fixes, and feature additions for existing web projects. Audits, optimizations, updates.'
  }
];
</script>
