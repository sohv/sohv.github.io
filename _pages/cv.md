---
layout: page
permalink: /cv/
title: cv
description: Curriculum Vitae
nav: true
nav_order: 4
---
<!-- Video Modal -->
<div id="videoModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 1000; align-items: center; justify-content: center;">
  <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 800px; width: 90%; position: relative; max-height: 90vh; overflow-y: auto;">
    <button onclick="closeVideoModal()" style="position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 28px; cursor: pointer; color: var(--global-text-color);">&times;</button>
    <div style="padding-top: 56.25%; position: relative; margin-bottom: 1rem;">
      <iframe id="youtubePlayer" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 4px;" src="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p id="videoTitle" style="margin: 0; font-weight: bold; color: var(--global-text-color);"></p>
  </div>
</div>

<script>
function openVideoModal(videoId, title) {
  document.getElementById('youtubePlayer').src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  document.getElementById('videoTitle').textContent = title;
  document.getElementById('videoModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  document.getElementById('youtubePlayer').src = '';
  document.getElementById('videoModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.getElementById('videoModal').addEventListener('click', function(e) {
  if (e.target === this) closeVideoModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeVideoModal();
});

function exportCVToPDF() {
  const element = document.getElementById('cvContent');
  const opt = {
    margin: [10, 10, 15, 10],
    filename: 'Sohan_Venkatesh_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, allowTaint: true },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };
  html2pdf().set(opt).from(element).save();
}
</script>

<style>
@media print {
  .cv-section {
    page-break-inside: avoid;
    margin-bottom: 1.5rem !important;
  }
  #exportBtn {
    display: none !important;
  }
  #cvContent {
    max-width: 100% !important;
    width: 100% !important;
    overflow: hidden !important;
  }
  .cv-section {
    box-sizing: border-box !important;
  }
  #achievementsSection {
    page-break-before: always;
    page-break-inside: avoid;
  }
}
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

<!-- Export Button - DISABLED FOR NOW
<div id="exportBtn" style="margin-bottom: 0.8rem; text-align: right;">
  <button onclick="exportCVToPDF()" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.85rem; border-radius: 3px; font-weight: 500; cursor: pointer; transition: background-color 0.2s, color 0.2s;" onmouseover="this.style.backgroundColor='var(--global-theme-color)'; this.style.color='white';" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--global-text-color)';"><i class="fa-solid fa-download" style="margin-right: 0.4rem;"></i>Export</button>
</div>
-->

<!-- Main CV Content -->
<div id="cvContent">

<!-- Personal Info -->
<div style="text-align: center; margin-bottom: 1.5rem;">
  <h1 style="margin: 0 0 0.8rem 0; font-size: 1.8rem;">Sohan Venkatesh</h1>
  <div style="display: flex; gap: 1.5rem; font-size: 0.9rem; color: var(--global-text-color-light); justify-content: center;">
    <a href="mailto:soh.venkatesh@gmail.com" style="color: var(--global-theme-color); text-decoration: none; display: flex; align-items: center; gap: 0.4rem;">
      <i class="fa-solid fa-envelope"></i>Email
    </a>
    <a href="https://github.com/sohv" style="color: var(--global-theme-color); text-decoration: none; display: flex; align-items: center; gap: 0.4rem;">
      <i class="fa-brands fa-github"></i>GitHub
    </a>
    <a href="https://www.linkedin.com/in/sohan-venkatesh/" style="color: var(--global-theme-color); text-decoration: none; display: flex; align-items: center; gap: 0.4rem;">
      <i class="fa-brands fa-linkedin"></i>LinkedIn
    </a>
  </div>
</div>

<!-- Education -->
<div style="border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 0.8rem; margin-bottom: 1rem; background-color: rgba(0,0,0,0.03);" class="cv-section">
<h2 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.3rem;"><i class="fa-solid fa-graduation-cap" style="margin-right: 0.5rem; color: var(--global-theme-color);"></i>Education</h2>

<div style="margin-bottom: 0rem; padding-bottom: 0rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <strong>B.Tech in Computer Science (AI Specialization)</strong>
    <span style="color: var(--global-text-color-light); font-size: 0.85rem;">2022 — 2026</span>
  </div>
  <div style="color: var(--global-text-color-light); font-size: 0.9rem;">Manipal Institute of Technology, Bengaluru</div>
</div>
</div>

<!-- Experience -->
<div style="border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 0.8rem; margin-bottom: 1rem; background-color: rgba(0,0,0,0.03);" class="cv-section">
<h2 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.3rem;"><i class="fa-solid fa-briefcase" style="margin-right: 0.5rem; color: var(--global-theme-color);"></i>Experience</h2>

<div style="margin-bottom: 0.5rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <strong style="font-size: 0.9rem;">Research Intern</strong>
    <span style="color: var(--global-text-color-light); font-size: 0.85rem;">May — Oct 2025</span>
  </div>
  <div style="color: var(--global-text-color-light); font-size: 0.9rem;">IIIT Hyderabad</div>
</div>

<div style="margin-bottom: 0.5rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <strong style="font-size: 0.9rem;">Software Developer</strong>
    <span style="color: var(--global-text-color-light); font-size: 0.85rem;">Sep 2024 - Mar 2025</span>
  </div>
  <div style="color: var(--global-text-color-light); font-size: 0.9rem;">Application Development Cell, MIT-BLR</div>
