import {
  Linkedin,
  Mail,
  MapPin,
  Send,
  CheckCircle, // Added for success state
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useForm, ValidationError } from '@formspree/react'; // Integrated Formspree

export const ContactSection = () => {
  // 1. Initialize Formspree with your endpoint ID
  const [state, handleSubmit] = useForm("xeellqnp");

  // 2. Success State View
  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="bg-card p-12 rounded-lg shadow-xl border border-primary/20 flex flex-col items-center">
            <CheckCircle className="h-16 w-16 text-primary mb-6 animate-bounce" />
            <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
            <p className="text-muted-foreground mb-8">
              Thank you, Paul-Maximilian will get back to you as soon as possible.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether it's about research collaborations, course inquiries, or 
          the low-cost EEG project, I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:p.m.hoffmann@live.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    p.m.hoffmann@live.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Escondido, CA
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/paul-m-hoffmann/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Updated Form */}
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // Ensure the name attribute is present for Formspree
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name..."
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium disabled:opacity-50"
                )}
              >
                {state.submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};