// Load environment variables
require("dotenv").config();

// Import dependencies
const express = require("express");
const cors = require("cors");
const path = require("path");

// Import LangChain components
const { ChatGroq } = require("@langchain/groq");
const { StringOutputParser } = require("@langchain/core/output_parsers");
const {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} = require("@langchain/core/prompts");
const { RunnableSequence } = require("@langchain/core/runnables");

// Initialize Express app
const app = express();
const port = process.env.PORT || 3001;

// Configure middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Initialize the Groq chat model with LangChain
const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama3-8b-8192",
  temperature: 0.7,
  maxTokens: 1024,
});

// Create prompt templates
const systemPrompt = SystemMessagePromptTemplate.fromTemplate(
  "You are a helpful AI assistant that provides informative and thoughtful answers."
);

const humanPrompt = HumanMessagePromptTemplate.fromTemplate("{question}");

const chatPrompt = ChatPromptTemplate.fromMessages([systemPrompt, humanPrompt]);

// Create a chain (prompt -> model -> output parser)
const chain = RunnableSequence.from([
  chatPrompt,
  model,
  new StringOutputParser(),
]);

// Simple health check endpoint
app.get("/health", (req, res) => {
  console.log("Health check endpoint hit");
  res.status(200).json({ status: "ok", message: "Server is running" });
});

// Root endpoint to serve the UI
app.get("/", (req, res) => {
  console.log("Root endpoint hit");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API endpoint for questions using LangChain
app.post("/api/ask", async (req, res) => {
  console.log("Received POST request to /api/ask");
  console.log("Request body:", req.body);

  try {
    const { question } = req.body;

    if (!question) {
      console.log("Error: Question is required");
      return res.status(400).json({ error: "Question is required" });
    }

    console.log(`Received question: ${question}`);
    console.log(`Using Groq API with LangChain`);

    // Use the LangChain chain to get a response
    const answer = await chain.invoke({ question });

    console.log("Successfully received answer from LangChain chain");

    res.json({ answer });
  } catch (error) {
    console.error("Error processing question:", error.message);

    if (error.response) {
      console.error("API Response Status:", error.response.status);
      console.error(
        "API Response Data:",
        JSON.stringify(error.response.data, null, 2)
      );
    } else if (error.request) {
      console.error("No response received from API:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }

    res
      .status(500)
      .json({ error: "An error occurred while processing your question" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Health check endpoint: http://localhost:${port}/health`);
});
