import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect } from 'react';

// Define a custom schema for the contact form
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

// Type for the form data
type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init("AfIWebXEJxzYs6OxH");
  }, []);

  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      try {
        console.log('Attempting to send email with data:', data);
        const templateParams = {
          user_name: data.name,
          user_email: data.email,
          message: data.message,
        };

        // Send the email using EmailJS
        const result = await emailjs.send(
          "service_7bshvd7",
          "template_qdhka4n",
          templateParams,
          "AfIWebXEJxzYs6OxH"
        );

        console.log('Email sent successfully:', result);
        return result;
      } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
      }
    },
    onSuccess: () => {
      toast({
        title: "🎉 Thank you for reaching out!",
        description: "Your message has been sent successfully! I'm excited to connect with you and will get back to you as soon as possible. Have a wonderful day! 😊",
        variant: "default",
        duration: 6000, // Show for 6 seconds to give time to read the warm message
      });
      form.reset();
    },
    onError: (error: any) => {
      console.error('Error in mutation:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient effect - with pointer-events-none to ensure it doesn't block interactions */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-cyan-900/5 dark:from-purple-900/10 dark:to-cyan-900/10 pointer-events-none"></div>

      {/* Animated background elements - with pointer-events-none to ensure they don't block interactions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-cyan-400/10 dark:from-purple-600/20 dark:to-cyan-400/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-600/10 to-cyan-400/10 dark:from-purple-600/20 dark:to-cyan-400/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>

          <motion.p
            className="text-center text-muted-foreground max-w-md mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>

          <motion.div
            className="w-full max-w-md rounded-lg border border-purple-500/20 dark:border-purple-500/30 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-lg overflow-hidden relative"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >

            {/* Form header with icon */}
            <div className="bg-gradient-to-r from-purple-600/10 to-cyan-400/10 dark:from-purple-600/20 dark:to-cyan-400/20 p-6 border-b border-purple-500/10 dark:border-purple-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </motion.svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Contact Me</h3>
                  <p className="text-sm text-muted-foreground">I'll get back to you as soon as possible</p>
                </div>
              </div>
            </div>

            {/* Form content */}
            <div className="p-6 relative z-10">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((data) => {
                    console.log("Form submitted with data:", data);
                    mutation.mutate(data);
                  })}
                  className="space-y-6 relative z-10"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    style={{ pointerEvents: "auto" }}
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="bg-background/50 dark:bg-background/30 border-purple-500/20 dark:border-purple-500/30 focus:border-purple-500 dark:focus:border-purple-400 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-500/30 relative z-20"
                              {...field}
                              onChange={field.onChange}
                              value={field.value}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    style={{ pointerEvents: "auto" }}
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your@email.com"
                              className="bg-background/50 dark:bg-background/30 border-purple-500/20 dark:border-purple-500/30 focus:border-purple-500 dark:focus:border-purple-400 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-500/30 relative z-20"
                              {...field}
                              onChange={field.onChange}
                              value={field.value}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    style={{ pointerEvents: "auto" }}
                  >
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="min-h-32 bg-background/50 dark:bg-background/30 border-purple-500/20 dark:border-purple-500/30 focus:border-purple-500 dark:focus:border-purple-400 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-500/30 relative z-20"
                              {...field}
                              onChange={field.onChange}
                              value={field.value}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ pointerEvents: "auto" }}
                  >
                    {/* Send Message Button with gradient aura */}
                    <div className="relative group">
                      {/* Gradient aura effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200"></div>

                      <Button
                        type="submit"
                        disabled={mutation.isPending}
                        className="relative w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white transition-all duration-300 overflow-hidden group"
                      >
                        {/* Animated shine effect */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>

                        {mutation.isPending ? (
                          <div className="flex items-center justify-center gap-2 relative z-10">
                            <span className="animate-spin">⏳</span>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2 relative z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                              <path d="M22 2L11 13"></path>
                              <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                            </svg>
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                </form>
              </Form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
