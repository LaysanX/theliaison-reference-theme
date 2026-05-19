# TheLiaison Reference Theme

This package is the official LaysanX starter theme for designers. It is normal HTML, CSS, and JavaScript with Liquid-style placeholders for dynamic website data.

## Designer Workflow

1. Download this reference theme or clone it from Git.
2. Edit normal HTML, CSS, and JavaScript.
3. Keep the required placeholders and loops.
4. Zip the theme folder.
5. Upload it in Client Admin theme customization.
6. Preview it.
7. Publish it.

## Clone From Git

```bash
git clone https://github.com/laysanx/theliaison-reference-theme.git
```

Public repository:

`https://github.com/laysanx/theliaison-reference-theme`

## What Designers Can Edit

- HTML templates in `templates/`
- Reusable HTML blocks in `sections/`
- CSS in `assets/css/`
- JavaScript in `assets/js/`
- Images, fonts, and icons in `assets/images/`

## What Is Not Allowed

- `.cshtml`, `.cs`, `.dll`, `.exe`, `.php`, `.py`, `.sh`
- Server-side code
- Absolute server paths
- External scripts that collect sensitive user data without consent

## Required Placeholders

Keep these placeholders when creating a theme:

```liquid
{{ site.name }}
{{ site.logo }}
{{ page.title }}
{{ page.content }}
{{ settings.primary_color }}
{{ asset_url: 'assets/css/style.css' }}
```

Use loops for repeated content:

```liquid
{% for service in services %}
  <article>
    <img src="{{ service.image }}" alt="{{ service.title }}">
    <h3>{{ service.title }}</h3>
    <p>{{ service.short_description }}</p>
    <a href="{{ service.url }}">View More</a>
  </article>
{% endfor %}
```

## Required Templates

- `templates/home.html`
- `templates/page.html`
- `templates/contact.html`
- `templates/service-list.html`
- `templates/service-detail.html`
- `templates/product-list.html`
- `templates/product-detail.html`
- `templates/project-list.html`
- `templates/project-detail.html`
- `templates/blog-list.html`
- `templates/blog-detail.html`
- `templates/news-list.html`
- `templates/news-detail.html`
- `templates/notification-list.html`
- `templates/event-list.html`
- `templates/event-detail.html`
- `templates/gallery.html`
- `templates/faq-list.html`
- `templates/pricing-list.html`
- `templates/job-list.html`
- `templates/job-detail.html`
- `templates/team-list.html`
- `templates/custom-section-detail.html`

## Common Data Objects

- `site`: logo, name, tagline, social links, contact details, footer text
- `menus`: header and footer navigation
- `page`: current page title, content, image, SEO metadata
- `services`, `products`, `projects`, `blogs`, `news`, `events`, `jobs`: public content lists
- `notifications`, `pricing_plans`, `team`, `testimonials`, `gallery`, `faqs`, `partners`, `clients`: reusable website modules
- `marketing_sections`, `trust_badges`, `auxiliaries`: marketing and auxiliary website modules
- `service.faqs`, `product.faqs`, `product.gallery`, `related_services`, `related_products`, `related_projects`: detail-page modules
- `custom_section`, `custom_section_item`, `custom_section_fields`: custom section detail pages
- `forms`: assigned dynamic forms
- `section_controls`: per-page columns, rows, item count, and sort order

## Form Rendering

Use the assigned form object instead of hard-coding fields:

```liquid
{% render 'sections/contact-form.html', form: forms.contact %}
```

The platform will render fields, required markers, captcha, and submit button text.
