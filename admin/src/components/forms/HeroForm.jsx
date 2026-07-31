/** @format */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Switch from "../ui/Switch";
import ImageUploader from "../ui/ImageUploader";

/* Validation */

const schema = z.object({
  title: z.string().min(1, "عنوان الزامی است."),
  subtitle: z.string().min(1, "توضیحات الزامی است."),
  buttonText: z.string().min(1, "متن دکمه الزامی است."),
  buttonLink: z.string().min(1, "لینک دکمه الزامی است."),
  isActive: z.boolean(),
  image: z.any().optional(),
});

/* Hero Form */

const HeroForm = ({ defaultValues, onSubmit, loading = false }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: defaultValues?.title || "",
      subtitle: defaultValues?.subtitle || "",
      buttonText: defaultValues?.buttonText || "",
      buttonLink: defaultValues?.buttonLink || "",
      image: defaultValues?.image || null,
      isActive: defaultValues?.isActive ?? true,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <Input
        label='عنوان'
        required
        error={errors.title?.message}
        {...register("title")}
      />

      <Textarea
        label='توضیحات'
        rows={5}
        required
        error={errors.subtitle?.message}
        {...register("subtitle")}
      />

      <Input
        label='متن دکمه'
        required
        error={errors.buttonText?.message}
        {...register("buttonText")}
      />

      <Input
        label='لینک دکمه'
        required
        error={errors.buttonLink?.message}
        {...register("buttonLink")}
      />

      <ImageUploader
        value={watch("image")}
        onChange={(file) =>
          setValue("image", file, {
            shouldDirty: true,
            shouldValidate: true,
          })
        }
      />

      <Switch
        label='نمایش در سایت'
        helperText='در صورت غیرفعال بودن، سکشن هیرو نمایش داده نخواهد شد.'
        checked={watch("isActive")}
        onChange={(e) => setValue("isActive", e.target.checked)}
      />

      <div className='flex justify-end'>
        <Button type='submit' loading={loading}>
          ذخیره تغییرات
        </Button>
      </div>
    </form>
  );
};

export default HeroForm;
