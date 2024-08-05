import { connectToDB } from '@lib/database';
import Prompt from '@schema/prompt';

export const GET = async (req: Request, { params }: { params: { userId: string } }) => {
  try {
    await connectToDB();

    const userPrompts = await Prompt
      .find({
        creator: params.userId,
      })
      .populate('creator');

    return new Response(JSON.stringify(userPrompts), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response('Failed to fetch all prompts', { status: 500 });
  }
};
