import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "aspire-1212",
  name: "aspire",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
