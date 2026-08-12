# Pet Grooming Arm TEMU US Public Dashboard Design

## Goal

Publish a public, mobile-first decision dashboard for the two TEMU US pet grooming arm concepts. The dashboard must separate product-selection evidence from operating tactics while preserving the evidence boundaries in the canonical Markdown report.

## Audience and access

- Audience: product development, sourcing, operations, project management, and external collaborators.
- Access: public HTTPS through the existing GitHub Pages repository; no login.
- Snapshot date: 2026-08-12 Beijing time. This is a published snapshot, not a live platform connection.

## Information architecture

The page has two primary tabs:

1. Product Decision
   - Executive decision and score comparison
   - Amazon and TEMU evidence
   - Financial feasibility
   - Seasonality
   - Review pain points and Kano needs
   - Compliance, patent, sample gates, order and stop-loss conditions
2. Operations Playbook
   - Positioning and bundle roles
   - Listing structure and creative sequence
   - Keyword and traffic plan
   - 48-hour, 7-day, 14-day, and 30-day actions
   - Continue, adjust, reorder, and stop thresholds

The default tab is Product Decision. Tab state is reflected in the URL hash for sharing.

## Data and evidence policy

- Amazon metrics are third-party estimates from the user workbook and are labeled accordingly.
- TEMU metrics are a Sorftime snapshot; the dashboard discloses the 15 search calls, three strict-match listings, and the fact that 596 observed monthly units are not total platform capacity.
- Google Trends uses `dog grooming table` as a proxy because exact arm terms are low-volume.
- Review counts are overlapping multi-label topic hits from 47 negative reviews, not unique-user shares.
- Internal thresholds are visually separated from marketplace facts.

## Visual design

- Near-white background, charcoal text, dark blue primary, restrained orange for warnings.
- Cards use compact borders and no gradients.
- Charts use native HTML/CSS bars with direct labels and zero baselines.
- Product images use fixed aspect-ratio containers and `object-fit: contain` to prevent overlap.
- At widths below 720px, all grids become one column, tables become horizontally scrollable, and tab controls remain sticky.

## Files

- `pet-grooming-arm-temu-us/index.html`: complete public dashboard.
- `pet-grooming-arm-temu-us/assets/*.png|jpg`: product and competitor images.
- `pet-grooming-arm-temu-us/dashboard.test.mjs`: structural and content checks.

## Verification and deployment

- Run structural tests with Node.
- Serve locally and verify desktop and 390px mobile layouts in Chromium, including both tabs and all images.
- Commit and push to `main` in the existing GitHub Pages repository.
- Verify the public HTTPS URL returns 200 and contains the dashboard title.

