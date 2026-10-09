import { useState } from 'react';
import { 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  Clock, 
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Toast } from '../ui/Toast';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: 'Engineering Role (Full-time)',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopied(true);
      setToastMessage('Email address copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setToastMessage(`Email: ${profileData.contact.email}`);
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare direct mailto intent so no email is ever lost, without claiming fake server success
    const subject = encodeURIComponent(`[${formData.projectType}] Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Prabhat,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      // Trigger the default mail client
      window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
      setToastMessage('Inquiry prepared! Opening your mail client...');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F9F9F6]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        <SectionHeading
          index="06"
          category="Contact & Inquiries"
          title="Have an idea worth building?"
          description="Let's turn your next idea into a thoughtful, reliable digital product. Available for senior engineering roles and select contract collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-black/8 shadow-xs space-y-6">
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-wider text-[#5C5C66]">
                  Direct Contact
                </span>
                <h3 className="font-display text-2xl font-bold text-[#121214] mt-1">
                  Start a conversation
                </h3>
                <p className="text-sm text-[#5C5C66] mt-2 font-body">
                  Whether you're hiring for a critical engineering role or looking to build a high-performance web or mobile product, I'd love to talk.
                </p>
              </div>

              {/* Email Clipboard Box */}
              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-black/8 flex items-center justify-between gap-3">
                <div className="truncate">
                  <div className="font-mono-tech text-[10px] text-[#5C5C66] uppercase">
                    Primary Email
                  </div>
                  <div className="font-mono-tech text-sm font-semibold text-[#121214] truncate">
                    {profileData.contact.email}
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-black/10 hover:bg-black/5 text-xs font-mono-tech text-[#121214] transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#88B800]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Availability & Response Expectation */}
              <div className="space-y-2 pt-2 border-t border-black/8 text-xs font-mono-tech text-[#5C5C66]">
                <div className="flex items-center gap-2 text-[#121214]">
                  <Clock className="w-3.5 h-3.5 text-[#88B800]" />
                  <span className="font-medium">Typically responds within 24 business hours</span>
                </div>
                <div>Location: {profileData.location} ({profileData.timezone})</div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="p-6 rounded-2xl bg-white border border-black/8 shadow-xs space-y-4">
              <span className="font-mono-tech text-xs uppercase tracking-wider text-[#5C5C66] block">
                Professional Networks
              </span>

              <div className="flex flex-col gap-2.5">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FAF9F6] border border-transparent hover:border-black/5 text-[#121214] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[#121214]" />
                    <span className="text-sm font-medium">GitHub / prabhat-barman</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5C5C66] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FAF9F6] border border-transparent hover:border-black/5 text-[#121214] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-[#121214]" />
                    <span className="text-sm font-medium">LinkedIn / Prabhat Barman</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5C5C66] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {profileData.contact.instagram && (
                  <a
                    href={profileData.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FAF9F6] border border-transparent hover:border-black/5 text-[#121214] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <InstagramIcon className="w-4 h-4 text-[#121214] group-hover:text-[#E4405F] transition-colors" />
                      <span className="text-sm font-medium">Instagram / @__meme__o2__</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#5C5C66] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Functional Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-10 rounded-2xl bg-white border border-black/8 shadow-xs space-y-6"
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-[#121214]">
                  Send a message
                </h3>
                <p className="text-sm text-[#5C5C66] mt-1 font-body">
                  Fill out the form below to immediately open a pre-filled direct inquiry.
                </p>
              </div>

              {/* Name field */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono-tech text-xs uppercase tracking-wider text-[#121214] font-medium mb-2"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Sarah Jenkins"
                  className={`w-full px-4 py-3 rounded-xl border bg-[#FAF9F6] text-sm font-body text-[#121214] placeholder-black/35 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all ${
                    errors.name ? 'border-red-500' : 'border-black/10'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono-tech text-xs uppercase tracking-wider text-[#121214] font-medium mb-2"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="e.g. sarah@company.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-[#FAF9F6] text-sm font-body text-[#121214] placeholder-black/35 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all ${
                    errors.email ? 'border-red-500' : 'border-black/10'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="contact-type"
                  className="block font-mono-tech text-xs uppercase tracking-wider text-[#121214] font-medium mb-2"
                >
                  Inquiry Topic
                </label>
                <select
                  id="contact-type"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#FAF9F6] text-sm font-body text-[#121214] focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all cursor-pointer"
                >
                  <option value="Engineering Role (Full-time)">Full-time Senior Engineering Role</option>
                  <option value="Contract / Freelance Development">Bespoke Contract / Frontend Delivery</option>
                  <option value="Technical Advisory / Architecture">Architecture Advisory & Code Review</option>
                  <option value="Other Inquiry">Other Technical Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono-tech text-xs uppercase tracking-wider text-[#121214] font-medium mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Tell me a bit about your product, timeline, or engineering opportunity..."
                  className={`w-full px-4 py-3 rounded-xl border bg-[#FAF9F6] text-sm font-body text-[#121214] placeholder-black/35 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-black/10'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#121214] text-[#F9F9F6] font-semibold text-sm rounded-xl hover:bg-black/85 transition-all shadow-sm active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Formatting message...</span>
                  ) : (
                    <>
                      <span>Transmit Inquiry</span>
                      <Send className="w-4 h-4 text-[#CCFF00]" />
                    </>
                  )}
                </button>
              </div>

              {isSent && (
                <div className="p-4 rounded-xl bg-[#CCFF00]/20 border border-[#CCFF00]/40 text-xs font-mono-tech text-[#121214] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#88B800] shrink-0" />
                  <span>Mail client dispatched! Feel free to follow up directly at {profileData.contact.email}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Global Toast */}
      <Toast
        message={toastMessage || ''}
        isVisible={!!toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </section>
  );
};
