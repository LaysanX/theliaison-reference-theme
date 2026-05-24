# TheLiaison Master Reference Theme

This package is the official master reference for LaysanX designers building uploaded HTML, CSS, and JavaScript themes. It is meant to show the current uploaded-theme runtime surface area clearly, including website pages, ecommerce flows, product collections, customer account pages, and shared section patterns.

## What This Package Is For

Use this package when a designer needs to:

1. start from a complete LaysanX-compatible theme structure
2. understand which public pages can be themed today
3. keep the required Liquid-like placeholders and objects intact
4. build a custom branded design without touching .NET code

This package is also the design reference used by:

- uploaded custom themes
- AI Website Builder output shape
- AI Theme Helper file targeting

## Quick Workflow

1. Download this reference theme or clone it.
2. Edit HTML in `templates/` and `sections/`.
3. Edit CSS in `assets/css/style.css`.
4. Edit JavaScript in `assets/js/main.js`.
5. Keep the object names, loops, route links, and antiforgery placeholders intact.
6. Zip the theme folder.
7. Upload it in Client Admin > Appearance & Themes.
8. Preview and publish it.

## Reference Docs In This Package

- `docs/feature-coverage.md`: high-level LaysanX feature coverage from the designer point of view
- `docs/template-map.md`: template-to-route map
- `docs/data-objects.md`: available data objects and common placeholders
- `docs/platform-surfaces.md`: public/platform surfaces not currently implemented as uploaded templates
- `docs/design-patterns.md`: visual composition guide for hero, listings, product detail, collections, cart, checkout, and account pages
- `docs/release-notes-v2.0.0.md`: short designer-facing release summary for this master reference upgrade

## Package Structure

```txt
theliaison-reference-theme/
  theme.json
  README.md
  docs/
    feature-coverage.md
    template-map.md
    data-objects.md
    platform-surfaces.md
  templates/
  sections/
  assets/
```

## Current Uploaded-Theme Coverage

This package includes reference templates for:

- Homepage and dynamic pages
- Services, products, projects, blogs, news, events, jobs, gallery, FAQs, notifications, pricing, and team pages
- Product collections through `templates/product-list.html`
- Cart, checkout, order success, order lookup, and returns
- Customer account, addresses, orders, wishlist, profile, and change-password

## Platform Routes Still Outside Uploaded Templates

LaysanX still uses platform-managed pages for some customer auth routes:

- login
- register
- forgot password
- reset password
- logout redirect flow

Those URLs are still exposed to themes through `ecommerce.urls.*`, but they do not currently have local template files in this package.

## Keep These Placeholders

```liquid
{{ site.name }}
{{ site.logo }}
{{ seo.title }}
{{ seo.description }}
{{ settings.primary_color }}
{{ routes.home }}
{{ forms.antiforgery_field }}
{{ 'assets/css/style.css' | asset_url }}
{{ 'assets/js/main.js' | asset_url }}
```

## Example Loops

```liquid
{% for item in menus.header %}
  <a href="{{ item.url }}">{{ item.title }}</a>
{% endfor %}

{% for service in services limit: section_controls.services.count %}
  <article>
    <img src="{{ service.image }}" alt="{{ service.title }}">
    <h3>{{ service.title }}</h3>
    <p>{{ service.short_description }}</p>
    <a href="{{ service.url }}">View More</a>
  </article>
{% endfor %}

{% for product in listing_products %}
  <article>
    <img src="{{ product.image }}" alt="{{ product.title }}">
    <h3>{{ product.title }}</h3>
    <strong>{{ product.primary_price_formatted }}</strong>
  </article>
{% endfor %}
```

## Forms

Do not hard-code dynamic contact form fields. Use the assigned form renderer:

```liquid
{% render 'sections/contact-form.html', form: forms.contact %}
```

For posted forms like cart, checkout, wishlist actions, customer profile, and address forms, keep:

```liquid
{{ forms.antiforgery_field }}
```

## Commerce Notes

- Product listing and collection pages share `templates/product-list.html`.
- Product detail supports product gallery, variants, variant swatches, formatted pricing, compare-at pricing, and related products.
- Currency switching should only be shown when `ecommerce.enabled` is true.
- Clients can choose later whether commerce/account routes use the uploaded theme or LaysanX platform pages, but designers should still build complete theme templates for those surfaces.

## Safe Edits

Designers can freely change:

- layout
- spacing
- typography
- colors
- section composition
- images
- card styles
- interaction styling

Designers should preserve:

- template file names
- section file names
- route variables
- object keys
- loops
- form action URLs
- antiforgery fields

## Repository

```bash
git clone https://github.com/laysanx/theliaison-reference-theme.git
```
