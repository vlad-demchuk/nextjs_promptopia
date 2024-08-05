'use client';
import { Prompt } from '@lib/definitions';
import PromptCard from '@components/prompt-card';

export default function PromptList({
  posts,
  handleTagClick
} : {
  posts: Prompt[],
  handleTagClick: () => void
}) {
  return (
    <div className="mt-16 prompt_layout">
      {posts.map(post => (
        <PromptCard key={post._id} post={post} onTagClick={handleTagClick} />
      ))}
    </div>
  );
}
