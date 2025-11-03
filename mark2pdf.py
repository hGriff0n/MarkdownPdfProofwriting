import subprocess
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('-d', '--doc')
parser.add_argument('-o', '--out')
args = parser.parse_args()

input = 'foo.md'
output = 'foo.pdf'
pandoc_cmd = f'pandoc "{args.doc}" -f markdown --wrap=none -t pdf --pdf-engine=typst -V template=typst.template -o .tmp/{args.out}.pdf'

subprocess.call(pandoc_cmd)