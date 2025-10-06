"use client";

import React, { useCallback, useState, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

interface ITextEditor {
  defaultValue?: string;
  error?: string;
  onChange: (value: string) => void;
}

export const TextEditor: React.FC<ITextEditor> = ({
  defaultValue,
  error,
  onChange,
}) => {
  const [content, setContent] = useState<string>(defaultValue || "");

  useEffect(() => {
    if (defaultValue !== undefined && defaultValue !== content) {
      setContent(defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: !defaultValue ? "" : "توضیحات را وارد کنید",
      style: {
        fontSize: "13px",
        height: "150px",
        overflowY: "auto",
      },
    }),
    []
  );

  const handleBlur = useCallback(
    (htmlContent: string) => {
      setContent(htmlContent);
      onChange(htmlContent);
    },
    [onChange]
  );

  return (
    <div>
      <JoditEditor
        value={content}
        config={config}
        onBlur={handleBlur}
        onChange={(htmlContent: string) => setContent(htmlContent)}
      />
      {!!error && (
        <p className="text-red-400 text-start text-xs font-semibold capitalize">
          {error}
        </p>
      )}
    </div>
  );
};
