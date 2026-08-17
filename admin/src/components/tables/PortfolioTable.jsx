/** @format */

import {
  Eye,
  Edit2,
  Trash,
  Star1,
  TickCircle,
  Clock,
  Global,
  Tag,
} from "iconsax-reactjs";

/* =========================================================
   HELPERS
========================================================= */

const getImageUrl = (image) => {
  if (!image) {
    return null;
  }

  if (typeof image === "string") {
    return image;
  }

  return (
    image.url ||
    image.imageUrl ||
    image.path ||
    image.src ||
    image.thumbnail ||
    null
  );
};

const getThumbnail = (portfolio) => {
  if (portfolio?.thumbnail) {
    return portfolio.thumbnail;
  }

  if (Array.isArray(portfolio?.images) && portfolio.images.length > 0) {
    return getImageUrl(portfolio.images[0]);
  }

  return null;
};

const getStatusLabel = (status) => {
  switch (status) {
    case "PUBLISHED":
      return "منتشر شده";

    case "ARCHIVED":
      return "آرشیو شده";

    case "DRAFT":
    default:
      return "پیش‌نویس";
  }
};

const getStatusClass = (status) => {
  switch (status) {
    case "PUBLISHED":
      return "badge-success";

    case "ARCHIVED":
      return "badge-warning";

    case "DRAFT":
    default:
      return "badge-ghost";
  }
};

const formatDate = (date) => {
  if (!date) {
    return "—";
  }

  try {
    return new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date));
  } catch {
    return "—";
  }
};

const normalizeArray = (value) => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(Boolean);
};

/* =========================================================
   STATUS BUTTON
========================================================= */

const StatusButton = ({ portfolio, onToggleStatus }) => {
  const isPublished = portfolio.status === "PUBLISHED";

  return (
    <button
      type='button'
      onClick={() => onToggleStatus?.(portfolio)}
      className='
        inline-flex
        items-center
        gap-1.5
        transition
        hover:scale-[1.03]
      '
      title='تغییر وضعیت'>
      {isPublished ?
        <TickCircle size={17} className='text-success' />
      : <Clock size={17} className='text-base-content/40' />}

      <span
        className={`
          badge
          badge-sm
          ${getStatusClass(portfolio.status)}
        `}>
        {getStatusLabel(portfolio.status)}
      </span>
    </button>
  );
};

/* =========================================================
   ACTIONS
========================================================= */

const Actions = ({ portfolio, onView, onEdit, onDelete }) => {
  return (
    <div
      className='
        flex
        items-center
        justify-center
        gap-1
      '>
      <button
        type='button'
        onClick={() => onView?.(portfolio)}
        className='
          btn
          btn-ghost
          btn-sm
          btn-circle
        '
        title='مشاهده'>
        <Eye size={18} />
      </button>

      <button
        type='button'
        onClick={() => onEdit?.(portfolio)}
        className='
          btn
          btn-ghost
          btn-sm
          btn-circle
        '
        title='ویرایش'>
        <Edit2 size={18} />
      </button>

      <button
        type='button'
        onClick={() => onDelete?.(portfolio)}
        className='
          btn
          btn-ghost
          btn-sm
          btn-circle
          text-error
        '
        title='حذف'>
        <Trash size={18} />
      </button>
    </div>
  );
};

/* =========================================================
   COMPONENT
========================================================= */

