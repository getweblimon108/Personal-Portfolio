import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  isDark: boolean;
}

const Testimonials = ({ isDark }: TestimonialsProps) => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      image: 'https://i.pravatar.cc/150?img=1',
      content: 'Hammad delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise is outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
      image: 'https://i.pravatar.cc/150?img=2',
      content: 'Working with Hammad was a pleasure. He understood our vision and brought it to life with clean, efficient code.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, DesignHub',
      image: 'https://i.pravatar.cc/150?img=3',
      content: 'Professional, reliable, and incredibly talented. Hammad transformed our ideas into a beautiful, functional platform.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Client Testimonials
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            What people say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700 hover:border-primary/50' 
                  : 'bg-white hover:border-primary/50'
              } transition-all duration-300 hover:shadow-xl`}>
                <CardContent className="p-6">
                  <Quote className={`w-8 h-8 mb-4 ${isDark ? 'text-primary' : 'text-primary'} opacity-50`} />
                  <p className={`mb-6 text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {testimonial.name}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
