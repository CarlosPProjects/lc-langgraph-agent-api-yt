import axios from "axios";
import { StructuredTool } from "langchain";
import z from "zod";

class APITool extends StructuredTool {
  schema = z.object({
    endpoint: z.url().describe("The API endpoint to fetch data from"),
    method: z.enum(["GET"]).describe("The HTTP method to use"),
  })

  name = "api_tool";
  description = "Useful for when you need to make an API call to a REST endpoint. The endpoint should be a full URL starting with http or https. Currently only GET method is supported.";

  async _call(input: { endpoint: string }) {
    try {
      const res = await axios.get(input.endpoint);
      return JSON.stringify(res.data);
    } catch (error) {
      console.log("API Tool Error:", error);
      return JSON.stringify({ error: "Failed to fetch data from the API." });
    }
  }
}

export const toolInstance = new APITool();