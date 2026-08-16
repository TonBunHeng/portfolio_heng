<template>
  <div class="page-main">
    <header style="margin-bottom: 2rem;">
      <h1 class="page-title">About</h1>
      <p class="page-subtitle">
        Engineering Philosophy, Background &amp; Technical Capabilities
      </p>
    </header>

    <!-- In-page jump navigation -->
    <nav class="inpage-nav" aria-label="About sections">
      <a href="#intro" class="inpage-nav-link">Introduction</a>
      <a href="#history" class="inpage-nav-link">Milestones</a>
      <a href="#philosophy" class="inpage-nav-link">Philosophy</a>
      <a href="#toolkit" class="inpage-nav-link">Tools &amp; Setup</a>
      <a href="#location" class="inpage-nav-link">Location</a>
    </nav>

    <article style="font-size: var(--text-md); line-height: 1.75; margin-bottom: 3.5rem;">
      <!-- Section 1: Intro -->
      <section style="margin-bottom: 3.5rem;">
        <h2 id="intro" style="font-size: 1.75rem; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between;">
          <span>Engineering with Intention</span>
          <a href="#intro" style="font-family: var(--font-mono); font-size: 1rem; color: var(--color-fg-muted); background-image: none !important;">#</a>
        </h2>

        <p>
          I am <strong>Ton Bunheng</strong>, a Full-Stack Web Developer based in Siem Reap, Cambodia. I build production-grade web systems from the database layer all the way to responsive, accessible client interfaces.
        </p>

        <p>
          My core expertise is centered around the synergy of <strong>Laravel &amp; PHP</strong> on the backend and <strong>Vue.js 3 (Composition API)</strong> on the frontend. I enjoy designing clean, normalized relational schemas, structuring maintainable RESTful APIs, and implementing fast, responsive user interfaces that respect user attention and load swiftly.
        </p>
      </section>

      <!-- Section: Journey & Milestones Timeline -->
      <section style="margin-bottom: 3.5rem;">
        <h2 id="history" style="font-size: 1.75rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
          <span>Journey &amp; Milestones</span>
          <a href="#history" style="font-family: var(--font-mono); font-size: 1rem; color: var(--color-fg-muted); background-image: none !important;">#</a>
        </h2>

        <div>
          <div class="log-entry">
            <span class="log-entry-marker">2026</span>
            <div class="log-entry-body">
              <strong>Professional Focus Expansion</strong>
              <p style="font-size: var(--text-sm); color: var(--color-fg-light); margin-bottom: 0;">
                Focusing on building high-scalability web platforms and refining complex system architectures with modern full-stack methodologies.
              </p>
            </div>
          </div>

          <div class="log-entry">
            <span class="log-entry-marker">2025</span>
            <div class="log-entry-body">
              <strong>Commercial Production Deployment</strong>
              <p style="font-size: var(--text-sm); color: var(--color-fg-light); margin-bottom: 0;">
                Engineered and shipped the Restaurant Ordering System with real-time carts, administrative dashboards, role-based access control, and payment integration.
              </p>
            </div>
          </div>

          <div class="log-entry">
            <span class="log-entry-marker">2024</span>
            <div class="log-entry-body">
              <strong>Deep Dive into Modern Web Tooling</strong>
              <p style="font-size: var(--text-sm); color: var(--color-fg-light); margin-bottom: 0;">
                Mastered Vue 3 Composition API, Vite build ecosystems, Tailwind CSS design systems, and robust MySQL relational database design.
              </p>
            </div>
          </div>

          <div class="log-entry">
            <span class="log-entry-marker">2023</span>
            <div class="log-entry-body">
              <strong>Foundations &amp; Academic Journey</strong>
              <p style="font-size: var(--text-sm); color: var(--color-fg-light); margin-bottom: 0;">
                Commenced Bachelor of Science in Information Technology, focusing on software engineering principles, algorithms, and core computing fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Philosophy -->
      <section style="margin-bottom: 3.5rem;">
        <h2 id="philosophy" style="font-size: 1.75rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
          <span>Core Engineering Principles</span>
          <a href="#philosophy" style="font-family: var(--font-mono); font-size: 1rem; color: var(--color-fg-muted); background-image: none !important;">#</a>
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div style="padding: 1.5rem; background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-md);">
            <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--color-fg-bold);">1. Simplicity over Complexity</h3>
            <p style="font-family: var(--font-body); font-size: var(--text-sm); color: var(--color-fg-light); margin-bottom: 0; line-height: 1.55;">
              I avoid premature abstractions and hype-driven development. Clean, explicit code with well-chosen naming and clear data flows is always easier to maintain, test, and evolve.
            </p>
          </div>

          <div style="padding: 1.5rem; background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-md);">
            <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--color-fg-bold);">2. Performance by Default</h3>
            <p style="font-family: var(--font-body); font-size: var(--text-sm); color: var(--color-fg-light); margin-bottom: 0; line-height: 1.55;">
              Fast websites deliver better user engagement. I optimize database queries, index schemas, minimize bundle sizes, and leverage efficient asset loading.
            </p>
          </div>

          <div style="padding: 1.5rem; background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-md);">
            <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--color-fg-bold);">3. User Experience &amp; Polish</h3>
            <p style="font-family: var(--font-body); font-size: var(--text-sm); color: var(--color-fg-light); margin-bottom: 0; line-height: 1.55;">
              Attention to subtle micro-interactions, responsive touch targets, smooth keyboard navigation, and coherent visual hierarchy transforms an app into a joyful experience.
            </p>
          </div>

          <div style="padding: 1.5rem; background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-md);">
            <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--color-fg-bold);">4. Security &amp; Data Integrity</h3>
            <p style="font-family: var(--font-body); font-size: var(--text-sm); color: var(--color-fg-light); margin-bottom: 0; line-height: 1.55;">
              Strict request validation, parameterized queries against SQL injection, CSRF protection, and secure token management are foundational to every project.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 3: Tools & Setup -->
      <section style="margin-bottom: 4rem;">
        <h2 id="toolkit" style="font-size: 1.75rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
          <span>Tools &amp; Setup</span>
          <a href="#toolkit" style="font-family: var(--font-mono); font-size: 1rem; color: var(--color-fg-muted); background-image: none !important;">#</a>
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 0.75rem; margin-bottom: 2rem;">
          <div
            v-for="item in techIcons"
            :key="item.name"
            style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.85rem 0.5rem; background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-sm);"
          >
            <TechIcon :name="item.name" size="1.75rem" />
            <span style="font-family: var(--font-mono); font-size: var(--text-2xs); font-weight: 600; color: var(--color-fg-bold); text-align: center;">
              {{ item.name }}
            </span>
          </div>
        </div>

        <table class="stat-table">
          <tbody>
            <tr>
              <th scope="row" class="stat-table-label">Primary Languages</th>
              <td class="stat-table-value">PHP, JavaScript (ES6+), Python, SQL, HTML5/CSS3</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Core Frameworks</th>
              <td class="stat-table-value">Laravel 11, Vue.js 3 (Composition API), React.js</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Styling &amp; UI</th>
              <td class="stat-table-value">Tailwind CSS, Vanilla CSS Design Systems, Responsive Design</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Databases &amp; ORM</th>
              <td class="stat-table-value">MySQL, SQLite, Eloquent ORM</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Development Environment</th>
              <td class="stat-table-value">VS Code, macOS / Linux, Git, Postman, TablePlus</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Build Tools &amp; Package Managers</th>
              <td class="stat-table-value">Vite, Composer, NPM / PNPM</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- Section 4: Location -->
      <section style="margin-bottom: 3rem;">
        <h2 id="location" style="font-size: 1.75rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
          <span>Location &amp; Remote Collaboration</span>
          <a href="#location" style="font-family: var(--font-mono); font-size: 1rem; color: var(--color-fg-muted); background-image: none !important;">#</a>
        </h2>

        <p style="font-size: var(--text-md); line-height: 1.7;">
          I am currently based in <strong>Siem Reap, Cambodia (UTC+7)</strong>. I am comfortable collaborating across asynchronous workflows and multiple time zones, utilizing Git, GitHub PRs, Slack/Discord, and video calls to stay synchronized.
        </p>

        <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
          <router-link to="/contact" class="button">Get In Touch</router-link>
          <router-link to="/resume" class="button-outline">View Resume</router-link>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup>
import TechIcon from '../components/TechIcon.vue';

const techIcons = [
  { name: 'Vue.js 3' },
  { name: 'React.js' },
  { name: 'Laravel 11' },
  { name: 'PHP' },
  { name: 'Python' },
  { name: 'JavaScript' },
  { name: 'Tailwind CSS' },
  { name: 'MySQL' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'Git & GitHub' }
];
</script>
