# LLM Chat App

A simple Node.js application that uses the Groq API to create a chat interface with the Llama 3 (8B) model.

## Features

- Interactive chat interface to talk with Llama 3 AI model
- Uses Groq API for fast, efficient AI responses
- Simple, clean web UI
- Express.js backend
- Environment variables for configuration

## Prerequisites

- Node.js (v14 or later recommended)
- A Groq API key

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/ilirvg/llm-app.git
   cd llm-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   PORT=3001
   ```
   Replace `your_groq_api_key_here` with your actual Groq API key.

## Running the App

### Standard Mode
```
npm start
```

### Development Mode (with auto-restart)
```
npm run dev
```

## Usage

1. Start the server using one of the commands above
2. Open your browser and navigate to `http://localhost:3001`
3. Type your question in the input field and press "Ask" or hit Enter
4. The response from the Llama 3 model will appear in the chat window

## Project Structure

- `server.js` - Main application server and API endpoints
- `public/index.html` - Frontend web interface
- `.env` - Environment variables (not included in the repository)

## Environment Variables

- `GROQ_API_KEY`: Your Groq API key (required)
- `PORT`: The port the server runs on (defaults to 3001)

## License

ISC 