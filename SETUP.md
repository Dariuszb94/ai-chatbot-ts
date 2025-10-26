# Quick Setup Guide

Follow these steps to get your AI Chatbot running:

## 1. Install Dependencies
```bash
npm install
```

## 2. Set Up Environment Variables
```bash
# Copy the example env file
cp .env.local.example .env.local

# Edit .env.local and add your OpenAI API key
# OPENAI_API_KEY=sk-...
```

## 3. Get Your OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key and paste it in your `.env.local` file

## 4. Run the Development Server
```bash
npm run dev
```

## 5. Open Your Browser
Navigate to http://localhost:3000

## Troubleshooting

### "OpenAI API key is not configured" error
- Make sure you created the `.env.local` file
- Verify your API key is correctly set in `.env.local`
- Restart the dev server after adding the API key

### Port 3000 is already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### API rate limit errors
- Check your OpenAI account has credits
- Verify your API key is valid
- Consider upgrading your OpenAI plan if needed

## Next Steps
- Customize the UI in `src/components/`
- Modify AI behavior in `src/app/api/chat/route.ts`
- Add more features like message history, user authentication, etc.