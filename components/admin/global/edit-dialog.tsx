import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import EditProjectForm from "../projects/edit-project-form";
import EditBlogForm from "../blogs/edit-blog-form";
import EditCategoryForm from "../categories/edit-category-form";

interface IEditDialog {
  title: "خدمات" | "بلاگ" | "پروژه";
  _id: string;
}

const EditDialog: React.FC<IEditDialog> = ({ title, _id }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const renderEditComponent = () => {
    switch (title) {
      case "خدمات":
        return <EditCategoryForm _id={_id} setDialogOpen={setDialogOpen} />;
      case "بلاگ":
        return <EditBlogForm _id={_id} setDialogOpen={setDialogOpen} />;
      case "پروژه":
        return <EditProjectForm _id={_id} setDialogOpen={setDialogOpen} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Edit className="w-4 h-4 text-red-500 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-lg" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-right mt-6">ویرایش {title}</DialogTitle>
        </DialogHeader>
        {renderEditComponent()}
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
