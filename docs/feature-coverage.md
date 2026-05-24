# LaysanX Feature Coverage

This reference theme is the master handoff package for designers building uploaded HTML, CSS, and JavaScript themes for LaysanX. It covers the current uploaded-theme runtime surfaces and documents where the platform still uses built-in pages instead of uploaded templates.

## Website And CMS Surfaces

- Dynamic pages use `templates/page.html` and can render assigned sections, forms, pricing plans, custom content, and SEO data.
- The homepage uses `templates/home.html` and `home.section_order` to show built-in sections, dynamic marketing sections, auxiliary sections, and custom HTML blocks.
- Header, topbar, footer, menus, site identity, contact details, and social links are available through `sections/header.html`, `sections/footer.html`, and the `site`, `menus`, and `routes` objects.
- Dynamic forms should be rendered through `sections/contact-form.html` and the `forms.contact` object instead of hard-coded inputs.

## Content Modules

- Service, product, project, blog, news, event, gallery, FAQ, job, team, notification, and pricing-plan listing/detail flows are all represented in the `templates/` folder.
- Marketing and trust-building modules are represented through reusable section partials such as `sections/marketing.html`, `sections/testimonials.html`, `sections/clients.html`, `sections/partners.html`, `sections/trust-badges.html`, and `sections/auxiliaries.html`.
- Dynamic custom section detail pages use `templates/custom-section-detail.html` with `custom_section`, `custom_section_item`, and `custom_section_fields`.

## Ecommerce And Storefront Surfaces

- Product listing pages and collection pages both use `templates/product-list.html`; collection filtering is driven by the `collections`, `listing_products`, and `product_filters` objects.
- Product detail uses `templates/product-detail.html` and supports product gallery, variant swatches, attributes, price states, inventory-aware purchase states, FAQ content, related products, and assigned contact form areas.
- Cart, checkout, order lookup, returns, and order-success pages are covered with dedicated templates in this package.
- Customer account pages for dashboard, addresses, orders, wishlist, profile, and change-password are also covered with dedicated templates.
- Currency switching is available when ecommerce is enabled, using the `currency` and `currencies` objects.

## Theme Settings And Layout Modes

- Core brand settings are surfaced through `settings`, including colors, typography, header behavior, slider mode, and product-detail layout mode.
- Product detail layout mode is available as `settings.product_detail_layout_type` and `ecommerce.product_detail_layout_type`.
- Menu depth, dropdowns, and mobile interactions are handled in the theme layer, so designers should keep semantic navigation structure and data attributes intact.

## AI And Theme Editing Compatibility

- This package is also the reference shape for AI Theme Helper and AI Website Builder output. Designers should keep file names, section names, and template responsibilities stable so those tools can continue to target the right surfaces.
- Uploaded themes can later choose whether commerce and customer pages use the client theme or LaysanX platform pages. Designers should still provide full commerce/account visuals in this package so clients have the choice.

## What This Package Does Not Cover As Uploaded Templates

- Customer login, customer registration, forgot-password, reset-password, and logout are currently platform-managed routes, not uploaded-theme templates.
- Client admin, billing admin, plugin admin, and other back-office modules are not themed through this package.
- AI dashboards, knowledge-base admin, helpdesk admin, and CRM/ERP admin integrations are platform surfaces; this package only documents the public/front-facing theme layer they interact with.
