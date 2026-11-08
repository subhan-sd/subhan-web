/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type KVNamespace = import('@cloudflare/workers-types').KVNamespace;
type ENV = {
  ENVIRONMENT?: string;
  CONTACT_RECEIVER_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
};

type Runtime = import('@astrojs/cloudflare').Runtime<ENV>;

declare namespace App {
  interface Locals extends Runtime {}
}
