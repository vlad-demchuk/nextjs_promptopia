'use client';
import { Prompt } from '@lib/definitions';
import PromptCard from '@components/prompt-card';

export default function Profile({
  name,
  desc,
  data,
  onEditClick,
  onDeleteClick,
}: {
  name: string,
  desc: string,
  data: Prompt[],
  onEditClick: (post: Prompt) => void,
  onDeleteClick: (post: Prompt) => void
}) {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => onEditClick && onEditClick(post)}
            handleDelete={() => onDeleteClick && onDeleteClick(post)}
          />
        ))}
      </div>
    </section>);
}
