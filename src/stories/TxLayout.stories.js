import TxLayout from "../components/tx-layout/tx-layout";

const TxLayoutStory = {
  title: "tx-design-ui/Foundation/TxLayout",
  component: TxLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default TxLayoutStory;

export const Basic = {
  render: () => (
    <TxLayout>
      <TxLayout.Header>
        <h2 style={{ margin: 0 }}>Header</h2>
      </TxLayout.Header>
      <TxLayout.Content>
        <h2>Content</h2>
        <p>This is the main content area.</p>
      </TxLayout.Content>
      <TxLayout.Footer>Footer</TxLayout.Footer>
    </TxLayout>
  ),
};

export const WithSider = {
  render: () => (
    <TxLayout flex>
      <TxLayout.Sider>
        <div style={{ padding: "16px" }}>
          <h3 style={{ marginTop: 0 }}>Sidebar</h3>
          <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <button
              type="button"
              onClick={() => {}}
              style={{
                padding: "8px",
                textDecoration: "none",
                color: "#1890ff",
                background: "none",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              Menu Item 1
            </button>
            <button
              type="button"
              onClick={() => {}}
              style={{
                padding: "8px",
                textDecoration: "none",
                color: "#666",
                background: "none",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              Menu Item 2
            </button>
            <button
              type="button"
              onClick={() => {}}
              style={{
                padding: "8px",
                textDecoration: "none",
                color: "#666",
                background: "none",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              Menu Item 3
            </button>
          </nav>
        </div>
      </TxLayout.Sider>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <TxLayout.Header>
          <h2 style={{ margin: 0 }}>Header</h2>
        </TxLayout.Header>
        <TxLayout.Content>
          <h2>Content</h2>
          <p>Content area with sidebar.</p>
        </TxLayout.Content>
      </div>
    </TxLayout>
  ),
};

export const FullLayout = {
  render: () => (
    <TxLayout flex>
      <TxLayout.Sider>
        <div style={{ padding: "16px" }}>
          <h3 style={{ marginTop: 0 }}>Sidebar</h3>
        </div>
      </TxLayout.Sider>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: "100vh" }}>
        <TxLayout.Header>
          <h2 style={{ margin: 0 }}>Header</h2>
        </TxLayout.Header>
        <TxLayout.Content>
          <h2>Main Content</h2>
          <p>This is a complete layout with sider, header, content, and footer.</p>
        </TxLayout.Content>
        <TxLayout.Footer>Footer © 2024</TxLayout.Footer>
      </div>
    </TxLayout>
  ),
};
