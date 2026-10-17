import os
import re
import json
import urllib.request
import urllib.parse

USERNAME = "Hariprajwal"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
README_PATH = os.path.abspath(os.path.join(SCRIPT_DIR, "..", "README.md"))

CATEGORY_RULES = [
    ("🧠 Autonomous Agents & LLM Architectures", [
        "agent", "llm", "ai", "prompt", "omni", "gpt", "ollama", "research", "rag", "chat"
    ]),
    ("🎙️ Edge Speech, 3D Simulation & Geospatial", [
        "tts", "speech", "audio", "3d", "campus", "cesium", "three", "simulation", "vehicle", "metadrive", "visualizer"
    ]),
    ("🎬 GIF & Media Automation Pipelines", [
        "gif", "video", "youtube", "tenor", "giffy", "giphy", "media"
    ]),
    ("🕉️ Vedic Computing, Lunar Calendars & Astrometry", [
        "ekadashi", "amavasya", "sankashti", "vedic", "krishna", "lunar"
    ]),
    ("⚡ Automation Tools, RPA & Security Watchdogs", [
        "watchdog", "typer", "bot", "crawler", "ocr", "trader", "forwarder"
    ]),
    ("🏆 Hackathons & Real-World Solutions", [
        "hackathon", "hackthon", "sih", "bail", "league", "ishttaa"
    ])
]

FALLBACK_CATEGORY = "🛠️ Developer Platforms, Systems & Open Source"

def fetch_all_repos(username):
    repos = []
    page = 1
    headers = {"User-Agent": "GitHub-Profile-Auto-Updater"}
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"

    while True:
        url = f"https://api.github.com/users/{username}/repos?per_page=100&sort=updated&page={page}"
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            if not data:
                break
            repos.extend(data)
            if len(data) < 100:
                break
            page += 1
    return repos

def categorize_repo(name, desc):
    text = f"{name} {desc}".lower()
    for cat_name, keywords in CATEGORY_RULES:
        for kw in keywords:
            if kw in text:
                return cat_name
    return FALLBACK_CATEGORY

def generate_matrix_markdown(repos):
    total = len(repos)
    categories = {cat[0]: [] for cat in CATEGORY_RULES}
    categories[FALLBACK_CATEGORY] = []

    for r in repos:
        name = r.get("name", "")
        desc = r.get("description") or "Open-source project by Hariprajwal"
        lang = r.get("language") or "Code"
        cat = categorize_repo(name, desc)
        categories[cat].append({
            "name": name,
            "desc": desc.replace("|", "\\|").replace("\n", " ").strip(),
            "lang": lang,
            "url": r.get("html_url", f"https://github.com/{USERNAME}/{name}")
        })

    lines = [
        "<!-- REPOS_TABLE_START -->",
        "<details>",
        f"<summary><b>📂 Explore All {total}+ Public Repositories (Categorized Interactive Directory)</b></summary><br>",
        ""
    ]

    for cat_name, items in categories.items():
        if not items:
            continue
        lines.append(f"#### {cat_name} ({len(items)})")
        lines.append("")
        lines.append("| Repository | Language | Description |")
        lines.append("| :--- | :---: | :--- |")
        for item in items:
            lines.append(f"| [**{item['name']}**]({item['url']}) | `{item['lang']}` | {item['desc']} |")
        lines.append("")

    lines.append("</details>")
    lines.append("<!-- REPOS_TABLE_END -->")
    return "\n".join(lines), total

def update_readme():
    if not os.path.exists(README_PATH):
        print(f"Error: {README_PATH} not found.")
        return

    with open(README_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    print(f"Fetching public repositories for @{USERNAME}...")
    repos = fetch_all_repos(USERNAME)
    total = len(repos)
    print(f"Found {total} public repositories.")

    matrix_md, total_count = generate_matrix_markdown(repos)

    # 1. Update the table block between markers
    table_pattern = re.compile(r"<!-- REPOS_TABLE_START -->.*?<!-- REPOS_TABLE_END -->", re.DOTALL)
    if table_pattern.search(content):
        content = table_pattern.sub(matrix_md, content)
    else:
        details_pattern = re.compile(r"<details>.*?<\/details>", re.DOTALL)
        content = details_pattern.sub(matrix_md, content)

    # 2. Update dynamic numbers throughout the README
    content = re.sub(
        r"REPOSITORIES-\d+%2B%20PUBLIC%20PROJECTS",
        f"REPOSITORIES-{total}%2B%20PUBLIC%20PROJECTS",
        content
    )
    content = re.sub(
        r"TELEMETRY-\d+%2B%20PROJECTS%20ACTIVE",
        f"TELEMETRY-{total}%2B%20PROJECTS%20ACTIVE",
        content
    )
    content = re.sub(
        r"STATUS\s*:\s*🟢\s*OVERCLOCKED\s*\[\d+\+\s*Repos Built\]",
        f"STATUS   : 🟢 OVERCLOCKED [{total}+ Repos Built]",
        content
    )
    content = re.sub(
        r"self\.public_repositories\s*=\s*\d+",
        f"self.public_repositories = {total}",
        content
    )
    content = re.sub(
        r"### 🗂️ All \d+\+ Public Repositories",
        f"### 🗂️ All {total}+ Public Repositories",
        content
    )

    # 3. Update the Typing SVG URL with all 90+ individual repos
    clean_lines = [f"⚡ LIVE RADAR: {total}+ PUBLIC REPOSITORIES [CLICK TO BROWSE]"]
    for i, r in enumerate(repos):
        r_name = r.get("name", "")
        if r_name != USERNAME:
            clean_lines.append(f"[{i+1:02d}/{total}] {r_name}")
    clean_lines.append(f"📂 Click Here To Explore All {total}+ Repositories ↗")

    encoded_lines = ";".join([urllib.parse.quote(line) for line in clean_lines])
    typing_url = f"https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=19&duration=1800&pause=550&color=7AA2F7&center=true&vCenter=true&multiline=false&width=840&height=45&lines={encoded_lines}"

    content = re.sub(
        r'https://readme-typing-svg\.demolab\.com\?[^"]+',
        typing_url,
        content
    )

    with open(README_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    print("README.md successfully updated with all repos & typing animator!")

if __name__ == "__main__":
    update_readme()
