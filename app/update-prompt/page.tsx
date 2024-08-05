'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PromptForm from '@components/prompt-form';
import { Post } from '@lib/definitions';

export default function EditPromptPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState<Post>({
    prompt: '',
    tag: '',
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`http://localhost:3000/api/prompt/${promptId}`);
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag
      });
    }

    if (promptId) {
      getPromptDetails();
    }
  }, [promptId]);


  const updatePrompt = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push('/profile');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <PromptForm
        type="edit"
        post={post}
        submitting={submitting}
        onSetPost={setPost}
        onHandleSubmit={updatePrompt}
      />
    </main>
  );
}
