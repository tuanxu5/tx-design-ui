const fs = require("fs");

// Read all SVG files in the outline directory
const outlineDir = "./src/assets/icons/outline";
const svgFiles = fs.readdirSync(outlineDir).filter(file => file.endsWith(".svg"));

console.log(`Found ${svgFiles.length} icon files`);

// Generate import statements
const imports = svgFiles.map(file => {
  const name = file.replace(".svg", "");
  // Convert kebab-case to PascalCase
  const componentName = name
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  return `import ${componentName} from "./${file}";`;
});

// Generate the exports object
const exportItems = svgFiles.map(file => {
  const name = file.replace(".svg", "");
  const componentName = name
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  return `  ${componentName},`;
});

// Generate the index.js file content
const indexContent = `${imports.join("\n")}

const TxIconOutline = {
${exportItems.join("\n")}
};

export { TxIconOutline };
`;

// Write the index.js file
const indexPath = "./src/assets/icons/outline/index.js";
fs.writeFileSync(indexPath, indexContent);
console.log(`✅ Generated ${indexPath} with ${svgFiles.length} imports`);
