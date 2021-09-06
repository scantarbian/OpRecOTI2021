import { BaseCore } from './Cards'
import React from "react";
import { Controller, useForm } from "react-hook-form"
import Select from 'react-select'; 

const divisions = [
  {
    value: 'cp',
    label: 'Competitive Programming',
  },
  {
    value: 'webdev',
    label: 'Web Development',
  },
  {
    value: 'datsci',
    label: 'Data Science',
  },
  {
    value: 'uiux',
    label: 'User Interface / User Experience',
  },
  {
    value: 'mobapp',
    label: 'Mobile Apps',
  },
  {
    value: 'webdes',
    label: 'Web Design',
  },
  {
    value: 'cysec',
    label: 'Cyber Security',
  },
  {
    value: 'gamedev',
    label: 'Game Development',
  }
]

export const SubmissionForm = () => {
  const { register, handleSubmit, control } = useForm()
  
  const submissionHandler = async ({ fullname, division, files }) => {
    const file = files[0]

    const response = await fetch(`https://gxoudxo1aa.execute-api.ap-southeast-1.amazonaws.com/production/upload?division=${division.value}&filename=${file.name}&filetype=${file.type}`, {
      method: 'GET',
    })

    const data = await response.json()
    console.log(data.uploadURL)

    const result = await fetch(data.uploadURL, {
      method: 'PUT',
      body: file.buffer,
    })
    
    console.log('Result: ', result)
  }

  return (
    <form className="w-full space-y-6" onSubmit={handleSubmit(submissionHandler)}>
      <BaseCore className="flex flex-col p-8 text-left space-y-2">
          <label htmlFor="fullname" className="font-bold">Nama Lengkap</label>        
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
          <label htmlFor="divison-select" className="font-bold">Divisi</label>
          <Controller 
            control={control}
            name="division"
            render={({ field: { onChange, onBlur, value }}) => (
              <Select
                id="division-select"
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
          <label htmlFor="file-upload" className="font-bold">Unggah</label>
          <input
            id="file-upload"
            type="file"
            {...register("files", { required: true })}
          />
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