# LangGraph Agent API

A LangGraph-powered AI agent API built with Bun and LangChain, featuring tool integration for REST API calls via OpenRouter.

## Features

- **AI Agent**: Powered by LangGraph and LangChain for building conversational agents
- **Custom Tools**: Includes an API tool for making GET requests to REST endpoints
- **OpenRouter Integration**: Uses Google Gemini 2.5 Flash model via OpenRouter
- **TypeScript**: Fully typed codebase for better developer experience
- **Bun Runtime**: Fast JavaScript runtime and package manager

## Prerequisites

- [Bun](https://bun.sh) v1.3.1 or higher
- OpenRouter API key
- (Optional) LangSmith API key for tracing

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lc-langgraph-agent-api-yt
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your API keys to `.env`:
```env
OPENROUTER_API_KEY="your-openrouter-api-key"
LANGSMITH_API_KEY="your-langsmith-api-key"
```

## Usage

### Development Mode

Run the LangGraph development server:

```bash
bun run std
```

This starts the LangGraph CLI in development mode, which provides an interactive interface for testing your agent.

### Project Structure

```
lc-langgraph-agent-api-yt/
├── src/
│   ├── agent.ts          # Main agent configuration
│   └── utils/
│       └── tools.ts      # Custom tool definitions
├── langgraph.json        # LangGraph configuration
├── package.json
└── .env.example
```

## Configuration

### Agent Configuration

The agent is configured in `src/agent.ts` with:
- **Model**: Google Gemini 2.5 Flash (via OpenRouter)
- **Temperature**: 0.7
- **System Prompt**: "You are a helpful assistant."

### Available Tools

#### API Tool
- **Name**: `api_tool`
- **Description**: Makes GET requests to REST API endpoints
- **Parameters**:
  - `endpoint` (URL): Full API endpoint URL
  - `method` (enum): Currently supports "GET" only

## Development

The project uses:
- **LangChain** v1.0.3 - Framework for building LLM applications
- **LangGraph** v1.0.1 - Library for building stateful agents
- **OpenAI SDK** v1.0.0 - For model integration
- **Zod** v4.1.12 - Schema validation
- **Axios** v1.13.2 - HTTP client

## API Keys

### OpenRouter
Get your API key from [OpenRouter](https://openrouter.ai/)

### LangSmith (Optional)
Get your API key from [LangSmith](https://smith.langchain.com/)

## License

This project was created for educational purposes.
