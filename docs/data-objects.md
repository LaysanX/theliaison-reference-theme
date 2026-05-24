# Data Objects And Placeholder Guide

Use this file as the design-system level reference for the data objects exposed to uploaded themes.

## Site And Global Objects

```liquid
{{ site.name }}
{{ site.logo }}
{{ site.email }}
{{ site.phone }}
{{ site.address }}
{{ site.hours }}
{{ site.tagline }}
{{ site.footer.about }}
{{ site.footer.copyright }}
{{ site.topbar.enabled }}
{{ site.topbar.left_html }}
{{ site.topbar.right_html }}
```

```liquid
{{ settings.primary_color }}
{{ settings.secondary_color }}
{{ settings.button_radius }}
{{ settings.body_font_family }}
{{ settings.heading_font_family }}
{{ settings.body_font_size }}
{{ settings.heading_font_size }}
{{ settings.subheading_font_size }}
{{ settings.header_layout_type }}
{{ settings.header_transparent_on_hero }}
{{ settings.header_sticky }}
{{ settings.header_cta_text }}
{{ settings.header_cta_url }}
{{ settings.slider_layout_type }}
{{ settings.product_detail_layout_type }}
```

```liquid
{{ routes.home }}
{{ routes.contact }}
{{ routes.services }}
{{ routes.products }}
{{ routes.projects }}
{{ routes.blogs }}
{{ routes.current }}
```

## Menus

```liquid
{% for item in menus.header %}
  <a href="{{ item.url }}">{{ item.title }}</a>
  {% if item.children.size > 0 %}
    {% for child in item.children %}
      <a href="{{ child.url }}">{{ child.title }}</a>
    {% endfor %}
  {% endif %}
{% endfor %}
```

`menus.header` and `menus.footer` are already resolved into a tree. Designers should not flatten them if dropdowns or nested menus are needed.

## SEO

```liquid
{{ seo.title }}
{{ seo.description }}
{{ seo.keywords }}
{{ seo.image }}
{{ seo.canonical_url }}
```

## Content Collections

```liquid
{{ services.size }}
{{ products.size }}
{{ projects.size }}
{{ blogs.size }}
{{ news.size }}
{{ notifications.size }}
{{ events.size }}
{{ gallery.size }}
{{ faqs.size }}
{{ jobs.size }}
{{ pricing_plans.size }}
{{ team.size }}
{{ testimonials.size }}
{{ clients.size }}
{{ partners.size }}
{{ trust_badges.size }}
{{ auxiliaries.size }}
{{ collections.size }}
{{ marketing_sections.size }}
{{ dynamic_sections.size }}
```

Each item exposes card-friendly fields such as `title`, `description` or `short_description`, `image`, and `url`. Product and pricing objects also expose formatted pricing fields for frontend display.

## Product Listing And Collection Filtering

```liquid
{{ product_filters.search_term }}
{{ product_filters.sort_option }}
{{ product_filters.total_count }}
{{ product_filters.has_active_filters }}
```

`product_filters` also contains category tree, attribute facets, active facet values, and other storefront filter helpers. Collection pages reuse `templates/product-list.html`; there is no separate collection-detail template today.

## Ecommerce

```liquid
{{ ecommerce.enabled }}
{{ ecommerce.cart_count }}
{{ ecommerce.cart_total }}
{{ ecommerce.signed_in }}
{{ ecommerce.customer_name }}
{{ ecommerce.product_detail_layout_type }}
```

```liquid
{{ ecommerce.urls.cart }}
{{ ecommerce.urls.checkout }}
{{ ecommerce.urls.orders }}
{{ ecommerce.urls.returns }}
{{ ecommerce.urls.account }}
{{ ecommerce.urls.addresses }}
{{ ecommerce.urls.customer_orders }}
{{ ecommerce.urls.wishlist }}
{{ ecommerce.urls.profile }}
{{ ecommerce.urls.change_password }}
{{ ecommerce.urls.login }}
{{ ecommerce.urls.register }}
{{ ecommerce.urls.forgot_password }}
{{ ecommerce.urls.reset_password }}
{{ ecommerce.urls.logout }}
{{ ecommerce.urls.cart_add }}
{{ ecommerce.urls.cart_update }}
{{ ecommerce.urls.cart_remove }}
```

## Currency

```liquid
{{ currency.code }}
{{ currency.name }}
{{ currency.symbol }}
{{ currency.switch_url }}
```

```liquid
{% if ecommerce.enabled and currencies.size > 0 %}
  <form method="post" action="{{ currency.switch_url }}">
    <input type="hidden" name="returnUrl" value="{{ routes.current }}">
    <select name="currencyCode" onchange="this.form.submit()">
      {% for item in currencies %}
        <option value="{{ item.code }}" {% if currency.code == item.code %}selected{% endif %}>
          {{ item.symbol }} {{ item.code }}
        </option>
      {% endfor %}
    </select>
  </form>
{% endif %}
```

## Forms

```liquid
{{ forms.antiforgery_field }}
{{ forms.antiforgery_token }}
```

```liquid
{% render 'sections/contact-form.html', form: forms.contact %}
```

For uploaded theme forms that post back into LaysanX, keep `forms.antiforgery_field` in the form.

## Detail Objects

- `service`, `product`, `project`, `blog`, `news_item`, `event`, and `job` represent the active detail page item.
- `related_services`, `related_products`, and `related_projects` provide card-ready related content.
- `custom_fields` and `feature_blocks` provide industry/plugin-driven detail data.
- `custom_fields_by_key` and `custom_section_fields_by_key` are useful when a theme needs named field lookup instead of simple iteration.

## Section Controls

`section_controls` provides designer-facing control values such as visible column count, item count, and activation for list-style sections. Use these values when setting grid modifiers, limits, and responsive counts.

Example:

```liquid
<div class="card-grid columns-{{ section_controls.products.columns | default: 3 }}">
  {% for product in products limit: section_controls.products.count %}
    ...
  {% endfor %}
</div>
```
