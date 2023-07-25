import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function UserProfile() {
  const { data } = useSession();
  
  return (
    <ul className="flex flex-row gap-4 justify-end ml-4">
      {data?.user ? (
        <>
          <li>Hi, {data?.user?.name}</li>
          <li className="cursor-pointer" onClick={() => signOut()}>Logout</li>
        </>
      ) : (
        <>
          <li>
            <Link
              className="hover:text-themeGreen transition-colors"
              href="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-themeGreen transition-colors"
              href="/register"
            >
              Sign Up
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}
