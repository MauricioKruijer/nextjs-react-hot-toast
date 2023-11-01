'use client'

import toast from "react-hot-toast";

const Button = () => {
  const clickHandler = () => {
    toast.success('Hoi hoi')
  }

  return (
    <button
      onClick={() => clickHandler()}
      className="
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
  )
}

export default Button
