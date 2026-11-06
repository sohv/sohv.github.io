---
layout: default
permalink: /blog/
title: blog
description: thoughts, tutorials, and musings
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="rd-blog">
  <h1>Blog</h1>
  <p class="sub">Research notes and papers. New writing goes to <a href="https://sohanvenkatesh.substack.com">Substack</a>.</p>

  {% if page.pagination.enabled %}
    {% assign postlist = paginator.posts %}
  {% else %}
    {% assign postlist = site.posts %}
  {% endif %}

  {% assign last_month = '' %}
  {% for post in postlist %}
    {% assign month = post.date | date: '%B %Y' %}
    {% if month != last_month %}
      <h3 class="rd-month">{{ month }}</h3>
      {% assign last_month = month %}
    {% endif %}

    {% if post.redirect == blank %}
      {% assign href = post.url | relative_url %}
    {% elsif post.redirect contains '://' %}
      {% assign href = post.redirect %}
    {% else %}
      {% assign href = post.redirect | relative_url %}
    {% endif %}

    <a class="rd-entry paper" href="{{ href }}">
      <span class="t">{{ post.title }}</span>
      {% if post.byline %}<span class="by">{{ post.byline }}</span>{% endif %}
      <span class="d">{{ post.description }}{% if post.external_label %} <span class="rd-ext">{{ post.external_label }} ↗</span>{% endif %}</span>
    </a>
  {% endfor %}

  {% if page.pagination.enabled %}
    {% include pagination.liquid %}
  {% endif %}
</div>
