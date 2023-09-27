import os
import shutil
import re

source_root = 'src/pages/'
destination_root = 'migrate/'

for root, _, files in os.walk(source_root):
    for file in files:
        if file.endswith('.md'):
            filepath = os.path.join(root, file)
            version = 'latest'  # Default to 'latest'
            with open(filepath, 'r') as f:
                lines = f.readlines()
                for line in lines:
                    match = re.search(r"\*Added in v([\d\.]+)", line)
                    if match:
                        version = match.group(1)
                        break  # Exit loop once initial version is found

            rel_path = os.path.relpath(root, source_root)
            new_dir = os.path.join(destination_root, version, rel_path)
            new_path = os.path.join(new_dir, file)

            os.makedirs(new_dir, exist_ok=True)
            shutil.copy(filepath, new_path)

            print(f"Copied {filepath} to {new_path}")
