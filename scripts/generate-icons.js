#!/usr/bin/env node
/**
 * Icon Generator for Fractal Explorer
 * Generates PNG icons from SVG for Android
 * 
 * Usage: node scripts/generate-icons.js
 * Requires: sharp (npm install sharp)
 */

const fs = require('fs');
const path = require('path');

// Icon sizes needed for Android
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Check if sharp is available
let sharp;
try {
    sharp = require('sharp');
} catch (e) {
    console.log('Sharp not installed. Install with: npm install sharp');
    console.log('');
    console.log('Alternative: Use online SVG to PNG converter');
    console.log('1. Go to https://cloudconvert.com/svg-to-png');
    console.log('2. Upload www/icons/icon.svg');
    console.log('3. Generate these sizes:', sizes.join(', '));
    console.log('4. Save as icon-{size}.png in www/icons/');
    process.exit(0);
}

const svgPath = path.join(__dirname, '../www/icons/icon.svg');
const outputDir = path.join(__dirname, '../www/icons');

async function generateIcons() {
    console.log('🎨 Generating icons...');
    
    if (!fs.existsSync(svgPath)) {
        console.error('SVG not found:', svgPath);
        process.exit(1);
    }

    for (const size of sizes) {
        const outputPath = path.join(outputDir, `icon-${size}.png`);
        
        await sharp(svgPath)
            .resize(size, size)
            .png()
            .toFile(outputPath);
        
        console.log(`✅ Generated: icon-${size}.png`);
    }

    console.log('');
    console.log('🎉 All icons generated!');
    console.log('Now run: npm run cap:sync');
}

generateIcons().catch(console.error);
