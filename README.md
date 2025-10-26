# AI Chatbot TypeScript

A modern, responsive AI chatbot built with Next.js 16, TypeScript, and OpenAI GPT-3.5.

## Features

- 💬 Real-time chat interface with OpenAI GPT-3.5
- 🎨 Beautiful, responsive UI with Tailwind CSS
- ⚡ Built with Next.js 16 App Router
- 🔒 Type-safe with TypeScript
- 🎯 Clean component architecture
- 📱 Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js 18+ installed
- An OpenAI API key (get one at [OpenAI Platform](https://platform.openai.com/api-keys))

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

3. Add your OpenAI API key to `.env.local`:

```env
OPENAI_API_KEY=your_actual_api_key_here
```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the chatbot.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # OpenAI API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── Chat.tsx                  # Main chat component
│   ├── ChatInput.tsx             # Message input component
│   ├── MessageBubble.tsx         # Individual message display
│   └── MessageList.tsx           # Message list container
├── hooks/
│   └── useChat.ts                # Chat state management hook
└── types/
    └── chat.ts                   # TypeScript type definitions
```

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **OpenAI API** - GPT-3.5 Turbo for AI responses
- **Tailwind CSS** - Styling
- **nanoid** - Unique ID generation
- **React 19** - UI library

## How It Works

1. User types a message in the chat input
2. Message is sent to the Next.js API route (`/api/chat`)
3. API route forwards the conversation to OpenAI's GPT-3.5 API
4. AI response is returned and displayed in the chat interface
5. Conversation history is maintained in React state

## Customization

### Change AI Model

Edit `src/app/api/chat/route.ts` and modify the model parameter:

```typescript
const completion = await openai.chat.completions.create({
  model: 'gpt-4', // Change to gpt-4 or other models
  // ...
});
```

### Adjust AI Behavior

Modify the `temperature` and `max_tokens` parameters in the API route for different response styles.

## Building for Production

```bash
npm run build
npm start
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
