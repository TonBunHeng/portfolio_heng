<template>
  <section id="home" class="min-h-screen flex items-end pt-36 pb-20 relative overflow-hidden bg-[#e1dfdb] border-b border-black/10">
    <div class="absolute top-1/2 -right-[2%] -translate-y-1/2 font-bold text-[clamp(200px,28vw,380px)] leading-none text-transparent pointer-events-none select-none tracking-tighter" style="-webkit-text-stroke: 1.5px rgba(26,22,18,0.05)">
      BH
    </div>

    <div class="w-[min(1200px,calc(100%-3rem))] mx-auto relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end w-full">
        <div>
          <div class="flex items-center gap-3 mb-8">
            <div class="kicker-dot w-2 h-2 rounded-full bg-[#c4622d]"></div>
            <span class="font-mono text-[0.72rem] tracking-widest uppercase text-[#7a7268]">Available for freelance &amp; full-time</span>
          </div>

          <h1 class="font-bold text-[clamp(3rem,10vw,9.5rem)] leading-[0.88] tracking-tighter text-[#1a1612]">
            I'm<br><em class="not-italic text-[#c4622d] block">BunHeng</em>
          </h1>

          <div class="flex items-center gap-4 mt-8">
            <span class="font-mono text-sm text-[#7a7268] whitespace-nowrap">Currently:</span>
            <em><span class="font-mono text-sm text-[#1a1612] font-medium"><span id="typewriter">{{ typewriterText }}</span><span class="cursor text-[#c4622d]">|</span></span></em>
            <div class="flex-1 h-px bg-black/15"></div>
          </div>

          <p class="max-w-xl text-base text-[#7a7268] leading-relaxed font-normal mt-7">
            Crafting modern, responsive websites and web applications where clean code meets polished design —
            delivering fast, accessible, and memorable digital experiences.
          </p>

          <div class="flex items-center gap-6 flex-wrap mt-10">
            <a
              href="#projects"
              class="inline-flex items-center gap-3 rounded-full px-8 py-4 font-sans text-sm font-semibold bg-[#171412] text-white shadow-lg shadow-black/10 transition-all duration-300 ease-out hover:bg-black hover:scale-105 active:scale-95 select-none touch-manipulation cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
              </svg>
              <span>View My Work</span>
            </a>
            <a
              href="/picture/TonBunHeng.pdf"
              download="TonBunHeng.pdf"
              @click="handleDownload"
              class="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-mono text-xs font-medium border-[1.5px] border-black/20 text-[#1a1612] hover:bg-[#1a1612] hover:text-[#e1dfdb] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 select-none touch-manipulation cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-6 items-end pb-2">
          <figure class="w-[280px] h-[360px] rounded-3xl overflow-hidden border border-black/20 shadow-2xl relative">
            <img src="/picture/DSC_2730.JPG" alt="BunHeng" class="w-full h-full object-cover object-top filter saturate-90 contrast-105" />
            <div class="absolute bottom-5 left-5 bg-[#f4efe6]/92 backdrop-blur-md rounded-xl px-4 py-2.5 font-mono text-xs text-[#1a1612] border border-black/20 shadow-md">
              <strong class="text-[#c4622d] block text-lg font-bold">1</strong>
              Year experience
            </div>
          </figure>

          <div class="flex gap-6">
            <div class="text-right">
              <div class="font-serif text-3xl font-bold text-[#1a1612] leading-none">4</div>
              <div class="font-mono text-[0.65rem] text-[#7a7268] tracking-widest uppercase">Projects</div>
            </div>
            <div class="w-px bg-black/20"></div>
            <div class="text-right">
              <div class="font-serif text-3xl font-bold text-[#1a1612] leading-none">2</div>
              <div class="font-mono text-[0.65rem] text-[#7a7268] tracking-widest uppercase">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 font-mono text-[0.62rem] tracking-widest uppercase text-[#a09890]">
      <div class="w-px h-[50px] bg-black/20 relative overflow-hidden">
        <div class="scroll-fill absolute -top-full w-full h-full bg-[#c4622d]"></div>
      </div>
      scroll
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const typewriterText = ref('');
const roles = ['Frontend Developer', 'Vue.js Engineer', 'Laravel Developer', 'UI/UX Implementer', 'Fullstack Developer'];
let ri = 0, ci = 0, del = false, timer = null;

const handleDownload = () => {
  alert('Downloading CV: TonBunHeng.pdf');
};

const type = () => {
  const cur = roles[ri];
  if (!del) {
    typewriterText.value = cur.slice(0, ci + 1);
    ci++;
    if (ci === cur.length) {
      del = true;
      timer = setTimeout(type, 1800);
      return;
    }
    timer = setTimeout(type, 80);
  } else {
    typewriterText.value = cur.slice(0, ci - 1);
    ci--;
    if (ci === 0) {
      del = false;
      ri = (ri + 1) % roles.length;
      timer = setTimeout(type, 400);
      return;
    }
    timer = setTimeout(type, 45);
  }
};

onMounted(() => {
  timer = setTimeout(type, 1000);
});

onUnmounted(() => {
  if (timer) clearTimeout(timer);
});
</script>
