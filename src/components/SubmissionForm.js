import { BaseCore } from './Cards'
import React, { useState, useRef } from "react";
import { Controller, useForm } from "react-hook-form"

export const SubmissionForm = () => {
  const { register, handleSubmit, formState: { errors }, watch, control } = useForm()
  
  const submissionHandler = (data) => {
    console.log(data)
  }

  return (
    <form className="w-full space-y-6" onSubmit={handleSubmit(submissionHandler)}>
      <BaseCore className="flex flex-col p-8 text-left space-y-2">
          <label for="fullname" className="font-bold">Nama Lengkap</label>        
          <input
            id="fullname"
            type="text"
            placeholder="Masukkan nama lengkap"
            className="form-input rounded-xl
            focus:ring-blue-400-300 focus:ring-2 focus:border-transparent placeholder-gray-300
            "
            {...register("fullname", { required: true })}
          />
      </BaseCore>
      <div className="flex space-x-6 justify-between">
        <BaseCore className="flex flex-col p-8 text-left space-y-2">
          <label for="divison-select" className="font-bold">Divisi</label>
          {/* <Controller 
            control={control}
          /> */}
        </BaseCore>
        <BaseCore className="flex flex-col p-8 text-left space-y-2">
          <label for="file-upload" className="font-bold">Unggah</label>
          {/* <Controller 
            control={control}
          /> */}
        </BaseCore>
      </div>
      <button type="submit" className="p-2 px-8 bg-blue-500 font-bold rounded-full text-xl text-white
      transition duration-300 ease-in-out hover:bg-blue-600 focus:bg-blue-400
      transform hover:scale-110 focus:scale-100">
        Submit
      </button>
    </form>
  )
}