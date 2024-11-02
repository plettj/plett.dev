# Generate Blur Data

_**NOTE:** The current version of my photography portfolio is using `blurDataURL`, but the blurred version will never appear to the user, because of a combination of reasons. First, images only have non-zero opacity when they are within the viewport, and then second, for some mysterious reason the `InView` component from `react-intersection-observer` doesn't realize it's in view until all images on the page have loaded, despite me setting the sizes of the parent components._

---

When an image hasn't loaded yet, you often see a blurred-out version of it. "Blur Data" is the data to display that blurry image.

Next.js supports `blurDataURL` as a parameter on their `Image` component ([docs](https://nextjs.org/docs/app/api-reference/components/image#blurdataurl)), but it needs that parameter before the image has loaded.

To accomplish this, we generate the static blur data URLs beforehand!

# Usage

1. Paste your `photos` constant from wherever you've defined it, into `index.js` in this folder.

2. From the root of your app, run the following

```bash
node scripts/generateBlurData
```
