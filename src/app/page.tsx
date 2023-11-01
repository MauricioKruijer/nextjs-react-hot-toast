export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center text-black">
        <div className="w-full grid grid-cols-1 gap-2 bg-toast-100 rounded-xl p-4">
          <button className="
            rounded
            bg-white
            hover:bg-gray-300
            active:bg-gray-600
            text-sm
            font-semibold
            py-2
            px-2
            shadow-small-button
            flex
            items-center
            "
          >
            <div className="flex-1 px-3">Click</div>
          </button>
        </div>
      </div>
    </main>
  )
}
