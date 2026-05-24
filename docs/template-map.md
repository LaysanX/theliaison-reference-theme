# Template Map

This file maps the uploaded-theme templates in this package to the current LaysanX runtime routes and their main context objects.

## Core Website Templates

| Template | Main Route Pattern | Primary Objects |
| --- | --- | --- |
| `templates/home.html` | `/` | `home`, `site`, `menus`, `marketing_sections`, `auxiliaries`, `section_controls` |
| `templates/page.html` | dynamic pages | `page`, `sections`, `forms`, `assigned_pricing_plan`, `section_controls` |
| `templates/contact.html` | `/contact` | `contact`, `forms.contact`, `site`, `seo` |
| `templates/custom-section-detail.html` | custom section item detail route | `custom_section`, `custom_section_item`, `custom_section_fields` |

## Listings And Detail Pages

| Template | Main Route Pattern | Primary Objects |
| --- | --- | --- |
| `templates/service-list.html` | `/services` | `services`, `section_controls` |
| `templates/service-detail.html` | `/services/{slug}` | `service`, `related_services`, `forms.contact`, `custom_fields`, `feature_blocks` |
| `templates/product-list.html` | `/products`, `/collection/{slug}`, `/collections/{slug}` | `products`, `listing_products`, `collections`, `product_filters`, `currency`, `currencies`, `ecommerce` |
| `templates/product-detail.html` | `/products/{slug}` | `product`, `related_products`, `forms.contact`, `currency`, `ecommerce` |
| `templates/project-list.html` | `/projects` | `projects`, `section_controls` |
| `templates/project-detail.html` | `/projects/{slug}` | `project`, `related_projects`, `forms.contact`, `custom_fields`, `feature_blocks` |
| `templates/blog-list.html` | `/blogs` | `blogs`, `section_controls` |
| `templates/blog-detail.html` | `/blogs/{slug}` | `blog` |
| `templates/news-list.html` | `/news` | `news`, `section_controls` |
| `templates/news-detail.html` | `/news/{slug}` | `news_item` |
| `templates/event-list.html` | `/events` | `events`, `section_controls` |
| `templates/event-detail.html` | `/events/{slug}` | `event` |
| `templates/gallery.html` | `/gallery` | `gallery`, `section_controls` |
| `templates/faq-list.html` | `/faqs` | `faqs`, `section_controls` |
| `templates/job-list.html` | `/jobs` | `jobs`, `section_controls` |
| `templates/job-detail.html` | `/jobs/{slug}` | `job`, `forms.contact` |
| `templates/team-list.html` | `/team` | `team`, `section_controls` |
| `templates/notification-list.html` | `/notifications` | `notifications`, `section_controls` |
| `templates/pricing-list.html` | `/pricing` or pricing landing pages | `pricing_plans`, `currency`, `ecommerce` |

## Commerce Templates

| Template | Main Route Pattern | Primary Objects |
| --- | --- | --- |
| `templates/cart.html` | `/cart` | `cart`, `currency`, `ecommerce`, `forms.antiforgery_field` |
| `templates/checkout.html` | `/checkout` | `checkout`, `currency`, `ecommerce`, `forms.antiforgery_field` |
| `templates/order-success.html` | `/order-success` | `order_success`, `order`, `currency`, `ecommerce` |
| `templates/orders.html` | `/orders` | `order_lookup`, `order`, `sub_orders`, `returns_url`, `forms.antiforgery_field` |
| `templates/returns.html` | `/returns` | `returns`, `forms.antiforgery_field` |

## Customer Templates

| Template | Main Route Pattern | Primary Objects |
| --- | --- | --- |
| `templates/customer-account.html` | `/customer/account` | `customer_account`, `ecommerce.urls` |
| `templates/customer-addresses.html` | `/customer/addresses` | `customer_addresses`, `forms.antiforgery_field`, `ecommerce.urls` |
| `templates/customer-orders.html` | `/customer/orders` | `customer_orders`, `forms.antiforgery_field`, `ecommerce.urls` |
| `templates/customer-wishlist.html` | `/customer/wishlist` | `wishlist`, `forms.antiforgery_field`, `ecommerce.urls` |
| `templates/customer-profile.html` | `/customer/profile` | `customer_profile`, `forms.antiforgery_field`, `ecommerce.urls` |
| `templates/customer-change-password.html` | `/customer/change-password` | `customer_change_password`, `forms.antiforgery_field`, `ecommerce.urls` |

## Shared Sections

- `sections/header.html`: logo, menus, optional topbar, desktop nav, mobile nav trigger, currency position, cart and account entry points.
- `sections/footer.html`: footer navigation, company information, legal links, contact details, social links.
- `sections/hero.html`: homepage hero / banner surface using `home.hero`.
- `sections/contact-form.html`: assigned dynamic form renderer.
- `sections/marketing.html`, `sections/auxiliaries.html`: reusable campaign and trust sections using section controls.
- `sections/products.html`, `sections/services.html`, `sections/projects.html`, `sections/blogs.html`, `sections/news.html`, `sections/events.html`, `sections/gallery.html`, `sections/jobs.html`, `sections/faqs.html`, `sections/team.html`, `sections/notifications.html`: homepage and landing-page blocks.
- `sections/product-gallery.html`, `sections/detail-faqs.html`, `sections/related-products.html`, `sections/related-services.html`, `sections/related-projects.html`: detail-page supporting modules.

## Platform-Managed But Theme-Aware URLs

These URLs are passed into context through `ecommerce.urls`, even though they do not currently map to uploaded theme templates in this package:

- `ecommerce.urls.login`
- `ecommerce.urls.register`
- `ecommerce.urls.forgot_password`
- `ecommerce.urls.reset_password`
- `ecommerce.urls.logout`
