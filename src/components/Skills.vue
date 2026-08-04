<template>
  <section id="skills" class="py-14 sm:py-16 relative z-10 bg-[#e1dfdb]">
    <div class="w-[min(1200px,calc(100%-3rem))] mx-auto">
      <div class="reveal mb-10">
        <div class="font-mono text-xs tracking-widest uppercase text-[#c4622d] flex items-center gap-3 mb-4">
          <span class="w-7 h-[1.5px] bg-[#c4622d] shrink-0"></span>
          Skills
        </div>
        <h2 class="font-serif text-[clamp(2.2rem,3.8vw,3.75rem)] font-bold tracking-tight">Tools &amp; technologies <em class="not-italic text-[#c4622d]">I master</em></h2>
      </div>

      <div class="skills-intro-grid reveal grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden">
        <!-- Frontend -->
        <div class="bg-[#e1dfdb] p-8 sm:p-12">
          <div class="font-mono text-xs tracking-widest uppercase text-[#7a7268] border-b border-black/10 pb-5 mb-8">Frontend Development</div>
          <div v-for="skill in frontendSkills" :key="skill.name" class="skill-item flex items-center justify-between py-4 border-b border-black/10 gap-6 last:border-b-0">
            <div class="text-sm font-semibold text-[#1a1612] flex items-center gap-3">
              <div class="w-8 h-8 rounded-md border border-black/10 bg-[#ede8de] flex items-center justify-center overflow-hidden p-1 shrink-0 font-mono text-[0.58rem] font-medium" :class="{ 'bg-[#f7df1e]': skill.jsBg }">
                <img :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain" />
              </div>
              {{ skill.name }}
            </div>
            <div class="flex-1 flex items-center gap-3">
              <div class="flex-1 h-[3px] bg-black/10 rounded-full overflow-hidden">
                <div class="skill-fill h-full w-0 bg-[#c4622d] rounded-full transition-all duration-1000 ease-out" :data-width="skill.pct"></div>
              </div>
              <span class="font-mono text-xs text-[#7a7268] w-7 text-right">{{ skill.pct }}%</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2.5 mt-8">
            <div class="inline-flex items-center gap-2 border border-black/20 rounded-full px-4 py-2 font-mono text-xs text-[#1a1612] bg-[#e1dfdb] hover:border-[#c4622d] hover:text-[#c4622d] hover:bg-[#c4622d]/10 transition-colors">
              <img src="/img/html_v2.webp" alt="HTML5" class="w-4 h-4 object-contain" />HTML5
            </div>
            <div class="inline-flex items-center gap-2 border border-black/20 rounded-full px-4 py-2 font-mono text-xs text-[#1a1612] bg-[#e1dfdb] hover:border-[#c4622d] hover:text-[#c4622d] hover:bg-[#c4622d]/10 transition-colors">
              <img src="/img/Js_v2.png" alt="JS" class="w-4 h-4 object-contain" />JavaScript
            </div>
            <div class="inline-flex items-center gap-2 border border-black/20 rounded-full px-4 py-2 font-mono text-xs text-[#1a1612] bg-[#e1dfdb] hover:border-[#c4622d] hover:text-[#c4622d] hover:bg-[#c4622d]/10 transition-colors">
              <img src="/img/Vue.js_v2.png" alt="Vue" class="w-4 h-4 object-contain" />Vue.js
            </div>
            <div class="inline-flex items-center gap-2 border border-black/20 rounded-full px-4 py-2 font-mono text-xs text-[#1a1612] bg-[#e1dfdb] hover:border-[#c4622d] hover:text-[#c4622d] hover:bg-[#c4622d]/10 transition-colors">
              <img src="/img/tailwindcss_v2.png" alt="Tailwind" class="w-4 h-4 object-contain" />Tailwind
            </div>
          </div>
        </div>

        <!-- Backend & Tools -->
        <div class="bg-[#e1dfdb] p-8 sm:p-12 flex flex-col justify-between">
          <div>
            <div class="font-mono text-xs tracking-widest uppercase text-[#7a7268] border-b border-black/10 pb-5 mb-8">Backend &amp; Tools</div>
            <div v-for="skill in backendSkills" :key="skill.name" class="skill-item flex items-center justify-between py-4 border-b border-black/10 gap-6 last:border-b-0">
              <div class="text-sm font-semibold text-[#1a1612] flex items-center gap-3">
                <div class="w-8 h-8 rounded-md border border-black/10 bg-[#ede8de] flex items-center justify-center overflow-hidden p-1 shrink-0 font-mono text-[0.58rem] font-medium" :class="{ 'bg-[#c4622d]/10 text-[#c4622d]': skill.rustBg }">
                  <img v-if="skill.icon" :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain" />
                  <template v-else>{{ skill.textIcon }}</template>
                </div>
                {{ skill.name }}
              </div>
              <div class="flex-1 flex items-center gap-3">
                <div class="flex-1 h-[3px] bg-black/10 rounded-full overflow-hidden">
                  <div class="skill-fill h-full w-0 bg-[#c4622d] rounded-full transition-all duration-1000 ease-out" :data-width="skill.pct"></div>
                </div>
                <span class="font-mono text-xs text-[#7a7268] w-7 text-right">{{ skill.pct }}%</span>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-2.5 mt-8">
            <div class="inline-flex items-center gap-2 border border-black/20 rounded-full px-4 py-2 font-mono text-xs text-[#1a1612] bg-[#e1dfdb] hover:border-[#c4622d] hover:text-[#c4622d] hover:bg-[#c4622d]/10 transition-colors">
              <img src="/img/php_v2.png" alt="PHP" class="w-4 h-4 object-contain" />PHP
            </div>
            <div class="inline-flex items-center gap-2 border border-black/20 rounded-full px-4 py-2 font-mono text-xs text-[#1a1612] bg-[#e1dfdb] hover:border-[#c4622d] hover:text-[#c4622d] hover:bg-[#c4622d]/10 transition-colors">
              <img src="/img/Laravel_v2.png" alt="Laravel" class="w-4 h-4 object-contain" />Laravel
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const frontendSkills = [
  { name: 'HTML5', icon: '/img/html_v2.webp', pct: 95 },
  { name: 'CSS / SCSS', icon: '/img/css-icon.webp', pct: 90 },
  { name: 'JavaScript', icon: '/img/Js_v2.png', pct: 85, jsBg: true },
  { name: 'Vue.js', icon: '/img/Vue.js_v2.png', pct: 82 },
  { name: 'Tailwind CSS', icon: '/img/tailwindcss_v2.png', pct: 90 }
];

const backendSkills = [
  { name: 'PHP', icon: '/img/php_v2.png', pct: 80 },
  { name: 'Laravel', icon: '/img/Laravel_v2.png', pct: 75 },
  { name: 'MySQL / DB', icon: '/img/mysql_v2.png', pct: 78 },
  { name: 'Git / GitHub', icon: '/img/github_v2.svg', pct: 88 },
  { name: 'REST APIs', textIcon: 'API', pct: 83, rustBg: true }
];
</script>
