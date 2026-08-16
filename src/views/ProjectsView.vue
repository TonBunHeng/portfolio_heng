<template>
  <div class="page-main">
    <header style="margin-bottom: 2.5rem;">
      <h1 class="page-title">Projects</h1>
      <p class="page-subtitle">
        A selection of commercial applications, full-stack systems, and engineering projects I've built.
      </p>
    </header>

    <div style="display: flex; flex-direction: column; gap: 3.5rem;">
      <article
        v-for="project in projects"
        :key="project.id"
        style="background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-lg); overflow: hidden; display: grid; grid-template-columns: 1fr 1.25fr; gap: 0; transition: border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);"
        class="project-detail-card"
      >
        <!-- Project Image -->
        <div style="min-height: 240px; position: relative; overflow: hidden; background: var(--color-surface-subtle); border-right: var(--rule) solid var(--color-border);" class="project-img-wrapper">
          <img
            :src="project.image"
            :alt="project.title"
            style="width: 100%; height: 100%; object-fit: cover;"
            loading="lazy"
          />
          <div style="position: absolute; top: 1rem; left: 1rem; display: flex; gap: 0.5rem;">
            <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 600; padding: 0.25rem 0.55rem; border-radius: var(--radius-xs); background: rgba(14, 17, 22, 0.88); color: #fff;">
              {{ project.category }}
            </span>
            <span v-if="project.isFeatured" style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 700; padding: 0.25rem 0.55rem; border-radius: var(--radius-xs); background: var(--color-accent-fill); color: #fff; text-transform: uppercase;">
              Featured
            </span>
          </div>
        </div>

        <!-- Project Content -->
        <div style="padding: 2rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; margin-bottom: 0.25rem;">
              <h2 style="font-size: 1.5rem; margin-bottom: 0;">{{ project.title }}</h2>
              <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-fg-muted); shrink-0:">
                {{ project.date }}
              </span>
            </div>

            <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-accent); font-weight: 500; margin-bottom: 1rem;">
              {{ project.subtitle }}
            </div>

            <p style="font-family: var(--font-body); font-size: var(--text-md); color: var(--color-fg); line-height: 1.6; margin-bottom: 1rem;">
              {{ project.desc }}
            </p>

            <div style="margin-bottom: 1.25rem;">
              <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 600; color: var(--color-fg-light); text-transform: uppercase; display: block; margin-bottom: 0.35rem;">
                Problem Solved &amp; Architecture:
              </span>
              <p style="font-family: var(--font-body); font-size: var(--text-sm); color: var(--color-fg-light); line-height: 1.5; margin-bottom: 0;">
                {{ project.problemSolved }}
              </p>
            </div>

            <!-- Tech Tags -->
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
              <span
                v-for="tag in project.tags"
                :key="tag"
                style="font-family: var(--font-mono); font-size: var(--text-2xs); padding: 0.25rem 0.6rem; border-radius: var(--radius-xs); background: var(--color-surface-subtle); border: var(--rule) solid var(--color-border); color: var(--color-fg);"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Links -->
          <div style="display: flex; gap: 0.85rem; align-items: center; padding-top: 1rem; border-top: var(--rule) solid var(--color-border); flex-wrap: wrap;">
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="button"
            >
              Live Demo ↗
            </a>
            <a
              v-if="project.codeUrl"
              :href="project.codeUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="button-outline"
            >
              GitHub Repository ↗
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { projects } from '../data/projects.js';
</script>

<style scoped>
@media (max-width: 800px) {
  .project-detail-card {
    grid-template-columns: 1fr !important;
  }
  .project-img-wrapper {
    border-right: none !important;
    border-bottom: var(--rule) solid var(--color-border) !important;
    height: 220px !important;
  }
}

.project-detail-card:hover {
  border-color: var(--color-border-alt);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
}
</style>
