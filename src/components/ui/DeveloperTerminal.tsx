import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, CornerDownLeft } from 'lucide-react';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';

interface DeveloperTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const DeveloperTerminal: React.FC<DeveloperTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1.5 text-zinc-300">
          <p className="text-[#CCFF00] font-bold">Prabhat.dev Interactive Shell [Version 2.4.0]</p>
          <p className="text-zinc-400 text-xs">
            Type <span className="text-[#CCFF00] font-bold">help</span> to view all commands, or try <span className="text-[#CCFF00] font-bold">sudo hire prabhat</span> for an Easter egg.
          </p>
        </div>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMatrixTheme, setIsMatrixTheme] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-focus on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Global keyboard shortcut listener (Cmd+K / Ctrl+K / `)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryPointer(-1);

    const id = Date.now().toString();
    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-[#CCFF00] font-semibold mb-1">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-zinc-300">
              <div><span className="text-white font-bold">help</span> - Display this help manual</div>
              <div><span className="text-white font-bold">about</span> - Background & engineering summary</div>
              <div><span className="text-white font-bold">skills</span> - Core React, RN, and performance stack</div>
              <div><span className="text-white font-bold">projects</span> - View all verified production apps</div>
              <div><span className="text-white font-bold">telemetry</span> - Real-time vehicle telematics status</div>
              <div><span className="text-white font-bold">coffee</span> - Fuel developer productivity</div>
              <div><span className="text-white font-bold">matrix</span> - Toggle matrix phosphor theme</div>
              <div><span className="text-white font-bold">clear</span> - Clear terminal display screen</div>
              <div><span className="text-[#CCFF00] font-bold">sudo hire prabhat</span> - Launch hiring protocol 🚀</div>
              <div><span className="text-white font-bold">exit</span> - Close terminal shell</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-2 text-xs text-zinc-300 leading-relaxed">
            <p className="text-white font-bold">{profileData.fullName} — {profileData.role}</p>
            <p>{profileData.shortBio}</p>
            <p className="text-zinc-400">
              Location: {profileData.location} | Production Exp: {profileData.experienceYears} | Company: Netlink Software
            </p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-[#CCFF00] font-semibold">CORE CAPABILITIES:</p>
            <div className="space-y-1 text-zinc-300">
              <p><span className="text-white font-bold">Frontend Web:</span> React.js (React 19), TypeScript, Tailwind CSS, Redux Toolkit, Vite, Next.js</p>
              <p><span className="text-white font-bold">Mobile Engineering:</span> React Native (iOS & Android), Reanimated 3, JSI TurboModules, MMKV</p>
              <p><span className="text-white font-bold">Real-Time:</span> WebSockets (10+ Hz streaming), Bluetooth Low Energy (BLE), Frame-Batched rAF</p>
              <p><span className="text-white font-bold">Performance:</span> 35-40% load time optimization, Memoization, Route Code-Splitting, 60fps targets</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-[#CCFF00] font-semibold">PRODUCTION PROJECTS:</p>
            <div className="space-y-1 text-zinc-300">
              {projectsData.map((p, idx) => (
                <div key={p.id} className="flex items-center justify-between border-b border-zinc-800 pb-1">
                  <span>
                    <span className="text-white font-bold">{idx + 1}. {p.title}</span> — {p.category}
                  </span>
                  <a
                    href={`#work`}
                    onClick={onClose}
                    className="text-[#CCFF00] hover:underline text-[10px]"
                  >
                    View &gt;
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'telemetry':
        output = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            <p className="text-[#CCFF00] font-bold">SIRIUS_XM :: WEBSOCKET TELEMETRY STREAM</p>
            <p>&gt; Velocity: 68 MPH (109 KM/H)</p>
            <p>&gt; Ingestion: 10 packets/sec (0 drops)</p>
            <p>&gt; Batching Engine: rAF frame batching active (60 FPS)</p>
            <p>&gt; Location: Fleet Node #SX-940 (Bhopal, MP)</p>
          </div>
        );
        break;

      case 'coffee':
        output = (
          <div className="space-y-2 text-xs text-amber-300 font-mono">
            <pre className="text-amber-400">
{`   ( (
    ) )
  ........
  |      |]
  \\      /
   \`----\``}
            </pre>
            <p className="text-[#CCFF00] font-bold">☕ Fresh Brew Poured!</p>
            <p className="text-zinc-300">Productivity increased to 100%. Ready to code high-performance React architectures!</p>
          </div>
        );
        break;

      case 'matrix':
        setIsMatrixTheme((prev) => !prev);
        output = <p className="text-[#CCFF00] text-xs">Matrix phosphor theme toggled.</p>;
        break;

      case 'sudo hire prabhat':
      case 'hire':
      case 'hire-me':
        output = (
          <div className="p-3 rounded-xl bg-gradient-to-r from-[#CCFF00]/20 to-emerald-500/20 border border-[#CCFF00]/40 text-xs space-y-2">
            <div className="flex items-center gap-2 text-[#CCFF00] font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>ACCESS GRANTED: HIRING PROTOCOL INITIATED!</span>
            </div>
            <p className="text-zinc-200">
              Redirecting you directly to Prabhat's direct contact line and email channel...
            </p>
            <button
              onClick={() => {
                onClose();
                window.location.hash = '#contact';
              }}
              className="px-3 py-1.5 rounded-lg bg-[#CCFF00] text-black font-bold hover:bg-[#b8e600] transition-colors"
            >
              Open Contact Form Now →
            </button>
          </div>
        );
        setTimeout(() => {
          onClose();
          const contactElem = document.getElementById('contact');
          contactElem?.scrollIntoView({ behavior: 'smooth' });
        }, 1800);
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        output = (
          <p className="text-red-400 text-xs">
            command not found: {rawCmd}. Type <span className="text-[#CCFF00] font-bold">help</span> to view valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { id, command: rawCmd, output }]);
    setInputVal('');
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextPointer = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setInputVal(commandHistory[nextPointer]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextPointer = historyPointer + 1;
      if (nextPointer >= commandHistory.length) {
        setHistoryPointer(-1);
        setInputVal('');
      } else {
        setHistoryPointer(nextPointer);
        setInputVal(commandHistory[nextPointer]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Terminal Window */}
      <div
        className={`w-full ${
          isFullScreen ? 'h-[95vh] max-w-5xl' : 'max-w-3xl h-[560px]'
        } rounded-2xl bg-[#0c0c0e] border border-white/15 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 font-mono-tech select-text ${
          isMatrixTheme ? 'text-[#00FF66]' : 'text-zinc-200'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="px-4 py-3 bg-[#18181b] border-b border-white/10 flex items-center justify-between select-none">
          {/* Traffic Light Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-110 active:brightness-90 transition-all flex items-center justify-center group"
              aria-label="Close terminal"
            >
              <X className="w-2 h-2 text-black/70 opacity-0 group-hover:opacity-100" />
            </button>
            <button
              type="button"
              onClick={() => setIsFullScreen((prev) => !prev)}
              className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-110 transition-all"
              aria-label="Minimize terminal"
            />
            <button
              type="button"
              onClick={() => setIsFullScreen((prev) => !prev)}
              className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-110 transition-all"
              aria-label="Maximize terminal"
            />
          </div>

          {/* Terminal Title */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
            <TerminalIcon className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>prabhat@dev:~ (zsh) — ⌘K</span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsFullScreen((prev) => !prev)}
              className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
              title="Toggle Fullscreen"
            >
              {isFullScreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
              title="Close (Esc)"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm font-mono leading-relaxed"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-[#CCFF00] font-bold">prabhat@dev:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          {/* Active Command Prompt */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[#CCFF00] font-bold shrink-0">prabhat@dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDownInput}
              spellCheck={false}
              autoComplete="off"
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm p-0 focus:ring-0 placeholder-zinc-600"
              placeholder="type a command (e.g. 'help', 'skills', 'sudo hire prabhat')..."
            />
            <button
              type="button"
              onClick={() => handleCommand(inputVal)}
              className="text-zinc-500 hover:text-[#CCFF00] transition-colors p-1"
              title="Execute command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer Helper Bar */}
        <div className="px-4 py-2 bg-[#121214] border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono select-none">
          <div className="flex items-center gap-4">
            <span>Try: <code className="text-[#CCFF00]">help</code>, <code className="text-[#CCFF00]">projects</code>, <code className="text-[#CCFF00]">coffee</code></span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">Esc</kbd> to exit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
