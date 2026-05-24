# TheLiaison Reference Theme v2.0.0

This release upgrades the TheLiaison reference theme from a starter package into the master designer reference for the current LaysanX uploaded-theme runtime.

## Highlights

- Added full commerce and customer account template coverage
- Added structured designer documentation
- Cleaned the package for handoff and download use
- Updated theme manifest to reflect the real runtime surface

## New Template Coverage

This version now includes reference templates for:

- Cart
- Checkout
- Order Success
- Order Lookup
- Returns
- Customer Account
- Customer Addresses
- Customer Orders
- Customer Wishlist
- Customer Profile
- Customer Change Password

It continues to include the core public website templates for:

- Home
- Dynamic Pages
- Services
- Products
- Projects
- Blogs
- News
- Notifications
- Events
- Gallery
- FAQs
- Pricing
- Jobs
- Team
- Custom Section Detail

## New Documentation

Added:

- `docs/feature-coverage.md`
- `docs/template-map.md`
- `docs/data-objects.md`
- `docs/platform-surfaces.md`
- `docs/design-patterns.md`
- `docs/release-notes-v2.0.0.md`

These docs help designers understand:

- what is themeable today
- which runtime objects are available
- how templates map to routes
- which customer auth pages are still platform-managed
- how to structure design patterns for listings, collections, product detail, cart, checkout, and account pages

## Cleanup

Removed repository-only clutter from the handoff package, including:

- embedded git metadata
- local junk files
- outdated starter-only repo files

The downloadable ZIP has been rebuilt from the cleaned source.

## Notes

This package is the master reference for the **uploaded-theme runtime** in LaysanX. Some public auth-related routes such as login, register, forgot password, and reset password are still platform-managed and are documented as such in `docs/platform-surfaces.md`.

## Recommended Use

Use this version as the base reference for:

- designer handoff
- industry-specific custom themes
- uploaded HTML/CSS/JS theme development
- AI Website Builder output alignment
- AI Theme Helper targeting alignment
