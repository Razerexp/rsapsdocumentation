const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

async function extract() {
    const dir = 'C:/Users/chandan.reddy/rsapsdocumentation/website/build/release-notes';
    const files = ['P02', 'P03', 'P03_HF01', 'P04', 'P10'].map(p => `RSA_G&L_8.0_${p}_ReleaseNotes.pdf`);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.existsSync(fullPath)) {
            const data = await pdf(fs.readFileSync(fullPath));
            fs.writeFileSync(path.join(dir, `${file}.txt`), data.text);
            console.log(`Extracted: ${file}`);
        } else {
            console.log(`Not found: ${file}`);
        }
    }
}

extract().catch(console.error);
