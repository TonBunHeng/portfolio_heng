export const articles = [
  {
    slug: 'scalable-rest-api-architecture-laravel',
    title: 'Architecting Resilient REST APIs with Laravel 11 and Vue 3',
    date: 'February 15, 2026',
    readTime: '6 min read',
    category: 'Backend Architecture',
    summary: 'A deep-dive into structuring clean service layers, request validation patterns, JWT/Sanctum authentication, and optimized payload design for frontend consumption.',
    content: `
      <p>Building modern web applications requires a robust, scalable contract between your backend and frontend. When combining Laravel 11 as a headless API with Vue 3 on the client, clean architecture is the difference between rapid feature iteration and architectural decay.</p>

      <h2>1. The Controller Should Not Hold Business Logic</h2>
      <p>In standard MVC setups, controllers often become bloated with database queries, authorization checks, external notifications, and data formatting. Instead, adhere to the <strong>Single Responsibility Principle (SRP)</strong>:</p>
      <ul>
        <li><strong>Form Requests:</strong> Dedicated validation classes (e.g., <code>StoreOrderRequest</code>).</li>
        <li><strong>Service Layer:</strong> Pure business logic classes handling domain execution.</li>
        <li><strong>API Resources:</strong> Dedicated transformation layer (e.g., <code>OrderResource</code>) ensuring strict, predictable JSON schemas.</li>
      </ul>

      <h2>2. Standardizing the API Response Envelope</h2>
      <p>Consistent responses make frontend error handling and state synchronization effortless. In Vue 3, having predictable envelopes allows Axios or Fetch interceptors to handle toast notifications, authentication expiration, and validation errors transparently:</p>
      <pre><code>{
  "success": true,
  "data": {
    "id": 1042,
    "status": "confirmed",
    "total": 45.00
  },
  "message": "Order placed successfully"
}</code></pre>

      <h2>3. Efficient Querying with Eloquent API Resources</h2>
      <p>Always avoid the notorious <code>N+1 query problem</code> by eager-loading relations prior to transformation. Using <code>with(['items.product', 'customer'])</code> ensures consistent O(1) query complexity regardless of list length.</p>

      <h2>Conclusion</h2>
      <p>By enforcing separation of concerns and establishing strict API schemas, your full-stack applications remain maintainable as they scale from early prototypes to high-traffic production platforms.</p>
    `
  },
  {
    slug: 'mastering-vue-composition-api',
    title: 'State Management and Component Architecture with Vue 3 Composition API',
    date: 'January 20, 2026',
    readTime: '5 min read',
    category: 'Frontend Engineering',
    summary: 'How to build predictable, modular, and maintainable frontend state without over-engineering or introducing unnecessary external state libraries.',
    content: `
      <p>With the advent of the <code>&lt;script setup&gt;</code> syntax and the Composition API, Vue 3 revolutionized how developers structure component logic. Composables allow us to extract reactive state and behavior into reusable, clean modules.</p>

      <h2>1. The Power of Composables</h2>
      <p>Rather than relying on monolithic store libraries for every piece of state, lightweight composables using <code>ref</code>, <code>reactive</code>, and <code>computed</code> provide pinpoint reactivity without overhead:</p>
      <pre><code>import { ref, computed } from 'vue';

export function useCart() {
  const items = ref([]);
  const total = computed(() => items.value.reduce((acc, i) => acc + i.price * i.qty, 0));

  function addItem(product) {
    const existing = items.value.find(i => i.id === product.id);
    if (existing) existing.qty++;
    else items.value.push({ ...product, qty: 1 });
  }

  return { items, total, addItem };
}</code></pre>

      <h2>2. Props Down, Events Up</h2>
      <p>Keep your UI presentation components dumb and your container views smart. Presentation components receive structured props and emit typed events (<code>defineEmits</code>), making them trivial to test and style in isolation.</p>

      <h2>3. Fine-Grained Performance Optimization</h2>
      <p>Leverage <code>shallowRef</code> for large static lists and ensure side-effects in <code>watchEffect</code> or <code>onMounted</code> clean up their event listeners in <code>onUnmounted</code> to prevent memory leaks in Single Page Applications.</p>
    `
  },
  {
    slug: 'database-indexing-mysql-performance',
    title: 'Relational Schema Design & Query Optimization Strategies in MySQL',
    date: 'December 10, 2025',
    readTime: '7 min read',
    category: 'Database Systems',
    summary: 'Practical techniques for query indexing, schema normalization, avoiding N+1 bottlenecks in Eloquent ORM, and maintaining database performance under load.',
    content: `
      <p>Databases are the foundation of every data-driven web platform. A poorly indexed schema will quickly degrade application response times under concurrent load, regardless of how fast your web server is.</p>

      <h2>1. Composite Indexes and the Leftmost Prefix Rule</h2>
      <p>When filtering or sorting across multiple columns (e.g., <code>WHERE user_id = ? AND status = ? ORDER BY created_at DESC</code>), a composite index on <code>(user_id, status, created_at)</code> provides orders-of-magnitude speedups compared to single-column indexes.</p>

      <h2>2. Use EXPLAIN to Inspect Execution Plans</h2>
      <p>Always verify your critical queries with <code>EXPLAIN</code>. Check if MySQL is performing a <code>type: ALL</code> (full table scan) or leveraging <code>type: ref / range</code>. Eliminate <code>Using filesort</code> or <code>Using temporary</code> on high-frequency routes.</p>

      <h2>3. Integer Keys vs UUIDs</h2>
      <p>For high-throughput transaction tables, auto-incrementing BigIntegers preserve B-tree spatial locality on disk. If external obfuscation is needed, generate a secondary public slug or UUID column while preserving integer primary keys internally for index efficiency.</p>
    `
  }
];
