---
layout: page
title: projects
permalink: /projects/
description: A growing collection of my cool projects. * indicates on-going work.
nav: true
nav_order: 3
---

<!-- pages/projects.md -->
<div class="publications">

{% assign sorted_projects = site.projects | sort: "importance" %}

{% for entry in sorted_projects %}
  {% include project_bib.liquid %}
{% endfor %}

</div>
