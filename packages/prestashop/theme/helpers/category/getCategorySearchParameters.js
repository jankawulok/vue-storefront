export const getCategorySearchParameters = (context) => {
  const { path } = context.root.$route;
  const slug = path.replace(/^\//, '');

  return { filter: { url_key: { eq: slug } } };
};
