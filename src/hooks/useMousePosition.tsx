import {useState, useEffect} from 'react'

function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});

    interface MousePosition {
        x: number;
        y: number;
    }

    const updateMousePosition = (event: MouseEvent): void => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY
        });
    }
    useEffect(()=> {
        window.addEventListener("mousemove", updateMousePosition)
        return ()=>{
            window.removeEventListener("mousemove", updateMousePosition)
        }
    },[])
  return mousePosition;
}

export default useMousePosition