import { redirect } from "next/navigation";

export default function Home() {
  redirect("/multiStep-form");
  return (
    <div className="flex  justify-center min-h-screen mt-10">
      <h1 className="text-5xl text-red-500">Landing Page</h1>
    </div>
  );
}
