import React from "react";
import { Input } from "@/components/form/input";
import { Images } from "@/components/form/images";
import { Thumbnail } from "@/components/form/thumbnail";
import { TextEditor } from "@/components/form/textEditor";
import { Control, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IDefaultValue {
  name: string;
  description: string;
  categoryName?: string;
  thumbnail?: string;
  images?: string[];
  icon?: string;
}

interface IAddForm {
  status: "projects" | "blogs" | "categories";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  setSelectedCategory?: (value: string) => void;
  categoryData?: { data?: { categories: ICategory[] } };
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  defaultData?: IDefaultValue;
}

const AddForm: React.FC<IAddForm> = ({
  status,
  control,
  handleSubmit,
  setSelectedCategory,
  categoryData,
  defaultData,
}) => {
  const isCategory = status === "categories";

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      className="w-full mx-auto space-y-4"
    >
      <Controller
        control={control}
        name="name"
        defaultValue={defaultData?.name}
        render={({ field, fieldState }) => (
          <Input
            type="text"
            placeholder="عنوان"
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />

      {!isCategory && (
        <Controller
          control={control}
          defaultValue={defaultData?.categoryName}
          name="category"
          render={({ field, fieldState }) => (
            <Select
              value={field.value}
              onValueChange={(value: string) => {
                field.onChange(value);
                if (setSelectedCategory) {
                  setSelectedCategory(value);
                }
              }}
            >
              <SelectTrigger
                className={`w-full mt-2 text-xs border rounded-md p-2 ${
                  fieldState.error ? "border-red-400" : "border-gray-400"
                }`}
              >
                <SelectValue placeholder="دسته‌بندی را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                {(categoryData?.data?.categories || []).map((item) => (
                  <SelectItem key={item._id} value={item.name}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      )}

      <Controller
        control={control}
        defaultValue={defaultData?.description}
        name="description"
        render={({ field, fieldState }) => (
          <TextEditor
            error={fieldState.error?.message}
            {...field}
            defaultValue={defaultData?.description}
          />
        )}
      />

      <div className="flex gap-4 mt-6">
        <Thumbnail
          name={!isCategory ? "thumbnail" : "icon"}
          defaultValue={defaultData?.thumbnail}
          control={control}
          status={status}
        />
        {status !== "categories" && (
          <Images
            defaultValue={defaultData?.images}
            name="images"
            control={control}
            status={status}
          />
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          aria-label="add-or-edit"
          className="shadow-sm py-1.5 px-6 text-sm cursor-pointer font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none"
        >
          {!!defaultData ? "ویرایش" : "ایجاد"}
        </button>
      </div>
    </form>
  );
};

export default AddForm;
