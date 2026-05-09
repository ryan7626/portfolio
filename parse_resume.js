async function main() {
  const { readFileSync } = await import("node:fs");
  const { PDFParse } = await import("pdf-parse");

  const dataBuffer = readFileSync("./Aryan_Raut_Resume.pdf");
  const parser = new PDFParse({ data: dataBuffer });

  try {
    const data = await parser.getText();
    console.log(data.text);
  } finally {
    await parser.destroy();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
