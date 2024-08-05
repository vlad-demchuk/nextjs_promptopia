import { connectToDB } from '@lib/database';
import Prompt from '@schema/prompt';

export const POST = async (req: Request) => {
  const reqBody = await req.json()
  const { userId, prompt, tag } = reqBody;

  try {
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (e) {
    console.error(e);
    return new Response('Failed to create a new prompt', { status: 500 });
  }
};
