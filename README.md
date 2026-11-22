## TechPulse - daily tech news
# TechPulse is a fast, clean tech news site for tech news
# We cover AI, Cyber-Security, Smartphones, Chips and StartUps.

## (Previous Version)
- All news on homepage
- click to expand on homepage

## What's New in This Upgraded Version
- Each article opens on its own page
- Professional Structure
- Search + Category & Region Filter
- Responsive and Interactive design
- Contains About and Contact Me Page
- Cleans Cards - Title, image.
- Article Page has Sidebar beside to show more recent news.

## How it Works
1. Homepage (`index.html`) shows only summary: `title`, `image`, `category`
2. When User clicks a card, we go to: `article.html?id=1`
3. `article.html reads the `id`, finds that one story from the `arbitage.js` and shows the full body.

## How to Run Locally
1. Download/ Clone this repo
2. Open Folder in Vs Code
3. Right-click `index.html` -> Open with Live Server

## How to Add New Article
- Go to `arbitage.js`, add new object:
- {
  id:
  title:
  category:
  image:
  body:
  }


