<template>
  <div class="page-main">
    <header style="margin-bottom: 2rem;">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 1rem;">
        <div>
          <h1 class="page-title">Resume</h1>
          <p class="page-subtitle" style="margin-bottom: 0.5rem;">
            Full-Stack Web Developer · Vue.js &amp; Laravel Specialist
          </p>
        </div>
        <button
          type="button"
          class="button"
          style="height: 2.5rem; font-size: var(--text-xs);"
          @click="isCvModalOpen = true"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Download CV</span>
        </button>
      </div>
    </header>

    <div style="font-size: var(--text-md); line-height: 1.7; margin-bottom: 2rem;">
      <p>
        Full-Stack Web Developer with practical experience engineering scalable web applications, secure REST APIs, and responsive user interfaces. Proven track record delivering complete systems with Laravel, PHP, Vue.js, and MySQL.
      </p>
    </div>

    <!-- In-page jump navigation -->
    <nav class="inpage-nav" aria-label="Resume sections">
      <a href="#experience" class="inpage-nav-link">Experience</a>
      <a href="#education" class="inpage-nav-link">Education</a>
      <a href="#skills" class="inpage-nav-link">Skills &amp; Technologies</a>
      <a href="#services" class="inpage-nav-link">Services</a>
      <a href="#references" class="inpage-nav-link">References</a>
    </nav>

    <!-- Experience Section -->
    <section style="margin-bottom: 4rem;">
      <h2 id="experience" style="font-size: 1.75rem; margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between;">
        <span>Experience</span>
        <a href="#experience" style="font-family: var(--font-mono); font-size: 1rem; color: var(--color-fg-muted); background-image: none !important;">#</a>
      </h2>

      <div style="display: flex; flex-direction: column; gap: 2.5rem;">
        <article
          v-for="job in experience"
          :key="job.id"
          style="padding-bottom: 2rem; border-bottom: var(--rule) solid var(--color-border);"
        >
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 0.5rem; margin-bottom: 0.25rem;">
            <h3 style="font-size: 1.35rem; margin-bottom: 0; color: var(--color-fg-bold);">
              {{ job.role }}
            </h3>
            <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-fg-muted);">
              {{ job.period }}
            </span>
          </div>

          <div style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--color-accent); font-weight: 500; margin-bottom: 1rem;">
            {{ job.company }} · {{ job.location }}
          </div>

          <p style="font-family: var(--font-body); font-size: var(--text-md); color: var(--color-fg); line-height: 1.6; margin-bottom: 1rem;">
            {{ job.summary }}
          </p>

          <ul style="list-style-type: disc; padding-left: 1.25rem; margin-bottom: 1.25rem; font-family: var(--font-body); font-size: var(--text-md); line-height: 1.6;">
            <li v-for="(bullet, bIdx) in job.bullets" :key="bIdx" style="margin-bottom: 0.4rem;">
              {{ bullet }}
            </li>
          </ul>

          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
            <span
              v-for="tag in job.tags"
              :key="tag"
              style="font-family: var(--font-mono); font-size: var(--text-2xs); padding: 0.2rem 0.55rem; border-radius: var(--radius-xs); background: var(--color-surface-subtle); border: var(--rule) solid var(--color-border); color: var(--color-fg);"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </section>

    <!-- Education Section -->
    <section style="margin-bottom: 4rem;">
      <h2 id="education" style="font-size: 1.75rem; margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between;">
        <span>Education</span>
        <a href="#education" style="font-family: var(--font-mono); font-size: 1rem; color: var(--color-fg-muted); background-image: none !important;">#</a>
      </h2>

      <article style="padding-bottom: 1.5rem; border-bottom: var(--rule) solid var(--color-border);">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 0.5rem; margin-bottom: 0.25rem;">
          <h3 style="font-size: 1.35rem; margin-bottom: 0; color: var(--color-fg-bold);">
            Bachelor of Science in Information Technology
          </h3>
          <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-fg-muted);">
            2023 — Present
          </span>
        </div>

        <div style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--color-accent); font-weight: 500; margin-bottom: 1rem;">
          University in Siem Reap · Cambodia
        </div>

        <p style="font-family: var(--font-body); font-size: var(--text-md); color: var(--color-fg); line-height: 1.6; margin-bottom: 0.5rem;">
          Focused on core software engineering, data structures, algorithms, relational database design, web technologies, and systems architecture. Actively applying theoretical foundations to commercial and open-source software projects.
        </p>
      </article>
    </section>

    <!-- Skills Section with Vector Icons -->
    <section style="margin-bottom: 4rem;">
      <h2 id="skills" style="font-size: 1.75rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
        <span>Skills &amp; Technologies</span>
        <a href="#skills" style="font-family: var(--font-mono); font-size: 1rem; color: var(--color-fg-muted); background-image: none !important;">#</a>
      </h2>

      <!-- Category Filter Pills -->
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
        <button
          v-for="category in skillCategories"
          :key="category"
          type="button"
          @click="selectedCategory = category"
          :class="['inpage-nav-link', { active: selectedCategory === category }]"
          style="cursor: pointer; font-size: var(--text-xs);"
        >
          {{ category }}
        </button>
      </div>

      <!-- Skills Grid with Vector Icons -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          style="padding: 1.25rem; background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-md); transition: transform var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out);"
        >
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <TechIcon :name="skill.name" size="1.45rem" />
              <span style="font-family: var(--font-mono); font-size: var(--text-sm); font-weight: 600; color: var(--color-fg-bold);">
                {{ skill.name }}
              </span>
            </div>
            <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-fg-light);">
              {{ skill.level }}%
            </span>
          </div>

          <div class="skill-bar-container">
            <div class="skill-bar-fill" :style="{ width: skill.level + '%' }"></div>
          </div>

          <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--color-fg-muted); display: block; margin-top: 0.4rem;">
            {{ skill.category }}
          </span>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section style="margin-bottom: 4rem;">
      <h2 id="services" style="font-size: 1.75rem; margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between;">
        <span>What I Offer</span>
        <a href="#services" style="font-family: var(--font-mono); font-size: 1rem; color: var(--color-fg-muted); background-image: none !important;">#</a>
      </h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
        <div style="padding: 1.5rem; background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-md);">
          <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">Full-Stack Web Apps</h3>
          <p style="font-family: var(--font-body); font-size: var(--text-sm); color: var(--color-fg-light); line-height: 1.55; margin-bottom: 0;">
            End-to-end development with Laravel and Vue 3. Custom authentication, role permissions, payment workflows, and business dashboards.
          </p>
        </div>

        <div style="padding: 1.5rem; background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-md);">
          <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">REST API Engineering</h3>
          <p style="font-family: var(--font-body); font-size: var(--text-sm); color: var(--color-fg-light); line-height: 1.55; margin-bottom: 0;">
            Robust, scalable RESTful API design with clean endpoints, request validation, structured JSON responses, and API documentation.
          </p>
        </div>

        <div style="padding: 1.5rem; background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-md);">
          <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">Frontend SPAs &amp; UI/UX</h3>
          <p style="font-family: var(--font-body); font-size: var(--text-sm); color: var(--color-fg-light); line-height: 1.55; margin-bottom: 0;">
            Converting designs into pixel-perfect, accessible, and reactive user interfaces with Vue 3, Tailwind CSS, and smooth micro-animations.
          </p>
        </div>
      </div>
    </section>

    <!-- References Section -->
    <section style="margin-bottom: 3rem;">
      <h2 id="references" style="font-size: 1.75rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between;">
        <span>References</span>
        <a href="#references" style="font-family: var(--font-mono); font-size: 1rem; color: var(--color-fg-muted); background-image: none !important;">#</a>
      </h2>
      <p style="font-size: var(--text-md); color: var(--color-fg-light); font-style: italic;">
        Professional references, code samples, and client recommendations are available upon request.
      </p>
    </section>
    <!-- CV Download Modal -->
    <CvDownloadModal :is-open="isCvModalOpen" @close="isCvModalOpen = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TechIcon from '../components/TechIcon.vue';
