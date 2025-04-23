import os

files_to_check = ["data.xml", "transform.xslt", "graphics.svg", "script.js", "index.html", "styles.css"]
results = {file: ("Exists" if os.path.exists(file) else "Missing") for file in files_to_check}
print(results)
