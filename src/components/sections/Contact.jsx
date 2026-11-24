import { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import SocialLinks from '../common/SocialLinks';
import { personalData } from '../../data/personal';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

export default function Contact() {
  const { contact } = personalData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title={contact.heading}
          subtitle={contact.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Information (Stretched to match right card height) */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-5 h-full">
            <div className="glass-card p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between border border-theme space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Let's Connect
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-1">
                    Apakah Anda memiliki tawaran kerja untuk Junior Web Developer, proyek kolaborasi, atau diskusi teknis? Silakan hubungi saya melalui jalur berikut.
                  </p>
                </div>

                {/* Status Pill */}
                <div className="p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                      Current Availability
                    </span>
                  </div>
                  <p className="text-xs text-text-primary font-medium pl-4">
                    {contact.availability}
                  </p>
                </div>

                {/* Contact Channels */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-theme bg-secondary/40">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-xs sm:text-sm font-semibold text-text-primary hover:text-indigo-400 transition-colors truncate block"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-theme bg-secondary/40">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider block">
                        Location
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-text-primary">
                        {contact.location} (Remote / Hybrid / On-site)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-theme bg-secondary/40">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider block">
                        Response Time
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-text-primary">
                        Fast Response • Usually replies within 24h
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Footer */}
              <div className="pt-4 border-t border-theme">
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-2.5">
                  Professional Profiles:
                </span>
                <SocialLinks />
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Contact Form (Stretched to match left card height) */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-7 h-full">
            <div className="glass-card p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between border border-theme">
              <div>
                <h3 className="text-xl font-bold text-text-primary">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary mt-1 mb-5">
                  Silakan isi formulir di bawah ini. Pesan Anda akan langsung terkirim.
                </p>

                {/* Success Notification Banner */}
                {submitSuccess && (
                  <div className="mb-5 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 flex items-start gap-3 animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-bold">Message Sent Successfully!</p>
                      <p className="text-emerald-300/80 mt-0.5">
                        Terima kasih atas pesan Anda. Saya akan segera merespons melalui email.
                      </p>
                    </div>
                  </div>
                )}

                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="space-y-1">
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-text-primary"
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe / Tech Lead"
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-secondary/40 text-text-primary text-sm focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                            : 'border-theme focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-text-primary"
                      >
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. recruiter@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-secondary/40 text-text-primary text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:ring-2 focus:rose-500/20'
                            : 'border-theme focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold text-text-primary"
                    >
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Junior Web Developer Position / Project Inquiry"
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-secondary/40 text-text-primary text-sm focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-theme focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-text-primary"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tuliskan pesan atau detail peluang pekerjaan yang ingin didiskusikan..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-secondary/40 text-text-primary text-sm focus:outline-none transition-colors resize-y ${
                        errors.message
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-theme focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </form>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-theme/60 mt-4">
                <button
                  type="submit"
                  form="contact-form"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 hover:from-indigo-600 hover:to-sky-600 shadow-md shadow-indigo-600/30 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