const PortfolioTable = ({
  portfolios = [],

  onView,
  onEdit,
  onDelete,

  onToggleStatus,
  onToggleFeatured,
}) => {
  /* =======================================================
     EMPTY
  ======================================================= */

  if (!Array.isArray(portfolios) || portfolios.length === 0) {
    return (
      <div
        className='
          flex
          min-h-52
          items-center
          justify-center

          rounded-2xl
          border
          border-dashed
          border-base-300

          bg-base-100

          p-6
          text-center
        '>
        <div>
          <p className='font-bold'>هنوز نمونه‌کاری ثبت نشده است.</p>

          <p
            className='
              mt-1
              text-xs
              text-base-content/50
            '>
            اولین نمونه‌کار خود را ایجاد کنید.
          </p>
        </div>
      </div>
    );
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div
      className='
        w-full
        overflow-hidden

        rounded-2xl
        border
        border-base-300

        bg-base-100

        shadow-sm
      '>
      {/* =====================================================
          DESKTOP
      ===================================================== */}

      <div className='hidden overflow-x-auto xl:block'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th className='whitespace-nowrap text-right'>پروژه</th>

              <th className='whitespace-nowrap text-right'>کارفرما</th>

              <th className='whitespace-nowrap text-right'>دسته‌بندی</th>

              <th className='whitespace-nowrap text-right'>وضعیت</th>

              <th className='whitespace-nowrap text-center'>ویژه</th>

              <th className='whitespace-nowrap text-center'>ترتیب</th>

              <th className='whitespace-nowrap text-right'>تاریخ</th>

              <th className='whitespace-nowrap text-center'>عملیات</th>
            </tr>
          </thead>

          <tbody>
            {portfolios.map((portfolio) => {
              const image = getThumbnail(portfolio);

              return (
                <tr
                  key={portfolio.id}
                  className='
                    transition
                    hover:bg-base-200/50
                  '>
                  {/* PROJECT */}

                  <td>
                    <div
                      className='
                        flex
                        min-w-[260px]
                        items-center
                        gap-3
                      '>
                      <div
                        className='
                          h-14
                          w-20
                          shrink-0
                          overflow-hidden
                          rounded-xl
                          bg-base-200
                        '>
                        {image ?
                          <img
                            src={image}
                            alt={portfolio.title || "portfolio"}
                            className='
                              h-full
                              w-full
                              object-cover
                            '
                          />
                        : <div
                            className='
                              flex
                              h-full
                              w-full
                              items-center
                              justify-center
                              text-[10px]
                              text-base-content/30
                            '>
                            بدون تصویر
                          </div>
                        }
                      </div>

                      <div className='min-w-0'>
                        <p
                          className='
                            max-w-[260px]
                            truncate
                            font-bold
                          '>
                          {portfolio.title || "بدون عنوان"}
                        </p>

                        {portfolio.role && (
                          <p
                            className='
                              mt-1
                              max-w-[260px]
                              truncate
                              text-xs
                              text-base-content/50
                            '>
                            {portfolio.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* CLIENT */}

                  <td>
                    <span
                      className='
                        whitespace-nowrap
                        text-sm
                      '>
                      {portfolio.client || "—"}
                    </span>
                  </td>

                  {/* CATEGORY */}

                  <td>
                    {portfolio.category ?
                      <span
                        className='
                          inline-flex
                          items-center
                          gap-1.5

                          text-sm
                          text-base-content/70
                        '>
                        <Tag size={15} />

                        {portfolio.category}
                      </span>
                    : "—"}
                  </td>

                  {/* STATUS */}

                  <td>
                    <StatusButton
                      portfolio={portfolio}
                      onToggleStatus={onToggleStatus}
                    />
                  </td>

                  {/* FEATURED */}

                  <td className='text-center'>
                    <button
                      type='button'
                      onClick={() => onToggleFeatured?.(portfolio)}
                      className='
                        btn
                        btn-ghost
                        btn-sm
                        btn-circle
                      '
                      title={
                        portfolio.featured ? "حذف از ویژه" : "افزودن به ویژه"
                      }>
                      <Star1
                        size={20}
                        variant={portfolio.featured ? "Bold" : "Linear"}
                        className={
                          portfolio.featured ? "text-warning" : (
                            "text-base-content/30"
                          )
                        }
                      />
                    </button>
                  </td>

                  {/* ORDER */}

                  <td className='text-center'>
                    <span className='font-semibold'>
                      {portfolio.order ?? "—"}
                    </span>
                  </td>

                  {/* DATE */}

                  <td>
                    <span
                      className='
                        whitespace-nowrap
                        text-xs
                        text-base-content/60
                      '>
                      {formatDate(portfolio.createdAt)}
                    </span>
                  </td>

                  {/* ACTIONS */}

                  <td>
                    <Actions
                      portfolio={portfolio}
                      onView={onView}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* =====================================================
          TABLET + MOBILE
      ===================================================== */}

      <div
        className='
          divide-y
          divide-base-300

          xl:hidden
        '>
        {portfolios.map((portfolio) => {
          const image = getThumbnail(portfolio);

          const features = normalizeArray(portfolio.features);

          const technologies = normalizeArray(portfolio.technologies);

          return (
            <article
              key={portfolio.id}
              className='
                p-4
                transition
                hover:bg-base-200/40

                sm:p-5
              '>
              {/* =================================================
                  TOP
              ================================================= */}

              <div
                className='
                  flex
                  gap-3
                '>
                {/* IMAGE */}

                <div
                  className='
                    h-20
                    w-28
                    shrink-0
                    overflow-hidden
                    rounded-xl
                    bg-base-200

                    sm:h-24
                    sm:w-36
                  '>
                  {image ?
                    <img
                      src={image}
                      alt={portfolio.title || "portfolio"}
                      className='
                        h-full
                        w-full
                        object-cover
                      '
                    />
                  : <div
                      className='
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center
                        text-[10px]
                        text-base-content/30
                      '>
                      بدون تصویر
                    </div>
                  }
                </div>

                {/* TITLE */}

                <div className='min-w-0 flex-1'>
                  <div
                    className='
                      flex
                      items-start
                      justify-between
                      gap-2
                    '>
                    <div className='min-w-0'>
                      <h3
                        className='
                          truncate
                          font-black
                        '>
                        {portfolio.title || "بدون عنوان"}
                      </h3>

                      {portfolio.client && (
                        <p
                          className='
                            mt-1
                            truncate
                            text-xs
                            text-base-content/50
                          '>
                          {portfolio.client}
                        </p>
                      )}
                    </div>

                    <button
                      type='button'
                      onClick={() => onToggleFeatured?.(portfolio)}
                      className='
                        btn
                        btn-ghost
                        btn-sm
                        btn-circle
                        shrink-0
                      '
                      title={
                        portfolio.featured ? "حذف از ویژه" : "افزودن به ویژه"
                      }>
                      <Star1
                        size={19}
                        variant={portfolio.featured ? "Bold" : "Linear"}
                        className={
                          portfolio.featured ? "text-warning" : (
                            "text-base-content/30"
                          )
                        }
                      />
                    </button>
                  </div>

                  {/* META */}

                  <div
                    className='
                      mt-3
                      flex
                      flex-wrap
                      items-center
                      gap-2
                    '>
                    <StatusButton
                      portfolio={portfolio}
                      onToggleStatus={onToggleStatus}
                    />

                    {portfolio.category && (
                      <span
                        className='
                          badge
                          badge-sm
                          badge-outline
                          gap-1
                        '>
                        <Tag size={12} />

                        {portfolio.category}
                      </span>
                    )}

                    {portfolio.duration && (
                      <span
                        className='
                          text-[11px]
                          text-base-content/40
                        '>
                        {portfolio.duration}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* =================================================
                  DETAILS
              ================================================= */}

              <div
                className='
                  mt-4
                  grid
                  grid-cols-2
                  gap-2

                  sm:grid-cols-4
                '>
                {portfolio.role && (
                  <div
                    className='
                      rounded-xl
                      bg-base-200/60
                      p-3
                    '>
                    <p
                      className='
                        text-[10px]
                        text-base-content/40
                      '>
                      نقش
                    </p>

                    <p
                      className='
                        mt-1
                        truncate
                        text-xs
                        font-bold
                      '>
                      {portfolio.role}
                    </p>
                  </div>
                )}

                {features.length > 0 && (
                  <div
                    className='
                      rounded-xl
                      bg-base-200/60
                      p-3
                    '>
                    <p
                      className='
                        text-[10px]
                        text-base-content/40
                      '>
                      امکانات
                    </p>

                    <p
                      className='
                        mt-1
                        text-xs
                        font-bold
                      '>
                      {features.length} مورد
                    </p>
                  </div>
                )}

                {technologies.length > 0 && (
                  <div
                    className='
                      rounded-xl
                      bg-base-200/60
                      p-3
                    '>
                    <p
                      className='
                        text-[10px]
                        text-base-content/40
                      '>
                      تکنولوژی
                    </p>

                    <p
                      className='
                        mt-1
                        text-xs
                        font-bold
                      '>
                      {technologies.length} مورد
                    </p>
                  </div>
                )}

                <div
                  className='
                    rounded-xl
                    bg-base-200/60
                    p-3
                  '>
                  <p
                    className='
                      text-[10px]
                      text-base-content/40
                    '>
                    ترتیب
                  </p>

                  <p
                    className='
                      mt-1
                      text-xs
                      font-bold
                    '>
                    {portfolio.order ?? "—"}
                  </p>
                </div>
              </div>

              {/* =================================================
                  LINKS
              ================================================= */}

              {(portfolio.projectUrl ||
                portfolio.websiteUrl ||
                portfolio.githubUrl) && (
                <div
                  className='
                    mt-3
                    flex
                    flex-wrap
                    gap-2
                  '>
                  {(portfolio.projectUrl || portfolio.websiteUrl) && (
                    <a
                      href={
                        (
                          (
                            portfolio.projectUrl || portfolio.websiteUrl
                          ).startsWith("http")
                        ) ?
                          portfolio.projectUrl || portfolio.websiteUrl
                        : `https://${
                            portfolio.projectUrl || portfolio.websiteUrl
                          }`
                      }
                      target='_blank'
                      rel='noreferrer'
                      className='
                        btn
                        btn-ghost
                        btn-xs
                        gap-1.5
                      '>
                      <Global size={14} />
                      سایت پروژه
                    </a>
                  )}

                  {portfolio.githubUrl && (
                    <a
                      href={
                        portfolio.githubUrl.startsWith("http") ?
                          portfolio.githubUrl
                        : `https://${portfolio.githubUrl}`
                      }
                      target='_blank'
                      rel='noreferrer'
                      className='
                        btn
                        btn-ghost
                        btn-xs
                        gap-1.5
                      '>
                      GitHub
                    </a>
                  )}
                </div>
              )}

              {/* =================================================
                  FOOTER
              ================================================= */}

              <div
                className='
                  mt-4
                  flex
                  flex-wrap
                  items-center
                  justify-between
                  gap-3

                  border-t
                  border-base-300

                  pt-3
                '>
                <span
                  className='
                    text-[11px]
                    text-base-content/40
                  '>
                  {formatDate(portfolio.createdAt)}
                </span>

                <Actions
                  portfolio={portfolio}
                  onView={onView}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioTable;
