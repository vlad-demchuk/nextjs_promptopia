'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ClientSafeProvider, getProviders, LiteralUnion, signIn, signOut, useSession } from 'next-auth/react';
import { BuiltInProviderType } from '@node_modules/next-auth/providers';
import Image from 'next/image';

export default function Nav() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const setProvidersFetch = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setProvidersFetch();
  }, []);

  return (
    <nav>
      <ul className="flex items-center gap-2">
        {session?.user ? (
          <>
            <li>
              <Link href={'/create-prompt'}>
                <button className="h-10 px-4 text-white bg-black rounded-3xl hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
                  Creat Post
                </button>
              </Link>
            </li>

            <li>
              <button
                onClick={() => signOut()}
                className="h-10 px-4 text-black bg-white border border-black rounded-3xl hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300"
              >
                Sign Out
              </button>
            </li>

            <li>
              <Link
                href="/profile"
                className="relative flex size-8"
              >
                <Image
                  src={session?.user?.image}
                  alt="User Image"
                  width='40'
                  height='40'
                  className="object-contain"
                />
              </Link>
            </li>
          </>
        ) : (
          <>
            {providers && Object.values(providers).map(provider => (
              <li key={provider.name}>
                <button
                  className="h-10 px-4 text-white bg-black rounded-3xl hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300"
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              </li>
            ))}
          </>
        )}
      </ul>
    </nav>
  );
}
