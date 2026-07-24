/** @format */

const pagination = (page = 1, limit = 10) => {
  const currentPage = Number(page);
  const perPage = Number(limit);

  return {
    page: currentPage,
    limit: perPage,
    skip: (currentPage - 1) * perPage,
  };
};

export default pagination;
