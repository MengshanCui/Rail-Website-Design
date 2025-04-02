import os
import json
import base64
from email import message_from_bytes
from bs4 import BeautifulSoup  # 用于解析 HTML

def parse_mhtml_to_json(mhtml_file, output_json):
    """
    解析 .mhtml 文件并将其内容按标题层级分组为 JSON 格式
    """
    try:
        # 读取 .mhtml 文件
        with open(mhtml_file, "rb") as f:
            mhtml_content = f.read()

        # 使用 email 模块解析 .mhtml 文件
        msg = message_from_bytes(mhtml_content)

        # 提取 HTML 和资源
        html_content = None
        resources = {}

        for part in msg.walk():
            content_type = part.get_content_type()
            content_disposition = part.get("Content-Disposition", "")

            # 提取 HTML 内容
            if content_type == "text/html" and html_content is None:
                html_content = part.get_payload(decode=True).decode("utf-8")

            # 提取资源文件（如图片、CSS、JS）
            elif "attachment" in content_disposition:
                filename = part.get_param("filename", header="Content-Disposition")
                if filename:
                    resources[filename] = base64.b64encode(part.get_payload(decode=True)).decode("utf-8")

        # 使用 BeautifulSoup 解析 HTML 内容
        soup = BeautifulSoup(html_content, "html.parser")

        # 按标题层级分组内容
        def parse_sections(tags):
            stack = []  # 用于存储标题层级
            sections = []  # 最终的分组结果

            for tag in tags:
                tag_name = tag.name
                if tag_name in ["h1", "h2", "h3", "h4", "h5", "h6"]:
                    # 创建新的标题节点
                    new_section = {"title": tag.get_text(strip=True), "content": []}
                    level = int(tag_name[1])  # 获取标题级别（1-6）

                    # 将新标题插入到正确的层级
                    while stack and stack[-1]["level"] >= level:
                        stack.pop()  # 弹出比当前级别高或相同的标题

                    if stack:
                        stack[-1]["section"]["content"].append(new_section)
                    else:
                        sections.append(new_section)

                    # 将新标题压入堆栈
                    stack.append({"level": level, "section": new_section})
                elif tag_name == "p":
                    # 处理段落内容，包括可能的链接
                    paragraph_content = {"type": "p", "content": tag.get_text(strip=True)}
                    links = [{"href": a.get("href"), "text": a.get_text(strip=True)} for a in tag.find_all("a") if a.get("href")]
                    if links:
                        paragraph_content["links"] = links
                    if stack:
                        stack[-1]["section"]["content"].append(paragraph_content)
                elif tag_name in ["ul", "ol"]:
                    # 添加列表内容到最近的标题
                    list_items = [li.get_text(strip=True) for li in tag.find_all("li") if li.get_text(strip=True)]
                    if stack:
                        stack[-1]["section"]["content"].append({"type": tag_name, "content": list_items})
                elif tag_name == "img":
                    # 处理图片内容
                    img_src = tag.get("src")
                    img_alt = tag.get("alt", "")
                    if img_src and stack:
                        stack[-1]["section"]["content"].append({"type": "img", "src": img_src, "alt": img_alt})

            return sections

        # 提取所有相关标签
        tags = soup.find_all(["h1", "h2", "h3", "h4", "h5", "h6", "p", "ul", "ol", "img"])
        sections = parse_sections(tags)

        # 构建 JSON 数据
        compressed_data = {
            "sections": sections,
            "resources": resources
        }

        # 保存为 JSON 文件
        with open(output_json, "w", encoding="utf-8") as f:
            json.dump(compressed_data, f, indent=4, ensure_ascii=False)
        print(f"✅ 成功将 {mhtml_file} 转换为 {output_json}")

    except Exception as e:
        print(f"❌ 解析 .mhtml 文件失败: {e}")

def process_folder(input_folder, output_folder):
    """
    读取文件夹中的所有 .mhtml 文件，并生成对应的 JSON 文件
    """
    # 确保输出文件夹存在
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # 遍历输入文件夹中的所有文件
    for filename in os.listdir(input_folder):
        if filename.endswith(".mhtml"):
            input_file = os.path.join(input_folder, filename)
            output_file = os.path.join(output_folder, f"{os.path.splitext(filename)[0]}.json")
            print(f"📄 正在处理文件: {input_file}")
            parse_mhtml_to_json(input_file, output_file)

# 示例：处理文件夹
input_folder = "infoGetter/info"  # 替换为你的输入文件夹路径
output_folder = "infoGetter/output"  # 替换为你的输出文件夹路径
process_folder(input_folder, output_folder)
