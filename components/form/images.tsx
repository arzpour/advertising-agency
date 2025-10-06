"use client";

import { addSchemaType } from "@/validations/project";
import Image from "next/image";
import React from "react";
import { Control, useController } from "react-hook-form";

interface IImages {
  name: keyof addSchemaType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  defaultValue?: string[];
  status?: "projects" | "blogs" | "categories" | "services" | "customers";
}

export const Images: React.FC<IImages> = ({
  name,
  control,
  defaultValue,
  status,
}) => {
  const [urls, setUrls] = React.useState<string[]>([]);
  const [files, setFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const handleClick = () => inputRef.current?.click();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const selectedFiles = event.target.files
      ? Array.from(event.target.files)
      : [];
    const updatedFiles = [...files, ...selectedFiles];

    const updatedUrls = updatedFiles.map((file) => URL.createObjectURL(file));

    setFiles(updatedFiles);
    setUrls(updatedUrls);

    field.onChange(updatedFiles);
  };

  const handleDelete = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);

    setFiles(updatedFiles);
    setUrls(updatedFiles.map((file) => URL.createObjectURL(file)));

    field.onChange(updatedFiles?.length ? updatedFiles : []);
  };

  React.useEffect(() => {
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [urls]);

  React.useEffect(() => {
    if (defaultValue && defaultValue.length > 0) {
      let imageUrl;
      if (status === "blogs") {
        imageUrl = process.env.NEXT_PUBLIC_BLOG_IMAGE_URL;
      } else if (status === "projects") {
        imageUrl = process.env.NEXT_PUBLIC_PROJECT_IMAGE_URL;
      } else if (status === "customers") {
        imageUrl = process.env.NEXT_PUBLIC_CUSTOMER_ICON_URL;
      } else if (status === "services") {
        imageUrl = process.env.NEXT_PUBLIC_SERVICE_ICON_URL;
      } else if (status === "categories") {
        imageUrl = process.env.NEXT_PUBLIC_CATEGORY_ICON_URL;
      } else {
        imageUrl = process.env.NEXT_PUBLIC_CUSTOMER_ICON_URL;
      }

      const fullUrls = defaultValue.map((img) => `${imageUrl}/${img}`);
      setUrls(fullUrls);
      field.onChange([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        className={`relative my-4 border rounded-md flex items-center justify-center h-36 hover:bg-slate-50 cursor-pointer overflow-auto ${
          error ? "border-red-400" : "border-slate-300"
        }`}
      >
        {urls.length > 0 ? (
          <div className="flex flex-wrap gap-2 absolute top-0 py-4">
            {urls.map((url, index) => (
              <div
                key={index}
                className="relative w-20 rounded-md overflow-hidden"
              >
                <Image
                  src={url ?? "/gettyimages-2149038061-612x612.jpg"}
                  alt={`Image ${index + 1}`}
                  className="object-center"
                  width={400}
                  height={400}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                  aria-label="cancle"
                  className="absolute top-1 right-1 bg-gray-900 opacity-70 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p
            className={`text-xs font-medium ${
              error ? "text-red-400" : "text-gray-500"
            }`}
          >
            عکس هایتان را وارد کنید
          </p>
        )}
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple
          accept="image/*"
          onChange={handleChange}
        />
      </div>
      {error && (
        <p className="text-red-400 text-xs capitalize font-semibold">
          {error.message}
        </p>
      )}
    </div>
  );
};
