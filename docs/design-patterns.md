# Design Patterns And Naming Guide

This document helps designers translate LaysanX runtime features into clean, reusable visual systems. Use it as the naming and composition guide when creating a custom uploaded theme from this master reference.

## General Design Principles

- Treat templates as page shells and sections as reusable design blocks.
- Keep one strong visual system across cards, buttons, forms, badges, tabs, filters, and empty states.
- Preserve semantic structure and data hooks even if the layout changes completely.
- Prefer predictable spacing and repeatable block patterns over one-off page styling.

## Recommended Section Naming

Use clear, reusable names in your own design files and internal notes:

- `hero`
- `intro`
- `stats`
- `feature-grid`
- `logo-strip`
- `testimonial-grid`
- `cta-band`
- `listing-toolbar`
- `listing-grid`
- `detail-gallery`
- `detail-summary`
- `detail-meta`
- `detail-faq`
- `related-grid`
- `account-shell`
- `checkout-shell`

This maps well to the LaysanX template and section structure and makes AI-assisted edits easier later.

## Header And Navigation

The header should be designed as three possible layers:

1. topbar
2. primary header / brand row
3. navigation / dropdown system

Recommended visual parts:

- brand/logo area
- primary menu
- optional CTA
- cart icon
- profile / account entry
- currency switcher when ecommerce is enabled
- mobile menu trigger

Keep dropdowns structurally nested. Mobile submenus should be hidden by default and opened on click/tap, not expanded all the time.

## Homepage Pattern

The homepage usually works best with this order:

1. hero
2. trust / logo strip
3. service or product highlight
4. supporting marketing blocks
5. testimonials / proof
6. CTA
7. footer

The actual order is controlled by `home.section_order`, so designers can change the visual structure while keeping the same runtime concept.

## Listing Page Pattern

For services, products, projects, blogs, news, events, jobs, and team listings, keep a consistent listing architecture:

1. page intro / heading
2. optional toolbar
3. filter rail or filter modal
4. card grid
5. empty state or no-result state

For product and collection pages specifically:

- desktop/tablet: filters on the left, products on the right
- mobile: full-screen filter drawer or modal
- sort and search should feel part of the listing toolbar

## Product Card Pattern

Product cards should be designed with a stable internal structure:

1. media
2. title
3. optional category / brand / badge
4. price block
5. optional swatches
6. primary action
7. wishlist action

Recommended states:

- normal
- hover
- out of stock
- sale / compare-at price
- with swatches
- with variants requiring “Choose Options”

## Product Detail Pattern

Product detail pages should be designed as a proper ecommerce detail surface, not a simple content page.

Recommended structure:

1. gallery or media column
2. product summary column
3. price and inventory area
4. variant swatches and selectors
5. quantity and actions
6. support / trust snippets
7. below-the-fold rich content
8. FAQs
9. related products

Current runtime supports multiple product detail layout modes, so keep the component system adaptable:

- gallery left, content right
- full-width image area with content below
- image right, content left

## Collection And Filter Pattern

Collections reuse the product listing template, so they should share the same design system as product listings.

Filter visuals should support:

- category tree
- nested categories
- attribute filters like color and size
- active filter chips
- clear/remove flows
- auto-apply interaction

Use consistent naming for these visual parts:

- `facet-panel`
- `facet-group`
- `facet-option`
- `active-filters`
- `sort-control`
- `filter-drawer`

## Cart Pattern

Cart design should support both:

- cart drawer
- full cart page

Recommended parts:

- cart line list
- quantity controls
- remove action
- coupon area
- subtotal / totals box
- checkout CTA

Keep quantity controls compact and consistent with the rest of the visual system.

## Checkout Pattern

Checkout should feel cleaner and more task-focused than the rest of the website, while still matching brand identity.

Recommended structure:

1. brand header
2. customer information
3. address selection / address form
4. shipping / billing grouping
5. promo code section
6. payment method area
7. summary sidebar or summary block
8. final place-order CTA

Important design states to support:

- saved addresses
- guest checkout
- logged-in checkout
- auto-applied promo with removable coupon
- COD fee state
- loading / submitting state

## Order Success Pattern

The order success page should feel reassuring and complete.

Recommended blocks:

- success message
- order number
- summary card
- billing/shipping overview
- next actions
- continue shopping / view orders CTA

## Customer Account Pattern

All customer pages should share one shell:

1. sidebar or persistent account nav
2. main content area
3. top utility actions where needed

Recommended menu items:

- dashboard
- orders
- wishlist
- addresses
- profile
- change password
- logout

Designers should keep these pages visually related so the account area feels like one product, not disconnected pages.

## Address Management Pattern

Address pages should support:

- list view
- add form
- edit form
- default markers
- delete action

Design the address card to handle both compact and detailed layouts.

## Order History Pattern

Order history should support:

- summary rows or cards
- status badge
- totals
- line items or expandable detail
- reorder action
- returns link

Keep statuses visually distinct and easy to scan.

## Forms And Empty States

All forms across contact, checkout, account, and address surfaces should share:

- consistent label spacing
- input radius
- helper/error text styling
- primary and secondary action styles

All empty states should include:

- clear heading
- one short explanation
- one obvious next action

## Utility Class Direction

You do not have to use these exact class names, but keeping a predictable structure helps future designers and AI tooling.

Suggested naming style:

- `page-shell`
- `page-header`
- `section-header`
- `card-grid`
- `info-card`
- `summary-card`
- `action-row`
- `meta-list`
- `status-badge`
- `empty-state`
- `filter-rail`
- `drawer-panel`

## AI Helper Compatibility

The AI Theme Helper performs better when the theme uses predictable structural naming and stable template responsibilities.

To make future AI edits safer:

- keep header logic in `sections/header.html`
- keep footer logic in `sections/footer.html`
- keep shared styling in `assets/css/style.css`
- keep menu/cart/interactive logic in `assets/js/main.js`
- avoid moving unrelated page logic into random files
