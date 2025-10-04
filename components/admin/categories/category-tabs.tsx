"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CategoryList from "./category-list";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState<CategoryTabsType>("all");

  return (
    <div className="w-full flex flex-col items-center my-10">
      <Tabs
        value={activeTab}
        onValueChange={(value: string) =>
          setActiveTab(value as CategoryTabsType)
        }
        className="w-full flex flex-col items-center"
      >
        <TabsList className="flex justify-center bg-gray-100 rounded-xl p-1">
          <TabsTrigger
            value="all"
            className="px-4 py-2 rounded-lg text-sm data-[state=active]:bg-red-600 data-[state=active]:text-white cursor-pointer"
          >
            همه
          </TabsTrigger>

          <TabsTrigger
            value="project"
            className="px-4 py-2 rounded-lg text-sm data-[state=active]:bg-red-600 data-[state=active]:text-white cursor-pointer"
          >
            دسته‌بندی پروژه
          </TabsTrigger>

          <TabsTrigger
            value="blog"
            className="px-4 py-2 rounded-lg text-sm data-[state=active]:bg-red-600 data-[state=active]:text-white cursor-pointer"
          >
            دسته‌بندی بلاگ
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="w-full">
          <CategoryList filterType="all" />
        </TabsContent>

        <TabsContent value="project" className="w-full">
          <CategoryList filterType="project" />
        </TabsContent>

        <TabsContent value="blog" className="w-full">
          <CategoryList filterType="blog" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
