<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300"
    :class="{ 'bg-[#f4efe6]/95 backdrop-blur-md border-b border-black/10 shadow-sm': isScrolled }"
    id="header"
  >
    <div class="w-[min(1200px,calc(100%-3rem))] mx-auto flex items-center justify-between gap-8">
      <a href="#home" class="text-2xl font-bold text-[#1a1612] tracking-tight flex items-center gap-1" @click="closeNav">
        Bun<em class="not-italic text-[#c4622d]">Heng</em>
      </a>

      <nav
        class="nav-menu fixed top-[75px] left-4 right-4 bg-[#f4efe6]/98 backdrop-blur-xl flex flex-col p-6 rounded-2xl border border-black/10 shadow-2xl gap-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:static md:top-auto md:left-auto md:right-auto md:bg-transparent md:backdrop-blur-none md:flex-row md:p-0 md:rounded-none md:border-none md:shadow-none md:gap-1 md:opacity-100 md:translate-y-0 md:pointer-events-auto"
        :class="isNavOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto z-40'
          : 'opacity-0 -translate-y-4 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'"
        id="navMenu"
      >
        <a href="#about" class="text-xs font-mono tracking-wider text-[#7a7268] px-3.5 py-1.5 rounded-full transition-colors hover:text-[#1a1612] hover:bg-[#ede8de]" @click="closeNav">About</a>
        <a href="#experience" class="text-xs font-mono tracking-wider text-[#7a7268] px-3.5 py-1.5 rounded-full transition-colors hover:text-[#1a1612] hover:bg-[#ede8de]" @click="closeNav">Experience</a>
        <a href="#skills" class="text-xs font-mono tracking-wider text-[#7a7268] px-3.5 py-1.5 rounded-full transition-colors hover:text-[#1a1612] hover:bg-[#ede8de]" @click="closeNav">Skills</a>
        <a href="#projects" class="text-xs font-mono tracking-wider text-[#7a7268] px-3.5 py-1.5 rounded-full transition-colors hover:text-[#1a1612] hover:bg-[#ede8de]" @click="closeNav">Projects</a>
        <a href="#services" class="text-xs font-mono tracking-wider text-[#7a7268] px-3.5 py-1.5 rounded-full transition-colors hover:text-[#1a1612] hover:bg-[#ede8de]" @click="closeNav">Services</a>
        <a href="#contact" class="text-xs font-mono tracking-wider text-[#7a7268] px-3.5 py-1.5 rounded-full transition-colors hover:text-[#1a1612] hover:bg-[#ede8de]" @click="closeNav">Contact</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="#contact" class="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-medium bg-[#c4622d] text-[#fdf9f2] shadow-md shadow-[#c4622d]/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c4622d]/30" @click="closeNav">
          Hire Me
        </a>
        <button
          class="hamburger flex md:hidden flex-col gap-1.5 p-2 cursor-pointer"
          :class="{ open: isNavOpen }"
          aria-label="Toggle menu"
          @click="toggleNav"
        >
          <span class="block w-5.5 h-0.5 bg-[#1a1612] rounded"></span>
          <span class="block w-5.5 h-0.5 bg-[#1a1612] rounded"></span>
          <span class="block w-5.5 h-0.5 bg-[#1a1612] rounded"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  isScrolled: Boolean,
  isNavOpen: Boolean
});

const emit = defineEmits(['toggle-nav', 'close-nav']);

const toggleNav = () => emit('toggle-nav');
const closeNav = () => emit('close-nav');
</script>
