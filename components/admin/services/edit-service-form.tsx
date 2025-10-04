import { queryClient } from "@/providers/tanstack.provider";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import AddForm from "../global/add-subject-form";

import { useEditService } from "@/apis/mutations/service";
import useGetServiceById from "@/hooks/useGetServiceById";
import {
  editServiceSchema,
  editServiceSchemaType,
} from "@/validations/service";

interface IEditServiceForm {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  _id: string;
}

const EditServiceForm: React.FC<IEditServiceForm> = ({
  _id,
  setDialogOpen,
}) => {
  const { data: serviceData, isSuccess } = useGetServiceById(_id);

  const editService = useEditService();

  const { control, handleSubmit, reset } = useForm<editServiceSchemaType>({
    mode: "all",
    resolver: zodResolver(editServiceSchema),
    defaultValues: {
      name: serviceData?.name,
      description: serviceData?.description,
      icon: serviceData?.icon,
    },
  });

  const onSubmit: SubmitHandler<editServiceSchemaType> = async (data) => {
    try {
      const formData = new FormData();

      if (data.name) {
        formData.append("name", data.name);
      }

      if (data.description) {
        formData.append("description", data.description);
      }

      if (data.icon instanceof File) {
        formData.append("icon", data.icon);
      }

      await editService.mutateAsync({
        data: formData,
        id: _id,
      });

      toast("ویرایش شد", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
      setDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["get-service-list"] });
    } catch {
      setDialogOpen(false);

      toast("اطلاعات وارد شده صحیح نیست", {
        className: "!bg-red-100 !text-red-800 !shadow-md !h-[60px]",
      });
    } finally {
      setDialogOpen(false);
    }
  };

  const defaultValue = {
    name: serviceData?.name ?? "",
    description: serviceData?.description ?? "",
    icon: serviceData?.icon ?? "",
  };

  React.useEffect(() => {
    if (isSuccess && serviceData) {
      reset({
        name: serviceData?.name,
        description: serviceData?.description,
        icon: serviceData?.icon,
      });
    }
  }, [isSuccess, serviceData, reset]);

  return (
    <AddForm
      control={control}
      status="services"
      handleSubmit={handleSubmit(onSubmit)}
      defaultData={defaultValue}
      isPending={editService.isPending}
    />
  );
};

export default EditServiceForm;
