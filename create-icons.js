const fs = require('fs');
const path = require('path');

const iconsDir = './static/icons';

if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

function createPNG(width, height, pixels) {
    const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
    
    function crc32(data) {
        let crc = 0xFFFFFFFF;
        const table = [];
        for (let i = 0; i < 256; i++) {
            let c = i;
            for (let j = 0; j < 8; j++) {
                c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
            }
            table[i] = c;
        }
        for (let i = 0; i < data.length; i++) {
            crc = table[(crc ^ data[i]) & 0xFF] ^ (crc >>> 8);
        }
        return (crc ^ 0xFFFFFFFF) >>> 0;
    }

    function createChunk(type, data) {
        const length = Buffer.alloc(4);
        length.writeUInt32BE(data.length);
        const typeBuffer = Buffer.from(type);
        const crcData = Buffer.concat([typeBuffer, data]);
        const crc = Buffer.alloc(4);
        crc.writeUInt32BE(crc32(crcData));
        return Buffer.concat([length, typeBuffer, data, crc]);
    }

    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(width, 0);
    ihdr.writeUInt32BE(height, 4);
    ihdr[8] = 8;
    ihdr[9] = 6;
    ihdr[10] = 0;
    ihdr[11] = 0;
    ihdr[12] = 0;

    const rawData = [];
    for (let y = 0; y < height; y++) {
        rawData.push(0);
        for (let x = 0; x < width; x++) {
            const idx = y * width + x;
            const pixel = pixels[idx] || [0, 0, 0, 0];
            rawData.push(pixel[0], pixel[1], pixel[2], pixel[3]);
        }
    }

    const { deflateSync } = require('zlib');
    const compressed = deflateSync(Buffer.from(rawData));

    const ihdrChunk = createChunk('IHDR', ihdr);
    const idatChunk = createChunk('IDAT', compressed);
    const iendChunk = createChunk('IEND', Buffer.alloc(0));

    return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createHeartIcon(size) {
    const pixels = [];
    const cx = size / 2;
    const cy = size / 2;
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const dx = x - cx;
            const dy = y - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const scale = 0.45;
            
            if ((Math.abs(dx) < cx * scale && Math.abs(dy) < cy * 0.8 && (Math.abs(dx) > Math.abs(dy) * 0.5 || Math.abs(dy) > cx * 0.3)) || 
                (dist < cx * scale * 0.8)) {
                pixels.push([137, 99, 89, 255]);
            } else {
                pixels.push([0, 0, 0, 0]);
            }
        }
    }
    return pixels;
}

function createStarIcon(size) {
    const pixels = [];
    const cx = size / 2;
    const cy = size / 2;
    const outerRadius = size / 3;
    const innerRadius = size / 6;
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const dx = x - cx;
            const dy = y - cy;
            let angle = Math.atan2(dy, dx);
            angle += Math.PI / 2;
            
            const fiveAngle = Math.PI * 2 / 5;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            const petalAngle = angle % fiveAngle;
            const distToPoint = petalAngle < fiveAngle / 2 ? innerRadius : outerRadius;
            
            if (dist < distToPoint) {
                pixels.push([137, 99, 89, 255]);
            } else {
                pixels.push([0, 0, 0, 0]);
            }
        }
    }
    return pixels;
}

function createWavesIcon(size) {
    const pixels = [];
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const normalizedX = x / size;
            const normalizedY = y / size;
            
            const wave1 = Math.sin(normalizedX * Math.PI * 4) * 0.15 + 0.35;
            const wave2 = Math.sin(normalizedX * Math.PI * 4 + Math.PI / 3) * 0.15 + 0.55;
            const wave3 = Math.sin(normalizedX * Math.PI * 4 + Math.PI * 2 / 3) * 0.15 + 0.75;
            
            if ((normalizedY > wave1 - 0.08 && normalizedY < wave1 + 0.08) ||
                (normalizedY > wave2 - 0.08 && normalizedY < wave2 + 0.08) ||
                (normalizedY > wave3 - 0.08 && normalizedY < wave3 + 0.08)) {
                pixels.push([137, 99, 89, 255]);
            } else {
                pixels.push([0, 0, 0, 0]);
            }
        }
    }
    return pixels;
}

function createCalendarIcon(size) {
    const pixels = [];
    const border = 3;
    const inner = size - border * 2;
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (x >= border && x < size - border && y >= border && y < size - border) {
                if (y < border + inner / 3) {
                    pixels.push([144, 77, 0, 255]);
                } else {
                    pixels.push([144, 77, 0, 255]);
                }
            } else {
                pixels.push([0, 0, 0, 0]);
            }
        }
    }
    
    for (let y = border + 1; y < size - border - 1; y++) {
        pixels[(border + 1) + y * size] = [255, 255, 255, 255];
        pixels[(size - border - 2) + y * size] = [255, 255, 255, 255];
    }
    
    for (let x = border + 1; x < size - border - 1; x++) {
        pixels[x + (border + 1) * size] = [255, 255, 255, 255];
        pixels[x + (size - border - 2) * size] = [255, 255, 255, 255];
    }
    
    return pixels;
}

function createAddIcon(size, color = [144, 77, 0]) {
    const pixels = [];
    const cx = size / 2;
    const cy = size / 2;
    const thickness = Math.max(2, size / 8);
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const inHorizontal = Math.abs(y - cy) < thickness && x > cx - size / 3 && x < cx + size / 3;
            const inVertical = Math.abs(x - cx) < thickness && y > cy - size / 3 && y < cy + size / 3;
            
            if (inHorizontal || inVertical) {
                pixels.push([...color, 255]);
            } else {
                pixels.push([0, 0, 0, 0]);
            }
        }
    }
    return pixels;
}

const icons = [
    { name: 'calendar.png', create: () => createCalendarIcon(48) },
    { name: 'add.png', create: () => createAddIcon(48) },
    { name: 'add-white.png', create: () => createAddIcon(48, [255, 255, 255]) },
    { name: 'heart.png', create: () => createHeartIcon(48) },
    { name: 'star.png', create: () => createStarIcon(48) },
    { name: 'waves.png', create: () => createWavesIcon(48) },
    { name: 'book.png', create: () => {
        const pixels = [];
        for (let y = 0; y < 48; y++) {
            for (let x = 0; x < 48; x++) {
                if ((x >= 6 && x < 42 && y >= 6 && y < 42)) {
                    if (y < 14) pixels.push([137, 99, 89, 255]);
                    else if (y < 34) {
                        if (x < 24) pixels.push([137, 99, 89, 255]);
                        else pixels.push([0, 0, 0, 0]);
                    } else pixels.push([137, 99, 89, 255]);
                } else pixels.push([0, 0, 0, 0]);
            }
        }
        return pixels;
    }}
];

icons.forEach(icon => {
    const pixels = icon.create();
    const png = createPNG(48, 48, pixels);
    fs.writeFileSync(path.join(iconsDir, icon.name), png);
    console.log(`Created ${icon.name}`);
});

console.log('All icons created!');
