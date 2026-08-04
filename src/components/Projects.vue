<template>
  <section id="projects" class="py-14 sm:py-16 relative z-10">
    <div class="w-[min(1200px,calc(100%-3rem))] mx-auto">
      <div class="flex flex-wrap items-end justify-between gap-8 mb-10 reveal">
        <div>
          <div class="font-mono text-xs tracking-widest uppercase text-[#c4622d] flex items-center gap-3 mb-4">
            <span class="w-7 h-[1.5px] bg-[#c4622d] shrink-0"></span>
            Projects
          </div>
          <h2 class="font-serif text-[clamp(2.2rem,3.8vw,3.75rem)] font-bold tracking-tight">Featured <em class="italic text-[#c4622d]">work</em></h2>
        </div>
        <a href="#contact" class="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-xs font-medium border-[1.5px] border-black/20 text-[#1a1612] hover:bg-[#1a1612] hover:text-[#e1dfdb] transition-all duration-300 hover:-translate-y-0.5">Let's collaborate →</a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(project, idx) in projects"
          :key="project.id"
          class="group bg-white border border-black/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#c4622d]/50 hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-[#c4622d]/10 reveal p-4 cursor-pointer"
          :style="idx > 0 ? `transition-delay:${idx * 0.05}s` : ''"
          @click="openModal(project)"
        >
          <!-- Image thumbnail with Featured badge -->
          <div class="relative h-52 w-full rounded-xl overflow-hidden shrink-0 mb-4 bg-gray-100">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
            <span v-if="project.isFeatured" class="absolute top-3 right-3 bg-[#c4622d] text-white font-mono text-[0.65rem] font-bold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
              Featured
            </span>
            <span class="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white font-mono text-xs font-bold px-2 py-0.5 rounded">
              {{ project.num }}
            </span>
          </div>

          <!-- Card Content -->
          <div class="flex flex-col flex-1 justify-between gap-3">
            <div>
              <h3 class="font-serif text-lg font-bold text-[#1a1612] leading-snug group-hover:text-[#c4622d] transition-colors duration-300 line-clamp-1 mb-2">
                {{ project.title }}
              </h3>

              <div class="mb-3">
                <span class="inline-block bg-[#c4622d]/10 text-[#c4622d] border border-[#c4622d]/20 rounded-full px-3 py-0.5 font-mono text-xs font-medium">
                  {{ project.category }}
                </span>
              </div>

              <p class="text-xs text-[#7a7268] leading-relaxed line-clamp-3 mb-4">
                {{ project.desc }}
              </p>

              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap gap-1.5 pt-3 border-t border-black/10 mb-4">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="font-mono text-[0.7rem] bg-gray-100 text-[#1a1612]/80 border border-black/5 px-2 py-0.5 rounded-md"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Footer Row: Action Links -->
            <div class="pt-3 border-t border-black/10 flex items-center justify-between" @click.stop>
              <a :href="project.liveUrl" class="font-mono text-xs font-medium inline-flex items-center gap-1.5 text-[#c4622d] hover:gap-2 transition-all duration-300" target="_blank" rel="noopener">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>Live Demo
              </a>
              <a :href="project.codeUrl" class="font-mono text-xs font-medium inline-flex items-center gap-1.5 text-[#7a7268] hover:text-[#1a1612] hover:gap-2 transition-all duration-300" target="_blank" rel="noopener">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>Source Code
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Smooth Project Detail Modal Popup -->
    <Teleport to="body">
      <Transition name="popup">
        <div
          v-if="selectedProject"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto"
          @click.self="closeModal"
        >
          <div class="popup-panel bg-[#fdf9f2] border border-black/15 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-8">
            <!-- Close Button -->
            <button
              @click="closeModal"
              class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
              aria-label="Close modal"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <!-- Image Cover -->
            <div class="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-200">
              <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-full object-cover" />
              <span v-if="selectedProject.isFeatured" class="absolute top-4 left-4 bg-[#c4622d] text-white font-mono text-xs font-bold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                Featured Project
              </span>
            </div>

            <!-- Content Details -->
            <div class="p-6 sm:p-8">
              <div class="font-mono text-xs text-[#c4622d] tracking-wider uppercase font-semibold mb-2">
                {{ selectedProject.category }}
              </div>
              <h3 class="font-serif text-2xl sm:text-3xl font-bold text-[#1a1612] mb-4">
                {{ selectedProject.title }}
              </h3>
              <p class="text-sm text-[#7a7268] leading-relaxed mb-6">
                {{ selectedProject.desc }}
              </p>

              <!-- Tech Stack Pills -->
              <div class="mb-8">
                <h4 class="font-mono text-xs font-bold text-[#1a1612] uppercase tracking-wider mb-3">Technologies Used</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in selectedProject.tags"
                    :key="tag"
                    class="font-mono text-xs bg-[#c4622d]/10 text-[#c4622d] border border-[#c4622d]/20 px-3 py-1 rounded-full font-medium"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Action Links -->
              <div class="flex flex-wrap items-center gap-4 pt-6 border-t border-black/10">
                <a
                  :href="selectedProject.liveUrl"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs font-medium bg-[#c4622d] text-white shadow-md hover:bg-[#a85223] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg> Visit Live Project
                </a>
                <a
                  :href="selectedProject.codeUrl"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs font-medium border border-black/20 text-[#1a1612] hover:bg-[#1a1612] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg> View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedProject.value = null;
  document.body.style.overflow = '';
};

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && selectedProject.value) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  document.body.style.overflow = '';
});

const projects = [
  {
    id: 1,
    num: '01',
    isFeatured: true,
    title: 'Restaurant Ordering System',
    category: 'Fullstack Web App',
    desc: 'A full-featured online restaurant ordering system built with Laravel and PHP, featuring responsive menu browsing, interactive cart, checkout, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    tags: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL'],
    liveUrl: 'https://restaurant-ordering.free.laravel.cloud/',
    codeUrl: 'https://github.com/tonbunheng1122-cloud/Restaurant_Ordering_System'
  },
  {
    id: 2,
    num: '02',
    isFeatured: true,
    title: 'Personal Developer Portfolio',
    category: 'Frontend SPA',
    desc: 'A modern responsive developer portfolio showcasing interactive UI components, custom animation system, dark mode accents, and optimized performance.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Vue.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '#',
    codeUrl: 'https://github.com/tonbunheng1122-cloud/Portfolio_HENG'
  },
  {
    id: 3,
    num: '03',
    isFeatured: false,
    title: 'Admin Dashboard System',
    category: 'Web Application',
    desc: 'Feature-rich administrative management panel with real-time data visualization charts, role-based access control, and responsive UI components.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['PHP', 'Tailwind CSS', 'Chart.js', 'REST API'],
    liveUrl: '#',
    codeUrl: '#'
  }
];
</script>

<style scoped>
/* Overlay fade */
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s ease;
}
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

/* Panel scale + slide, driven by the same Transition (nested selector) */
.popup-enter-active .popup-panel,
.popup-leave-active .popup-panel {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}
.popup-enter-from .popup-panel,
.popup-leave-to .popup-panel {
  transform: scale(0.92) translateY(16px);
  opacity: 0;
}
</style>