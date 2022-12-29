import fs from "fs/promises";

async function main() {
  const content = await fs.readFile("package.json");
  console.log(content.toString());
}

main().catch(e => console.error(e));
