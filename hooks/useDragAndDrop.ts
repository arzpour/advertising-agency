import { UseMutationResult } from "@tanstack/react-query";
import React from "react";

interface IHasId {
  _id: string;
}

interface IUseDragAndDrop<T extends IHasId> {
  getItems: T[];
  editOrder: UseMutationResult<IEditOrderRes, Error, IEditOrderReq, unknown>;
}

const useDragAndDrop = <T extends IHasId>({
  getItems,
  editOrder,
}: IUseDragAndDrop<T>) => {
  const [items, setItems] = React.useState<T[]>([]);
  const [draggedId, setDraggedId] = React.useState<string | null>(null);

  const handleDrop = async (id: string) => {
    if (!draggedId) return;

    const draggedIndex = items.findIndex((p) => p._id === draggedId);
    const droppedIndex = items.findIndex((p) => p._id === id);

    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(droppedIndex, 0, draggedItem);

    setItems(newItems);
    setDraggedId(null);

    try {
      const changedOrders = newItems
        .map((item, index) => ({
          id: item._id,
          order: index + 1,
        }))
        .filter((o, i) => o.id !== items[i]?._id);

      await editOrder.mutateAsync({ orders: changedOrders });
    } catch (error) {
      console.error("handleDrop error:", error);
    }
  };

  React.useEffect(() => {
    if (items.length === 0 && getItems.length > 0) {
      setItems(getItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItems, getItems.length]);

  return { handleDrop, setDraggedId, items, draggedId, setItems };
};

export default useDragAndDrop;
