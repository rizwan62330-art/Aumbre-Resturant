import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import usePageTitle from "../hooks/usePageTitle";
export default function Account() {
  usePageTitle("My account");
  const { user, logout } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return (
    <main className="grid min-h-[65vh] place-items-center px-5 py-[72px] max-[600px]:px-4 max-[600px]:py-10">
      <section className="w-full max-w-[480px] border border-divider bg-forest-deep p-10 max-[600px]:px-5 max-[600px]:py-[26px] [&_h1]:font-heading [&_h1]:text-[30px] [&_h1]:mt-3 [&_h1]:mb-[18px] [&_h2]:font-heading [&_h2]:text-[30px] [&_h2]:mt-3 [&_h2]:mb-[18px] max-[600px]:[&_h2]:text-[26px] [&_p]:text-[19px] [&_p]:leading-[1.6]">
        <p className="text-accent tracking-[2px] uppercase">My account</p>
        <h1>Welcome, {user.name}</h1>
        <p>{user.email}</p>
        <p>You’re signed in to the demo.</p>
        <Link
          className="block w-full min-h-[50px] border border-accent bg-accent p-3.5 text-center font-heading text-[15px] text-forest no-underline hover:bg-accent-light disabled:cursor-wait disabled:opacity-65"
          to="/reservation"
        >
          Reserve a table
        </Link>
        <button
          className="mt-5 w-full border border-divider bg-transparent p-3 text-parchment"
          onClick={logout}
        >
          Log out
        </button>
      </section>
    </main>
  );
}
