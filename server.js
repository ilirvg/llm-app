// Load environment variables
require('dotenv').config();

// Import dependencies
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3001;

// Configure middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Simple health check endpoint
app.get('/health', (req, res) => {
  console.log('Health check endpoint hit');
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Root endpoint to serve the UI
app.get('/', (req, res) => {
  console.log('Root endpoint hit');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for questions
app.post('/api/ask', async (req, res) => {
  console.log('Received POST request to /api/ask');
  console.log('Request body:', req.body);
  
  try {
    const { question } = req.body;
    
    if (!question) {
      console.log('Error: Question is required');
      return res.status(400).json({ error: 'Question is required' });
    }
    
    console.log(`Received question: ${question}`);
    console.log(`Using API Key: ${process.env.GROQ_API_KEY ? 'API key is set' : 'API key is missing'}`);
    
    // Call Groq API directly
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-8b-8192',
        messages: [
          { role: 'system', content: 'You are a helpful AI assistant.' },
          { role: 'user', content: question }
        ],
        temperature: 0.7,
        max_tokens: 1024
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    // Extract the answer from the response
    const answer = response.data.choices[0].message.content;
    console.log('Successfully received answer from Groq API');
    
    res.json({ answer });
  } catch (error) {
    console.error('Error processing question:', error.message);
    
    if (error.response) {
      console.error('API Response Status:', error.response.status);
      console.error('API Response Data:', JSON.stringify(error.response.data, null, 2));
    } else if (error.request) {
      console.error('No response received from API:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    
    res.status(500).json({ error: 'An error occurred while processing your question' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Health check endpoint: http://localhost:${port}/health`);
}); 