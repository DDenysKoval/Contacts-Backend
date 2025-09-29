export const calculatePaginationData = (count, page, perPage) => {
  // console.log(count, perPage);

  const totalPages = Math.ceil(count / perPage);
  const hasPreviousPage = page !== 1;
  const hasNextPage = Boolean(totalPages - page);

  return {
    page,
    perPage,
    totalPages,
    totalContacts: count,
    hasNextPage,
    hasPreviousPage,
  };
};
