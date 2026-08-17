/** @format */

import { motion } from "framer-motion";
import {
  Edit2,
  Eye,
  Gallery,
  Star1,
  TickCircle,
  Trash,
} from "iconsax-reactjs";

const API_ORIGIN =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const getImageUrl = (value) => {
  if (!value) return null;
  if (value.startsWith("blob:") || value.startsWith("data:")) return value;
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("/")) return `${API_ORIGIN}${value}`;
  return `${API_ORIGIN}/uploads/${value.replace(/^\/+/, "")}`;
};

const getPortfolioImage = (portfolio) =>
  getImageUrl(
    portfolio.thumbnail ||
      portfolio.image ||
      portfolio.images?.[0]?.image ||
      portfolio.images?.[0]?.url,
  );

const PortfolioCard = ({
  portfolio,
  index = 0,
  onView,
  onEdit,
  onDelete,
  onToggleStatus,
  actionLoading = false,
}) => {
  if (!portfolio) return null;

  const image = getPortfolioImage(portfolio);

  const statusMap = {
    PUBLISHED: {
      title: "منتشر شده",
      className: "badge-success",
    },
    DRAFT: {
      title: "پیش‌نویس",
      className: "badge-warning",
    },
    ARCHIVED: {
      title: "آرشیو",
      className: "badge-ghost",
    },
  };

  const currentStatus = statusMap[portfolio.status] || statusMap.DRAFT;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-base-200">
        {image ? (
          <img
            src={image}
            alt={portfolio.title || "Portfolio"}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-base-content/30">
            <Gallery size={44} />
            <span className="text-xs">تصویر ثبت نشده</span>
          </div>
        )}

        <div className="absolute inset-x-3 top-3 flex items-center justify-between">
          <span className={`badge ${currentStatus.className} gap-1 shadow`}>
            <TickCircle size={13} />
            {currentStatus.title}
          </span>

          {portfolio.featured && (
            <span className="badge badge-warning gap-1 shadow">
              <Star1 size={13} variant="Bold" />
              ویژه
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-1 text-lg font-black">
              {portfolio.title || "بدون عنوان"}
            </h3>

            {portfolio.category && (
              <span className="badge badge-ghost shrink-0">
                {portfolio.category}
              </span>
            )}
          </div>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-base-content/60">
            {portfolio.description || "توضیحی ثبت نشده است."}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-base-content/50">
          <span>ترتیب: {portfolio.order ?? 0}</span>
          <span>{portfolio.technologies?.length || 0} تکنولوژی</span>
        </div>

        <div className="grid grid-cols-5 gap-1 border-t border-base-200 pt-3">
          <button
            type="button"
            onClick={() => onView?.(portfolio)}
            className="btn btn-ghost btn-sm btn-square"
            title="مشاهده"
          >
            <Eye size={17} />
          </button>

          <button
            type="button"
            onClick={() => onEdit?.(portfolio)}
            className="btn btn-ghost btn-sm btn-square"
            title="ویرایش"
          >
            <Edit2 size={17} />
          </button>

          <button
            type="button"
            onClick={() => onToggleStatus?.(portfolio)}
            disabled={actionLoading}
            className="btn btn-ghost btn-sm btn-square"
            title="تغییر وضعیت"
          >
            <TickCircle size={17} />
          </button>

          <button
            type="button"
            onClick={() => onView?.(portfolio)}
            className="btn btn-ghost btn-sm btn-square"
            title="تصاویر و جزئیات"
          >
            <Gallery size={17} />
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(portfolio)}
            disabled={actionLoading}
            className="btn btn-ghost btn-error btn-sm btn-square"
            title="حذف"
          >
            <Trash size={17} />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default PortfolioCard;
