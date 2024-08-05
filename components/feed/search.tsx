'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

export default function Search() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    const query = e?.target?.value || '';

    if (query) {
      params.set('query', query)
    } else {
      params.delete('query');
    }

    replace(`${pathname}/?${params.toString()}`);
  }

  return (
    <label>
      <input
        type="text"
        placeholder="Search for a tag or a username"
        defaultValue={searchParams.get('query')?.toString()}
        onChange={handleSearchChange}
        className="search_input peer mt-4"
      />
    </label>
  );
}
