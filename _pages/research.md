---
layout: page
permalink: /research/
title: research
description: research projects and publications
nav: true
nav_order: 2
---

<!-- _pages/research.md -->

## Research Projects

<div class="publications">

{% assign sorted_research = site.research | sort: "importance" %}

{% for entry in sorted_research %}
  {% include research_project.liquid %}
{% endfor %}

</div>

---

## Publications

<div class="publications">
  <p style="text-align: center; color: #888; font-style: italic;">Publications will be updated here</p>
</div>
