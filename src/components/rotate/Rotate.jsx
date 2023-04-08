import { Button } from '../Button/Button'

function Rotate({ verticalFlip, horizontalFlip, leftRotate, rightRotate }) {
  return (
    <div className="flex flex-col text-center">
      <h2 className="text-3xl font-extrabold mt-2 text-white mb-4">Rotate</h2>
      <div className="flex flex-col max-w-xs gap-4">
        <Button onClick={horizontalFlip}>Vertical ↑↓</Button>
        <Button onClick={verticalFlip}>Horizontal →←</Button>
        <Button onClick={leftRotate}>Left Rotate ←</Button>
        <Button onClick={rightRotate}>Right Rotate →</Button>
      </div>
    </div>
  )
}

export default Rotate
