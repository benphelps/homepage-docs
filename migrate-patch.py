import os

def find_and_replace(src_folder, dest_folder):
    for root, _, files in os.walk(src_folder):
        rel_path = os.path.relpath(root, src_folder).replace('en/', '')

        for file in files:
            src_file = os.path.join(root, file)
            dest_file = os.path.join(dest_folder, rel_path, file)

            if os.path.exists(dest_file):
                with open(src_file, 'r') as f1, open(dest_file, 'w') as f2:
                    f2.write(f1.read())

src_folder = "migrate"
dest_folder = "docs"

find_and_replace(src_folder, dest_folder)
