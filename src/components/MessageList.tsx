import { useEffect, useRef } from 'react';
import { Message } from '../types/chat';
import { MessageBubble } from './MessageBubble';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className='flex-1 overflow-y-auto px-4 py-6 space-y-4'>
      <div className='max-w-4xl mx-auto'>
        {messages.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full text-center py-12'>
            <div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl mb-6'>
              <svg
                className='w-12 h-12 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
              </svg>
            </div>
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>
              Welcome to AI Chatbot
            </h2>
            <p className='text-gray-500 max-w-md'>
              Start a conversation by typing a message below. I&apos;m here to
              help with any questions you have!
            </p>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl'>
              <div className='bg-white/60 backdrop-blur p-4 rounded-xl border border-gray-200 shadow-sm'>
                <p className='text-sm text-gray-600'>💡 Ask questions</p>
              </div>
              <div className='bg-white/60 backdrop-blur p-4 rounded-xl border border-gray-200 shadow-sm'>
                <p className='text-sm text-gray-600'>✨ Get creative ideas</p>
              </div>
              <div className='bg-white/60 backdrop-blur p-4 rounded-xl border border-gray-200 shadow-sm'>
                <p className='text-sm text-gray-600'>🚀 Solve problems</p>
              </div>
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))
        )}

        {isLoading && (
          <div className='flex justify-start mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500'>
            <div className='flex items-end gap-2'>
              <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-md'>
                <svg
                  className='w-5 h-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
                  <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
                </svg>
              </div>
              <div className='bg-white border border-gray-100 px-5 py-3 rounded-2xl rounded-bl-md shadow-md'>
                <div className='flex items-center space-x-2'>
                  <div className='w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce'></div>
                  <div
                    className='w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce'
                    style={{ animationDelay: '0.1s' }}
                  ></div>
                  <div
                    className='w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce'
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
