import css from 'styled-jsx/css'

// You'll need to use some extension to get over the CORS errors
// I don't know how the fonts are licensed so I didn't want to include them in the repo

export default css.global`
@font-face {
  font-family: 'Untitled Sans';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Light.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Light.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Light.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Regular.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Regular.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Sans';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Medium.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Medium.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Medium.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Bold.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Bold.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Sans';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Black.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Black.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-Black.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Sans';
  font-style: italic;
  font-weight: 200;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-LightItalic.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-LightItalic.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-LightItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-RegularItalic.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-RegularItalic.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-RegularItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Sans';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-MediumItalic.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-MediumItalic.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-MediumItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Sans';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-BoldItalic.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-BoldItalic.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-BoldItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Sans';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-BlackItalic.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-BlackItalic.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-sans/UntitledSansWeb-BlackItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Serif';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-Regular.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-Regular.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Serif';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-Medium.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-Medium.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-Medium.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Serif';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-Bold.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-Bold.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Serif';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-RegularItalic.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-RegularItalic.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-RegularItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Serif';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-MediumItalic.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-MediumItalic.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-MediumItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Untitled Serif';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-BoldItalic.woff2') format('woff2'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-BoldItalic.woff') format('woff'), url('https://brooklynrail.org/fonts/uswds/custom/untitled-serif/UntitledSerifWeb-BoldItalic.ttf') format('truetype');
}
`