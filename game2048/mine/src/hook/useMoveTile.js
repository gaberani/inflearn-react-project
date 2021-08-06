import { useEffect } from "react";
import { addKeyObserver, removeKeyObserver } from "../util/keyboard";

export default function useMoveTile() {
  function moveUp() {}
  function moveDown() {}
  function moveLeft() {}
  function moveRight() {}
  useEffect(() => {
    addKeyObserver('up', moveUp)
    addKeyObserver('down', moveDown)
    addKeyObserver('left', moveLeft)
    addKeyObserver('right', moveRight)
    return () => {
      removeKeyObserver('up', moveUp)
      removeKeyObserver('down', moveDown)
      removeKeyObserver('left', moveLeft)
      removeKeyObserver('right', moveRight)
    }
  })
}