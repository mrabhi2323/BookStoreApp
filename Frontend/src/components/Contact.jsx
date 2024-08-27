import React from 'react'
import { useForm } from "react-hook-form"
function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
        <div className="flex h-screen items-center justify-center">
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-3xl font-bold  ">Contact us</h1>
                    {/* Name input */}
                    <div className="mt-4 space-y-2">
                        <span>Name</span>
                        <br />
                        <input 
                            type="text" 
                            placeholder="enter your name"
                            className="w-80 px-3 py-1 border rounded outline-none dark:bg-slate-900 dark:text-white"
                            {...register("name", { required: true })}
                        />
                            <br />
                            {errors.name && (
                            <span className="text-sm text-red-500">
                                This field is required
                            </span>
                            )}

                    </div>
                    {/* email input */}
                    <div className="mt-4 space-y-2">
                        <span>Email</span>
                        <br />
                        <input 
                            type="email" 
                            placeholder="enter your email"
                            className="w-80 px-3 py-1 border rounded outline-none dark:bg-slate-900 dark:text-white"
                            {...register("email", { required: true })}
                            />
                        <br />
                        {errors.email && (
                            <span className="text-sm text-red-500">
                                This field is required
                                </span>
                            )}
                        
                    </div>
                    {/* message */}
                    <div className="mt-4 space-y-2">
                        <span>Message</span>
                        <br />
                        <textarea 
                            placeholder="Type your message" 
                            className="w-80 h-40 px-3 py-1 border rounded outline-none dark:bg-slate-900 dark:text-white"

                            {...register("message", { required: true })}
                            >
                        </textarea>
                        <br />
                        {errors.message && (
                            <span className="text-sm text-red-500">
                                This field is required
                                </span>
                            )}
                    </div>
                    <div className="justify-around mt-4">
                        <button type="submit" className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>

  )
}

export default Contact