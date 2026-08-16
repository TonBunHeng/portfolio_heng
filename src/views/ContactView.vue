<template>
  <div class="page-main page-main--contact">
    <header style="margin-bottom: 2rem;">
      <h1 class="page-title">Get in Touch</h1>
      <p class="page-subtitle">
        Have an exciting project, full-time engineering opportunity, or general inquiry? Feel free to reach out.
      </p>
    </header>

    <div class="contact-content">
      <!-- Interactive Animated Email Block -->
      <div style="background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 3rem;">
        <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-accent); font-weight: 600; text-transform: uppercase; letter-spacing: var(--tracking-label); margin-bottom: 0.5rem;">
          Direct Email
        </div>
        
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
          <a
            href="mailto:tonbunheng1122@gmail.com"
            style="font-family: var(--font-mono); font-size: clamp(1.1rem, 3.5vw, 1.6rem); font-weight: 700; color: var(--color-fg-bold); background-image: none !important;"
          >
            tonbunheng1122@gmail.com
          </a>

          <div style="display: flex; gap: 0.75rem; align-items: center;">
            <button
              type="button"
              class="button-outline"
              @click="copyEmail"
              style="height: 2.5rem; font-size: var(--text-xs);"
            >
              <svg v-if="!copied" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ea043" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{{ copied ? 'Copied to Clipboard!' : 'Copy Email' }}</span>
            </button>

            <a
              href="mailto:tonbunheng1122@gmail.com"
              class="button"
              style="height: 2.5rem; font-size: var(--text-xs);"
            >
              Open Mail Client ↗
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Message Form -->
      <div style="display: grid; grid-template-columns: 1.35fr 1fr; gap: 3.5rem; align-items: flex-start;" class="contact-grid">
        <form
          @submit.prevent="handleSubmit"
          style="background: var(--color-card-bg); border: var(--rule) solid var(--color-border); border-radius: var(--radius-lg); padding: 2rem; display: flex; flex-direction: column; gap: 1.25rem;"
          novalidate
        >
          <h2 style="font-size: 1.35rem; margin-bottom: 0.25rem;">Send a Message</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;" class="form-row-2">
            <div>
              <label for="name" style="display: block; font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-fg-light); margin-bottom: 0.35rem; text-transform: uppercase;">
                Your Name <span style="color: var(--color-accent);">*</span>
              </label>
              <input
                id="name"
                type="text"
                v-model="form.name"
                placeholder="e.g. Alex Smith"
                required
                :style="inputStyle(errors.name)"
              />
            </div>
            <div>
              <label for="email" style="display: block; font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-fg-light); margin-bottom: 0.35rem; text-transform: uppercase;">
                Your Email <span style="color: var(--color-accent);">*</span>
              </label>
              <input
                id="email"
                type="email"
                v-model="form.email"
                placeholder="alex@company.com"
                required
                :style="inputStyle(errors.email)"
              />
            </div>
          </div>

          <div>
            <label for="subject" style="display: block; font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-fg-light); margin-bottom: 0.35rem; text-transform: uppercase;">
              Subject <span style="color: var(--color-accent);">*</span>
            </label>
            <input
              id="subject"
              type="text"
              v-model="form.subject"
              placeholder="Full-stack opportunity / Project inquiry"
              required
              :style="inputStyle(errors.subject)"
            />
          </div>

          <div>
            <label for="message" style="display: block; font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-fg-light); margin-bottom: 0.35rem; text-transform: uppercase;">
              Message <span style="color: var(--color-accent);">*</span>
            </label>
            <textarea
              id="message"
              rows="5"
              v-model="form.message"
              placeholder="Tell me about your goals, timelines, and requirements..."
              required
              :style="inputStyle(errors.message)"
              style="resize: vertical; min-height: 120px;"
            ></textarea>
          </div>

          <button
            type="submit"
            class="button"
            style="width: 100%; height: 3rem; margin-top: 0.5rem;"
            :disabled="isSubmitting"
          >
            <template v-if="isSubmitting">Sending Message...</template>
            <template v-else-if="isSent">✓ Message Sent Successfully!</template>
            <template v-else>Send Message →</template>
          </button>

          <p
            v-if="isSent"
            style="font-family: var(--font-mono); font-size: var(--text-xs); color: #2ea043; background: rgba(46, 160, 67, 0.1); border: var(--rule) solid rgba(46, 160, 67, 0.25); padding: 0.75rem 1rem; border-radius: var(--radius-sm); margin-bottom: 0; text-align: center;"
          >
            Thank you! Your message has been received. I typically respond within 24 hours.
          </p>
        </form>

        <!-- Sidebar Info -->
        <div>
          <h2 style="font-size: 1.35rem; margin-bottom: 1rem;">Details &amp; Channels</h2>
          
          <div style="margin-bottom: 2rem;">
            <span style="font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--color-fg-muted); text-transform: uppercase; display: block; margin-bottom: 0.25rem;">
              Location &amp; Timezone
            </span>
            <p style="font-size: var(--text-md); color: var(--color-fg-bold); margin-bottom: 0;">
              Siem Reap, Cambodia (UTC+7)
            </p>
          </div>

          <div style="margin-bottom: 2rem;">
            <span style="font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--color-fg-muted); text-transform: uppercase; display: block; margin-bottom: 0.25rem;">
              Response Time
            </span>
            <p style="font-size: var(--text-md); color: var(--color-fg-bold); margin-bottom: 0;">
              Usually within 24 business hours
            </p>
          </div>

          <div style="margin-bottom: 2rem;">
            <span style="font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--color-fg-muted); text-transform: uppercase; display: block; margin-bottom: 0.5rem;">
              Connect Online
            </span>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <a
                href="https://github.com/tonbunheng1122-cloud"
                target="_blank"
                rel="noopener noreferrer"
                style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--color-fg); display: inline-flex; align-items: center; gap: 0.5rem;"
              >
                GitHub · tonbunheng1122-cloud ↗
              </a>
              <a
                href="https://linkedin.com/in/tonbunheng"
                target="_blank"
                rel="noopener noreferrer"
                style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--color-fg); display: inline-flex; align-items: center; gap: 0.5rem;"
              >
                LinkedIn · in/tonbunheng ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const errors = reactive({
  name: false,
  email: false,
  subject: false,
  message: false
});

const isSubmitting = ref(false);
const isSent = ref(false);
const copied = ref(false);

const inputStyle = (hasError) => ({
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: 'var(--radius-sm)',
  background: 'var(--color-bg)',
  border: hasError ? '1px solid #cf222e' : 'var(--rule) solid var(--color-border)',
  color: 'var(--color-fg-bold)',
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-sm)',
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-out)'
});

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('tonbunheng1122@gmail.com');
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 3000);
  } catch(e) {
    copied.value = false;
  }
};

const handleSubmit = () => {
  errors.name = !form.name.trim();
  errors.email = !form.email.trim() || !form.email.includes('@');
  errors.subject = !form.subject.trim();
  errors.message = !form.message.trim();

  if (errors.name || errors.email || errors.subject || errors.message) return;

  isSubmitting.value = true;
  setTimeout(() => {
    isSubmitting.value = false;
    isSent.value = true;
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';

    setTimeout(() => {
      isSent.value = false;
    }, 6000);
  }, 1200);
};
</script>

<style scoped>
@media (max-width: 850px) {
  .contact-grid {
    grid-template-columns: 1fr !important;
    gap: 2.5rem !important;
  }
}

@media (max-width: 600px) {
  .form-row-2 {
    grid-template-columns: 1fr !important;
  }
}
</style>
