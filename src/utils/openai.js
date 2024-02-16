import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;

// async function main() {
//   const completion = await openai.chat.completions.create({
//     message: [{ role: "user", content: "say this is a test" }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices);
// }
