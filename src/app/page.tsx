import Form from "@/components/Form";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center text-black">
        <div className="w-full grid grid-cols-1 gap-2 bg-toast-100 rounded-xl p-4">
          <Form />
        </div>
      </div>
    </main>
  )
}
