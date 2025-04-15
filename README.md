# LLM Chat App

A simple Node.js application that uses LangChain, Groq, and LangSmith to create a chat interface with Llama 3 (8B) model.

## Setup

1. Ensure you have Node.js installed (v14 or later recommended)
2. Install dependencies:
   ```
   npm install
   ```
3. The `.env` file is already set up with the provided API keys and configuration

## Running the App

### Development Mode
```
npm run dev
```

### Production Mode
```
npm start
```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Type your question in the input field and press "Ask" or hit Enter
3. The response from the Llama 3 model will appear in the chat window

## Features

- Uses Groq API with the Llama 3 (8B) model
- Integrates with LangSmith for tracing and debugging
- Simple, intuitive web interface
- Real-time chat experience

## Environment Variables

- `LANGSMITH_TRACING`: Enables LangSmith tracing
- `LANGSMITH_ENDPOINT`: LangSmith API endpoint
- `LANGSMITH_API_KEY`: LangSmith API key
- `LANGSMITH_PROJECT`: LangSmith project ID
- `GROQ_API_KEY`: Groq API key
- `PORT`: The port the server runs on (defaults to 3000) 