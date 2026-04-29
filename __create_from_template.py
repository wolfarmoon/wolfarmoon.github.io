import os

import shutil
import re


print("*** wolfarmoon's template utility ***\n")

page_name = input("page name ('<name>' or '<path>/<name>'): ")
page_name = res = re.sub(r'[^a-zA-Z0-9]', '', page_name)
page_name = page_name.rsplit(".", 1)[0]

if page_name == "":
    raise ValueError("String is empty or null.")

print(page_name)

page = shutil.copy2("/template", page_name)

