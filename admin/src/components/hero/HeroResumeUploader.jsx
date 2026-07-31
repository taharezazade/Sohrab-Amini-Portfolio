/** @format */

import { motion } from "framer-motion";
import {
  DocumentUpload,
  DocumentDownload,
  Trash,
  Eye,
  DocumentText,
} from "iconsax-reactjs";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const HeroResumeUploader = () => {
  const [resume, setResume] = useState({
    name: "",
    size: "",
    updatedAt: "",
    url: "",
    file: null,
  });

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (!acceptedFiles.length) return;

      const file = acceptedFiles[0];

      if (resume.url?.startsWith("blob:")) {
        URL.revokeObjectURL(resume.url);
      }

      setResume({
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        updatedAt: "همین الان",
        url: URL.createObjectURL(file),
        file,
      });
    },
    [resume.url],
  );

  const handlePreview = () => {
    if (!resume.url) return;

    window.open(resume.url, "_blank");
  };

  const handleDownload = () => {
    if (!resume.url) return;

    const link = document.createElement("a");

    link.href = resume.url;
    link.download = resume.name;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const handleDelete = () => {
    if (resume.url?.startsWith("blob:")) {
      URL.revokeObjectURL(resume.url);
    }

    setResume({
      name: "",
      size: "",
      updatedAt: "",
      url: "",
      file: null,
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    accept: {
      "application/pdf": [],
    },
    onDrop,
  });

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className='rounded-2xl border border-base-300 bg-base-100'>
      {/* =======================================================
          Header
      ======================================================= */}

      <div className='flex items-center justify-between border-b border-base-300 px-5 py-4'>
        <div>
          <h2 className='text-lg font-bold'>رزومه</h2>

          <p className='mt-1 text-sm text-base-content/60'>
            فایل PDF قابل دانلود کاربران
          </p>
        </div>

        <div className='rounded-xl bg-primary/10 p-2 text-primary'>
          <DocumentText size={20} variant='Bulk' />
        </div>
      </div>

      {/* =======================================================
          Upload Area
      ======================================================= */}

      <div className='p-5'>
        <div
          {...getRootProps()}
          className={`cursor-pointer rounded-2xl border-2 border-dashed p-6 transition-all ${
            isDragActive ?
              "border-primary bg-primary/5"
            : "border-base-300 hover:border-primary"
          }`}>
          <input {...getInputProps()} />

          <div className='flex flex-col items-center justify-center gap-3 text-center'>
            <div className='rounded-2xl bg-primary/10 p-4 text-primary'>
              <DocumentUpload size={32} variant='Bulk' />
            </div>

            <div>
              <h3 className='font-semibold'>فایل رزومه را انتخاب کنید</h3>

              <p className='mt-1 text-sm text-base-content/60'>
                فقط فایل PDF مجاز است.
              </p>
            </div>

            <div className='badge badge-primary badge-outline'>PDF</div>
          </div>
        </div>

        {/* =======================================================
            Current File
        ======================================================= */}

        <div className='mt-5 rounded-2xl border border-base-300 bg-base-200 p-4'>
          <div>
            {resume.url ?
              <>
                <div className='flex items-center gap-4'>
                  <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                    <DocumentText size={28} variant='Bulk' />
                  </div>

                  <div className='min-w-0 flex-1'>
                    <h4 className='truncate font-semibold'>{resume.name}</h4>

                    <div className='mt-2 flex flex-wrap gap-2'>
                      <div className='badge badge-neutral'>{resume.size}</div>
                      <div className='badge badge-success'>
                        {resume.updatedAt}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            : <div className='flex flex-col items-center justify-center py-8 text-center'>
                <DocumentText
                  size={54}
                  variant='Bulk'
                  className='text-base-content/30'
                />

                <h3 className='mt-4 font-semibold'>
                  هنوز رزومه‌ای انتخاب نشده است
                </h3>

                <p className='mt-1 text-sm text-base-content/60'>
                  یک فایل PDF انتخاب کنید.
                </p>
              </div>
            }
          </div>

          {/* =======================================================
              Actions
          ======================================================= */}

          <div className='mt-5 flex flex-col gap-3 sm:flex-row'>
            <button className='btn btn-primary flex-1 rounded-xl'>
              <DocumentUpload size={18} />
              انتخاب فایل
            </button>

            <button
              onClick={handlePreview}
              disabled={!resume.url}
              className='btn btn-outline btn-primary rounded-xl'>
              <Eye size={18} />
            </button>

            <button
              onClick={handleDownload}
              disabled={!resume.url}
              className='btn btn-outline btn-primary rounded-xl'>
              <DocumentDownload size={18} />
            </button>

            <button
              onClick={handleDelete}
              disabled={!resume.url}
              className='btn btn-outline btn-error rounded-xl'>
              <Trash size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroResumeUploader;
