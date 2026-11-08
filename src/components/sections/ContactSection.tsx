import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // anti-bot trap
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const directEmail = "subhan.singandaru2@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Bot trap check
    if (formData.honeypot) {
      setStatus('success');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Direct portfolio contact',
          message: formData.message,
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
        setErrorMessage(data?.message || 'Failed to dispatch message. Please use direct email.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error occurred. Feel free to contact via direct email.');
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col gap-2.5 max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            Direct Connection
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Initiate a Conversation
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Interested in discussing enterprise software architecture, collaborative projects, or AI engineering opportunities? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 space-y-4">
              <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                Direct Channels
              </h3>
              
              {/* Email item */}
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-zinc-500">Primary Email</div>
                    <a
                      href={`mailto:${directEmail}`}
                      className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-500 truncate block"
                    >
                      {directEmail}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-500 transition-colors flex-shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn item */}
              <a
                href="https://www.linkedin.com/in/subhan-singandaru-4b31b0214/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between gap-3 group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500">Professional Profile</div>
                    <div className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500">
                      linkedin.com/in/subhan-singandaru
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-blue-500">Connect &rarr;</span>
              </a>

              {/* GitHub item */}
              <a
                href="https://github.com/subhan-sd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between gap-3 group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 flex items-center justify-center flex-shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500">Code Repositories</div>
                    <div className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500">
                      github.com/subhan-sd
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-blue-500">Explore &rarr;</span>
              </a>

            </div>

            {/* Availability context note */}
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
              <span className="font-semibold text-zinc-900 dark:text-zinc-200">Current Availability:</span>
              <p>Open to technical advisory, senior engineering inquiries, and selected high-impact projects.</p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
              
              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white">Message Transmitted</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm">
                    Thank you for reaching out. I review messages regularly and will follow up promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs font-mono text-blue-500 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field for bot spam */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Engineering Inquiry / Architecture Consultation"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the opportunity, technical scope, or question..."
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-y"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Security Note & Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-[11px] font-mono text-zinc-500">
                      Protected by Cloudflare edge validation
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm transition-all disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
