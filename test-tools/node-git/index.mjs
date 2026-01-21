#!/usr/bin/env node

import { spawnSync } from 'child_process';
import { resolve } from 'path';

function printUsage() {
  console.log(`用法:
  node index.mjs -m "<提交说明>" [--repo <仓库路径>]

参数:
  -m, --message   必填，提交说明
  -r, --repo      选填，目标 git 仓库路径，默认当前工作目录

行为:
  1) git add .
  2) 若无变更则退出提示
  3) git commit -m <message>`);
}

function parseArgs(argv) {
  const opts = { message: '', repo: process.cwd() };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '-m' || arg === '--message') {
      opts.message = argv[i + 1] || '';
      i += 1;
    } else if (arg === '-r' || arg === '--repo') {
      opts.repo = argv[i + 1] || process.cwd();
      i += 1;
    } else if (arg === '-h' || arg === '--help') {
      printUsage();
      process.exit(0);
    }
  }
  return opts;
}

function runGit(args, cwd) {
  const res = spawnSync('git', args, { cwd, stdio: 'inherit' });
  if (res.status !== 0) {
    const reason = res.error ? res.error.message : `退出码 ${res.status}`;
    throw new Error(`git ${args.join(' ')} 失败：${reason}`);
  }
  return res;
}

function hasChanges(cwd) {
  const res = spawnSync('git', ['status', '--porcelain'], { cwd, encoding: 'utf8' });
  if (res.status !== 0) {
    const reason = res.error ? res.error.message : `退出码 ${res.status}`;
    throw new Error(`git status 失败：${reason}`);
  }
  return (res.stdout || '').trim().length > 0;
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (!opts.message.trim()) {
    printUsage();
    process.exit(1);
  }

  const repoPath = resolve(opts.repo);

  try {
    runGit(['add', '.'], repoPath);

    if (!hasChanges(repoPath)) {
      console.log('没有可提交的变更，已退出。');
      return;
    }

    runGit(['commit', '-m', opts.message], repoPath);
    console.log('提交完成。');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

main();
