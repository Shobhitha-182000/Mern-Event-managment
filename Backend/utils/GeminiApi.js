require('dotenv/config')
// /*
//  * Install the Generative AI SDK
//  *
//  * $ npm install @google/generative-ai
//  *
//  * See the getting started guide for more information
//  * https://ai.google.dev/gemini-api/docs/get-started/node
//  */

// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
  
//   const apiKey = process.env.GEMINI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//   async function run(prompt) {
//     const chatSession = model.startChat({
//       generationConfig,
//    // safetySettings: Adjust safety settings
//    // See https://ai.google.dev/gemini-api/docs/safety-settings
//       history: [
//       ],
//     });
  
//     const result = await chatSession.sendMessage(prompt);
//     console.log(result.response.text());
//     return result.response.text();
//   }
  
// //   run();
 
/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "what is react and node js"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "## React and Node.js: A Dynamic Duo\n\nBoth React and Node.js are powerful tools in the JavaScript ecosystem, but they serve different purposes:\n\n**React:**\n\n* **Front-end Library:** React is a JavaScript library used for building user interfaces (UIs). \n* **Component-based:** React emphasizes building reusable UI components, making it easier to create complex applications with maintainable code. \n* **Virtual DOM:** React utilizes a virtual DOM to efficiently update the actual DOM, improving performance. \n* **Declarative:**  React promotes a declarative approach to coding, where you describe what you want the UI to look like, rather than how to update it.\n* **Examples:** Facebook, Instagram, Netflix, Airbnb\n\n**Node.js:**\n\n* **Back-end Runtime Environment:** Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. \n* **Server-side development:** You can use Node.js to build server-side applications, APIs, and backend services.\n* **Asynchronous and Event-driven:** Node.js uses an event-driven architecture and non-blocking I/O operations, making it efficient for handling many simultaneous connections.\n* **Large Ecosystem:** Node.js has a vast ecosystem of libraries and frameworks available through the npm registry.\n* **Examples:**  Uber, PayPal, Trello, LinkedIn\n\n**How They Work Together:**\n\nWhile React focuses on the front-end and Node.js handles the back-end, they can be combined to create complete web applications. Here's how:\n\n* **API development:** Node.js can build RESTful APIs that provide data to the React application. \n* **Data fetching:** React components can use Node.js APIs to fetch data from a database or other sources.\n* **Real-time features:**  Node.js can be used to implement real-time features such as chat applications, using websockets.\n\n**Benefits of Using React and Node.js Together:**\n\n* **Full-stack JavaScript:** Using both technologies allows developers to work with the same language for both front-end and back-end development. \n* **Improved efficiency:**  The combination allows for streamlined development and reduces the learning curve.\n* **Scalable and efficient:**  The architecture is highly scalable and handles a large volume of requests efficiently.\n\n**In essence:**\n\n* **React:**  Focuses on building dynamic and interactive user interfaces.\n* **Node.js:**  Focuses on server-side logic, data processing, and APIs.\n\nBy working together, these technologies can build robust, scalable, and efficient web applications. \n"},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text();
}
module.exports=run;
// run();
 

 