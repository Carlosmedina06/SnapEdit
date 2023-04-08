import { Button } from '../Button/Button'

export const Botones = ({ reset, saveImage, redo, undo }) => {
  return (
    <div className="flex flex-col md:flex-row gap-1 items-center max-w-sm rounded-lg mx-4">
      <Button onClick={reset}>Reset ×</Button>
      <Button onClick={saveImage}>Save Image ↓</Button>
      <Button onClick={undo}>Undo ↺</Button>
      <Button onClick={redo}>Redo ↻</Button>
    </div>
  )
}
