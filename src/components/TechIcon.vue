<template>
  <span class="tech-icon-wrapper" :style="{ fontSize: size || '1.75rem', width: size || '1.75rem', height: size || '1.75rem' }">
    <i :class="iconClass" :style="customStyle"></i>
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: '1.75rem'
  },
  colored: {
    type: Boolean,
    default: true
  }
});

const iconMap = {
  'vue': 'devicon-vuejs-plain',
  'vue.js': 'devicon-vuejs-plain',
  'vue.js 3': 'devicon-vuejs-plain',
  'vue 3': 'devicon-vuejs-plain',
  'vue.js 3 / composition api': 'devicon-vuejs-plain',
  'laravel': 'devicon-laravel-plain',
  'laravel 11': 'devicon-laravel-plain',
  'php': 'devicon-php-plain',
  'javascript': 'devicon-javascript-plain',
  'javascript (es6+)': 'devicon-javascript-plain',
  'js': 'devicon-javascript-plain',
  'tailwind': 'devicon-tailwindcss-plain',
  'tailwind css': 'devicon-tailwindcss-plain',
  'mysql': 'devicon-mysql-plain',
  'mysql database': 'devicon-mysql-plain',
  'mysql / relational design': 'devicon-mysql-plain',
  'html': 'devicon-html5-plain',
  'html5': 'devicon-html5-plain',
  'html5 & accessible semantics': 'devicon-html5-plain',
  'css': 'devicon-css3-plain',
  'css3': 'devicon-css3-plain',
  'css3 / styles': 'devicon-css3-plain',
  'git': 'devicon-git-plain',
  'git & github': 'devicon-github-original',
  'git & github workflow': 'devicon-github-original',
  'github': 'devicon-github-original',
  'flutter': 'devicon-flutter-plain',
  'flutter & dart': 'devicon-flutter-plain',
  'dart': 'devicon-dart-plain',
  'react': 'devicon-react-original',
  'react.js': 'devicon-react-original',
  'react js': 'devicon-react-original',
  'python': 'devicon-python-plain',
  'py': 'devicon-python-plain',
  'vite': 'devicon-vitejs-plain',
  'vite tooling': 'devicon-vitejs-plain',
  'vite build tool': 'devicon-vitejs-plain',
  'vite & frontend tooling': 'devicon-vitejs-plain',
  'postman': 'devicon-postman-plain',
  'postman / api testing': 'devicon-postman-plain',
  'restful apis': 'devicon-fastapi-plain',
  'restful api engineering': 'devicon-fastapi-plain',
  'restful api design': 'devicon-fastapi-plain',
  'rest apis': 'devicon-fastapi-plain'
};

const colorMap = {
  'vue': '#42b883',
  'vue.js': '#42b883',
  'vue.js 3': '#42b883',
  'vue 3': '#42b883',
  'vue.js 3 / composition api': '#42b883',
  'laravel': '#ff2d20',
  'laravel 11': '#ff2d20',
  'php': '#777bb4',
  'javascript': '#f7df1e',
  'javascript (es6+)': '#f7df1e',
  'js': '#f7df1e',
  'tailwind': '#06b6d4',
  'tailwind css': '#06b6d4',
  'mysql': '#4479a1',
  'mysql database': '#4479a1',
  'mysql / relational design': '#4479a1',
  'html': '#e34f26',
  'html5': '#e34f26',
  'html5 & accessible semantics': '#e34f26',
  'css': '#1572b6',
  'css3': '#1572b6',
  'css3 / styles': '#1572b6',
  'git': '#f05032',
  'git & github': '#24292e',
  'git & github workflow': '#24292e',
  'github': '#24292e',
  'flutter': '#02569b',
  'flutter & dart': '#02569b',
  'dart': '#0175c2',
  'react': '#61dafb',
  'react.js': '#61dafb',
  'react js': '#61dafb',
  'python': '#3776ab',
  'py': '#3776ab',
  'vite': '#646cff',
  'vite tooling': '#646cff',
  'vite build tool': '#646cff',
  'vite & frontend tooling': '#646cff',
  'postman': '#ff6c37',
  'postman / api testing': '#ff6c37',
  'restful apis': '#009688',
  'restful api engineering': '#009688',
  'restful api design': '#009688',
  'rest apis': '#009688'
};

const key = computed(() => props.name.toLowerCase().trim());

const iconClass = computed(() => {
  const base = iconMap[key.value] || 'devicon-code-plain';
  return props.colored ? `${base} colored` : base;
});

const customStyle = computed(() => {
  if (props.colored && colorMap[key.value]) {
    // Return color if colored devicon isn't available
    return { color: colorMap[key.value] };
  }
  return {};
});
</script>

<style scoped>
.tech-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.tech-icon-wrapper i {
  display: inline-block;
  line-height: 1;
}
</style>
