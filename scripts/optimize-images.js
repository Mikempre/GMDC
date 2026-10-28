import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimize() {
  console.log('--- Starting Responsive Image Optimization ---');

  const servicesDir = path.join(process.cwd(), 'src', 'assets', 'services');
  const serviceFiles = fs.readdirSync(servicesDir).filter(f => 
    (f.endsWith('.jpg') || f.endsWith('.png')) && 
    !f.includes('.tmp.') && 
    !f.endsWith('-sm.jpg') && 
    !f.endsWith('-sm.png')
  );

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of serviceFiles) {
    const filePath = path.join(servicesDir, file);
    const inputBuffer = fs.readFileSync(filePath);
    totalBefore += inputBuffer.length;

    const baseName = path.parse(file).name.replace('-sm', '');
    const webpPath = path.join(servicesDir, `${baseName}.webp`);
    const webpSmPath = path.join(servicesDir, `${baseName}-sm.webp`);

    // 1. Desktop WebP (width: 640, quality: 78)
    const webpBuffer = await sharp(inputBuffer)
      .resize({ width: 640, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toBuffer();
    fs.writeFileSync(webpPath, webpBuffer);

    // 2. Mobile WebP (width: 360, quality: 74) - perfect for mobile cards
    const webpSmBuffer = await sharp(inputBuffer)
      .resize({ width: 360, withoutEnlargement: true })
      .webp({ quality: 74, effort: 6 })
      .toBuffer();
    fs.writeFileSync(webpSmPath, webpSmBuffer);

    // 3. Optimized progressive JPEG fallback
    const jpgBuffer = await sharp(inputBuffer)
      .resize({ width: 640, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true, progressive: true })
      .toBuffer();
    fs.writeFileSync(filePath, jpgBuffer);

    totalAfter += webpSmBuffer.length;

    console.log(`[Service] ${baseName}: Desktop WebP: ${Math.round(webpBuffer.length / 1024)}KB | Mobile WebP: ${Math.round(webpSmBuffer.length / 1024)}KB`);
  }

  // Optimize Hero Image
  const heroPath = path.join(process.cwd(), 'src', 'assets', 'hero_image.png');
  if (fs.existsSync(heroPath)) {
    const heroBuffer = fs.readFileSync(heroPath);
    totalBefore += heroBuffer.length;

    // Desktop Hero WebP (width: 800, quality: 80)
    const heroWebp = path.join(process.cwd(), 'src', 'assets', 'hero_image.webp');
    const heroWebpBuffer = await sharp(heroBuffer)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();
    fs.writeFileSync(heroWebp, heroWebpBuffer);

    // Mobile Hero WebP (width: 480, quality: 76)
    const heroSmWebp = path.join(process.cwd(), 'src', 'assets', 'hero_image-sm.webp');
    const heroSmWebpBuffer = await sharp(heroBuffer)
      .resize({ width: 480, withoutEnlargement: true })
      .webp({ quality: 76, effort: 6 })
      .toBuffer();
    fs.writeFileSync(heroSmWebp, heroSmWebpBuffer);

    totalAfter += heroSmWebpBuffer.length;
    console.log(`[Hero] hero_image: Desktop WebP: ${Math.round(heroWebpBuffer.length / 1024)}KB | Mobile WebP: ${Math.round(heroSmWebpBuffer.length / 1024)}KB`);
  }

  // Optimize Logo
  const logoPath = path.join(process.cwd(), 'src', 'assets', 'logo.png');
  if (fs.existsSync(logoPath)) {
    const logoBuffer = fs.readFileSync(logoPath);
    totalBefore += logoBuffer.length;

    const logoWebp = path.join(process.cwd(), 'src', 'assets', 'logo.webp');
    const logoWebpBuffer = await sharp(logoBuffer)
      .resize({ width: 280, withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toBuffer();
    fs.writeFileSync(logoWebp, logoWebpBuffer);

    const logoSmWebp = path.join(process.cwd(), 'src', 'assets', 'logo-sm.webp');
    const logoSmWebpBuffer = await sharp(logoBuffer)
      .resize({ width: 180, withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toBuffer();
    fs.writeFileSync(logoSmWebp, logoSmWebpBuffer);

    totalAfter += logoSmWebpBuffer.length;
    console.log(`[Logo] logo: Desktop: ${Math.round(logoWebpBuffer.length / 1024)}KB | Mobile: ${Math.round(logoSmWebpBuffer.length / 1024)}KB`);
  }

  // Optimize Pricelist
  const pricePath = path.join(process.cwd(), 'src', 'assets', 'pricelist.jpg');
  if (fs.existsSync(pricePath)) {
    const priceBuffer = fs.readFileSync(pricePath);

    const priceWebp = path.join(process.cwd(), 'src', 'assets', 'pricelist.webp');
    const priceWebpBuffer = await sharp(priceBuffer)
      .resize({ width: 1000, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();
    fs.writeFileSync(priceWebp, priceWebpBuffer);

    const priceSmWebp = path.join(process.cwd(), 'src', 'assets', 'pricelist-sm.webp');
    const priceSmWebpBuffer = await sharp(priceBuffer)
      .resize({ width: 600, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toBuffer();
    fs.writeFileSync(priceSmWebp, priceSmWebpBuffer);

    console.log(`[PriceList] Desktop: ${Math.round(priceWebpBuffer.length / 1024)}KB | Mobile: ${Math.round(priceSmWebpBuffer.length / 1024)}KB`);
  }

  console.log('\n=== Image Generation Complete ===');
}

optimize().catch(err => {
  console.error('Optimization error:', err);
  process.exit(1);
});
