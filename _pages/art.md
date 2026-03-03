---
layout: page
title: art
permalink: /art/
nav: false
nav_order: 9
---

Welcome to my generative art gallery. Click any thumbnail to open the interactive sketch.

<div class="row mt-4">
  {% assign items = site.data.art.items %}
  {% if items and items.size > 0 %}
    {% for art in items %}
      <div class="col-sm-6 col-md-4 mb-4">
        <a href="{{ '/assets/art/' | append: art.slug | append: '/index.html' | relative_url }}" class="d-block" style="text-decoration:none;">
          <img src="{{ art.thumbnail | relative_url }}" alt="{{ art.title }}" class="img-fluid" style="width:100%; height: 180px; object-fit: cover; object-position: center; border-radius: 6px;">
          <div class="mt-2" style="font-weight:600; color:inherit;">{{ art.title }}</div>
        </a>
      </div>
    {% endfor %}
  {% else %}
    <div class="col-12">
      <p>No art pieces listed yet. Add items to <code>_data/art.yml</code>.</p>
    </div>
  {% endif %}
</div>
