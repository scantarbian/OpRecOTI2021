import { Core } from './Cards'
import React, { useState, useRef } from "react";
import { set, useForm } from "react-hook-form"

export const SubmissionForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  return (
    <form className="w-full">
      <Core>
          <label className="font-bold">Nama Lengkap</label>        
          <input
            name="fullname"
            type="text"
            placeholder="Masukkan nama lengkap"
            className="form-input rounded-full
            focus:ring-blue-400-300 focus:ring-2 focus:border-transparent placeholder-gray-300
            "
            {...register("fullname", { required: true })}
          />
      </Core>
    </form>
  )
}