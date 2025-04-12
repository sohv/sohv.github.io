---
layout: default
title: Blog
permalink: /blog/
---

<h1 class="main-heading">Blog</h1>
<p class="subtitle">All the blog pages in one place.</p>

<div class="blog-container">
  <div class="tag-filters">
    <button class="tag-button active" data-tag="all">All</button>
    <button class="tag-button" data-tag="paper">Paper</button>
    <button class="tag-button" data-tag="tutorial">Tutorial</button>
    <button class="tag-button" data-tag="project">Project</button>
    <button class="tag-button" data-tag="opinion">Opinion</button>
  </div>

  <div class="blog-list">
    {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="blog-card">
      <div class="blog-thumbnail">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32">
          {% if post.tags contains 'paper' %}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          {% elsif post.tags contains 'tutorial' %}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          {% elsif post.tags contains 'project' %}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          {% else %}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          {% endif %}
        </svg>
      </div>
      <div class="blog-content">
        <h3 class="blog-title">{{ post.title }}</h3>
        <div class="blog-tags">
          {% for tag in post.tags %}
          <span class="blog-tag">{{ tag }}</span>
          {% endfor %}
        </div>
      </div>
    </a>
    {% endfor %}
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const tagButtons = document.querySelectorAll('.tag-button');
  const blogCards = document.querySelectorAll('.blog-card');

  tagButtons.forEach(button => {
    button.addEventListener('click', () => {
      tagButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedTag = button.getAttribute('data-tag');
      
      blogCards.forEach(card => {
        if (selectedTag === 'all') {
          card.style.display = 'flex';
        } else {
          const cardTags = Array.from(card.querySelectorAll('.blog-tag'))
            .map(tag => tag.textContent.toLowerCase());
          card.style.display = cardTags.includes(selectedTag) ? 'flex' : 'none';
        }
      });
    });
  });
});
</script> 