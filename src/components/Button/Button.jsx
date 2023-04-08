export const Button = ({ onClick, children }) => {
  return (
    <button
      className="rounded-lg px-4 py-2 capitalize text-white text-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring "
      onClick={onClick}
    >
      {children}
    </button>
  )
}
