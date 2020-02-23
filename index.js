const getYoutubeId = link => {
  return link.match(
    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
  )[1];
};

const baseUrl = "https://img.youtube.com/vi/";

const urls = {
  slide: [
    [baseUrl, "/0.jpg"],
    [baseUrl, "/1.jpg"],
    [baseUrl, "/2.jpg"],
    [baseUrl, "/3.jpg"]
  ],
  defaults: {
    regular: [baseUrl, "/default.jpg"],
    hq: [baseUrl, "/hqdefault.jpg"],
    mq: [baseUrl, "/mqdefault.jpg"],
    sd: [baseUrl, "/sddefault.jpg"],
    maxres: [baseUrl, "/maxresdefault.jpg"]
  }
};

module.exports = (url, opt) => {
  const id = getYoutubeId(url);

  if (opt === "all") {
    return {
      slide: urls.slide.map(arr => arr.join(id)),
      defaults: Object.keys(urls.defaults).reduce(
        (obj, key) => ({ ...obj, [key]: urls.defaults[key].join(id) }),
        {}
      )
    };
  }
  return urls.defaults[opt && opt in urls.defaults ? opt : "regular"].join(id);
};
