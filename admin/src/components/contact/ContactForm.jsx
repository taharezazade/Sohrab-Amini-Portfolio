/** @format */

import { motion } from "framer-motion";
import { Call, Whatsapp } from "iconsax-reactjs";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";

const ContactForm = ({
  values,
  loading = false,
  onChange,
  onSubmit,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
    >
      <Card
        title="اطلاعات تماس"
        description="شماره تماس و واتساپ بخش ارتباط با ما را مدیریت کنید."
      >
        <div className="space-y-6">
          <Input
            label="شماره تماس"
            name="phone"
            type="tel"
            placeholder="09123884766"
            value={values.phone}
            onChange={onChange}
            maxLength={11}
            icon={<Call size={18} />}
            required
            disabled={loading}
          />

          <Input
            label="شماره واتساپ"
            name="whatsapp"
            type="tel"
            placeholder="09123884766"
            value={values.whatsapp}
            onChange={onChange}
            maxLength={11}
            icon={<Whatsapp size={18} />}
            required
            disabled={loading}
          />

          <div className="flex justify-end">
            <Button type="submit" variant="primary" loading={loading}>
              ذخیره تغییرات
            </Button>
          </div>
        </div>
      </Card>
    </motion.form>
  );
};

export default ContactForm;
