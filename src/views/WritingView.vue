<template>
  <div class="page-main">
    <header style="margin-bottom: 2.5rem;">
      <h1 class="page-title">Writing</h1>
      <p class="page-subtitle">
        Articles on full-stack web engineering, Laravel API design, Vue 3 architecture, and database performance.
      </p>
    </header>

    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <article
        v-for="article in articles"
        :key="article.slug"
        style="padding-bottom: 2rem; border-bottom: var(--rule) solid var(--color-border);"
      >
        <div style="display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.35rem;">
          <span style="font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--color-accent); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">
            {{ article.date }} · {{ article.category }}
          </span>
          <span style="font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--color-fg-muted);">
            {{ article.readTime }}
          </span>
        </div>

        <h2 style="font-size: 1.5rem; margin-bottom: 0.75rem;">
          <router-link :to="`/writing/${article.slug}`" style="color: var(--color-fg-bold);">
            {{ article.title }}
          </router-link>
        </h2>

        <p style="font-family: var(--font-body); font-size: var(--text-md); color: var(--color-fg); line-height: 1.6; margin-bottom: 1rem;">
          {{ article.summary }}
        </p>

        <router-link
          :to="`/writing/${article.slug}`"
          style="font-family: var(--font-mono); font-size: var(--text-ui); font-weight: 600; color: var(--color-accent); display: inline-flex; align-items: center; gap: 0.25rem;"
        >
          Read article <span aria-hidden="true">→</span>
        </router-link>
      </article>
    </div>
  </div>
</template>

<script setup>
import { articles } from '../data/articles.js';
</script>
