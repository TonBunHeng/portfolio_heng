<template>
  <section id="about" class="py-14 sm:py-16 relative z-10">
    <div class="w-[min(1200px,calc(100%-3rem))] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
        <div class="reveal">
          <div class="font-serif text-[clamp(5rem,10vw,9rem)] font-black leading-[0.85] text-transparent select-none tracking-tighter mb-8" style="-webkit-text-stroke: 1.5px rgba(26,22,18,0.18)">
            About<br>Me.
          </div>
          <div class="relative mt-4 max-w-xs md:max-w-none">
            <img src="/picture/profile_v2.PNG" alt="BunHeng" class="w-full aspect-[3/4] object-cover object-top rounded-2xl border border-black/15 filter saturate-90 contrast-105" />
            <div class="absolute -bottom-6 -right-6 w-[55%] aspect-square rounded-2xl bg-[#c4622d] flex flex-col items-center justify-center gap-1 shadow-2xl border-4 border-[#e1dfdb]">
              <div class="font-serif text-5xl font-black leading-none text-[#fdf9f2]">100%</div>
              <div class="font-mono text-[0.65rem] tracking-widest uppercase text-[#fdf9f2]/75">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div class="reveal">
          <div class="font-mono text-[0.68rem] tracking-widest uppercase text-[#c4622d] flex items-center gap-3 mb-4">
            <span class="w-7 h-[1.5px] bg-[#c4622d] shrink-0"></span>
            About Me
          </div>
          <h2 class="font-serif text-[clamp(2.2rem,3.8vw,3.75rem)] font-bold leading-tight tracking-tight mb-6">
            Hi, I'm BunHeng —<br><em class="not-italic text-[#c4622d]">Web Developer</em><br>based in Cambodia
          </h2>
          <p class="text-base text-[#7a7268] leading-relaxed mb-5">
            I specialize in building fast, scalable, and beautiful web applications. With a strong foundation in both
            frontend and backend technologies, I bridge the gap between design and engineering to create seamless
            digital products.
          </p>
          <p class="text-base text-[#7a7268] leading-relaxed mb-5">
            My approach combines clean, maintainable code with thoughtful UI/UX decisions. Whether it's a pixel-perfect
            landing page or a complex web application, I bring the same level of care and attention to every project.
          </p>

          <table class="w-full border-collapse my-8">
            <tbody>
              <tr class="border-b border-black/10">
                <td class="font-mono text-xs tracking-wider uppercase text-[#7a7268] w-[110px] pr-6 py-3.5 align-top">Name</td>
                <td class="text-sm font-bold text-[#1a1612] py-3.5 align-top">BunHeng</td>
              </tr>
              <tr class="border-b border-black/10">
                <td class="font-mono text-xs tracking-wider uppercase text-[#7a7268] w-[110px] pr-6 py-3.5 align-top">Location</td>
                <td class="text-sm text-[#1a1612] py-3.5 align-top">Siem Reap, Cambodia</td>
              </tr>
              <tr class="border-b border-black/10">
                <td class="font-mono text-xs tracking-wider uppercase text-[#7a7268] w-[110px] pr-6 py-3.5 align-top">Email</td>
                <td class="text-sm py-3.5 align-top"><a href="mailto:tonbunheng1122@gmail.com" class="text-[#c4622d] hover:underline">tonbunheng1122@gmail.com</a></td>
              </tr>
              <tr class="border-b border-black/10">
                <td class="font-mono text-xs tracking-wider uppercase text-[#7a7268] w-[110px] pr-6 py-3.5 align-top">Status</td>
                <td class="text-sm py-3.5 align-top">
                  <span class="status-dot inline-flex items-center gap-2 text-[#2a8a4c]">Available for work</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="flex gap-4 flex-wrap">
            <a href="#contact" class="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-xs font-medium bg-[#c4622d] text-[#fdf9f2] shadow-md shadow-[#c4622d]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c4622d]/30 active:scale-95">Let's Talk</a>
            <a
              href="/picture/TonBunHeng.pdf"
              download="TonBunHeng.pdf"
              @click="handleDownload"
              class="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-xs font-medium border-1.5 border-black/20 text-[#1a1612] hover:bg-[#1a1612] hover:text-[#e1dfdb] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 select-none touch-manipulation cursor-pointer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleDownload = () => {
  alert('Downloading CV: TonBunHeng.pdf');
};
</script>
