// Generates public/social-card.jpg (1200x630) for og:image / twitter:image.
// Run again any time BRAND.md colors or copy change: node scripts/generate-social-card.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;

const background = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a4560"/>
      <stop offset="55%" stop-color="#0b2430"/>
      <stop offset="100%" stop-color="#040d13"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#159fda" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#159fda" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <ellipse cx="900" cy="180" rx="420" ry="300" fill="url(#glow)"/>
  <ellipse cx="150" cy="520" rx="320" ry="220" fill="#2fa84f" opacity="0.12"/>
  <text x="90" y="290" font-family="Georgia, 'Times New Roman', serif" font-size="72" fill="#f5f1e8" font-weight="600">Exotic Aquascape</text>
  <text x="90" y="345" font-family="Georgia, 'Times New Roman', serif" font-size="40" fill="#8fd4ef" font-style="italic">We build living water.</text>
  <text x="90" y="410" font-family="Arial, sans-serif" font-size="26" fill="#c9d6da">Koi Ponds &#183; Fountains &#183; Water Gardens &#183; Living Art Aquariums</text>
  <text x="90" y="450" font-family="Arial, sans-serif" font-size="24" fill="#e12f44" font-weight="600">Jamaica, Island-Wide &#183; Since 2008</text>
</svg>`;

const logo = sharp(path.join(root, "public/logo.jpeg"))
  .resize(220, 220, { fit: "contain", background: { r: 245, g: 241, b: 232, alpha: 1 } })
  .toBuffer();

const [logoBuf] = await Promise.all([logo]);

await sharp(Buffer.from(background))
  .composite([
    {
      input: await sharp(logoBuf)
        .composite([]) // no-op keeps chain typed
        .png()
        .toBuffer(),
      left: WIDTH - 220 - 90,
      top: HEIGHT / 2 - 110,
    },
  ])
  .jpeg({ quality: 88 })
  .toFile(path.join(root, "public/social-card.jpg"));

console.log("✓ public/social-card.jpg generated");
