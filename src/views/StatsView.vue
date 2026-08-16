<template>
  <div class="page-main">
    <header style="margin-bottom: 2.5rem;">
      <h1 class="page-title">Stats</h1>
      <p class="page-subtitle">
        A live collection of personal and technical metrics.
      </p>
    </header>

    <div class="stats-content">
      <!-- Section 1: About me -->
      <section style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Personal Metrics</h2>
        
        <table class="stat-table">
          <thead class="sr-only">
            <tr>
              <th scope="col">Metric</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="stat-table-label">Current age</th>
              <td class="stat-table-value" style="font-feature-settings: 'tnum';">
                {{ age }}
              </td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Current location</th>
              <td class="stat-table-value">Siem Reap, Cambodia (UTC+7)</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Primary specialization</th>
              <td class="stat-table-value">Vue.js 3 &amp; Laravel Full-Stack</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Years engineering web apps</th>
              <td class="stat-table-value">1 year</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Work availability</th>
              <td class="stat-table-value" style="color: #2ea043;">
                ● Available for Full-Time &amp; Contracts
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- Section 2: Codebase & Site Stats -->
      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Site &amp; Engineering Stats</h2>

        <table class="stat-table">
          <thead class="sr-only">
            <tr>
              <th scope="col">Statistic</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="stat-table-label">Frontend framework</th>
              <td class="stat-table-value">Vue 3 (Composition API) + Vite</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Styling methodology</th>
              <td class="stat-table-value">Vanilla CSS Design Tokens</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Client bundle size</th>
              <td class="stat-table-value">&lt; 45 KB gzipped</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Primary backend preference</th>
              <td class="stat-table-value">Laravel 11 / PHP 8.3 / REST API</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">Primary database</th>
              <td class="stat-table-value">MySQL (InnoDB)</td>
            </tr>
            <tr>
              <th scope="row" class="stat-table-label">GitHub repositories</th>
              <td class="stat-table-value">
                <a href="https://github.com/tonbunheng1122-cloud" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent);">
                  tonbunheng1122-cloud ↗
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const age = ref('');
// Birthdate for 21 years old (2005)
const birthDate = new Date('2005-01-01T00:00:00Z');
let timer = null;

const updateAge = () => {
  const now = new Date();
  const diffYears = (now - birthDate) / (1000 * 60 * 60 * 24 * 365.2425);
  age.value = diffYears.toFixed(9);
};

onMounted(() => {
  updateAge();
  timer = setInterval(updateAge, 50);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
