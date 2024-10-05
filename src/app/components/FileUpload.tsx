import { Badge } from "@/components/ui/badge";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { Upload } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { useDropzone } from "react-dropzone";

interface FileUploadProps {
  onFileUpload: (files: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/x-sqlite3": [".sqlite"] },
    onDrop: (acceptedFiles) => {
      onFileUpload(acceptedFiles);
    },
  });
  const t = useTranslations();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      {...getRootProps()}
      className={`h-fill group relative grid w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 text-center transition hover:bg-muted/50 dark:hover:bg-white/5 ${
        isDragActive ? "border-primary bg-muted/50 dark:bg-white/5" : ""
      } ${isMobile ? "p-2" : "p-6"}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
        {isMobile ? (
          <div className="flex flex-row items-center gap-2 px-5">
            <div className="p-0">
              <Upload
                className="size-5 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            <p className="font-medium text-muted-foreground">
              {t("drop_here_mobile")}
            </p>
          </div>
        ) : isDragActive ? (
          <div className="flex flex-col items-center justify-center gap-4 sm:px-5">
            <div className="rounded-full border border-dashed border-muted-foreground/25 p-3">
              <Upload
                className="size-5 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            <p className="font-medium text-muted-foreground">
              {t("drop_here")}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 sm:px-5">
            <div className="rounded-full border border-dashed border-muted-foreground/25 p-3">
              <Upload
                className="size-5 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            <p className="font-medium text-muted-foreground">
              {t.rich("drag_drop_select", {
                Badge: (chunks) => <Badge>{chunks}</Badge>,
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
