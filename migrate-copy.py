import os
import re
import shutil
import subprocess


def copy_files(src, dest, version):
    src_path = os.path.join(src, version, 'en')

    for subdir, _, files in os.walk(src_path):
        for file in files:
            if file.endswith('.md'):
                new_path = subdir.replace(src_path, dest)
                os.makedirs(new_path, exist_ok=True)
                dest_file_path = os.path.join(new_path, file)

                if not os.path.exists(dest_file_path):
                    shutil.copy2(os.path.join(subdir, file), new_path)
                    fix_content(dest_file_path)


def fix_content(md_file):
    with open(md_file, 'r+') as f:
        content = f.read()
        content = re.sub(r'(\(/en/)', '(/', content)
        content = re.sub(r'layout: .*?\n---', '---\n', content)
        content = re.sub(
            r'[\*_]Added in v[0-9.]+(?:, updated in v[0-9.]+)?[\*_]', '', content)

        f.seek(0)
        f.write(content)
        f.truncate()


def deploy_version(version):
    subprocess.run(['mike', 'deploy', '--branch',
                   'mkdocs-build', '-u', version])


def main():
    src = "migrate"
    dest = "docs"

    # For 'latest'
    copy_files(src, dest, 'latest')
    deploy_version('0.1.0')

    versions = sorted([v for v in os.listdir(src) if v != 'latest'])
    for version in versions:
        copy_files(src, dest, version)
        deploy_version(version)


if __name__ == "__main__":
    main()
