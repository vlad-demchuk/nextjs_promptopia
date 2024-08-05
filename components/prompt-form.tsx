import Link from 'next/link';
import { Post } from '@lib/definitions';
import { Dispatch, FormEventHandler } from 'react';

export default function PromptForm({
  type,
  post,
  submitting,
  onSetPost,
  onHandleSubmit,
}: {
  type: 'create' | 'edit',
  post: Post,
  submitting: boolean,
  onSetPost: Dispatch<Post>,
  onHandleSubmit: FormEventHandler<HTMLFormElement> | undefined
}) {
  const formTypeUi = type[0].toUpperCase() + type.slice(1);

  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{formTypeUi} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {formTypeUi} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={onHandleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => onSetPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Prompt{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => onSetPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link
            href='/'
            className='text-gray-500 text-sm'
          >
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${formTypeUi}ing...` : formTypeUi}
          </button>
        </div>
      </form>
    </section>
  );
}

