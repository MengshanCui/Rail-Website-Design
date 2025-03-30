// 路径: src/pages/Editor.tsx
import React from "react";
import { Card, CardBody, Input, Textarea, Button, Image } from "@heroui/react";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Editor() {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("user123");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-16 space-y-8">
      <h1 className="text-4xl font-bold text-center">📝 可视化内容编辑器</h1>

      <Card>
        <CardBody className="space-y-6">
          <Input
            label="用户 ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <div className="space-y-2">
            <label className="font-medium">上传图片</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {image && (
              <Image src={image} alt="预览图" width={400} className="rounded-xl shadow" />
            )}
          </div>

          <Textarea
            label="文字描述"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button
            color="primary"
            className="bg-[#A31F34]"
            startContent={<Icon icon="lucide:upload" />}
            onClick={() => {
              // 可接入后端接口上传：image + description + userId
              console.log({ userId, image, description });
            }}
          >
            提交内容
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
