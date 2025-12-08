"use server";

import { promises as fs } from "fs";
import path from "path";

export const getFileContent = async (file: string) => {
  const filePath = path.join(process.cwd(), "registry", "default", "ui", file);
  return await fs.readFile(filePath, "utf8");
};