</div>

<div style="margin-bottom: 0.5rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <strong style="font-size: 0.9rem;">AI Fellow</strong>
    <span style="color: var(--global-text-color-light); font-size: 0.85rem;">Jul - Sep 2024</span>
  </div>
  <div style="color: var(--global-text-color-light); font-size: 0.9rem;">Fellowship.ai</div>
</div>

<div style="margin-bottom: 0rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <strong style="font-size: 0.9rem;">Project Intern</strong>
    <span style="color: var(--global-text-color-light); font-size: 0.85rem;">May - Jul 2024</span>
  </div>
  <div style="color: var(--global-text-color-light); font-size: 0.9rem;">Infosys</div>
</div>
</div>

<!-- Publications -->
<div style="border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 0.8rem; margin-bottom: 1rem; background-color: rgba(0,0,0,0.03);" class="cv-section">
<h2 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.3rem;"><i class="fa-solid fa-book" style="margin-right: 0.5rem; color: var(--global-theme-color);"></i>Publications</h2>

<div style="margin-bottom: 0.8rem; font-size: 0.9rem;">
  <strong>S. Venkatesh</strong>, A. M. Kurapath. "On the Non-Identifiability of Steering Vectors in Large Language Models." <em>ICLR Re-Align Workshop</em>, 2026. <a href="https://arxiv.org/abs/2602.06801" style="color: var(--global-theme-color);">[Paper]</a> <a href="https://github.com/sohv/non-identifiability" style="color: var(--global-theme-color);">[Code]</a> <button onclick="openVideoModal('7_pk2iE5JLo', 'On the Non-Identifiability of Steering Vectors')" style="color: var(--global-theme-color); background: none; border: none; cursor: pointer; padding: 0; font-size: 0.9rem; font-weight: bold;">[Video]</button>
</div>

<div style="margin-bottom: 0; font-size: 0.9rem;">
  <strong>S. Venkatesh</strong>, A. M. Kurapath, T. Melkote. "Large Language Models are Algorithmically Blind." <em>Preprint</em>, 2026. <a href="https://arxiv.org/abs/2602.21947" style="color: var(--global-theme-color);">[Paper]</a> <a href="https://github.com/sohv/algorithmic-blindness" style="color: var(--global-theme-color);">[Code]</a> <button onclick="openVideoModal('OmJK0GK8_MI', 'Large Language Models are Algorithmically Blind')" style="color: var(--global-theme-color); background: none; border: none; cursor: pointer; padding: 0; font-size: 0.9rem; font-weight: bold;">[Video]</button>
</div>
</div>

<!-- Projects -->
<div style="border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 0.8rem; margin-bottom: 1rem; background-color: rgba(0,0,0,0.03);" class="cv-section">
<h2 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.3rem;"><i class="fa-solid fa-code" style="margin-right: 0.5rem; color: var(--global-theme-color);"></i>Projects</h2>

<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>anada</strong> — A lightweight, terminal-first note-taking tool with Markdown support and bi-directional linking. <a href="https://pypi.org/project/anada/" style="color: var(--global-theme-color);">[PyPI]</a>
</div>
<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>mlboardkit</strong> — A library for interpreting and analyzing transformer language models. <a href="https://pypi.org/project/mlboardkit/" style="color: var(--global-theme-color);">[PyPI]</a>
</div>
<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>FusionGraph</strong> — A multimodal RAG system that extracts and links information from text and images into a knowledge graph. <a href="https://github.com/sohv/FusionGraph" style="color: var(--global-theme-color);">[Code]</a>
</div>
<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>QueryMind</strong> — An AI agent for natural language to SQL query translation via MCP. <a href="https://github.com/sohv/QueryMind" style="color: var(--global-theme-color);">[Code]</a>
</div>
<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>MCRAG</strong> — A multi-code review and generation system. <a href="https://github.com/sohv/mcrag" style="color: var(--global-theme-color);">[Code]</a>
</div>
</div>


<!-- Achievements -->
<div id="achievementsSection" style="border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 1.2rem; margin-bottom: 1rem;">
<h2 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.3rem;"><i class="fa-solid fa-trophy" style="margin-right: 0.5rem; color: var(--global-theme-color);"></i>Achievements</h2>

<div style="margin-bottom: 0; font-size: 0.9rem;">
  <ul style="padding-left: 1.2rem; margin-bottom: 0;">
    <li>$1,500 Cohere Labs Catalyst Grant</li>
    <li>AWS AI&ML Scholarship 2026</li>
    <li>Amazon ML Summer School'26</li>
  </ul>
</div>
</div>

<!-- Volunteering -->
<div style="border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 0.8rem; margin-bottom: 1rem; background-color: rgba(0,0,0,0.03);" class="cv-section">
<h2 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.3rem;"><i class="fa-solid fa-hands-helping" style="margin-right: 0.5rem; color: var(--global-theme-color);"></i>Volunteering</h2>

<div style="margin-bottom: 0; font-size: 0.9rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; margin-bottom: 0.4rem;">
  <div>
    <strong>Reviewer</strong> — ICLR Re-Align and CAO Workshops 2026
  </div>
  <span style="color: var(--global-text-color-light); white-space: nowrap;">
    (Feb'26)
  </span>
</div>
</div>
</div>

</div>