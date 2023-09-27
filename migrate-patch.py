import os
import shutil

src_dir = "docs"
dest_dir = "migrate"

# Traverse the migrate folder to build a lookup map
lookup_map = {}
for root, _, files in os.walk(dest_dir):
    for file in files:
        relative_path = os.path.relpath(root, dest_dir).split(os.sep)
        if 'en' in relative_path:
            index = relative_path.index('en') + 1
            path_after_en = os.path.join(*relative_path[index:], file)
            lookup_map[path_after_en] = os.path.join(root, file)

# Move the files
for root, _, files in os.walk(src_dir):
    for file in files:
        relative_path = os.path.relpath(root, src_dir)
        path_after_en = os.path.join(relative_path, file)
        if path_after_en in lookup_map:
            shutil.copy(os.path.join(root, file), lookup_map[path_after_en])
