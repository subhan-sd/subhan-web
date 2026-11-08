import type { APIRoute } from 'astro';
import { z } from 'zod';

export const prerender = false;

const ContactSchema = z.object({
  name: z.string().min(2, "Name must have at least 2 characters").max(100),
  email: z.string().email("Valid email required").max(120),
  subject: z.string().max(200).optional().default("Portfolio Inquiry"),
  message: z.string().min(10, "Message must have at least 10 characters").max(2000),
  turnstileToken: z.string().optional(),
});

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid content type' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const rawBody = await request.json().catch(() => null);
    if (!rawBody) {
      return new Response(
        JSON.stringify({ success: false, message: 'Empty or malformed payload' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const validation = ContactSchema.safeParse(rawBody);
    if (!validation.success) {
      const errorMsg = validation.error.errors.map((e) => e.message).join(', ');
      return new Response(
        JSON.stringify({ success: false, message: errorMsg }),
        { status: 422, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { name, email, subject, message, turnstileToken } = validation.data;

    // Optional Cloudflare Turnstile Verification if secret key exists
    const turnstileSecret = (locals as any)?.runtime?.env?.TURNSTILE_SECRET_KEY;
    if (turnstileSecret && turnstileToken) {
      const ip = request.headers.get('cf-connecting-ip') || '';
      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: turnstileSecret,
          response: turnstileToken,
          remoteip: ip,
        }),
      });

      const outcome = await turnstileRes.json().catch(() => null);
      if (!outcome?.success) {
        return new Response(
          JSON.stringify({ success: false, message: 'Security verification failed.' }),
          { status: 403, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Log received contact safely without exposing secrets
    console.log(`[Contact Received] From: ${name} <${email}> | Subject: ${subject} | Message Length: ${message.length}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you. Your message has been safely received.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Internal processing error. Please use direct email.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
