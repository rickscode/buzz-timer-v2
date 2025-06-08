# 🐝 Buzz Timer v2 🍯

A bee-themed Pomodoro timer application that helps you work productively like a busy bee! Built with React, TypeScript, and Vite.

## 🤖 Development Note

This project was created as a **second test using GitHub Copilot Pro with Claude Sonnet 4**. The development experience and code quality were **significantly better** compared to the free Copilot version using Claude 3.5. The Pro version with Sonnet 4 demonstrated:

- More accurate code generation and fewer iterations needed
- Better understanding of complex TypeScript configurations
- Superior handling of modern React patterns and hooks
- More reliable CSS module and styling implementation
- Enhanced problem-solving for Web Audio API integration

## Features

- **🐝 Bee-Themed Design**: Beautiful honey-colored gradients with hexagonal honeycomb patterns
- **⏱️ Pomodoro Timer**: Classic 25-minute work sessions with 5-minute short breaks and 15-minute long breaks
- **🔊 Audio Feedback**: Realistic buzzing sounds and pleasant chimes using Web Audio API
- **📊 Progress Tracking**: Visual honey collection system to track your completed sessions
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎨 Smooth Animations**: Floating bee animations and smooth transitions

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd buzz-timer-v2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## How to Use

1. **Choose Your Session**: Select between Work (25 min), Short Break (5 min), or Long Break (15 min)
2. **Start the Timer**: Click the Start button to begin your session
3. **Stay Focused**: Watch the bee animations and listen to gentle buzzing sounds
4. **Collect Honey**: Complete work sessions to fill your honeycomb progress tracker
5. **Take Breaks**: The app automatically suggests breaks after work sessions

## Project Structure

```
src/
├── components/           # React components
│   ├── BuzzTimer.tsx    # Main timer component
│   ├── HiveDisplay.tsx  # Hexagonal timer display
│   ├── TimerControls.tsx # Start/pause/reset buttons
│   ├── SessionSelector.tsx # Session type picker
│   └── ProgressTracker.tsx # Honey collection tracker
├── hooks/               # Custom React hooks
│   ├── useTimer.ts      # Timer logic
│   └── useSoundEffects.ts # Audio functionality
├── types/               # TypeScript type definitions
│   └── timer.ts         # Timer-related types
├── utils/               # Utility functions
│   └── timeUtils.ts     # Time formatting helpers
└── *.css               # Styling files
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **CSS Modules** - Scoped styling
- **Web Audio API** - Sound effects

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by the Pomodoro Technique by Francesco Cirillo
- Bee and honey emojis for the delightful theme
- The hardworking bees that inspired the productivity concept! 🐝

---

Happy buzzing! 🐝✨
