import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AddProjectForm from "../projects/project-form";

const AddProjectBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-500 hover:bg-red-400 text-white rounded-full px-6 cursor-pointer">
          افزودن پروژه
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle className="text-right mt-6">
            افزودن پروژه جدید
          </DialogTitle>
        </DialogHeader>
        <AddProjectForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectBtn;
