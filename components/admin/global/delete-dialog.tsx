import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import DeleteBlog from "../blogs/delete-blog";
import DeleteProject from "../projects/delete-project";
import DeleteService from "../services/delete.service";

interface IDeleteDialog {
  title: "خدمات" | "بلاگ" | "پروژه";
  _id: string;
}

const DeleteDialog: React.FC<IDeleteDialog> = ({ title, _id }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const renderDeleteComponent = () => {
    switch (title) {
      // case "خدمات":
      //   return <DeleteCategory _id={_id} setDialogOpen={setDialogOpen} />;
      case "خدمات":
        return <DeleteService _id={_id} setDialogOpen={setDialogOpen} />;
      case "بلاگ":
        return <DeleteBlog _id={_id} setDialogOpen={setDialogOpen} />;
      case "پروژه":
        return <DeleteProject _id={_id} setDialogOpen={setDialogOpen} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Trash className="w-4 h-4 text-red-500 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-lg" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-right mt-6">
            پاک کردن {title}
          </DialogTitle>
        </DialogHeader>
        <p className="text-gray-700 my-1">
          آیا از پاک کردن این {title} مطمئن هستید؟
        </p>
        {renderDeleteComponent()}
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
