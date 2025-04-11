import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="p-8 rounded-xl border border-gray-500 shadow-xl/25 hover:shadow-lg/50 shadow-gray-600 flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="w-full flex justify-between">
          <h1 className="text-3xl font-bold tracking-widest">KEVIN KNAPP</h1>
          <Image
            className=""
            src="/origami_penguin_outline.svg"
            alt="Penguin mascot"
            width ={38}
            height={38}
          />
        </div>

        <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/knapp-kevin/"
            target="_blank"
            rel="noopener noreferrer"  
          >
            <Image
              className="dark:invert-50"
              src="/linkedin.svg"
              alt="LinkedIn logo"
              width={20}
              height={20}
            />
            LinkedIn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/knappkevin"
            target="_blank"
            rel="noopener noreferrer"  
          >
            <Image
              className="dark:invert-50"
              src="/github.svg"
              alt="LinkedIn logo"
              width={20}
              height={20}
            />
            GitHub
          </a>
        </div>

        <div className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <div className="mb-2 tracking-[-.01em]">
            Checkout my favorite project: {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1.5 py-0.5 rounded hover:underline font-[family-name:var(--font-geist-mono)] font-semibold">
              <a href="https://github.com/knappkevin/RGB-LED-BOX">LED BOX</a>
            </code>
          </div>
        </div>
      
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
