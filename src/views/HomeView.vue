<template>
  <div class="page-main page-main--hero">
    <!-- Hero Section -->
    <section class="hero-grid">
      <div class="hero-primary">
        <h1 class="hero-title">
          <span class="hero-name">Ton Bunheng</span>
        </h1>
        <p class="hero-tagline">
          I'm a <span class="hero-highlight">Full-Stack Web Developer</span> based in Siem Reap, Cambodia. I specialize in building end-to-end applications with <router-link to="/projects" class="hero-highlight">Vue.js</router-link> on the frontend and <router-link to="/projects" class="hero-highlight">Laravel &amp; PHP</router-link> on the backend. I craft fast, scalable, and accessible software with clean REST APIs and polished reactive user experiences.
        </p>
        <div class="hero-cta">
          <router-link class="button" to="/about">About Me</router-link>
          <router-link class="hero-resume-link" to="/resume">
            View Resume <span aria-hidden="true">→</span>
          </router-link>
        </div>
      </div>

      <div class="hero-portrait">
        <div class="theme-portrait">
          <!-- Multi-photo cycling slider -->
          <div class="portrait-slider">
            <img
              v-for="(imgSrc, idx) in profilePictures"
              :key="imgSrc"
              :src="imgSrc"
              :alt="`Ton Bunheng — Photo ${idx + 1}`"
              width="320"
              height="400"
              :class="['portrait-slide-img', { active: currentImageIndex === idx }]"
              loading="eager"
              decoding="async"
            />
          </div>

          <!-- Slide Indicator Dots -->
          <div class="portrait-dots" aria-label="Photo carousel indicators">
            <button
              v-for="(_, idx) in profilePictures"
              :key="idx"
              type="button"
              :class="['portrait-dot', { active: currentImageIndex === idx }]"
              @click="setPhoto(idx)"
              :aria-label="`Switch to photo ${idx + 1}`"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Icons Showcase Strip -->
    <section style="padding: 2.5rem 0; border-bottom: var(--rule) solid var(--color-border);" aria-label="Core technologies">
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; margin-bottom: 1.25rem;">
        <span style="font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--color-fg-muted); text-transform: uppercase; letter-spacing: var(--tracking-label);">
          Core Technologies &amp; Tooling
        </span>
        <router-link to="/resume#skills" style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-accent); font-weight: 500;">
          All skills &amp; metrics →
        </router-link>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 0.85rem;">
        <div
          v-for="tech in coreTechs"
          :key="tech.name"
          style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; padding: 1.1rem 0.5rem; background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-sm); transition: transform var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out);"
          class="tech-icon-box"
        >
          <TechIcon :name="tech.name" size="2rem" />
          <span style="font-family: var(--font-mono); font-size: var(--text-2xs); font-weight: 600; color: var(--color-fg-bold); text-align: center;">
            {{ tech.name }}
          </span>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section style="padding: 4rem 0 3rem; border-bottom: var(--rule) solid var(--color-border);" aria-labelledby="featured-projects-title">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem;">
        <div>
          <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-accent); font-weight: 600; text-transform: uppercase; letter-spacing: var(--tracking-label); display: block; margin-bottom: 0.25rem;">
            Selected Work
          </span>
          <h2 id="featured-projects-title" style="margin-bottom: 0;">Featured Projects</h2>
        </div>
        <router-link to="/projects" style="font-family: var(--font-mono); font-size: var(--text-ui); font-weight: 600; color: var(--color-accent);">
          View all projects →
        </router-link>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.75rem;">
        <article
          v-for="project in featuredProjects"
          :key="project.id"
          style="background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column; transition: transform var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);"
          class="project-card-hover"
        >
          <div style="height: 180px; width: 100%; position: relative; overflow: hidden; background: var(--color-surface-subtle); border-bottom: var(--rule) solid var(--color-border);">
            <img
              :src="project.image"
              :alt="project.title"
              style="width: 100%; height: 100%; object-fit: cover;"
              loading="lazy"
            />
            <span style="position: absolute; top: 0.75rem; left: 0.75rem; font-family: var(--font-mono); font-size: 0.65rem; font-weight: 600; padding: 0.25rem 0.5rem; border-radius: var(--radius-xs); background: rgba(14, 17, 22, 0.85); color: #fff;">
              {{ project.category }}
            </span>
          </div>

          <div style="padding: 1.25rem; display: flex; flex-direction: column; flex: 1; justify-content: space-between;">
            <div>
              <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">{{ project.title }}</h3>
              <p style="font-family: var(--font-body); font-size: var(--text-sm); color: var(--color-fg-light); line-height: 1.5; margin-bottom: 1rem;">
                {{ project.desc }}
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.25rem;">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  style="font-family: var(--font-mono); font-size: 0.7rem; padding: 0.2rem 0.5rem; border-radius: var(--radius-xs); background: var(--color-surface-subtle); border: var(--rule) solid var(--color-border); color: var(--color-fg);"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <div style="display: flex; gap: 0.5rem; padding-top: 1rem; border-top: var(--rule) solid var(--color-border); flex-wrap: wrap;">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="button button-sm"
                style="flex: 1; min-width: max-content;"
              >
                Live Demo ↗
              </a>
              <a
                v-if="project.codeUrl"
                :href="project.codeUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="button-outline button-sm"
                style="flex: 1; min-width: max-content;"
              >
                Source Code ↗
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Latest Technical Writing Section -->
    <section style="padding: 4rem 0 2rem;" aria-labelledby="latest-writing-title">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem;">
        <div>
          <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-accent); font-weight: 600; text-transform: uppercase; letter-spacing: var(--tracking-label); display: block; margin-bottom: 0.25rem;">
            From The Desk
          </span>
          <h2 id="latest-writing-title" style="margin-bottom: 0;">Technical Articles</h2>
        </div>
        <router-link to="/writing" style="font-family: var(--font-mono); font-size: var(--text-ui); font-weight: 600; color: var(--color-accent);">
          Read all articles →
        </router-link>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <article
          v-for="post in latestArticles"
          :key="post.slug"
          style="padding: 1.5rem; background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-md); transition: border-color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);"
          class="writing-item-card"
        >
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 0.5rem; margin-bottom: 0.35rem;">
            <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-accent); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
              {{ post.category }}
            </span>
            <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-fg-muted);">
              {{ post.date }}
            </span>
          </div>

          <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">
            <router-link :to="`/writing/${post.slug}`" style="color: var(--color-fg-bold);">
              {{ post.title }}
            </router-link>
          </h3>

          <p style="font-family: var(--font-body); font-size: var(--text-sm); color: var(--color-fg-light); line-height: 1.55; margin-bottom: 0.75rem;">
            {{ post.summary }}
          </p>

          <router-link
            :to="`/writing/${post.slug}`"
            style="font-family: var(--font-mono); font-size: var(--text-xs); font-weight: 600; color: var(--color-accent);"
          >
            Read full article →
          </router-link>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import TechIcon from '../components/TechIcon.vue';
