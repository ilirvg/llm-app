# LLM Chat App

A Node.js application that uses LangChain and the Groq API to create a chat interface with the Llama 3 (8B) model.

## Features

- Interactive chat interface to talk with Llama 3 AI model
- Leverages LangChain for prompt engineering and chain composition
- Uses Groq API for fast, efficient AI responses
- Simple, clean web UI
- Express.js backend
- Environment variables for configuration

## Using This Repository as a Template

This repository is set up to be used as a template for creating new LLM applications:

1. On GitHub, visit the repository page
2. Click the "Use this template" button at the top
3. Select "Create a new repository"
4. Give your new repository a name and description
5. Click "Create repository from template"

When you use this template:
- You'll get a new repository with all the code from this template
- It will have its own fresh Git history (no previous commits)
- You can customize it to build your own LLM application

## Prerequisites

- Node.js (v14 or later recommended)
- A Groq API key (sign up at https://console.groq.com)
- LangSmith API key for tracing (sign up at https://smith.langchain.com)

## Getting Started

1. **Install dependencies**:
   ```
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env` file in the root directory with:
   ```
   # Groq API settings
   GROQ_API_KEY=your_groq_api_key_here
   
   # LangSmith settings (for tracing and debugging)
   LANGSMITH_TRACING=true
   LANGSMITH_ENDPOINT=https://api.smith.langchain.com
   LANGSMITH_API_KEY=your_langsmith_api_key_here
   LANGSMITH_PROJECT=your_project_name
   
   # Server settings
   PORT=3001
   ```
   Replace the placeholder values with your actual API keys.

3. **Start the application**:
   ```
   npm start    # Standard mode
   npm run dev  # Development mode with auto-restart
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3001` in your browser

## Usage

Once the app is running:
1. Type your question in the input field 
2. Press "Ask" or hit Enter
3. The response from the Llama 3 model will appear in the chat window

## LangChain Integration

This app uses several LangChain components:
- `ChatPromptTemplate` for composing prompts
- `SystemMessagePromptTemplate` and `HumanMessagePromptTemplate` for role-based prompts
- `RunnableSequence` for chaining components together
- `StringOutputParser` for processing model responses
- `ChatGroq` for interacting with Groq's API

The app follows a simple chain flow: Prompt → Model → Output Parser

## Project Structure

- `server.js` - Main application server with LangChain integration
- `public/index.html` - Frontend web interface
- `.env` - Environment variables (not included in the repository)

## Customization

You can easily customize this application:

- Change the model or provider in `server.js` 
- Modify the prompt templates to adjust responses
- Update the web interface in `public/index.html`
- Add new LangChain components for more advanced use cases
