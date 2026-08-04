<template>
  <section id="experience" class="py-14 sm:py-16 relative z-10 bg-[#1a1612] text-[#e1dfdb]">
    <div class="w-[min(1200px,calc(100%-3rem))] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 md:gap-20">
        <div class="reveal">
          <div class="font-mono text-xs tracking-widest uppercase text-[#c8962c] flex items-center gap-3 mb-4">
            <span class="w-7 h-[1.5px] bg-[#c4622d] shrink-0"></span>
            Experience
          </div>
          <h2 class="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-tight tracking-tighter text-[#e1dfdb] md:sticky md:top-36 md:self-start">
            My<br><em class="not-italic block text-[#c8962c]">jour&shy;ney.</em>
          </h2>
        </div>

        <div class="exp-list reveal flex flex-col gap-0.5">
          <div v-for="(item, idx) in experience" :key="item.id" class="group bg-white/5 border border-white/10 rounded-2xl p-9 transition-all duration-300 ease-out hover:bg-white/10 hover:border-[#c4622d]/40 hover:-translate-y-1 hover:shadow-xl hover:!delay-0" :style="idx > 0 ? 'margin-top:2px' : ''">
            <div class="flex justify-between items-start gap-6 mb-4">
              <div>
                <div class="font-serif text-2xl font-bold text-[#e1dfdb] leading-tight group-hover:text-[#c8962c] transition-colors duration-300">{{ item.role }}</div>
                <div class="font-mono text-xs text-[#c8962c] mt-1 tracking-wider">{{ item.where }}</div>
              </div>
              <span class="font-mono text-xs text-white/40 border border-white/10 rounded-full px-3 py-1 whitespace-nowrap shrink-0 group-hover:border-[#c8962c]/30 group-hover:text-white/70 transition-colors duration-300">{{ item.period }}</span>
            </div>
            <p class="text-sm text-white/60 leading-relaxed mb-5">{{ item.desc }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tag in item.tags" :key="tag" class="font-mono text-[0.66rem] tracking-wider text-[#c4622d] border border-[#c4622d]/30 rounded-full px-3 py-0.5 bg-[#c4622d]/10">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experience = [
  {
    id: 1,
    role: 'Frontend Developer',
    where: 'Freelance',
    period: '2024 — 2025',
    desc: 'Built end-to-end web solutions for local businesses and startups — from database design to responsive UI. Delivered 10+ projects using Laravel, PHP, and modern frontend frameworks.',
    tags: ['Laravel', 'PHP', 'MySQL', 'HTML/CSS']
  },
  {
    id: 2,
    role: 'B.Sc. Information Technology',
    where: 'University · Siem Reap',
    period: '2023 — Present',
    desc: 'Graduated with a focus on software engineering, web technologies, and database systems. Built several academic projects applying real-world development practices.',
    tags: ['Software Engineering', 'Databases', 'Algorithms']
  }
];
</script>
