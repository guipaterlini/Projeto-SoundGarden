export const lerIdUrl = function () {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");
  return id;
};
