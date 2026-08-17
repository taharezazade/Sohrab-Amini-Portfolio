/** @format */

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Add,
  CloseCircle,
  GalleryAdd,
  Link1,
  Save2,
  TickCircle,
  Trash,
} from "iconsax-reactjs";

const API_ORIGIN =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const INITIAL = {
  title: "",
  slug: "",
  description: "",
  projectUrl: "",
  githubUrl: "",
  category: "",
  technologies: [],
  featured: false,
  order: 0,
  status: "DRAFT",
  challenge: "",
  client: "",
  duration: "",
  features: [],
  role: "",
  solution: "",
  thumbnail: "",
};

const imageUrl = (value) => {
  if (!value) return "";
  if (value.startsWith("blob:") || value.startsWith("data:")) return value;
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("/")) return `${API_ORIGIN}${value}`;
  return `${API_ORIGIN}/uploads/${value.replace(/^\/+/, "")}`;
};

const splitList = (value) =>
  String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const listToText = (value) => (Array.isArray(value) ? value.join(", ") : "");

const PortfolioForm = ({
  initialValues = null,
  loading = false,
  onSubmit,
  onCancel,
}) => {
  const fileRef = useRef(null);
  const [form, setForm] = useState(INITIAL);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState({});

  const isEdit = Boolean(initialValues?.id);

  useEffect(() => {
    const next = {
      ...INITIAL,
      ...(initialValues || {}),
      technologies: Array.isArray(initialValues?.technologies)
        ? initialValues.technologies
        : [],
      features: Array.isArray(initialValues?.features)
        ? initialValues.features
        : [],
    };

    setForm(next);
    setFile(null);
    setPreview(initialValues?.thumbnail ? imageUrl(initialValues.thumbnail) : "");
    setErrors({});
  }, [initialValues]);

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const setField = (name, value) => {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleFile = (event) => {
    const selected = event.target.files?.[0];

    if (!selected) return;

    if (!selected.type.startsWith("image/")) {
      setErrors((current) => ({
        ...current,
        thumbnail: "فقط فایل تصویری مجاز است.",
      }));
      return;
    }

    if (selected.size > 5 * 1024 * 1024) {
      setErrors((current) => ({
        ...current,
        thumbnail: "حجم تصویر نباید بیشتر از ۵ مگابایت باشد.",
      }));
      return;
    }

    if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setErrors((current) => ({ ...current, thumbnail: "" }));
  };

  const removeSelectedFile = () => {
    if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);

    setFile(null);
    setPreview("");
    if (fileRef.current) fileRef.current.value = "";

    if (!isEdit) {
      setErrors((current) => ({
        ...current,
        thumbnail: "تصویر اصلی پروژه الزامی است.",
      }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    const required = [
      ["title", "عنوان پروژه الزامی است."],
      ["slug", "Slug الزامی است."],
      ["description", "توضیحات پروژه الزامی است."],
      ["projectUrl", "لینک پروژه الزامی است."],
      ["category", "دسته‌بندی الزامی است."],
      ["challenge", "چالش پروژه الزامی است."],
      ["client", "مشتری الزامی است."],
      ["duration", "مدت زمان پروژه الزامی است."],
      ["role", "نقش شما در پروژه الزامی است."],
      ["solution", "راهکار پروژه الزامی است."],
    ];

    required.forEach(([key, message]) => {
      if (!String(form[key] || "").trim()) nextErrors[key] = message;
    });

    if (!isEdit && !file && !form.thumbnail) {
      nextErrors.thumbnail = "تصویر اصلی پروژه الزامی است.";
    }

    if (form.technologies.length === 0) {
      nextErrors.technologies = "حداقل یک تکنولوژی وارد کنید.";
    }

    if (form.features.length === 0) {
      nextErrors.features = "حداقل یک ویژگی وارد کنید.";
    }

    try {
      new URL(form.projectUrl);
    } catch {
      nextErrors.projectUrl = "لینک پروژه معتبر نیست.";
    }

    if (form.githubUrl?.trim()) {
      try {
        new URL(form.githubUrl);
      } catch {
        nextErrors.githubUrl = "لینک GitHub معتبر نیست.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    const data = new FormData();

    data.append("title", form.title.trim());
    data.append("slug", form.slug.trim());
    data.append("description", form.description.trim());
    data.append("projectUrl", form.projectUrl.trim());
    data.append("githubUrl", form.githubUrl?.trim() || "");
    data.append("category", form.category.trim());
    data.append("technologies", JSON.stringify(form.technologies));
    data.append("featured", String(Boolean(form.featured)));
    data.append("order", String(Number(form.order) || 0));
    data.append("status", form.status);
    data.append("challenge", form.challenge.trim());
    data.append("client", form.client.trim());
    data.append("duration", form.duration.trim());
    data.append("features", JSON.stringify(form.features));
    data.append("role", form.role.trim());
    data.append("solution", form.solution.trim());

    if (file) {
      data.append("thumbnail", file);
    } else if (form.thumbnail) {
      data.append("thumbnail", form.thumbnail);
    }

    await onSubmit?.(data);
  };

  const inputClass = (name) =>
    `input input-bordered w-full ${errors[name] ? "input-error" : ""}`;

  const textareaClass = (name) =>
    `textarea textarea-bordered min-h-28 w-full leading-7 ${
      errors[name] ? "textarea-error" : ""
    }`;

  return (
    <motion.form
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-7"
    >
      <section className="rounded-3xl border border-base-200 bg-base-200/40 p-4 md:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-black">تصویر اصلی پروژه</h3>
            <p className="mt-1 text-xs text-base-content/50">
              PNG، JPG یا WEBP — حداکثر ۵ مگابایت
            </p>
          </div>

          <GalleryAdd size={23} className="text-primary" />
        </div>

        <div className="grid gap-4 md:grid-cols-[220px_1fr]">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-base-300 bg-base-100">
            {preview ? (
              <>
                <img
                  src={preview}
                  alt="پیش‌نمایش"
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={removeSelectedFile}
                  className="btn btn-error btn-circle btn-xs absolute right-2 top-2"
                  title="حذف تصویر انتخاب شده"
                >
                  <Trash size={14} />
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex h-full w-full flex-col items-center justify-center gap-2 text-base-content/40 transition hover:bg-base-200"
              >
                <GalleryAdd size={38} />
                <span className="text-xs">انتخاب تصویر</span>
              </button>
            )}
          </div>

          <div className="flex flex-col justify-center gap-3">
            <input
              ref={fileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/svg+xml"
              onChange={handleFile}
              className="hidden"
            />

            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="btn btn-outline w-fit gap-2 rounded-xl"
            >
              <GalleryAdd size={18} />
              {file ? "تغییر تصویر" : "آپلود تصویر"}
            </button>

            <p className="text-xs leading-6 text-base-content/50">
              {isEdit
                ? "در حالت ویرایش، اگر تصویر جدید انتخاب نکنید تصویر فعلی حفظ می‌شود."
                : "تصویر انتخاب‌شده مستقیماً به سرور ارسال و در پوشه uploads/portfolio ذخیره می‌شود."}
            </p>

            {errors.thumbnail && (
              <p className="text-xs text-error">{errors.thumbnail}</p>
            )}
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="عنوان پروژه"
            error={errors.title}
            input={
              <input
                value={form.title}
                onChange={(e) => setField("title", e.target.value)}
                className={inputClass("title")}
                placeholder="مثلاً طراحی سایت فروشگاهی"
              />
            }
          />

          <Field
            label="Slug"
            error={errors.slug}
            input={
              <input
                dir="ltr"
                value={form.slug}
                onChange={(e) => setField("slug", e.target.value)}
                className={inputClass("slug")}
                placeholder="ecommerce-store"
              />
            }
          />

          <Field
            label="دسته‌بندی"
            error={errors.category}
            input={
              <input
                value={form.category}
                onChange={(e) => setField("category", e.target.value)}
                className={inputClass("category")}
                placeholder="Web Development"
              />
            }
          />

          <Field
            label="مشتری"
            error={errors.client}
            input={
              <input
                value={form.client}
                onChange={(e) => setField("client", e.target.value)}
                className={inputClass("client")}
                placeholder="نام مشتری"
              />
            }
          />

          <Field
            label="مدت زمان"
            error={errors.duration}
            input={
              <input
                value={form.duration}
                onChange={(e) => setField("duration", e.target.value)}
                className={inputClass("duration")}
                placeholder="مثلاً ۳ هفته"
              />
            }
          />

          <Field
            label="نقش شما"
            error={errors.role}
            input={
              <input
                value={form.role}
                onChange={(e) => setField("role", e.target.value)}
                className={inputClass("role")}
                placeholder="Frontend Developer"
              />
            }
          />

          <Field
            label="لینک پروژه"
            error={errors.projectUrl}
            input={
              <label className="input input-bordered flex items-center gap-2">
                <Link1 size={17} className="opacity-50" />
                <input
                  dir="ltr"
                  value={form.projectUrl}
                  onChange={(e) => setField("projectUrl", e.target.value)}
                  className="grow"
                  placeholder="https://example.com"
                />
              </label>
            }
          />

          <Field
            label="GitHub"
            error={errors.githubUrl}
            input={
              <label className="input input-bordered flex items-center gap-2">
                <Link1 size={17} className="opacity-50" />
                <input
                  dir="ltr"
                  value={form.githubUrl}
                  onChange={(e) => setField("githubUrl", e.target.value)}
                  className="grow"
                  placeholder="https://github.com/..."
                />
              </label>
            }
          />
        </div>

        <Field
          label="توضیحات پروژه"
          error={errors.description}
          input={
            <textarea
              value={form.description}
              onChange={(e) => setField("description", e.target.value)}
              className={textareaClass("description")}
              placeholder="توضیح کوتاه و حرفه‌ای درباره پروژه..."
            />
          }
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="چالش پروژه"
            error={errors.challenge}
            input={
              <textarea
                value={form.challenge}
                onChange={(e) => setField("challenge", e.target.value)}
                className={textareaClass("challenge")}
                placeholder="چالش اصلی پروژه چه بود؟"
              />
            }
          />

          <Field
            label="راهکار پروژه"
            error={errors.solution}
            input={
              <textarea
                value={form.solution}
                onChange={(e) => setField("solution", e.target.value)}
                className={textareaClass("solution")}
                placeholder="چه راهکاری اجرا شد؟"
              />
            }
          />
        </div>

        <ListField
          label="تکنولوژی‌ها"
          value={listToText(form.technologies)}
          placeholder="React, Node.js, PostgreSQL"
          error={errors.technologies}
          onChange={(value) => setField("technologies", splitList(value))}
        />

        <ListField
          label="ویژگی‌ها / امکانات"
          value={listToText(form.features)}
          placeholder="احراز هویت, پنل مدیریت, پرداخت"
          error={errors.features}
          onChange={(value) => setField("features", splitList(value))}
        />
      </section>

      <section className="grid gap-4 rounded-3xl border border-base-200 bg-base-200/40 p-4 md:grid-cols-3">
        <label className="form-control">
          <span className="label-text mb-2 text-sm font-bold">وضعیت</span>
          <select
            value={form.status}
            onChange={(e) => setField("status", e.target.value)}
            className="select select-bordered w-full bg-base-100"
          >
            <option value="DRAFT">پیش‌نویس</option>
            <option value="PUBLISHED">منتشر شده</option>
            <option value="ARCHIVED">آرشیو</option>
          </select>
        </label>

        <label className="form-control">
          <span className="label-text mb-2 text-sm font-bold">ترتیب نمایش</span>
          <input
            type="number"
            min="0"
            value={form.order}
            onChange={(e) => setField("order", e.target.value)}
            className="input input-bordered w-full bg-base-100"
          />
        </label>

        <label className="flex cursor-pointer items-end gap-3 pb-3">
          <input
            type="checkbox"
            checked={Boolean(form.featured)}
            onChange={(e) => setField("featured", e.target.checked)}
            className="checkbox checkbox-primary"
          />
          <span className="text-sm font-bold">پروژه ویژه باشد</span>
        </label>
      </section>

      <div className="flex flex-col-reverse gap-3 border-t border-base-200 pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="btn btn-ghost rounded-xl"
        >
          انصراف
        </button>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary rounded-xl gap-2"
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            <Save2 size={18} />
          )}
          {isEdit ? "ذخیره تغییرات" : "ایجاد نمونه‌کار"}
        </button>
      </div>
    </motion.form>
  );
};

const Field = ({ label, error, input }) => (
  <label className="form-control gap-2">
    <span className="text-sm font-bold">{label}</span>
    {input}
    {error && <span className="text-xs text-error">{error}</span>}
  </label>
);

const ListField = ({ label, value, placeholder, error, onChange }) => (
  <label className="form-control gap-2">
    <span className="text-sm font-bold">{label}</span>
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`input input-bordered w-full pr-10 ${
          error ? "input-error" : ""
        }`}
        placeholder={placeholder}
      />
      <Add
        size={17}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-40"
      />
    </div>
    <span className="text-xs text-base-content/45">
      موارد را با ویرگول انگلیسی جدا کنید.
    </span>
    {error && <span className="text-xs text-error">{error}</span>}
  </label>
);

export default PortfolioForm;
