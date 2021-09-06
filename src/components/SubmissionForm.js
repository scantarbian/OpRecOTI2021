import { BaseCore } from "./Cards";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-toastify";

const divisions = [
  {
    value: "cp",
    label: "Competitive Programming",
  },
  {
    value: "webdev",
    label: "Web Development",
  },
  {
    value: "datsci",
    label: "Data Science",
  },
  {
    value: "uiux",
    label: "User Interface / User Experience",
  },
  {
    value: "mobapp",
    label: "Mobile Apps",
  },
  {
    value: "webdes",
    label: "Web Design",
  },
  {
    value: "cysec",
    label: "Cyber Security",
  },
  {
    value: "gamedev",
    label: "Game Development",
  },
];

export const SubmissionForm = () => {
  const { register, handleSubmit, control } = useForm();

  const ToastVariants = {
    success: {
      render: "Upload berhasil 🆖🆎",
      type: "success",
      isLoading: false,
      draggable: true,
      hideProgressBar: false,
      autoClose: 3000,
    },
    fail: {
      render: "Upload gagal 😢 ",
      type: "error",
      isLoading: false,
      draggable: true,
      hideProgressBar: false,
      autoClose: 3000,
    },
  };

  const submissionHandler = async ({ fullname, division, files }) => {
    const status = toast.loading("lagi ngupload nih ", {
      draggable: true,
      hideProgressBar: false,
      autoClose: 3000,
    });
    const file = files[0];
    let fileType = file.type;
    console.log(file);

    // get file extension out of file.name
    const fileExtension = file.name.split(".").pop();

    // handle empty filetype
    if (!fileType) {
      if (fileExtension === "rar") {
        fileType = "application/x-rar-compressed";
      }
      fileType = "application/octet-stream";
    }

    // get pre-signed URL
    try {
      const response = await fetch(
        `https://gxoudxo1aa.execute-api.ap-southeast-1.amazonaws.com/production/upload?division=${division.value}&filename=${file.name}&filetype=${fileType}`,
        {
          method: "GET",
        }
      );
      // capture pre-signed URL
      const data = await response.json();
      // upload file to S3
      const result = await fetch(data.uploadURL, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": fileType,
          "x-amz-acl": "public-read",
        },
      });
      toast.update(status, ToastVariants["success"]);
      console.log("Result: ", result);
      if (result.status !== 200) {
        toast.update(status, ToastVariants["success"]);
      }
    } catch (e) {
      console.log("gagal");
      toast.update(status, ToastVariants["fail"]);
    }
  };

  return (
    <form
      className="w-full space-y-6 z-10"
      onSubmit={handleSubmit(submissionHandler)}
    >
      <BaseCore className="flex flex-col p-8 text-center lg:text-left space-y-2">
        <label htmlFor="fullname" className="font-bold">
          Nama Lengkap
        </label>
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
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 justify-between">
        <BaseCore className="flex flex-col p-8 text-center lg:text-left space-y-2 flex-1 z-20">
          <label htmlFor="divison-select" className="font-bold">
            Divisi
          </label>
          <Controller
            control={control}
            name="division"
            render={({ field: { onChange, onBlur, value } }) => (
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
        <BaseCore className="flex flex-col p-8 text-center lg:text-left space-y-2">
          <label htmlFor="file-upload" className="font-bold">
            Unggah
          </label>
          <input
            id="file-upload"
            type="file"
            {...register("files", { required: true })}
          />  
        </BaseCore>
      </div>
      <div className="flex justify-center lg:justify-end">
        <button type="submit" className="p-2 px-8 bg-blue-500 font-bold rounded-full text-xl text-white
        transition duration-300 ease-in-out hover:bg-blue-600 focus:bg-blue-400
        transform hover:scale-110 focus:scale-100" >
          Submit
        </button>
      </div>
    </form>
  );
};
