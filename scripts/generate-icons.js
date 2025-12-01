#!/usr/bin/env node
/**
 * Icon Generator for Fractal Explorer
 * Run: node scripts/generate-icons.js
 * Requires: npm install sharp
 */

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

try {
    const sharp = require('sharp');
    const path = require('path');
    
    const svgPath = path.join(__dirname, '../www/icons/icon.svg');
    const outputDir = path.join(__dirname, '../www/icons');
    
    async function generate() {
        console.log('Generating icons...');
        for (const size of sizes) {
            await sharp(svgPath)
                .resize(size, size)
                .png()
                .toFile(path.join(outputDir, `icon-${size}.png`));
            console.log(`Created: icon-${size}.png`);
        }
        console.log('Done! Run: npm run cap:sync');
    }
    generate();
} catch (e) {
    console.log('Install sharp first: npm install sharp');
    console.log('Or use online converter: cloudconvert.com/svg-to-png');
    console.log('Sizes needed:', sizes.join(', '));
}
