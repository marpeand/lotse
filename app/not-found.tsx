import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid h-80 px-4 place-content-center text-center">
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Page Not Found</p>
      <Link href="/" className="text-blue-400 hover:underline">
        Return Home
      </Link>
    </div>
  );
}
