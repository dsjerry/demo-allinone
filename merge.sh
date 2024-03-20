#!/bin/bash

# 设置主目录
parent_repo_path="C:\\custominstall\\TestSpace"

# 获取主目录下所有子目录的列表
subdirectories=$(ls -d "$parent_repo_path"/*/)

# 遍历每个子目录，并执行子树合并
for subdir in $subdirectories; do
    subdir_name=$(basename "$subdir")
    echo "Adding subtree for $subdir_name"
    git subtree add --prefix="$subdir_name" "$subdir" master
done
