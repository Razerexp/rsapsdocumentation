const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

if (!args.pdf || !args.version) {
    console.error('Usage: npm run import-notes -- --pdf <path_to_pdf> --version <version> [--date <release_date>]');
    process.exit(1);
}

const pdfPath = path.resolve(args.pdf);
const version = args.version;
const date = args.date || 'Not specified';
const outputDir = path.resolve(__dirname, '../release-notes');
const outputFile = path.join(outputDir, `RSA_G&L_${version.replace(/[\.\-]/g, '_').replace(' ', '_')}.md`);

if (!fs.existsSync(pdfPath)) {
    console.error(`Error: File not found at ${pdfPath}`);
    process.exit(1);
}

const dataBuffer = fs.readFileSync(pdfPath);

console.log(`Reading PDF: ${pdfPath}`);

pdf(dataBuffer).then(function (data) {
    let rawText = data.text;

    // Basic cleaning: consistent newlines
    let cleanText = rawText.replace(/\r\n/g, '\n');

    // Hyperlink Generation for ACM-xxxxx
    cleanText = cleanText.replace(/(ACM-\d+)/g, '[$1](https://rsa.atlassian.net/browse/$1)');

    // Hyperlink Generation for Emails
    cleanText = cleanText.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi, '[$1](mailto:$1)');


    // Construct Markdown content
    const frontmatter = `---
title: RSA G&L ${version}
sidebar_label: v${version}
---

`;

    const header = `# RSA Governance & Lifecycle ${version}

**Release Date:** ${date}
**Version:** ${version}

## Imported Content
> [!WARNING]
> This content was auto-generated from a PDF. Tables (like Fixed Issues) may require manual formatting.

`;

    const finalContent = frontmatter + header + cleanText;

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputFile, finalContent);
    console.log(`Successfully generated release notes: ${outputFile}`);

}).catch(function (error) {
    console.error('Error parsing PDF:', error);
    process.exit(1);
});
