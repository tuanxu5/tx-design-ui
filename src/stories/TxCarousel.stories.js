import { TxCarousel } from "../components/tx-carousel/tx-carousel";

const TxCarouselStory = {
  title: "tx-design-ui/Data Display/TxCarousel",
  component: TxCarousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    autoPlay: { control: "boolean" },
    autoPlaySpeed: { control: "number" },
    speed: { control: "number" },
    dots: { control: "boolean" },
    arrows: { control: "boolean" },
    infinite: { control: "boolean" },
    showCounter: { control: "boolean" },
    onChange: { action: "slide changed" },
  },
};

export default TxCarouselStory;

const slideStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "48px",
  fontWeight: "bold",
  color: "white",
};

export const Basic = {
  render: args => (
    <div style={{ width: "600px" }}>
      <TxCarousel {...args}>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>1</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>2</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }}>3</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" }}>4</div>
      </TxCarousel>
    </div>
  ),
};

export const Autoplay = {
  render: () => (
    <div style={{ width: "600px" }}>
      <TxCarousel autoPlay autoPlaySpeed={2000}>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>Slide 1</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>Slide 2</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }}>Slide 3</div>
      </TxCarousel>
    </div>
  ),
};

export const WithCounter = {
  render: () => (
    <div style={{ width: "600px" }}>
      <TxCarousel showCounter>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>1</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>2</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }}>3</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" }}>4</div>
      </TxCarousel>
    </div>
  ),
};

export const NoDots = {
  render: () => (
    <div style={{ width: "600px" }}>
      <TxCarousel dots={false}>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>1</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>2</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }}>3</div>
      </TxCarousel>
    </div>
  ),
};

export const NoArrows = {
  render: () => (
    <div style={{ width: "600px" }}>
      <TxCarousel arrows={false}>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>1</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>2</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }}>3</div>
      </TxCarousel>
    </div>
  ),
};

export const NotInfinite = {
  render: () => (
    <div style={{ width: "600px" }}>
      <TxCarousel infinite={false}>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
          First Slide
        </div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>
          Middle Slide
        </div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }}>Last Slide</div>
      </TxCarousel>
    </div>
  ),
};

export const CustomHeight = {
  render: () => (
    <div style={{ width: "600px" }}>
      <TxCarousel height="200px">
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>Small</div>
        <div style={{ ...slideStyle, background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>Height</div>
      </TxCarousel>
    </div>
  ),
};

export const WithImages = {
  render: () => (
    <div style={{ width: "700px" }}>
      <TxCarousel autoPlay autoPlaySpeed={3000}>
        <div style={{ width: "100%", height: "400px" }}>
          <img
            src="https://picsum.photos/700/400?random=1"
            alt="Slide 1"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div style={{ width: "100%", height: "400px" }}>
          <img
            src="https://picsum.photos/700/400?random=2"
            alt="Slide 2"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div style={{ width: "100%", height: "400px" }}>
          <img
            src="https://picsum.photos/700/400?random=3"
            alt="Slide 3"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </TxCarousel>
    </div>
  ),
};

export const WithContent = {
  render: () => (
    <div style={{ width: "700px" }}>
      <TxCarousel autoPlay>
        <div
          style={{
            ...slideStyle,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "32px" }}>Welcome</h2>
          <p style={{ margin: 0, fontSize: "16px", opacity: 0.9 }}>Discover amazing features</p>
        </div>
        <div
          style={{
            ...slideStyle,
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "32px" }}>Explore</h2>
          <p style={{ margin: 0, fontSize: "16px", opacity: 0.9 }}>Everything you need</p>
        </div>
        <div
          style={{
            ...slideStyle,
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "32px" }}>Get Started</h2>
          <p style={{ margin: 0, fontSize: "16px", opacity: 0.9 }}>Join us today</p>
        </div>
      </TxCarousel>
    </div>
  ),
};
