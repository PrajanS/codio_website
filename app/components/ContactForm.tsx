'use client';

import { useState, type FormEvent } from 'react';
import { processContactRequest } from '../contact/handler';

type Status = { kind: 'idle' | 'success' | 'error'; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const [sending, setSending] = useState(false);

  const validate = (form: HTMLFormElement) => {
    const errors: Record<string, boolean> = {};
    const fields = ['name', 'email', 'message'];
    for (const name of fields) {
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

  const onChange = (name: string) => {
    if (invalid[name]) {
      setInvalid((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
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
      } else {
        throw new Error(result.message);
      }
    } catch (err: any) {
      setStatus({
        kind: 'error',
        message: 'Something went wrong. Please email us directly at hello@imax.dev.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="glass glass-border p-8 max-md:p-6">
      <div className="grid grid-cols-2 gap-4 mb-5 max-sm:grid-cols-1">
        <FieldText name="name" label="Name" invalid={!!invalid.name} onValueChange={() => onChange('name')} placeholder="Your full name" required />
        <FieldText name="email" type="email" label="Email" invalid={!!invalid.email} onValueChange={() => onChange('email')} placeholder="you@company.com" required />
      </div>
      <div className="mb-5">
        <FieldText name="company" label="Company" placeholder="Optional" />
      </div>
      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-2">
          What can we help with?
        </label>
        <div className={`field ${invalid.budget ? 'invalid' : ''}`}>
          <select name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile App Development</option>
            <option value="cloud">Cloud Solutions</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-2">
          Tell us about your project <span className="text-[var(--color-neon-cyan)]">*</span>
        </label>
        <div className={`field ${invalid.message ? 'invalid' : ''}`}>
          <textarea
            name="message"
            required
            placeholder="Goals, timeline, anything that will help us help you."
            onChange={() => onChange('message')}
          />
        </div>
      </div>

      {/* Web3Forms honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <button type="submit" className="btn btn-primary btn-arrow w-full" disabled={sending}>
        {sending ? 'Sending…' : 'Send message'}
      </button>

      {status.kind !== 'idle' && (
        <div
          role="status"
          className={`mt-4 p-4 rounded-lg text-sm border ${
            status.kind === 'success'
              ? 'border-[var(--color-neon-cyan)] bg-[rgba(34,211,238,0.08)] text-[var(--color-neon-cyan)]'
              : 'border-red-500 bg-red-500/10 text-red-300'
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  );
}

function FieldText({
  name,
  label,
  type = 'text',
  invalid = false,
  required = false,
  placeholder,
  onValueChange,
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
    <div className={`field ${invalid ? 'invalid' : ''}`}>
      <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-2">
        {label}
        {required && <span className="text-[var(--color-neon-cyan)]"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onValueChange}
      />
    </div>
  );
}
