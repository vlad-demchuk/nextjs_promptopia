import Search from '@components/feed/search';
import PromptList from '@components/feed/prompt-list';

export default async function Feed({ searchQuery }: { searchQuery: string }) {
  const response = await fetch('http://localhost:3000/api/prompt');
  const posts = await response.json();

  return (
    <section className="w-full">
      <Search />

      <PromptList
        posts={posts}
        handleTagClick={async () => { 'use server'}}
      />
    </section>
  );
}
