# Platform-Managed Surfaces

This package is the master designer reference for uploaded themes, but not every LaysanX feature is currently implemented as an uploaded HTML template.

## Public Surfaces Covered By This Theme Package

- Homepage and dynamic pages
- Services, products, projects, blogs, news, events, gallery, jobs, FAQs, notifications, pricing, and team pages
- Product collections through `templates/product-list.html`
- Cart, checkout, order lookup, returns, and order success
- Customer account, addresses, orders, wishlist, profile, and change-password

## Public Surfaces Currently Managed By The Platform

These pages are live customer-facing routes, but they are still rendered by platform pages rather than uploaded theme templates:

- Customer login
- Customer register
- Forgot password
- Reset password
- Logout redirect flow

Themes still receive the URLs for these routes through `ecommerce.urls.*`, so designers should style entry points and navigation for them, but not expect local template files in this package.

## Admin And App Features Outside The Theme Package

The following LaysanX features are part of the product, but are not designed through the uploaded-theme package:

- Client admin and internal admin pages
- Billing management and token recharge flows in admin
- AI Website Builder admin
- AI Theme Helper admin
- Knowledge base admin, chat widget admin, transcript logs
- Helpdesk admin
- Plugin install/uninstall admin
- CRM/ERP sync admin configuration
- API access management admin

Designers can still use this reference package to build the public website layer that those modules feed.

## Notes For Commerce/Page Mode Controls

Clients can choose whether commerce pages and customer pages should use:

- their uploaded theme templates, or
- the built-in LaysanX platform pages

This means a designer should still provide complete cart, checkout, order success, and customer account templates, even if a given client later prefers the platform-managed flow.
