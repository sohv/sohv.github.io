---
layout: default
title: Research
---

<a href="{{ site.baseurl }}/">{{ site.theme_config.back_home_text }}</a>

<header>
  <h1>{{ page.title | default: site.title }}</h1>
</header>
{% if site.data.home.research_project_entries %}
  <h2>Projects</h2>
  <div class="experience-container">
    {% for project in site.data.home.research_project_entries %}
      <div class="experience-card research-project-card">
        <div class="experience-header">
          {% if project.logo %}
            <img src="{{ project.logo }}" alt="{{ project.title }} logo" class="company-logo">
          {% endif %}
          <div class="experience-title">
            <div class="experience-title-left">
              <h3>{{ project.title }}</h3>
              <h4>{{ project.venue }}</h4>
            </div>
            <div class="research-project-links">
              {% if project.github_url %}
                <a href="{{ project.github_url }}" target="_blank" class="research-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              {% endif %}
              {% if project.doc_url %}
                <a href="{{ project.doc_url }}" target="_blank" class="research-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </a>
              {% endif %}
            </div>
          </div>
        </div>
        <p class="description">{{ project.description }}</p>
      </div>
    {% endfor %}
  </div>
{% endif %}

{% if site.data.home.research_publication_entries %}
  <h2>Publications</h2>
  <div class="experience-container">
    {% for publication in site.data.home.research_publication_entries %}
      <div class="experience-card">
        <div class="experience-header">
          {% if publication.logo %}
            <img src="{{ publication.logo }}" alt="{{ publication.venue }} logo" class="company-logo">
          {% endif %}
          <div class="experience-title">
            <div class="experience-title-left">
              <h3>{{ publication.title }}</h3>
              <h4>{{ publication.venue }}</h4>
            </div>
            <p class="period">{{ publication.year }}</p>
          </div>
        </div>
        <p class="description">{{ publication.description }}</p>
      </div>
    {% endfor %}
  </div>
{% endif %} 