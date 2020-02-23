# youtube-img

> retrieves URLs for youtube thumbnails from a youtube video URL

## install

```sh
$ npm install youtube-img
```

## usage

```js
const ytbThumbnail = require('youtube-img');

ytbThumbnail('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
// https://img.youtube.com/vi/dQw4w9WgXcQ/default.jpg

```

### options

Options can be passed as a second parameter to choose from `regular` (default), `hq`, `mq`, `sd`, `maxres` and `all`.

```js

ytbThumbnail('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'hq');
// https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg

ytbThumbnail('http://youtu.be/dQw4w9WgXcQ', 'sd');
// https://img.youtube.com/vi/dQw4w9WgXcQ/sddefault.jpg

ytbThumbnail('http://www.youtube.com/embed/dQw4w9WgXcQ?rel=0', 'maxres');
// https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg


// `all` will return an object with all the above and a property `slide` containing the four automatically generated thumbnail for every video
ytbThumbnail(
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "all"
);

/*
{
  slide: [
    'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    'https://img.youtube.com/vi/dQw4w9WgXcQ/1.jpg',
    'https://img.youtube.com/vi/dQw4w9WgXcQ/2.jpg',
    'https://img.youtube.com/vi/dQw4w9WgXcQ/3.jpg'
  ],
  defaults: {
    regular: 'https://img.youtube.com/vi/dQw4w9WgXcQ/default.jpg',
    hq: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    mq: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    sd: 'https://img.youtube.com/vi/dQw4w9WgXcQ/sddefault.jpg',
    maxres: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
  }
}
*/

```


## License

MIT ©
