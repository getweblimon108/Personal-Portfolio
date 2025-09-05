
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, Instagram, MessageCircle, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface ContactProps {
  isDark: boolean;
}

const Contact = ({ isDark }: ContactProps) => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/getweblimon108/",
      label: "GitHub",
      color: "hover:text-purple-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/hammadahmed-ahmed-b32117372/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/hammadahmed4526/",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/profile.php?id=61577936158112",
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
        </svg>
      ),
      href: "https://wa.me/923217026152",
      label: "WhatsApp",
      color: "hover:text-green-400"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_t74f84b',
        'template_h8rj578',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Hammad Ahmed',
        },
        'CuS4757EZ1OwdjxeT'
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
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
    <section id="contact" className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Let's Work Together
            </h3>
            <p className={`mb-8 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300 hover-lift">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:animate-bounce" />
                <a 
                  href="mailto:hammadahmedportfolio@gmail.com"
                  className={`${isDark ? 'text-gray-300' : 'text-gray-600'} group-hover:text-cyan-400 transition-colors`}
                >
                  hammadahmedportfolio@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300 hover-lift">
                <Phone className="w-5 h-5 text-cyan-400 group-hover:animate-bounce" />
                <a 
                  href="https://wa.me/923217026152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? 'text-gray-300' : 'text-gray-600'} group-hover:text-cyan-400 transition-colors`}
                >
                  +92 321 7026152
                </a>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className={`hover:bg-cyan-400/20 hover:border-cyan-400 hover:scale-125 transition-all duration-300 hover:-translate-y-1 ${social.color} animate-fade-in hover-lift pulse-glow`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {social.icon}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          <div className={`p-8 rounded-lg shadow-lg animate-fade-in delay-300 hover-lift ${isDark ? 'bg-gray-700' : 'bg-white'} hover:shadow-2xl transition-all duration-300 glow-cyan pulse-glow`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="group">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name *"
                  required
                  className="border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="group">
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email *"
                  required
                  className="border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="group">
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject *"
                  required
                  className="border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="group">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message *"
                  rows={4}
                  required
                  className="border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300 group-hover:scale-105 resize-none"
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all duration-300 hover:shadow-2xl glow-cyan hover-lift"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
