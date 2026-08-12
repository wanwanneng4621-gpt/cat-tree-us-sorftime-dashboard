# Pet Grooming Arm Public Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a public mobile-first dashboard for the TEMU US pet grooming arm product decision and operating playbook.

**Architecture:** Add a self-contained static dashboard under a new GitHub Pages subpath. The page embeds reviewed snapshot data, uses local assets, and implements two hash-addressable tabs with dependency-free JavaScript.

**Tech Stack:** HTML5, CSS, vanilla JavaScript, Node structural tests, Playwright/Chromium verification, GitHub Pages.

## Global Constraints

- Do not change the existing Cat Tree dashboard or its public URL.
- Keep Product Decision and Operations Playbook in separate tabs.
- Label third-party estimates, samples, proxy trends, internal thresholds, and manual checks.
- Use no remote JavaScript or CSS dependencies.
- Make images non-overlapping at desktop and 390px mobile widths.
- Publish one public HTTPS URL that requires no login.

---

### Task 1: Dashboard Content and Assets

**Files:**
- Create: `pet-grooming-arm-temu-us/index.html`
- Create: `pet-grooming-arm-temu-us/assets/`

**Interfaces:**
- Consumes: the canonical 2026-08-12 Markdown report and its five local images.
- Produces: a static dashboard route with `#decision` and `#operations` states.

- [ ] Copy the five reviewed image assets into the dashboard asset directory.
- [ ] Build the summary, evidence, finance, trend, customer-needs, patent, and action sections.
- [ ] Build the operations tab with bundle roles, listing sequence, traffic plan, launch timeline, and thresholds.
- [ ] Implement accessible hash tabs and mobile-responsive layout.

### Task 2: Structural and Browser Verification

**Files:**
- Create: `pet-grooming-arm-temu-us/dashboard.test.mjs`

**Interfaces:**
- Consumes: `pet-grooming-arm-temu-us/index.html` and local assets.
- Produces: deterministic pass/fail checks for content and asset references.

- [ ] Write tests for the title, both tabs, source caveats, five local assets, external source links, and forbidden remote scripts.
- [ ] Run the Node test and fix all failures.
- [ ] Serve the repository locally.
- [ ] Verify desktop and 390px Chromium views, tab switching, image loading, and horizontal overflow.

### Task 3: Public Deployment

**Files:**
- Modify: Git repository history only.

**Interfaces:**
- Consumes: the verified static dashboard.
- Produces: `https://wanwanneng4621-gpt.github.io/cat-tree-us-sorftime-dashboard/pet-grooming-arm-temu-us/`.

- [ ] Review the final diff and ensure no credentials or unrelated files are included.
- [ ] Commit the dashboard, assets, specification, plan, and tests.
- [ ] Push `main` to the existing GitHub remote.
- [ ] Poll the public URL until it returns 200, then verify the title and asset responses.

