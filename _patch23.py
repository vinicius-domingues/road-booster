import re

with open(r'c:/projects/road-booster/roadmap.html', 'r', encoding='utf-8') as f:
    c = f.read()

# 1) Modify selectTrailItem so it doesn't close the submenu
old_func_str = 'window.selectTrailItem = function(id, type) { trailSubmenuOpen = false; if (type === "roadmap")'
new_func_str = 'window.selectTrailItem = function(id, type) { if (type === "roadmap")'
if old_func_str in c:
    c = c.replace(old_func_str, new_func_str)
    print("PATCH 3 OK - selectTrailItem modified")
else:
    print("PATCH 3 FAIL - selectTrailItem not found")

# 2) Swap the "Notícias" div and modal with the "Roadmap Hero" div
# We need to find the entire <main> block up to the news modal, and rearrange it.
# Let's extract them using regex.
main_pattern = re.compile(
    r'(<main style="margin-left: \$\{sideNavVisible \? 232 : 0\}px; transition: margin-left 0\.2s;">\s*)'
    r'(\$\{activeView === \'roadmap\' \? `\s*<div style="background: linear-gradient.*?</div>\s*</div>` : \'\'\}\s*)'
    r'(<div style="background:#090916;border-bottom:1px solid #1e1e3a;padding:1rem 1\.5rem;display:flex;align-items:center;gap:10px;min-height:64px;">.*?</button>\)\.join\(\'\'\) \+ \'</div>\'\s*}\s*</div>\s*)'
    r'(\$\{activeNewsModal !== null && newsItems\[activeNewsModal\] \? `\s*<div onclick="if\(event\.target===this\)closeNewsModal\(\)".*?</div>\s*</div>\s*</div>` : \'\'\}\s*)',
    re.DOTALL
)

m = main_pattern.search(c)
if m:
    main_start = m.group(1)
    roadmap_hero = m.group(2)
    news_bar = m.group(3)
    news_modal = m.group(4)

    # Reorder: main_start + news_bar + news_modal + roadmap_hero
    new_html = main_start + news_bar + news_modal + roadmap_hero
    
    c = c[:m.start()] + new_html + c[m.end():]
    print("PATCH 2 OK - Divs swapped")
else:
    print("PATCH 2 FAIL - Main pattern not found")

with open(r'c:/projects/road-booster/roadmap.html', 'w', encoding='utf-8') as f:
    f.write(c)

print("Done")
