#!/bin/bash

# 图片处理脚本：宽度2000px等比缩放，80%质量，转换为JPG

find product-details-doc -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.tiff" -o -iname "*.heic" \) | while read file; do
    # 获取文件目录和文件名（不含扩展名）
    dir=$(dirname "$file")
    filename=$(basename "$file")
    name="${filename%.*}"
    
    # 输出文件路径（转换为.jpg）
    output="$dir/$name.jpg"
    
    echo "处理: $file -> $output"
    
    # 使用 sips（macOS 自带）处理图片
    # 1. 转换为 JPG 格式
    # 2. 调整宽度为 2000px（保持宽高比）
    # 3. 设置质量为 80%
    
    # 先获取原始宽度
    width=$(sips -g pixelWidth "$file" | tail -n1 | awk '{print $2}')
    
    if [ "$width" -gt 2000 ]; then
        # 如果宽度大于2000px，需要缩放
        sips -s format jpeg -s formatOptions 80 --resampleWidth 2000 "$file" --out "$output"
    else
        # 如果宽度小于等于2000px，只转换格式和压缩
        sips -s format jpeg -s formatOptions 80 "$file" --out "$output"
    fi
    
    # 如果原文件不是jpg且转换成功，删除原文件
    if [ "$file" != "$output" ] && [ -f "$output" ]; then
        rm "$file"
        echo "✓ 已删除原文件: $file"
    fi
    
    echo "---"
done

echo "所有图片处理完成！"
