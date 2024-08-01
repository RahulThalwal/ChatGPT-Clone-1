import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_SECRET_KEY,
    dangerouslyAllowBrowser: true
});




export async function sendMsgToOpenAI(message) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: message }
            ],
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error communicating with OpenAI:', error);
        throw error; 
    }
}
