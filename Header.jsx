
import Link from "next/link";

export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl text-green-400">ESTR</h1>

        <nav className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/tools">Tools</Link>
        </nav>

        <a href="#" className="bg-green-500 px-4 py-2 rounded-xl font-semibold">
          Website Token
        </a>
      </div>
    </header>
  );
}
