import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimize() {
  console.log('--- Starting Image Optimization ---');

  const servicesDir = path.join(process.cwd(), 'src', 'assets', 'services');
  const serviceFiles = fs.readdirSync(servicesDir).filter(f => (f.endsWith('.jpg') || f.endsWith('.png')) && !f.includes('.tmp.'));

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of serviceFiles) {
    const filePath = path.join(servicesDir, file);
    const inputBuffer = fs.readFileSync(filePath);
    totalBefore += inputBuffer.length;

    const baseName = path.parse(file).name;
    const webpPath = path.join(servicesDir, `${baseName}.webp`);

    // 1. Generate high-efficiency WebP (width: 800, quality: 80)
    const webpBuffer = await sharp(inputBuffer)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();

    fs.writeFileSync(webpPath, webpBuffer);

    // 2. Overwrite JPEG with optimized progressive JPEG fallback
    const jpgBuffer = await sharp(inputBuffer)
      .resize({ width: 800, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true, progressive: true })
      .toBuffer();

    fs.writeFileSync(filePath, jpgBuffer);

    totalAfter += webpBuffer.length;

    console.log(`[Service] ${file}: ${Math.round(inputBuffer.length / 1024)}KB -> WebP: ${Math.round(webpBuffer.length / 1024)}KB | JPG: ${Math.round(jpgBuffer.length / 1024)}KB`);
  }

  // Optimize Hero Image
  const heroPath = path.join(process.cwd(), 'src', 'assets', 'hero_image.png');
  if (fs.existsSync(heroPath)) {
    const heroBuffer = fs.readFileSync(heroPath);
    totalBefore += heroBuffer.length;

    const heroWebp = path.join(process.cwd(), 'src', 'assets', 'hero_image.webp');
    const heroWebpBuffer = await sharp(heroBuffer)
      .resize({ width: 1000, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toBuffer();

    fs.writeFileSync(heroWebp, heroWebpBuffer);

    const heroPngBuffer = await sharp(heroBuffer)
      .resize({ width: 1000, withoutEnlargement: true })
      .png({ compressionLevel: 9, effort: 7 })
      .toBuffer();

    fs.writeFileSync(heroPath, heroPngBuffer);

    totalAfter += heroWebpBuffer.length;

    console.log(`[Hero] hero_image.png: ${Math.round(heroBuffer.length / 1024)}KB -> WebP: ${Math.round(heroWebpBuffer.length / 1024)}KB | PNG: ${Math.round(heroPngBuffer.length / 1024)}KB`);
  }

  // Optimize Pricelist
  const pricePath = path.join(process.cwd(), 'src', 'assets', 'pricelist.jpg');
  if (fs.existsSync(pricePath)) {
    const priceBuffer = fs.readFileSync(pricePath);
    totalBefore += priceBuffer.length;

    const priceWebp = path.join(process.cwd(), 'src', 'assets', 'pricelist.webp');
    const priceWebpBuffer = await sharp(priceBuffer)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toBuffer();

    fs.writeFileSync(priceWebp, priceWebpBuffer);

    const priceJpgBuffer = await sharp(priceBuffer)
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true, progressive: true })
      .toBuffer();

    fs.writeFileSync(pricePath, priceJpgBuffer);

    totalAfter += priceWebpBuffer.length;

    console.log(`[PriceList] pricelist.jpg: ${Math.round(priceBuffer.length / 1024)}KB -> WebP: ${Math.round(priceWebpBuffer.length / 1024)}KB | JPG: ${Math.round(priceJpgBuffer.length / 1024)}KB`);
  }

  // Optimize Logo
  const logoPath = path.join(process.cwd(), 'src', 'assets', 'logo.png');
  if (fs.existsSync(logoPath)) {
    const logoBuffer = fs.readFileSync(logoPath);
    totalBefore += logoBuffer.length;

    const logoWebp = path.join(process.cwd(), 'src', 'assets', 'logo.webp');
    const logoWebpBuffer = await sharp(logoBuffer)
      .resize({ width: 500, withoutEnlargement: true })
      .webp({ quality: 90, effort: 6 })
      .toBuffer();

    fs.writeFileSync(logoWebp, logoWebpBuffer);

    const logoPngBuffer = await sharp(logoBuffer)
      .resize({ width: 500, withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toBuffer();

    fs.writeFileSync(logoPath, logoPngBuffer);

    totalAfter += logoWebpBuffer.length;

    console.log(`[Logo] logo.png: ${Math.round(logoBuffer.length / 1024)}KB -> WebP: ${Math.round(logoWebpBuffer.length / 1024)}KB | PNG: ${Math.round(logoPngBuffer.length / 1024)}KB`);
  }

  // Clean up any stray .tmp files
  for (const f of fs.readdirSync(servicesDir)) {
    if (f.includes('.tmp.')) {
      try { fs.unlinkSync(path.join(servicesDir, f)); } catch {}
    }
  }

  // Create public/og-image.jpg (1200x630) for social and SEO
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const ogImagePath = path.join(publicDir, 'og-image.jpg');
  
  const bgSvg = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#041333" />
          <stop offset="50%" stop-color="#06318c" />
          <stop offset="100%" stop-color="#0050d2" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#grad)" />
      <circle cx="1050" cy="150" r="300" fill="#0050d2" opacity="0.3" filter="blur(60px)" />
      <circle cx="150" cy="500" r="250" fill="#337aff" opacity="0.2" filter="blur(60px)" />
      <text x="600" y="380" font-family="Arial, sans-serif" font-weight="900" font-size="52" fill="#ffffff" text-anchor="middle" letter-spacing="1">GRAN MAESTRO DRYCLEANERS</text>
      <text x="600" y="440" font-family="Arial, sans-serif" font-weight="600" font-size="28" fill="#a5c4ff" text-anchor="middle" letter-spacing="2">PREMIUM FABRICARE SPECIALIST &amp; LAUNDRY SERVICES</text>
      <text x="600" y="500" font-family="Arial, sans-serif" font-weight="500" font-size="22" fill="#ffffff" text-anchor="middle">Ibadan: Bodija &amp; Jericho | Pickup &amp; Delivery: 0818 888 4275</text>
    </svg>
  `);

  await sharp(bgSvg)
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(ogImagePath);

  console.log(`[OG-Image] Generated 1200x630 social card at ${ogImagePath} (${Math.round(fs.statSync(ogImagePath).size / 1024)}KB)`);

  const reduction = Math.round((1 - (totalAfter / totalBefore)) * 100);
  console.log(`\n=== Optimization Summary ===`);
  console.log(`Original total: ${(totalBefore / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Optimized WebP total: ${(totalAfter / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total payload reduction: ${reduction}% savings!`);
}

optimize().catch(err => {
  console.error('Optimization error:', err);
  process.exit(1);
});
