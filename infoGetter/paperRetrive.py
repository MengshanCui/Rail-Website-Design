import re
import os
import requests

# 文件路径
file_path = r"c:\Users\86462\Downloads\Index of _files.mhtml"

# 打开文件并读取内容
with open(file_path, "r", encoding="utf-8") as file:
    content = file.read()

    # 打开文件并读取内容
with open(file_path, "r", encoding="utf-8") as file:
    content = file.read()

# 合并被换行符分割的链接
content = content.replace("=\n", "")

# 使用正则表达式匹配 <a href=3D"..."> 中的链接
links = re.findall(r'<a href=3D"(https?://[^"]+)"', content)

# 分类链接
pdf_links = [link for link in links if link.endswith(".pdf")]
non_pdf_links = [link for link in links if not link.endswith(".pdf")]

# 打印以 .pdf 结尾的链接
print("以 .pdf 结尾的链接:")
for link in pdf_links:
    print(link)

# 打印非 .pdf 结尾的链接
print("\n非 .pdf 结尾的链接:")
for link in non_pdf_links:
    print(link)

    
print("以 .pdf 结尾的链接数量:", len(pdf_links))
print("非 .pdf 结尾的链接数量:", len(non_pdf_links))

print("提取的链接数量:", len(links))

# # 下载 PDF 文件
# output_dir = r"c:\Users\86462\Downloads\PDFs"  # 保存 PDF 文件的目录
# os.makedirs(output_dir, exist_ok=True)  # 如果目录不存在，则创建

# for i, pdf_link in enumerate(pdf_links, start=1):
#     try:
#         print(f"正在下载第 {i} 个 PDF: {pdf_link}")
#         response = requests.get(pdf_link, stream=True, timeout=10)  # 发送 GET 请求
#         response.raise_for_status()  # 检查请求是否成功

#         # 从链接中提取文件名
#         file_name = os.path.basename(pdf_link)
#         file_path = os.path.join(output_dir, file_name)

#         # 保存 PDF 文件到本地
#         with open(file_path, "wb") as pdf_file:
#             for chunk in response.iter_content(chunk_size=1024):
#                 pdf_file.write(chunk)

#         print(f"✅ 下载完成: {file_path}")
#     except Exception as e:
#         print(f"❌ 下载失败: {pdf_link}, 错误: {e}")