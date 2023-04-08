export const Botones = ({reset, saveImage, redo, undo}) => {
  return (
    <div className="flex flex-col md:flex-row gap-1 items-center max-w-sm rounded-lg mx-4">
      <button
        className="rounded-lg px-4 py-2 capitalize text-white text-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring "
        onClick={reset}
      >
        Reset ×
      </button>
      <button
        className="rounded-lg px-4 py-2 capitalize text-white text-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring "
        onClick={saveImage}
      >
        Save Image ↓
      </button>

      <button
        className="rounded-lg px-4 py-2 capitalize text-white text-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring "
        onClick={undo}
      >
        Undo ↺
      </button>
      <button
        className="rounded-lg px-4 py-2 capitalize text-white text-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring "
        onClick={redo}
      >
        Redo ↻
      </button>
    </div>
  )
}
