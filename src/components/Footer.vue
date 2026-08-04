<template>
  <footer class="bg-[#110e0a] text-[#e1dfdb] pt-18 pb-8">
    <div class="w-[min(1200px,calc(100%-3rem))] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr] gap-12 pb-12 border-b border-white/10 mb-8">
        <div>
          <div class="font-serif text-2xl font-bold text-[#e1dfdb] tracking-tight inline-flex gap-1 mb-4">
            Bun<em class="not-italic text-[#c4622d]">Heng</em>
          </div>
          <p class="text-sm text-white/45 leading-relaxed max-w-xs">Building the web, one pixel at a time. Available for freelance projects worldwide.</p>
          <div class="flex gap-2.5 mt-6">
            <a href="https://github.com/tonbunheng1122-cloud" class="w-10 h-10 rounded-full border border-white/20 bg-white/5 grid place-items-center text-white/50 hover:border-[#c4622d] hover:text-[#c4622d] hover:bg-[#c4622d]/10 hover:-translate-y-1 transition-all" title="GitHub" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="mailto:tonbunheng1122@gmail.com" class="w-10 h-10 rounded-full border border-white/20 bg-white/5 grid place-items-center text-white/50 hover:border-[#c4622d] hover:text-[#c4622d] hover:bg-[#c4622d]/10 hover:-translate-y-1 transition-all" title="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-mono text-[0.68rem] tracking-widest uppercase text-white/35 mb-5">Navigation</h4>
          <ul class="space-y-2.5">
            <li><a href="#about" class="text-sm text-white/50 hover:text-[#c4622d] transition-colors">About</a></li>
            <li><a href="#experience" class="text-sm text-white/50 hover:text-[#c4622d] transition-colors">Experience</a></li>
            <li><a href="#skills" class="text-sm text-white/50 hover:text-[#c4622d] transition-colors">Skills</a></li>
            <li><a href="#projects" class="text-sm text-white/50 hover:text-[#c4622d] transition-colors">Projects</a></li>
            <li><a href="#services" class="text-sm text-white/50 hover:text-[#c4622d] transition-colors">Services</a></li>
            <li><a href="#contact" class="text-sm text-white/50 hover:text-[#c4622d] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-mono text-[0.68rem] tracking-widest uppercase text-white/35 mb-5">Services</h4>
          <ul class="space-y-2.5">
            <li><a href="#services" class="text-sm text-white/50 hover:text-[#c4622d] transition-colors">Web Design</a></li>
            <li><a href="#services" class="text-sm text-white/50 hover:text-[#c4622d] transition-colors">Web Development</a></li>
            <li><a href="#services" class="text-sm text-white/50 hover:text-[#c4622d] transition-colors">Fullstack Apps</a></li>
            <li><a href="#services" class="text-sm text-white/50 hover:text-[#c4622d] transition-colors">UI/UX Implementation</a></li>
            <li><a href="#services" class="text-sm text-white/50 hover:text-[#c4622d] transition-colors">Maintenance</a></li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-white/30 text-center">
        <p>&copy; 2026 BunHeng. All rights reserved. Developer Ton BunHeng</p>
      </div>
    </div>
  </footer>
</template>
