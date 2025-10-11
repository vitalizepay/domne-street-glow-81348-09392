# Sample Templates

This directory contains sample grouped templates for the DOMINE Design Studio.

## Template Structure

Each template is a collection of grouped elements (text, images, vectors) that can be:
- Inserted as a single group into the canvas
- Ungrouped to edit individual elements
- Individual elements can be extracted and saved to Assets for reuse

## Available Templates

1. **Vintage Badge** - Text-based badge with hierarchy
2. **Mountain Scene** - Illustration with caption
3. **Stacked Typography** - Multiple text layers with decorative icon

## Adding New Templates

To add new templates, edit `src/data/sampleTemplates.ts` and follow the template structure:

```typescript
{
  id: 'unique-id',
  title: 'Template Name',
  thumbnail: '/path/to/thumbnail.png',
  category: 'category-name',
  elements: [
    {
      type: 'group',
      x: 250,
      y: 250,
      children: [
        // Your grouped elements here
      ]
    }
  ]
}
```
