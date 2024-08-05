import { connectToDB } from '@lib/database';
import Prompt from '@schema/prompt';

export const GET = async (req: Request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate('creator');

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response('Failed to fetch all prompts', { status: 500 });
  }
};
