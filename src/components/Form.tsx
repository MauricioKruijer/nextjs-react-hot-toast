'use client'

import Button from "@/components/Button";
import {useFormState} from "react-dom";
import toast from "react-hot-toast";

function doStuff(formData: FormData) {
  // if (Math.floor((Math.random() * 4) + 1) === 1) {
  //   throw new Error('This is a planned error')
  // }
  return new Promise(resolve => setTimeout(resolve, 1500))
}

async function someAction(state: any, formData: FormData) {
  const toastId = toast.loading('Loading')

  try {
    await doStuff(formData)
  } catch (error) {
    toast.dismiss(toastId);
    toast.error((error as Error).message)
    return {
      errors: 'something went wrong'
    }
  }

  toast.success('Success!', {id: toastId})

  return {
    message: 'ok'
  }
}

const Form = () => {
  const initialState = { message: null, error: null };
  const [state, dispatch] = useFormState(someAction, initialState);

  return (
    <form action={dispatch}>
      <Button />
    </form>
  )
}

export default Form
