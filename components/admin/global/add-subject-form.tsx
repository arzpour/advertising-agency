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
import { LoaderCircle } from "lucide-react";

interface IDefaultValue {
  name: string;
  description: string;
  categoryName?: string;
  thumbnail?: string;
  images?: string[];
  icon?: string;
}

interface IAddForm {
  status: "projects" | "blogs" | "categories" | "services";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  setSelectedCategory?: (value: string) => void;
  categoryData?: { data?: { categories: ICategory[] } };
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  defaultData?: IDefaultValue;
  isPending: boolean;
}

const AddForm: React.FC<IAddForm> = ({
  status,
  control,
  handleSubmit,
  setSelectedCategory,
  categoryData,
  defaultData,
  isPending,
}) => {
  const isCategory = status === "categories";

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      aria-busy={!!isPending}
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
          aria-label="enter"
          disabled={!!isPending}
          className={`flex w-full mb-3 justify-center cursor-pointer rounded-md px-3 py-2 text-sm/6 font-semibold text-white shadow-xs 
              ${
                isPending
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-500"
              }`}
        >
          {isPending ? (
            <>
              <span>
                {!!defaultData ? "در حال ویرایش..." : "درحال افزودن..."}
              </span>
              <LoaderCircle className="w-5 h-5 animate-spin" />
            </>
          ) : (
            <>{!!defaultData ? "ویرایش" : "افزودن"}</>
          )}
        </button>
      </div>
    </form>
  );
};

export default AddForm;
