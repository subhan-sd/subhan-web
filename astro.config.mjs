import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

const messageChannelPolyfill = `
if (typeof globalThis.MessageChannel === 'undefined') {
  class MockMessagePort {
    constructor() {
      this.onmessage = null;
      this._other = null;
    }
    postMessage(data) {
      queueMicrotask(() => {
        if (this._other && typeof this._other.onmessage === 'function') {
          this._other.onmessage({ data });
        }
      });
    }
  }
  globalThis.MessageChannel = class MessageChannel {
    constructor() {
      this.port1 = new MockMessagePort();
      this.port2 = new MockMessagePort();
      this.port1._other = this.port2;
      this.port2._other = this.port1;
    }
  };
}
`;

export default defineConfig({
  site: 'https://subhan.dev',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          banner: () => messageChannelPolyfill,
        },
      },
    },
  },
});

