import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_gmail', // You'll need to replace this with your EmailJS service ID
        'template_contact', // You'll need to replace this with your EmailJS template ID
        {
          from_email: email,
          to_email: 'bossua1111@gmail.com',
          message: message,
        },
        'your_public_key' // You'll need to replace this with your EmailJS public key
      );

      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy mb-12 text-center">Get in Touch</h2>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-navy focus:border-transparent"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-navy hover:bg-navy-light text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="flex justify-center space-x-8 mt-12">
            <a href="mailto:bossua1111@gmail.com" className="text-slate-custom hover:text-navy transition-colors">
              <Mail size={24} />
            </a>
            <a href="#" className="text-slate-custom hover:text-navy transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-custom hover:text-navy transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;