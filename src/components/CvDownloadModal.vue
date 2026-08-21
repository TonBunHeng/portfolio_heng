<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        class="cv-modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
        @click.self="close"
      >
        <div class="cv-modal-card" @click.stop>
          <!-- Header -->
          <div class="cv-modal-header">
            <div class="cv-modal-header-text">
              <div class="cv-modal-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Curriculum Vitae</span>
              </div>
              <h2 id="cv-modal-title" class="cv-modal-title">Download CV</h2>
              <p class="cv-modal-subtitle">Choose your preferred format to download:</p>
            </div>

            <button
              type="button"
              class="cv-modal-close"
              aria-label="Close dialog"
              @click="close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <!-- Options List -->
          <div class="cv-options-list">
            <!-- PDF Option -->
            <a
              href="/cv/Ton_BunHeng_Software_Developer_CV.pdf"
              download="Ton_BunHeng_Software_Developer_CV.pdf"
              class="cv-option-card option-pdf"
              @click="handleDownload('PDF')"
            >
              <div class="cv-option-icon-wrapper pdf-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
                <span class="cv-file-ext">PDF</span>
              </div>

              <div class="cv-option-details">
                <div class="cv-option-name-row">
                  <span class="cv-option-name">PDF Format</span>
                  <span class="cv-badge-recommended">Recommended</span>
                </div>
                <p class="cv-option-desc">Preserves layout &amp; styling. Ideal for viewing, printing, and ATS systems.</p>
                <span class="cv-file-meta">.PDF • ~50 KB</span>
              </div>

              <div class="cv-option-action">
                <span class="cv-download-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
              </div>
            </a>

            <!-- Word Option -->
            <a
              href="/cv/Ton_BunHeng_Software_Developer_CV.docx"
              download="Ton_BunHeng_Software_Developer_CV.docx"
              class="cv-option-card option-word"
              @click="handleDownload('Word')"
            >
              <div class="cv-option-icon-wrapper word-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span class="cv-file-ext">DOCX</span>
              </div>

              <div class="cv-option-details">
                <div class="cv-option-name-row">
                  <span class="cv-option-name">Microsoft Word</span>
                  <span class="cv-badge-editable">Editable</span>
                </div>
                <p class="cv-option-desc">Fully customizable document. Ideal for recruiters and direct editing.</p>
                <span class="cv-file-meta">.DOCX • ~29 KB</span>
              </div>

              <div class="cv-option-action">
                <span class="cv-download-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
              </div>
            </a>
          </div>

          <!-- Footer -->
          <div class="cv-modal-footer">
            <button type="button" class="button-outline button-sm cv-cancel-btn" @click="close">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};

const handleDownload = () => {
  // Give the browser a moment to initiate download before closing modal
  setTimeout(() => {
    close();
  }, 400);
};

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    close();
  }
};

watch(
  () => props.isOpen,
  (val) => {
    if (typeof document !== 'undefined') {
      if (val) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
);

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.cv-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background-color: rgba(13, 17, 23, 0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.cv-modal-card {
  position: relative;
  width: 100%;
  max-width: 520px;
  background: var(--color-bg);
  border: var(--rule) solid var(--color-border-alt);
  border-radius: var(--radius-lg);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px var(--color-border);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transform-origin: center center;
}

/* Header */
.cv-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.cv-modal-header-text {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.cv-modal-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: var(--text-2xs);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: var(--tracking-label);
  font-weight: 600;
}

.cv-modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-fg-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  margin: 0;
}

.cv-modal-subtitle {
  font-size: var(--text-sm);
  color: var(--color-fg-light);
  margin: 0;
  line-height: var(--leading-snug);
}

.cv-modal-close {
  appearance: none;
  background: var(--color-surface-subtle);
  border: var(--rule) solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-fg-muted);
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all var(--duration-fast) var(--ease-out);
}

.cv-modal-close:hover {
  background: var(--color-surface-hover);
  color: var(--color-fg-bold);
  border-color: var(--color-border-alt);
}

/* Options */
.cv-options-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cv-option-card {
  display: flex;
  align-items: center;
  gap: 1.15rem;
  padding: 1.15rem 1.25rem;
  background: var(--color-card-bg);
  border: var(--rule) solid var(--color-border);
  border-radius: var(--radius-md);
  text-decoration: none !important;
  color: inherit !important;
  background-image: none !important;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
  position: relative;
  overflow: hidden;
}

.cv-option-card:hover {
  border-color: var(--color-accent);
  background: var(--color-surface-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px -6px var(--color-accent-light);
}

/* Icon */
.cv-option-icon-wrapper {
  position: relative;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform var(--duration-fast) var(--ease-out);
}

.cv-option-card:hover .cv-option-icon-wrapper {
  transform: scale(1.06);
}

.pdf-icon {
  background: rgba(239, 68, 68, 0.12);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.25);
}

[data-theme="dark"] .pdf-icon {
  background: rgba(248, 113, 113, 0.15);
  color: #f87171;
  border-color: rgba(248, 113, 113, 0.3);
}

.word-icon {
  background: rgba(37, 99, 235, 0.12);
  color: #2563eb;
  border: 1px solid rgba(37, 99, 235, 0.25);
}

[data-theme="dark"] .word-icon {
  background: rgba(96, 165, 250, 0.15);
  color: #60a5fa;
  border-color: rgba(96, 165, 250, 0.3);
}

.cv-file-ext {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-top: -2px;
}

/* Details */
.cv-option-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.cv-option-name-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.cv-option-name {
  font-family: var(--font-body);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-fg-bold);
  line-height: var(--leading-tight);
}

.cv-badge-recommended {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: var(--radius-full);
  background: var(--color-accent-light);
  color: var(--color-accent);
  border: 1px solid var(--color-accent-underline);
}

.cv-badge-editable {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: var(--radius-full);
  background: var(--color-surface-subtle);
  color: var(--color-fg-muted);
  border: 1px solid var(--color-border);
}

.cv-option-desc {
  font-size: var(--text-xs);
  color: var(--color-fg-light);
  line-height: 1.45;
  margin: 0;
}

.cv-file-meta {
  font-family: var(--font-mono);
  font-size: var(--text-2xs);
  color: var(--color-fg-muted);
}

/* Action button */
.cv-option-action {
  flex-shrink: 0;
}

.cv-download-btn {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: var(--radius-full);
  background: var(--color-surface-subtle);
  border: var(--rule) solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-fg-light);
  transition: all var(--duration-fast) var(--ease-out);
}

.cv-option-card:hover .cv-download-btn {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-on-accent);
  transform: translateY(-1px);
}

/* Footer */
.cv-modal-footer {
  display: flex;
  justify-content: flex-end;
  border-top: var(--rule) solid var(--color-border);
  padding-top: 1rem;
}

.cv-cancel-btn {
  min-width: 5rem;
}

/* Modal Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-fade-enter-active .cv-modal-card,
.modal-fade-leave-active .cv-modal-card {
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .cv-modal-card {
  opacity: 0;
  transform: scale(0.94) translateY(8px);
}

.modal-fade-leave-to .cv-modal-card {
  opacity: 0;
  transform: scale(0.97);
}

@media (max-width: 480px) {
  .cv-modal-card {
    padding: 1.25rem;
    gap: 1.15rem;
  }

  .cv-option-card {
    padding: 0.9rem;
    gap: 0.85rem;
  }

  .cv-option-icon-wrapper {
    width: 2.75rem;
    height: 2.75rem;
  }

  .cv-option-name {
    font-size: 0.95rem;
  }
}
</style>
