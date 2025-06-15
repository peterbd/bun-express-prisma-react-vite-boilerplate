import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

// eslint-disable-next-line no-undef
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const rootDir = join(__dirname, "..");

// Read the root .env file
const envContent = readFileSync(join(rootDir, ".env"), "utf-8");
const envVars = envContent.split("\n").reduce((acc, line) => {
  const [key, value] = line.split("=");
  if (key && value) {
    acc[key.trim()] = value.trim().replace(/"/g, "");
  }
  return acc;
}, {});

// Generate server .env
const serverEnv = `# Server Configuration
PORT=${envVars.PORT || 3000}
NODE_ENV=${envVars.NODE_ENV || "development"}

# Database Configuration
DATABASE_URL="${envVars.DATABASE_URL || "file:./prisma/dev.db"}"
`;

// Generate client .env
const clientEnv = `# Client Configuration
VITE_API_URL="http://localhost:${envVars.PORT || 3000}/api"
`;

// Write the files
writeFileSync(join(rootDir, "server", ".env"), serverEnv);
writeFileSync(join(rootDir, "client", ".env"), clientEnv);

// eslint-disable-next-line no-undef
console.log("Environment files generated successfully!");