import CvDownloadModal from '../components/CvDownloadModal.vue';

const isCvModalOpen = ref(false);

const experience = [
  {
    id: 1,
    role: 'Full-Stack Web Developer (Freelance)',
    company: 'Independent Contractor',
    location: 'Siem Reap & Remote',
    period: '2024 — Present',
    summary: 'Architecting and shipping production web applications for commercial clients and local businesses.',
    bullets: [
      'Engineered multi-tenant ordering and inventory systems with Laravel backend and Vue 3 client interfaces.',
      'Designed normalized relational schemas and optimized SQL queries in MySQL for fast response times under concurrent user loads.',
      'Implemented secure authentication, authorization policies, and RESTful API endpoints for seamless frontend data consumption.',
      'Collaborated closely with stakeholders to translate business workflows into intuitive user interfaces.'
    ],
    tags: ['Laravel', 'Vue.js 3', 'PHP', 'MySQL', 'Tailwind CSS', 'REST APIs', 'Git']
  },
  {
    id: 2,
    role: 'Frontend & Application Developer',
    company: 'Client & Academic Projects',
    location: 'Siem Reap',
    period: '2023 — 2024',
    summary: 'Built responsive SPAs, interactive admin dashboards, and dynamic UI components.',
    bullets: [
      'Developed modern reactive web applications leveraging Vue 3 Composition API and Vite build tooling.',
      'Created reusable component systems, responsive navigation drawers, and custom form validation engines.',
      'Constructed RESTful API mockups, Postman collections, and automated frontend testing workflows.'
    ],
    tags: ['Vue 3', 'JavaScript', 'HTML5/SCSS', 'Tailwind CSS', 'Vite', 'Postman']
  }
];

const selectedCategory = ref('All');
const skillCategories = ['All', 'Frontend', 'Backend', 'Tools'];

const skills = [
  { name: 'Vue.js 3', level: 92, category: 'Frontend' },
  { name: 'React.js', level: 85, category: 'Frontend' },
  { name: 'Laravel 11', level: 90, category: 'Backend' },
  { name: 'PHP', level: 88, category: 'Backend' },
  { name: 'Python', level: 82, category: 'Backend' },
  { name: 'JavaScript', level: 88, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 94, category: 'Frontend' },
  { name: 'MySQL', level: 86, category: 'Backend' },
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'CSS3', level: 92, category: 'Frontend' },
  { name: 'RESTful APIs', level: 90, category: 'Backend' },
  { name: 'Git & GitHub', level: 88, category: 'Tools' },
  { name: 'Vite Tooling', level: 86, category: 'Tools' }
];

const filteredSkills = computed(() => {
  if (selectedCategory.value === 'All') return skills;
  return skills.filter(s => s.category === selectedCategory.value);
});
</script>
