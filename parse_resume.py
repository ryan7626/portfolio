from pypdf import PdfReader
reader = PdfReader("Aryan_Raut_Resume.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"
with open("resume_text.txt", "w") as f:
    f.write(text)
