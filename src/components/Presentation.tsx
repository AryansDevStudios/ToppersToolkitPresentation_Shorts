import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Bot,
  CheckSquare,
  Calendar,
  Trophy,
  Brain,
  Play,
  Bell,
  Newspaper,
  Zap,
  MessageSquare,
  AlertTriangle,
  Send,
  Users,
  ChevronLeft,
  ChevronRight,
  Youtube,
  MessageCircle,
  Instagram,
  Mail,
  Search,
  GraduationCap,
} from "lucide-react";

interface Slide {
  id: number;
  type:
    | "title"
    | "feature"
    | "social"
    | "cta"
    | "screenshot"
    | "welcome"
    | "feature-no-screenshot";
  title: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
  gradient: string;
  imageUrl?: string;
}

const slides: Slide[] = [
  {
    id: 0,
    type: "welcome",
    title: "Welcome Class 9th",
    subtitle: "Students!",
    description:
      "Your journey to academic excellence starts here. Specially designed study tools and resources to help you master every subject and excel in your exams.",
    icon: <GraduationCap className="w-12 h-12 md:w-16 md:h-16" />,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 1,
    type: "title",
    title: "Topper's Toolkit",
    subtitle: "Your Ultimate Study Platform",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    type: "feature",
    title: "Notes",
    description:
      "Browse comprehensive library of notes across all subjects, organized by chapter for easy access.",
    icon: <BookOpen className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-green-500 to-emerald-600",
    imageUrl:
      "https://i.postimg.cc/2jvLH56Q/Screenshot-2025-09-29-151423.png",
  },
  {
    id: 3,
    type: "feature",
    title: "AI Help",
    description:
      "Get instant answers and explanations for your questions 24/7, powered by cutting-edge AI.",
    icon: <Bot className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-purple-500 to-pink-600",
    imageUrl:
      "https://i.postimg.cc/YqHGTwLB/Screenshot-2025-09-29-151628.png",
  },
  {
    id: 4,
    type: "feature",
    title: "MCQs",
    description:
      "Practice multiple-choice questions to build accuracy and confidence for exams with instant feedback.",
    icon: <CheckSquare className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-orange-500 to-red-600",
    imageUrl:
      "https://i.postimg.cc/pXHh3th7/Screenshot-2025-09-29-151712.png",
  },
  {
    id: 5,
    type: "feature",
    title: "Daily Quiz",
    description:
      "Sharpen your mind daily with interactive puzzles and quizzes to test your knowledge.",
    icon: <Calendar className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-blue-500 to-cyan-600",
    imageUrl:
      "https://i.postimg.cc/xT2JBSJZ/Screenshot-2025-09-29-151746.png",
  },
  {
    id: 6,
    type: "feature",
    title: "Leaderboard",
    description:
      "Compete with peers and track your progress. Stay motivated by climbing the ranks!",
    icon: <Trophy className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-yellow-500 to-orange-600",
    imageUrl:
      "https://i.postimg.cc/9FhRsjRK/Screenshot-2025-09-29-151825.png",
  },
  {
    id: 7,
    type: "feature",
    title: "Mind Maps",
    description:
      "Visualize complex topics with intuitive mind maps for better retention and revision.",
    icon: <Brain className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-indigo-500 to-purple-600",
    imageUrl:
      "https://i.postimg.cc/02sMhqKq/Screenshot-2025-09-29-152308.png",
  },
  {
    id: 8,
    type: "feature",
    title: "YouTube Learning",
    description:
      "Access hand-picked educational videos from the best creators to supplement your learning.",
    icon: <Play className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-red-500 to-pink-600",
    imageUrl:
      "https://i.postimg.cc/dtYkgKZ0/Screenshot-2025-09-29-152533.png",
  },
  {
    id: 9,
    type: "feature",
    title: "Notices",
    description:
      "Stay updated with important announcements, events, and academic reminders all in one place.",
    icon: <Bell className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-teal-500 to-green-600",
    imageUrl:
      "https://i.postimg.cc/15QnbZVX/Screenshot-2025-09-29-152619.png",
  },
  {
    id: 10,
    type: "feature-no-screenshot",
    title: "Current Affairs",
    description:
      "Keep up-to-date with the latest news and events, essential for general knowledge and exams.",
    icon: <Newspaper className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-slate-600 to-gray-700",
  },
  {
    id: 11,
    type: "feature-no-screenshot",
    title: "Reasoning",
    description:
      "Enhance your logical and analytical skills with our dedicated reasoning practice section.",
    icon: <Zap className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: 12,
    type: "feature",
    title: "Doubt Box",
    description:
      "Ask your questions directly to our mentors and get reliable, expert answers to clear doubts.",
    icon: <MessageSquare className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-cyan-500 to-blue-600",
    imageUrl:
      "https://i.postimg.cc/3JT4zH0R/Screenshot-2025-09-29-153006.png",
  },
  {
    id: 13,
    type: "feature",
    title: "Complaints",
    description:
      "Have an issue? Submit a complaint directly to our admin team for quick resolution.",
    icon: <AlertTriangle className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-amber-500 to-orange-600",
    imageUrl:
      "https://i.postimg.cc/Prjp0kvN/Screenshot-2025-09-29-153100.png",
  },
  {
    id: 14,
    type: "feature-no-screenshot",
    title: "Telegram Chat",
    description:
      "Join the student community on Telegram to discuss topics, share knowledge, and stay connected.",
    icon: <Send className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-sky-500 to-blue-600",
  },
  {
    id: 15,
    type: "feature",
    title: "About Us",
    description:
      "Learn about our mission to simplify learning and the passionate team behind Topper's Toolkit.",
    icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: "from-emerald-500 to-teal-600",
    imageUrl:
      "https://i.postimg.cc/yYHg2z3g/Screenshot-2025-09-29-153218.png",
  },
  {
    id: 16,
    type: "screenshot",
    title: "See It In Action",
    subtitle: "Live App Demo",
    gradient: "from-gray-800 to-gray-900",
    imageUrl:
      "https://i.postimg.cc/tCjZ8HnV/Screenshot-2025-09-29-153300.png",
  },
  {
    id: 17,
    type: "social",
    title: "Follow Us",
    subtitle: "Stay Connected",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 18,
    type: "cta",
    title: "Ready to Excel?",
    subtitle: "Download Topper's Toolkit Today!",
    gradient:
      "from-gradient-to-r from-blue-600 via-purple-600 to-indigo-600",
  },
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length,
    );
  };

  const currentSlideData = slides[currentSlide];

  const renderSlideContent = (slide: Slide) => {
    switch (slide.type) {
      case "title":
        return (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl mb-4 tracking-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {slide.subtitle}
            </motion.p>
            <motion.div
              className="mt-8 w-20 h-1 bg-white/30 rounded"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </motion.div>
        );

      case "welcome":
        return (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-4 sm:mb-6 p-4 sm:p-6 bg-white/20 rounded-full"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 150,
              }}
            >
              {slide.icon}
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl mb-2 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {slide.title}
            </motion.h1>
            <motion.h2
              className="text-2xl sm:text-3xl mb-4 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {slide.subtitle}
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg opacity-90 leading-relaxed max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {slide.description}
            </motion.p>
            <motion.div
              className="mt-6 flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-yellow-400 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        );

      case "feature":
        return (
          <motion.div
            className="flex flex-col h-full text-white px-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Section - Feature Info */}
            <motion.div
              className="flex-1 flex flex-col items-center justify-center text-center py-2 sm:py-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div
                className="mb-2 sm:mb-3 p-2 sm:p-3 bg-white/20 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {slide.icon}
              </motion.div>
              <motion.h2
                className="text-2xl sm:text-3xl mb-1 sm:mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {slide.title}
              </motion.h2>
              <motion.p
                className="text-xs sm:text-sm opacity-90 leading-relaxed px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {slide.description}
              </motion.p>
            </motion.div>

            {/* Bottom Section - Screenshot Placeholder */}
            <motion.div
              className="flex-1 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="w-full max-w-[180px] sm:max-w-xs mx-auto">
                {/* Phone Frame for Screenshot */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-white/20">
                  <div className="bg-white/5 rounded-lg sm:rounded-xl aspect-[9/16] flex flex-col items-center justify-center relative overflow-hidden">
                    {slide.imageUrl ? (
                      <img
                        src={slide.imageUrl}
                        alt={`${slide.title} Screenshot`}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg sm:rounded-xl"
                      />
                    ) : (
                      <div className="text-white/60 text-center px-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 rounded-lg bg-white/20 flex items-center justify-center">
                          📱
                        </div>
                        <p className="text-xs">
                          App Screenshot Area
                        </p>
                        <p className="text-xs opacity-60 mt-1">
                          {slide.title} Feature
                        </p>
                      </div>
                    )}
                  </div>
                  {/* Phone notch simulation */}
                  <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );

      case "feature-no-screenshot":
        return (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white/20 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
            >
              {slide.icon}
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {slide.title}
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg opacity-90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {slide.description}
            </motion.p>
          </motion.div>
        );

      case "social":
        return (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl mb-6 sm:mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {slide.title}
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[
                {
                  icon: <Youtube className="w-6 h-6 sm:w-8 sm:h-8" />,
                  label: "YouTube",
                },
                {
                  icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
                  label: "WhatsApp",
                },
                {
                  icon: <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />,
                  label: "Instagram",
                },
                {
                  icon: <Send className="w-6 h-6 sm:w-8 sm:h-8" />,
                  label: "Telegram",
                },
                {
                  icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8" />,
                  label: "Email",
                },
                {
                  icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
                  label: "Google",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-3 sm:p-4 bg-white/20 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.4,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {social.icon}
                  <span className="mt-2 text-xs sm:text-sm">
                    {social.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        );

      case "screenshot":
        return (
          <motion.div
            className="flex flex-col h-full text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <motion.div
              className="text-center py-4 sm:py-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl mb-2">{slide.title}</h2>
              <p className="text-base sm:text-lg opacity-80">
                {slide.subtitle}
              </p>
            </motion.div>

            {/* Large Screenshot Area */}
            <motion.div
              className="flex-1 flex items-center justify-center px-4 sm:px-6 pb-4 sm:pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="w-full max-w-[200px] sm:max-w-sm">
                {/* Phone Frame */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-2 sm:p-4 border border-white/20 shadow-2xl">
                  <div className="bg-white/5 rounded-xl sm:rounded-2xl aspect-[9/16] flex flex-col items-center justify-center relative overflow-hidden">
                    {slide.imageUrl ? (
                      <img
                        src={slide.imageUrl}
                        alt={`${slide.title} Screenshot`}
                        className="absolute inset-0 w-full h-full object-cover rounded-xl sm:rounded-2xl"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                        <div className="text-white/60 text-center px-6 z-10">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center text-xl sm:text-2xl">
                            📱
                          </div>
                          <p className="text-base sm:text-lg mb-2">
                            App Screenshot
                          </p>
                          <p className="text-xs sm:text-sm opacity-60">
                            Place your full app interface here
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Phone details */}
                  <div className="absolute top-3 sm:top-5 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 sm:h-1.5 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-3 sm:bottom-5 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );

      case "cta":
        return (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 150,
              }}
            >
              {slide.title}
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl mb-8 opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {slide.subtitle}
            </motion.p>
            <motion.button
              className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl transition-all duration-300 hover:bg-blue-50 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now!
            </motion.button>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-full bg-black rounded-lg overflow-hidden shadow-2xl">
      <div className="h-full relative bg-gradient-to-br aspect-[9/16] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderSlideContent(currentSlideData)}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-10">
          <button
            onClick={prevSlide}
            className="p-2 bg-black/20 text-white rounded-full hover:bg-black/40 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 bg-black/20 text-white rounded-full hover:bg-black/40 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}