import { articles } from '../data/articles.js';
import { projects } from '../data/projects.js';

// Profile Pictures Cycling (every 3 seconds)
const profilePictures = [
  '/picture/profile_v2.PNG',
  '/picture/DSC_2730.JPG',
  '/picture/IMG_9021.jpeg'
];

const currentImageIndex = ref(0);
let imageTimer = null;

const startImageTimer = () => {
  if (imageTimer) clearInterval(imageTimer);
  imageTimer = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % profilePictures.length;
  }, 3000);
};

const setPhoto = (idx) => {
  currentImageIndex.value = idx;
  startImageTimer(); // Reset interval on manual click
};

onMounted(() => {
  startImageTimer();
});

onUnmounted(() => {
  if (imageTimer) clearInterval(imageTimer);
});

const coreTechs = [
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

const featuredProjects = computed(() => projects.filter(p => p.isFeatured));

const latestArticles = computed(() => articles.slice(0, 3));
</script>

<style scoped>
.portrait-slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.portrait-slide-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  opacity: 0;
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  transform: scale(1.02);
  pointer-events: none;
}

.portrait-slide-img.active {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

.portrait-dots {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  gap: 0.35rem;
  z-index: 3;
  padding: 0.3rem 0.5rem;
  background: rgba(14, 17, 22, 0.55);
  backdrop-filter: blur(8px);
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.portrait-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.45);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.portrait-dot.active {
  width: 18px;
  background: #ffffff;
}

.tech-icon-box:hover {
  transform: translateY(-3px);
  border-color: var(--color-border-alt);
}

.project-card-hover:hover {
  transform: translateY(-3px);
  border-color: var(--color-border-alt);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

.writing-item-card:hover {
  border-color: var(--color-accent-underline-strong);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}
</style>
