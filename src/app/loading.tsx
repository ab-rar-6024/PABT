export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background text-foreground">
      <span className="relative flex items-center justify-center w-20 h-20">
        <span className="absolute inset-0 rounded-full border-[3px] border-green-500/20" />
        <span
          className="absolute inset-0 rounded-full border-[3px] border-t-green-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"
          style={{ animationDuration: "1.1s" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-black.png" alt="PABT Foundation" className="h-9 w-auto dark:hidden" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-white.png" alt="PABT Foundation" className="hidden h-9 w-auto dark:block" />
      </span>

      <div className="mt-6 font-extrabold text-xl tracking-wider text-gray-900 dark:text-white">
        PABT <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">FOUNDATION</span>
      </div>

      <div className="mt-6 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}
