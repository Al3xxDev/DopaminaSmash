import re
import os

def minify_css(css_content):
    # Remove comments /* ... */
    css = re.sub(r'/\*.*?\*/', '', css_content, flags=re.DOTALL)
    # Remove whitespace around { } : ; ,
    css = re.sub(r'\s*([\{\};:\,])\s*', r'\1', css)
    # Replace multiple spaces/newlines with a single space
    css = re.sub(r'\s+', ' ', css)
    return css.strip()

def minify_js(js_content):
    # Safe regex to match strings, regexes, and comments in JS
    pattern = re.compile(
        r'(?P<double_string>"[^"\\]*(?:\\.[^"\\]*)*")|'
        r'(?P<single_string>\'[^\'\\]*(?:\\.[^\'\\]*)*\')|'
        r'(?P<template_string>`[^`\\]*(?:\\.[^`\\]*)*`)|'
        r'(?P<regex_literal>/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+/)|'
        r'(?P<multi_comment>/\*.*?\*/)|'
        r'(?P<single_comment>//.*?$)',
        re.DOTALL | re.MULTILINE
    )
    
    def replace(match):
        d = match.groupdict()
        if d['multi_comment'] or d['single_comment']:
            return '' # strip comments
        return match.group(0) # keep strings, regexes as is
        
    js = pattern.sub(replace, js_content)
    
    # Process line by line to strip trailing whitespace and skip empty lines
    lines = []
    for line in js.splitlines():
        stripped = line.strip()
        if stripped:
            lines.append(stripped)
            
    return '\n'.join(lines)

def main():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    css_src = os.path.join(root_dir, 'index.css')
    css_min = os.path.join(root_dir, 'index.min.css')
    js_src = os.path.join(root_dir, 'index.js')
    js_min = os.path.join(root_dir, 'index.min.js')
    
    # Minify CSS
    if os.path.exists(css_src):
        print("Minifying index.css...")
        with open(css_src, 'r', encoding='utf-8') as f:
            content = f.read()
        minified = minify_css(content)
        with open(css_min, 'w', encoding='utf-8') as f:
            f.write(minified)
        print(f"Saved: index.min.css ({len(content)} -> {len(minified)} bytes)")
    else:
        print("index.css not found!")
        
    # Minify JS
    if os.path.exists(js_src):
        print("Minifying index.js...")
        with open(js_src, 'r', encoding='utf-8') as f:
            content = f.read()
        minified = minify_js(content)
        with open(js_min, 'w', encoding='utf-8') as f:
            f.write(minified)
        print(f"Saved: index.min.js ({len(content)} -> {len(minified)} bytes)")
    else:
        print("index.js not found!")

if __name__ == '__main__':
    main()
