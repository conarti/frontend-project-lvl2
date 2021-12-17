#!/usr/bin/env node
import genDiff from '../src/index.js';
import program from 'commander';

program
	.description('Compares two configuration files and shows a difference.')
	.version('0.0.1', '-V, --version', 'output the version number');

program.parse(process.argv);
