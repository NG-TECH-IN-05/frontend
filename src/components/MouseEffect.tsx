import { EyeClosedIcon } from '@radix-ui/react-icons'
import { useEffect, useRef } from 'react'

const MouseEffect = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${event.clientX - 60}px`
        ref.current.style.top = `${event.clientY - 60}px`
      }
    }
    // dialogRef.current?.showModal()
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <div className='p-4'>
      {/* <div
        ref={ref}
        className='absolute h-10 w-10 rounded-full bg-black transition-all duration-100'
      ></div> */}
      <button onClick={() => dialogRef.current?.showModal()}>Show</button>
      <dialog ref={dialogRef} id='01'>
        <div className='flex justify-end '>
          <EyeClosedIcon onClick={() => dialogRef.current?.close()} />
        </div>
        <p className='p-4'>Move your mouse over this area to see the effect.</p>
      </dialog>
    </div>
  )
}

export default MouseEffect
