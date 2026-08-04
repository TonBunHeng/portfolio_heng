<template>
  <div class="fixed top-0 left-0 z-50 h-[3px] bg-[#c4622d] transition-all duration-100 ease-linear" id="scrollProgress" :style="{ width: scrollProgress + '%' }"></div>
  
  <Navbar
    :is-scrolled="isScrolled"
    :is-nav-open="isNavOpen"
    @toggle-nav="toggleNav"
    @close-nav="closeNav"
  />

  <Hero />
  <Ticker />
  <About />
  <Experience />
  <Skills />
  <Projects />
  <Services />
  <Contact />
  <Footer />

  <BackToTop :show-back-to-top="showBackToTop" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Ticker from './components/Ticker.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Services from './components/Services.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import BackToTop from './components/BackToTop.vue';

const scrollProgress = ref(0);
const isScrolled = ref(false);
const showBackToTop = ref(false);
const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

const closeNav = () => {
  isNavOpen.value = false;
};

const handleScroll = () => {
  const s = window.scrollY;
  const m = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = m > 0 ? (s / m) * 100 : 0;
  isScrolled.value = s > 40;
  showBackToTop.value = s > 400;
};

let revIO = null;
let skillIO = null;

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });

  nextTick(() => {
    revIO = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revIO.observe(el));

    skillIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('.skill-fill').forEach(b => {
          b.style.width = b.dataset.width + '%';
        });
        skillIO.unobserve(e.target);
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skills-intro-grid').forEach(g => skillIO.observe(g));
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (revIO) revIO.disconnect();
  if (skillIO) skillIO.disconnect();
});
</script>
