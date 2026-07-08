# Portal Database Schema Notes

The site uses `portal-database.js` as a lightweight database. This keeps the portal GitHub Pages friendly and easy to maintain.

## Recommended update workflow

1. After each Meet & Confer meeting, update `priorities`.
2. At the end of each year, update `historicalYears` with outcomes.
3. After budget updates, update `budget` and `affordability`.
4. When documents are added, update `documents`.
5. Commit changes to GitHub.

## Collections

### `meta`
Feeds the homepage status card.

### `budget`
Feeds FY budget cards, finance chart, and “Can We Afford It?” framing.

Recommended fields:

- `id`
- `label`
- `value`
- `type`
- `note`
- `canSupport`

### `priorities`
Feeds the proposal tracker, search, status chart, and category chart.

Recommended fields:

- `id`
- `topic`
- `category`
- `priority`
- `year`
- `status`
- `fiscalType`
- `outcome`
- `notes`

Suggested statuses:

- `Open`
- `In Discussion`
- `Needs Update`
- `Recommended`
- `Board Approved`
- `Not Advanced`
- `Archived`

### `historicalYears`
Feeds the year-by-year history section and historical priority chart.

Recommended fields:

- `year`
- `title`
- `outcomeStatus`
- `summary`
- `priorities`
- `documents`

### `documents`
Feeds the document library and global search.

Recommended fields:

- `title`
- `category`
- `use`
- `url`

### `financeTerms`, `law`, `benefits`, `comparisons`
Feed the global search and reference areas.

## Future upgrade path

This file can later be replaced with:

- Google Sheets published as JSON
- Airtable API
- Supabase
- Firebase
- GitHub-hosted JSON files edited through Decap CMS

For now, the JavaScript database is the lowest-friction version.
