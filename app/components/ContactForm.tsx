'use client';

import { useState, type FormEvent } from 'react';
import { processContactRequest } from '../contact/handler';

type Status = { kind: 'idle' | 'success' | 'error'; message?: string };

const BUDGETS = ['Under ₹20L', '₹20L — ₹60L', '₹60L — ₹2Cr', '₹2Cr +', 'Not sure yet'];
const TIMING = ['As soon as possible', 'Within 30 days', '1 — 3 months', '3 — 6 months', '6 months or later'];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const [sending, setSending] = useState(false);
  const [budget, setBudget] = useState('');
  const [timing, setTiming] = useState('');

  const validate = (form: HTMLFormElement) => {
    const errors: Record<string, boolean> = {};
    const required = ['name', 'email', 'message'];
    for (const name of required) {
      const input = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
      if (!input) continue;
      const value = (input.value || '').trim();
      if (!value) errors[name] = true;
      if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors[name] = true;
      }
    }
    setInvalid(errors);
    return Object.keys(errors).length === 0;
  };

  const clearError = (name: string) => {
    if (!invalid[name]) return;
    setInvalid((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) {
      setStatus({ kind: 'error', message: 'Please fix the highlighted fields.' });
      return;
    }
    setSending(true);
    setStatus({ kind: 'idle' });
    try {
      const data = new FormData(form);
      const result = await processContactRequest(data);
      if (result.success) {
        setStatus({ kind: 'success', message: result.message });
        form.reset();
        setBudget('');
        setTiming('');
      } else {
        setStatus({ kind: 'error', message: result.message });
      }
    } catch {
      setStatus({
        kind: 'error',
        message: 'Something went wrong. Please email hello@codio.studio directly.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-1">
      <div className="grid grid-cols-2 gap-x-8 gap-y-1 max-sm:grid-cols-1">
        <Line name="name" label="01 — your name" placeholder="Your full name" invalid={!!invalid.name} onValueChange={() => clearError('name')} required />
        <Line name="email" type="email" label="02 — your email" placeholder="you@company.com" invalid={!!invalid.email} onValueChange={() => clearError('email')} required />
      </div>

      <Line name="company" label="03 — company (optional)" placeholder="Your company" />

      {/* Budget pills */}
      <fieldset className="field-line hairline-b">
        <label>04 — budget</label>
        <input type="hidden" name="budget" value={budget} />
        <div className="flex flex-wrap gap-2 pt-2">
          {BUDGETS.map((b) => {
            const active = budget === b;
            return (
              <button
                key={b}
                type="button"
                onClick={() => setBudget(active ? '' : b)}
                className={`px-4 py-1.5 mono border transition-colors ${
                  active
                    ? 'bg-ink border-[var(--color-ink)] text-[var(--color-paper)]'
                    : 'bg-transparent border-[var(--color-rule-strong)] ink-mute hover:ink hover:border-[var(--color-ink)]'
                }`}
              >
                {b}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Timing pills */}
      <fieldset className="field-line hairline-b">
        <label>05 — timeline</label>
        <input type="hidden" name="timing" value={timing} />
        <div className="flex flex-wrap gap-2 pt-2">
          {TIMING.map((t) => {
            const active = timing === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTiming(active ? '' : t)}
                className={`px-4 py-1.5 mono border transition-colors ${
                  active
                    ? 'bg-signal border-[var(--color-ink)] ink'
                    : 'bg-transparent border-[var(--color-rule-strong)] ink-mute hover:ink hover:border-[var(--color-ink)]'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className={`field-line ${invalid.message ? 'invalid' : ''}`}>
        <label htmlFor="message">06 — about your project *</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="What are you building? What would make this project a success for you?"
          onChange={() => clearError('message')}
        />
      </div>

      {/* honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="pt-10 flex flex-wrap items-baseline justify-between gap-6">
        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? 'Sending…' : 'Send message'}
        </button>
        <span className="mono ink-mute">We reply within one working day</span>
      </div>

      {status.kind !== 'idle' && (
        <div
          role={status.kind === 'error' ? 'alert' : 'status'}
          className={
            status.kind === 'success'
              ? 'mt-8 p-5 border border-[var(--color-ink)] bg-signal ink text-base'
              : 'mt-8 p-5 border text-base'
          }
          style={
            status.kind === 'error'
              ? {
                  borderColor: 'var(--color-warn)',
                  background: 'var(--color-warn-tint)',
                  color: 'var(--color-warn)',
                }
              : undefined
          }
        >
          {status.message}
        </div>
      )}
    </form>
  );
}

function Line({
  name, label, type = 'text', invalid, required, placeholder, onValueChange,
}: {
  name: string;
  label: string;
  type?: string;
  invalid?: boolean;
  required?: boolean;
  placeholder?: string;
  onValueChange?: () => void;
}) {
  return (
    <div className={`field-line ${invalid ? 'invalid' : ''}`}>
      <label htmlFor={name}>{label}{required ? ' *' : ''}</label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onValueChange}
        autoComplete={name === 'email' ? 'email' : name === 'name' ? 'name' : 'organization'}
      />
    </div>
  );
}
