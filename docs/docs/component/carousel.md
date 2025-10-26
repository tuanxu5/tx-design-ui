# Carousel

A carousel component for cycling through elements—images or slides of text—like a carousel.

## When To Use

- When there is a group of content on the same level
- When there is insufficient content space, it can be used to save space in the form of a carousel
- Commonly used for a group of pictures/cards

## Examples

### Basic Usage

```jsx
import { TxCarousel } from "tx-design-ui";

function App() {
  return (
    <TxCarousel>
      <div style={{ background: "#667eea", height: "300px" }}>Slide 1</div>
      <div style={{ background: "#f093fb", height: "300px" }}>Slide 2</div>
      <div style={{ background: "#4facfe", height: "300px" }}>Slide 3</div>
    </TxCarousel>
  );
}
```

### Autoplay

Set `autoplay` to enable automatic sliding.

```jsx
<TxCarousel autoplay autoplaySpeed={2000}>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</TxCarousel>
```

### With Counter

Display a counter showing the current slide number.

```jsx
<TxCarousel showCounter>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
  <div>Slide 4</div>
</TxCarousel>
```

### Hide Dots

Hide the navigation dots.

```jsx
<TxCarousel dots={false}>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</TxCarousel>
```

### Hide Arrows

Hide the navigation arrows.

```jsx
<TxCarousel arrows={false}>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</TxCarousel>
```

### Not Infinite

Disable infinite looping. The carousel will stop at the first and last slides.

```jsx
<TxCarousel infinite={false}>
  <div>First Slide</div>
  <div>Middle Slide</div>
  <div>Last Slide</div>
</TxCarousel>
```

### Custom Height

Set a custom height for the carousel.

```jsx
<TxCarousel height="200px">
  <div>Small Slide 1</div>
  <div>Small Slide 2</div>
</TxCarousel>

<TxCarousel height="500px">
  <div>Large Slide 1</div>
  <div>Large Slide 2</div>
</TxCarousel>
```

### With Images

```jsx
<TxCarousel autoplay autoplaySpeed={3000}>
  <div>
    <img src="/path/to/image1.jpg" alt="Slide 1" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
  </div>
  <div>
    <img src="/path/to/image2.jpg" alt="Slide 2" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
  </div>
  <div>
    <img src="/path/to/image3.jpg" alt="Slide 3" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
  </div>
</TxCarousel>
```

### With Content

```jsx
<TxCarousel autoplay>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "300px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
    }}
  >
    <h2>Welcome</h2>
    <p>Discover amazing features</p>
  </div>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "300px",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "white",
    }}
  >
    <h2>Explore</h2>
    <p>Everything you need</p>
  </div>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "300px",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "white",
    }}
  >
    <h2>Get Started</h2>
    <p>Join us today</p>
  </div>
</TxCarousel>
```

### Controlled Component

```jsx
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <p>Current Slide: {current + 1}</p>
      <TxCarousel onChange={setCurrent}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </TxCarousel>
    </>
  );
}
```

## API

| Property      | Description                             | Type            | Default |
| ------------- | --------------------------------------- | --------------- | ------- |
| children      | Carousel slides (each child is a slide) | ReactNode       | -       |
| autoplay      | Enable automatic sliding                | boolean         | false   |
| autoplaySpeed | Autoplay interval in milliseconds       | number          | 3000    |
| speed         | Transition speed in milliseconds        | number          | 500     |
| dots          | Show navigation dots                    | boolean         | true    |
| arrows        | Show navigation arrows                  | boolean         | true    |
| infinite      | Enable infinite loop                    | boolean         | true    |
| height        | Height of the carousel                  | string          | '300px' |
| showCounter   | Show slide counter                      | boolean         | false   |
| initialSlide  | Index of the initial slide              | number          | 0       |
| onChange      | Callback when slide changes             | function(index) | -       |
| className     | Additional CSS class                    | string          | -       |

## Notes

- Hover over the carousel to pause autoplay
- Use arrow keys for navigation when focused (coming soon)
- Each child element becomes a separate slide
- Images should have appropriate aspect ratios for best display
- Use `infinite={false}` to disable looping at the edges
