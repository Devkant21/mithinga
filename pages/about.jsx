import { useRouter } from "next/router";

function about() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center mt-80">
      <h1 className="text-2xl font-bold">I am the about me page</h1>
      <button
        className="p-2 ring-1 ring-gray-500"
        onClick={() => router.push("/")}
      >
        Go to home
      </button>
    </div>
  );
}

export default about;