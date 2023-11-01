'use client'

import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const Button = () => {
  const {pending, action} = useFormStatus()

  return (
    <button
      disabled={pending}
      type="submit"
      className={`
        ${pending ? 'bg-red-400' : 'bg-white'}
        rounded
        ${pending ? '' : 'hover:bg-gray-300'}
        ${pending ? '' : 'active:bg-gray-600'}
        text-sm
        font-semibold
        py-2
        px-2
        shadow-small-button
        flex
        items-center
      `}
    >
      <div className="flex-1 px-3">Click</div>
    </button>
  )
}

export default Button
