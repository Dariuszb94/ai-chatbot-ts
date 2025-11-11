'use client';

import { useChat } from '../hooks/useChat';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';

export function Chat() {
  const { messages, isLoading, error, sendMessage, clearMessages } = useChat();

  return (
    <div className='flex flex-col h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-slate-100'>
      {/* Header */}
      <div className='bg-white/80 backdrop-blur-lg border-b border-gray-200/50 px-6 py-4 flex items-center justify-between shadow-sm'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
              />
            </svg>
          </div>
          <div>
            <h1 className='text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
              AI Chatbot
            </h1>
            <p className='text-xs text-gray-500 font-medium'>
              Powered by OpenAI GPT-3.5
            </p>
          </div>
        </div>
        <button
          onClick={clearMessages}
          className='px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all hover:scale-105 active:scale-95'
        >
          Clear Chat
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className='mx-4 mt-4 bg-red-50 border border-red-200 rounded-xl text-red-700 p-4 shadow-sm'>
          <p className='text-sm flex items-center gap-2'>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                clipRule='evenodd'
              />
            </svg>
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}

      {/* Messages */}
      <MessageList messages={messages} isLoading={isLoading} />

      {/* Input */}
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
}
