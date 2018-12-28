#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const getBuildData = require('./getBuildData');

const nextVersion = process.argv[2];

if (!nextVersion) {
  throw new Error('This script requires a version number to be provided');
}

// Update the SCSS Package Header
const SCSSFilePath = path.resolve('scss', 'nes-core.scss');
let SCSSFile = fs.readFileSync(SCSSFilePath, 'utf8');

SCSSFile = SCSSFile.replace(/^ {2}Version: development/m, `  Version: ${nextVersion}`);
SCSSFile = SCSSFile.replace(/^#{build-data\(\)}/m, getBuildData());

fs.writeFileSync(SCSSFilePath, SCSSFile, 'utf8');

// Update the SCSS Package Header
const CSSFilePath = path.resolve('css', 'nes.css');
let CSSFile = fs.readFileSync(CSSFilePath, 'utf8');

CSSFile = CSSFile.replace(/^ {2}Version: development/m, `  Version: ${nextVersion}`);

fs.writeFileSync(CSSFilePath, CSSFile, 'utf8');
