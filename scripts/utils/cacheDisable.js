export const desabilitaCache = function () {
  window.addEventListener("load", function () {
    fetch("/", {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  });
};
