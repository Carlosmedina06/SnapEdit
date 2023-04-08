function Rotate({verticalFlip, horizontalFlip, leftRotate, rightRotate}) {
  return (
    <div className="flex flex-col text-center">
      <h2 className="text-3xl font-extrabold mt-2 text-white mb-4">Rotate</h2>
      <div className="flex flex-col max-w-xs gap-4">
        <button
          className="rounded-lg px-4 py-2 capitalize text-white text-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={horizontalFlip}
        >
          Vertical ↑↓
        </button>
        <button
          className="rounded-lg px-4 py-2 capitalize text-white text-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={verticalFlip}
        >
          Horizontal →←
        </button>
        <button
          className="rounded-lg px-4 py-2 capitalize text-white text-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={leftRotate}
        >
          Left Rotate ←
        </button>
        <button
          className="rounded-lg px-4 py-2 capitalize text-white text-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={rightRotate}
        >
          Right Rotate →
        </button>
      </div>
    </div>
  )
}

export default Rotate
