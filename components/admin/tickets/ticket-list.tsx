import React from "react";
import TicketCard from "./ticket-card";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import useGetTickets from "@/hooks/useGetTickets";

const TicketList = () => {
  const {
    allTickets,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
  } = useGetTickets();

  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  return (
    <>
      {isSuccess && allTickets.length > 0 && (
        <div className="flex flex-wrap gap-8 mt-14 mb-10 justify-center items-center gap-y-10">
          {allTickets.map((el) => (
            <TicketCard key={el._id} {...el} />
          ))}
        </div>
      )}

      {hasNextPage && (
        <div
          ref={observerRef}
          className="h-10 mt-10 flex items-center justify-center text-sm text-gray-400"
        >
          {isFetchingNextPage ? "در حال بارگذاری..." : "بارگذاری بیشتر"}
        </div>
      )}

      {!hasNextPage && !isLoading && allTickets.length === 0 && (
        <p className="mt-6 text-gray-500">تیکت موجود نیست.</p>
      )}
    </>
  );
};

export default TicketList;
