# Articles Authoring Guide

This project now discovers article cards dynamically from article route folders.
You do not need to update any data list manually.

## How Discovery Works

The Articles page scans `src/app/articles` and reads each folder that contains `page.mdx`.

For each article it builds a summary from:
1. `slug`: the folder name
2. `title`: `metadata.title` (fallback to the first `# Heading`, then slug-to-title)
3. `publishedAt`: text matching `Published: YYYY-MM-DD`

Cards are sorted by publish date descending (`newest` first).

## Create A New Article

1. Create a new folder in `src/app/articles` using your desired slug.
2. Add `page.mdx` inside that folder.
3. Use the template below.
4. Save and refresh `/articles`.

## Article Template

```mdx
import Button from "@/components/button";

export const metadata = {
    title: "Your Article Title",
};

# Your Article Title

Published: 2026-04-05

Write your thoughts here.

<Button label="Back to Articles" variant="outline" color="primary" href="/articles" />
```

## Slug Rules

- Good: `my-first-article`
- Avoid spaces and uppercase letters
- Prefer short, descriptive names

The URL becomes `/articles/<slug>`.

## Date Rules

Use this exact format so parsing/sorting works correctly:

`Published: YYYY-MM-DD`

Example:

`Published: 2026-04-05`

## LiftKit Components In MDX

You can import and use LiftKit components directly in article MDX:

```mdx
import Card from "@/components/card";
import Text from "@/components/text";

<Card className="p-md">
  <Text tag="p">Inline LiftKit content inside MDX.</Text>
</Card>
```

## Remove Or Hide An Article

- Remove the article from the site: delete its folder.
- Keep a draft without listing it: move draft files outside `src/app/articles` until ready.

## Quick Checklist

- Folder exists at `src/app/articles/<slug>`
- File exists at `src/app/articles/<slug>/page.mdx`
- `metadata.title` is set
- `Published: YYYY-MM-DD` line is present
- Article renders at `/articles/<slug>`
- Card appears on `/articles`
