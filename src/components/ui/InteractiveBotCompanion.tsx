import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Terminal, 
  FileText, 
  Mail, 
  Bot, 
  RotateCcw,
  ExternalLink
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';

interface MessageAction {
  label: string;
  prompt?: string;
  url?: string;
  actionType?: 'terminal' | 'work' | 'contact' | 'experience';
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: MessageAction[];
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'welcome-msg',
    sender: 'bot',
    text: "Hey there! 👋 I'm Pixel, Prabhat's interactive AI assistant. Ask me anything about his 4+ years of React.js & React Native production experience, live apps like WellValet, or tech stack!",
    timestamp: 'Just now',
    actions: [
      { label: 'WellValet Scanner', prompt: 'Tell me about WellValet' },
      { label: 'SiriusXM IoT', prompt: 'SiriusXM Telemetry project' },
      { label: 'Tech Stack', prompt: 'What is Prabhat’s Tech Stack?' }
    ]
  }
];

const QUICK_PROMPTS = [
  'Tell me about WellValet',
  'SiriusXM Telemetry project',
  'What is Prabhat’s Tech Stack?',
  'Experience & 4+ YOE highlights',
  'How do I hire or contact him?'
];

export const InteractiveBotCompanion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);

  // Eye tracking & blinking state
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHappy, setIsHappy] = useState(false);
  const faceRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageCounterRef = useRef(1);

  // Scroll to bottom on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  // Pupil cursor tracking
  useEffect(() => {
    let animId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(() => {
        if (!faceRef.current) return;
        const rect = faceRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        const angle = Math.atan2(dy, dx);
        const dist = Math.min(3.5, Math.hypot(dx, dy) / 45);

        setPupilPos({
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Periodic blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4000);

    return () => clearInterval(blinkInterval);
  }, []);

  const getBotResponse = (query: string): { text: string; actions?: MessageAction[] } => {
    const q = query.toLowerCase();

    if (q.includes('wellvalet') || q.includes('grocery') || q.includes('scanner') || q.includes('allergen')) {
      const wellvalet = projectsData.find((p) => p.id === 'wellvalet-mobile');
      return {
        text: `WellValet is Prabhat's published React Native grocery & beauty scanner in Canada! It features sub-500ms Vision Camera barcode scanning, personalized allergen detection, multi-user family profiles, 0–100 Wellness Scoring, and PIPEDA-compliant privacy architecture with zero ads.`,
        actions: [
          {
            label: 'Visit wellvalet.com',
            url: wellvalet?.demoUrl || 'https://www.wellvalet.com/'
          },
          {
            label: ' App Store (Canada)',
            url: wellvalet?.appStoreUrl || 'https://apps.apple.com/ca/app/wellvalet/id6778571808'
          },
          {
            label: 'View Case Study',
            actionType: 'work'
          }
        ]
      };
    }

    if (q.includes('sirius') || q.includes('telemetry') || q.includes('iot') || q.includes('cerebrum') || q.includes('vehicle')) {
      return {
        text: `The SiriusXM Connected Vehicle platform streams 10+ Hz real-time vehicular telemetry over WebSockets. Prabhat engineered the buffered frame batching (requestAnimationFrame) to isolate render trees and guarantee a fluid 60 FPS dashboard with sub-100ms update latency.`,
        actions: [
          {
            label: 'Test Live Simulator',
            actionType: 'work'
          },
          {
            label: 'Open Terminal (>_)',
            actionType: 'terminal'
          }
        ]
      };
    }

    if (q.includes('tech stack') || q.includes('skills') || q.includes('tools') || q.includes('languages')) {
      return {
        text: `Prabhat's primary tech stack:
• Frontend: React.js (React 19), TypeScript, JavaScript (ES6+), Tailwind CSS
• State Management: Redux Toolkit (RTK), Redux, Context API
• Mobile: React Native (iOS & Android), Vision Camera, Reanimated
• Performance: Profiling, Memoization (useMemo/useCallback), Code Splitting
• Testing & Build: Vitest, Jest, RTL, Vite, Docker, Azure DevOps
• Real-Time: WebSockets (10+ Hz), REST APIs`,
        actions: [
          {
            label: 'Explore Skills Section',
            actionType: 'experience'
          }
        ]
      };
    }

    if (q.includes('experience') || q.includes('experienceyears') || q.includes('years') || q.includes('netlink')) {
      return {
        text: `Prabhat has 4+ years of production experience at Netlink Software Group:
• Software Engineer (Mar 2023 – Present): Led frontend architectures, cut load times by 35–40%, built reusable modules reducing code duplication by 30%.
• Associate Software Engineer (Jun 2022 – Feb 2023): Delivered responsive enterprise portals and REST APIs.
• Trainee Consultant (Dec 2021 – May 2022): Enterprise training in modern React and JavaScript.`,
        actions: [
          {
            label: 'Read Full Trajectory',
            actionType: 'experience'
          }
        ]
      };
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('reach')) {
      return {
        text: `You can reach Prabhat directly:
📧 Email: ${profileData.contact.email}
📱 Phone: ${profileData.contact.phone}
📍 Location: ${profileData.location}
He is currently open for Senior Engineering roles and high-impact contracts.`,
        actions: [
          {
            label: 'Open Contact Form',
            actionType: 'contact'
          },
          {
            label: 'LinkedIn Profile',
            url: profileData.contact.linkedin
          }
        ]
      };
    }

    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return {
        text: `Prabhat's verified production resume includes 4+ years of experience, WellValet, SiriusXM, and certifications from Newton School and GeeksforGeeks.`,
        actions: [
          {
            label: 'View & Print Resume',
            actionType: 'experience'
          }
        ]
      };
    }

    // Default intelligent fallback
    return {
      text: `Thanks for asking! Prabhat specializes in React.js, React Native, TypeScript, and high-performance real-time applications (4+ YOE). Would you like to check out his WellValet app, SiriusXM dashboard, or get in touch?`,
      actions: [
        {
          label: 'View Projects',
          actionType: 'work'
        },
        {
          label: 'Let’s Connect',
          actionType: 'contact'
        }
      ]
    };
  };

  const handleActionClick = (act: MessageAction) => {
    if (act.prompt) {
      handleSendPrompt(act.prompt);
    } else if (act.url) {
      window.open(act.url, '_blank');
    } else if (act.actionType === 'terminal') {
      setIsOpen(false);
      window.dispatchEvent(new CustomEvent('open-terminal'));
    } else if (act.actionType === 'work') {
      setIsOpen(false);
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    } else if (act.actionType === 'contact') {
      setIsOpen(false);
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else if (act.actionType === 'experience') {
      setIsOpen(false);
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendPrompt = (promptText: string) => {
    if (!promptText.trim()) return;

    const userMsg: Message = {
      id: `user-${messageCounterRef.current++}`,
      sender: 'user',
      text: promptText,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);
    setIsHappy(true);

    setTimeout(() => {
      const response = getBotResponse(promptText);
      const botMsg: Message = {
        id: `bot-${messageCounterRef.current++}`,
        sender: 'bot',
        text: response.text,
        timestamp: 'Just now',
        actions: response.actions
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      setTimeout(() => setIsHappy(false), 500);
    }, 550);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendPrompt(inputValue);
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <aside aria-label="Interactive portfolio chatbot" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none">
      {/* Expanded Chatbot Window */}
      {isOpen && (
        <div
          role="region"
          aria-label="Assistant dialogue and chat interface"
          className="fixed inset-x-3 bottom-3 sm:inset-auto sm:bottom-6 sm:right-6 sm:mb-2 w-auto sm:w-[380px] h-[520px] max-h-[78vh] rounded-2xl bg-[#121214] text-white shadow-2xl border border-white/15 backdrop-blur-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 z-50"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-[#18181c] border-b border-white/10 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-2.5">
              {/* Bot Avatar Icon */}
              <div className="w-7 h-7 rounded-lg bg-[#CCFF00]/15 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00]">
                <Bot className="w-4 h-4" />
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono-tech">
                  <span className="font-bold text-white">Pixel AI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-[10px] text-white/50">Online</span>
                </div>
                <div className="text-[10px] text-white/40 font-body">
                  Prabhat's Portfolio Assistant
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 text-xs font-body leading-relaxed select-text">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl p-3 ${
                    msg.sender === 'user'
                      ? 'bg-[#CCFF00] text-black font-medium rounded-br-xs'
                      : 'bg-white/10 text-white/90 border border-white/10 rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>

                  {/* Message Action Chips */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-white/15 flex flex-wrap gap-1.5 font-mono-tech text-[10px]">
                      {msg.actions.map((act, aIdx) => (
                        <button
                          key={aIdx}
                          type="button"
                          onClick={() => handleActionClick(act)}
                          className="px-2.5 py-1 rounded-full bg-white/15 hover:bg-[#CCFF00] hover:text-black text-white font-semibold transition-all flex items-center gap-1 border border-white/10"
                        >
                          {act.url && <ExternalLink className="w-2.5 h-2.5" />}
                          {act.actionType === 'terminal' && <Terminal className="w-2.5 h-2.5" />}
                          {act.actionType === 'experience' && <FileText className="w-2.5 h-2.5" />}
                          {act.actionType === 'contact' && <Mail className="w-2.5 h-2.5" />}
                          <span>{act.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[9px] font-mono-tech text-white/35 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 text-white/50 text-xs px-2 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px] font-mono-tech text-white/40 ml-1">Pixel is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-3 py-1.5 bg-[#18181c]/60 border-t border-white/8 overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSendPrompt(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white text-[10px] font-mono-tech transition-colors shrink-0 border border-white/10"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Box */}
          <form
            onSubmit={handleSubmit}
            className="p-2.5 sm:p-3 bg-[#18181c] border-t border-white/10 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about projects, React Native, YOE..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#CCFF00] transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-xl bg-[#CCFF00] text-black hover:bg-[#b8e600] disabled:opacity-30 disabled:hover:bg-[#CCFF00] transition-all shrink-0 font-bold"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setUnreadCount(0);
            setIsHappy(true);
            setTimeout(() => setIsHappy(false), 800);
          }}
          onMouseEnter={() => setIsHappy(true)}
          onMouseLeave={() => setIsHappy(false)}
          className="group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#121214] text-white shadow-2xl hover:shadow-[0_0_24px_rgba(204,255,0,0.35)] border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Open portfolio chatbot assistant"
        >
          {/* Animated Robot Face with Cursor-Tracking Eyes */}
          <div
            ref={faceRef}
            className="relative w-7 h-7 rounded-xl bg-gradient-to-br from-[#24242a] to-[#121214] border border-white/20 flex items-center justify-center overflow-hidden shrink-0 shadow-inner"
          >
            {/* Little Antenna */}
            <div className="absolute -top-1 w-1 h-1.5 bg-[#CCFF00] rounded-full animate-pulse" />

            {/* Eyes Container */}
            <div className="flex items-center gap-1 z-10">
              {/* Left Eye */}
              <div className="relative w-2 h-2.5 rounded-full bg-black/70 flex items-center justify-center overflow-hidden border border-white/20">
                {isBlinking ? (
                  <div className="w-full h-[1.5px] bg-[#CCFF00]" />
                ) : isHappy ? (
                  <div className="text-[9px] font-bold text-[#CCFF00] leading-none">^</div>
                ) : (
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] transition-transform duration-75"
                    style={{
                      transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
                    }}
                  />
                )}
              </div>

              {/* Right Eye */}
              <div className="relative w-2 h-2.5 rounded-full bg-black/70 flex items-center justify-center overflow-hidden border border-white/20">
                {isBlinking ? (
                  <div className="w-full h-[1.5px] bg-[#CCFF00]" />
                ) : isHappy ? (
                  <div className="text-[9px] font-bold text-[#CCFF00] leading-none">^</div>
                ) : (
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] transition-transform duration-75"
                    style={{
                      transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Trigger Label */}
          <div className="flex items-center gap-2 pr-1">
            <span className="text-xs font-bold font-mono-tech text-white flex items-center gap-1">
              <span>Chat AI</span>
              <Sparkles className="w-3 h-3 text-[#CCFF00]" />
            </span>
          </div>

          {/* Unread indicator */}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#CCFF00] text-black font-bold text-[9px] flex items-center justify-center animate-pulse">
              1
            </span>
          )}
        </button>
      )}
    </aside>
  );
};
