import { ChatOpenAI } from "@langchain/openai";
import { createAgent, SystemMessage } from "langchain";
import { toolInstance } from "./utils/tools";

if (!process.env.OPENROUTER_API_KEY) {
  throw new Error("Please set the OPENROUTER_API_KEY environment variable.");
}

// const system = new SystemMessage("You are a helpful assistant.");

const model = new ChatOpenAI({
  model: "google/gemini-2.5-flash",
  temperature: 0.7,
  apiKey: process.env.OPENROUTER_API_KEY,
  configuration: {
    baseURL: "https://openrouter.ai/api/v1"
  }
})

const agent = createAgent({
  model,
  systemPrompt: "You are a helpful assistant.",
  tools: [toolInstance]
})

export default agent;