<template>
  <div class="page-main" style="max-width: var(--measure-read);">
    <div style="margin-bottom: 2rem;">
      <router-link
        to="/writing"
        style="font-family: var(--font-mono); font-size: var(--text-ui); font-weight: 500; color: var(--color-fg-light); display: inline-flex; align-items: center; gap: 0.35rem; margin-bottom: 1.5rem;"
      >
        ← Back to all writing
      </router-link>

      <div v-if="article">
        <div style="display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.75rem; margin-bottom: 0.75rem;">
          <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-accent); font-weight: 600; text-transform: uppercase;">
            {{ article.category }}
          </span>
          <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-fg-muted);">
            · {{ article.date }}
          </span>
          <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-fg-muted);">
            · {{ article.readTime }}
          </span>
        </div>

        <h1 style="font-size: clamp(2rem, 5vw, 3rem); line-height: 1.15; margin-bottom: 2rem; color: var(--color-fg-bold);">
          {{ article.title }}
        </h1>

        <!-- Author / Meta Block -->
        <div style="display: flex; align-items: center; gap: 0.85rem; padding: 1rem 0; border-top: var(--rule) solid var(--color-border); border-bottom: var(--rule) solid var(--color-border); margin-bottom: 2.5rem;">
          <img
            src="/picture/profile_v2.PNG"
            alt="Ton Bunheng"
            style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: var(--rule) solid var(--color-border);"
          />
          <div>
            <div style="font-family: var(--font-display); font-weight: 700; font-size: var(--text-base); color: var(--color-fg-bold);">
              Ton Bunheng
            </div>
            <div style="font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--color-fg-muted);">
              Full-Stack Web Developer
            </div>
          </div>
        </div>

        <!-- Article Content Body -->
        <div class="article-content" v-html="article.content"></div>

        <!-- Article Footer / CTA -->
        <div style="margin-top: 4rem; padding-top: 2rem; border-top: var(--rule) solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <router-link to="/writing" class="button-outline">
            ← All Articles
          </router-link>
          <router-link to="/contact" class="button">
            Discuss a Project
          </router-link>
        </div>
      </div>

      <div v-else style="padding: 4rem 0; text-align: center;">
        <h2 style="font-size: 1.75rem; margin-bottom: 1rem;">Article Not Found</h2>
        <p style="color: var(--color-fg-light); margin-bottom: 2rem;">The requested article could not be located.</p>
        <router-link to="/writing" class="button">Back to Writing</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { articles } from '../data/articles.js';

const route = useRoute();
const article = computed(() => articles.find(a => a.slug === route.params.slug));
</script>

<style>
.article-content {
  font-family: var(--font-body);
  font-size: var(--text-md);
  line-height: 1.75;
  color: var(--color-fg);
}

.article-content h2 {
  font-size: 1.6rem;
  margin: 2.5rem 0 1rem;
  color: var(--color-fg-bold);
}

.article-content p {
  margin-bottom: 1.35rem;
}

.article-content ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
}

.article-content pre {
  background: var(--color-card-bg);
  border: var(--rule) solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 1.25rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.article-content pre code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  color: var(--color-fg-bold);
}
</style>
