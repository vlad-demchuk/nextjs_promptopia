'use client';

import Profile from '@components/profile/profile';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Prompt } from '@lib/definitions';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [posts, setPosts] = useState<Prompt[]>([]);

  const handleEdit = (post: Prompt) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post: Prompt) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id}`, {
          method: 'DELETE',
        });

        setPosts((currentPosts) => currentPosts.filter(p => p._id !== post._id));
      } catch (e) {
        console.error(e);
      }
    }


  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`http://localhost:3000/api/users/${session?.user.id}/prompts`);
      const posts = await response.json();
      setPosts(posts);
    };

    if (session?.user.id) {
      fetchPosts();
    }
  }, [session]);

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      onEditClick={handleEdit}
      onDeleteClick={handleDelete}
    />
  );
}
