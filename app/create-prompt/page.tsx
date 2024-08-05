'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PromptForm from '@components/prompt-form';
import { Post } from '@lib/definitions';
import { useSession } from 'next-auth/react';

export default function CreatePromptPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState<Post>({
    prompt: '',
    tag: '',
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user.id,
        }),
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PromptForm
        type="create"
        post={post}
        submitting={submitting}
        onSetPost={setPost}
        onHandleSubmit={createPrompt}
      />
    </div>
  );
}
