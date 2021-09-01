import { BaseCore } from './Cards'
import React from "react";
import { Controller, useForm } from "react-hook-form"
import Select from 'react-select';

const divisions = [
  {
    value: 'cp',
    label: 'Competitive Programming'
  },
  {
    value: 'wd',
    label: 'Web Development'
  },
  {
    value: 'ds',
    label: 'Data Science'
  },
  {
    value: 'uix',
    label: 'User Interface / User Experience'
  },
  {
    value: 'ma',
    label: 'Mobile Apps'
  },
  {
    value: 'wds',
    label: 'Web Design'
  },
  {
    value: 'cs',
    label: 'Cyber Security'
  },
  {
    value: 'gd',
    label: 'Game Development'
  }
]


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
            focus:ring-blue-400-300 focus:ring-2 focus:border-transparent placeholder-gray-500 text-black
            "
            {...register("fullname", { required: true })}
          />
      </BaseCore>
      <div className="flex space-x-6 justify-between">
        <BaseCore className="flex flex-col p-8 text-left space-y-2 flex-1">
          <label for="divison-select" className="font-bold">Divisi</label>
          <Controller 
            control={control}
            name="divison"
            render={({ field: { onChange, onBlur, value }}) => (
              <Select
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                options={divisions}
                className="text-black"
              />
            )}
          />
        </BaseCore>
        <BaseCore className="flex flex-col p-8 text-left space-y-2">
          <label for="file-upload" className="font-bold">Unggah</label>
          {/* <Controller 
            control={control}
          /> */}
        </BaseCore>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="p-2 px-8 bg-blue-500 font-bold rounded-full text-xl text-white
        transition duration-300 ease-in-out hover:bg-blue-600 focus:bg-blue-400
        transform hover:scale-110 focus:scale-100" >
          Submit
        </button>
      </div>
    </form>
  )
}