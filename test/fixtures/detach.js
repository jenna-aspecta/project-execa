#!/usr/bin/env node
import process from 'node:process';
import {execa} from '../../index.js';

const subprocess = execa('forever.js', {detached: true});
console.log(subprocess.pid);
process.exit(0);
