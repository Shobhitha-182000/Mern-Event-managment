const run = require("../utils/GeminiApi");

const sendingGemini = async (req, res) => {
    try {
        const { prompt } = req.body;
        const result = await run(prompt);
        res.json({ response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports={sendingGemini}