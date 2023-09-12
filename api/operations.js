import OpenAI from 'openai';
import config from './config';

const openai = new OpenAI({
    apiKey: config.APY_KEY, 
  });
  
  const main = async () => {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
    console.log(completion.choices);
};

export default main;