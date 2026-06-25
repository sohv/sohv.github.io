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

<!-- PDF Modal -->
<div id="pdfModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 1000; align-items: center; justify-content: center;">
  <div style="background: white; padding: 1rem; border-radius: 8px; max-width: 900px; width: 92%; height: 90vh; position: relative; display: flex; flex-direction: column; gap: 0.75rem; box-sizing: border-box; overflow: hidden;">
    <button onclick="closePdfModal()" style="position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 28px; cursor: pointer; color: var(--global-text-color);">&times;</button>
    <p id="pdfTitle" style="margin: 0 2rem 0 0; font-weight: bold; color: var(--global-text-color);"></p>
    <div style="flex: 1; min-height: 0; overflow: hidden;">
      <iframe id="pdfFrame" style="width: 100%; height: 100%; border: none; border-radius: 4px;" src=""></iframe>
    </div>
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

function openPdfModal(pdfUrl, title) {
  document.getElementById('pdfFrame').src = pdfUrl;
  document.getElementById('pdfTitle').textContent = title;
  document.getElementById('pdfModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePdfModal() {
  document.getElementById('pdfFrame').src = '';
  document.getElementById('pdfModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.getElementById('videoModal').addEventListener('click', function(e) {
  if (e.target === this) closeVideoModal();
});

document.getElementById('pdfModal').addEventListener('click', function(e) {
  if (e.target === this) closePdfModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeVideoModal();
    closePdfModal();
  }
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
  #pdfModal > div {
    height: 90vh;
    overflow: hidden;
  }

  #pdfModal iframe {
    display: block;
  }

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
  #rejectionsSection {
    display: none !important;
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

<div style="margin-bottom: 0.6rem; padding-bottom: 0rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <strong>MSc in Machine Learning*</strong>
    <span style="color: var(--global-text-color-light); font-size: 0.85rem;">Oct 2026 —</span>
  </div>
  <div style="color: var(--global-text-color-light); font-size: 0.9rem;">University of Tübingen</div>
</div>

<div style="margin-bottom: 0rem; padding-bottom: 0rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <strong>B.Tech in Computer Science (AI Specialization)</strong>
    <span style="color: var(--global-text-color-light); font-size: 0.85rem;">2022 — 2026</span>
  </div>
  <div style="color: var(--global-text-color-light); font-size: 0.9rem;">Manipal Institute of Technology, Bengaluru</div>
</div>

<p style="margin: 0.6rem 0 0 0; font-size: 0.8rem; color: var(--global-text-color-light);">* Upcoming</p>
</div>

<!-- Experience -->
<div style="border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 0.8rem; margin-bottom: 1rem; background-color: rgba(0,0,0,0.03);" class="cv-section">
<h2 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.3rem;"><i class="fa-solid fa-briefcase" style="margin-right: 0.5rem; color: var(--global-theme-color);"></i>Experience</h2>

<!--
<div style="margin-bottom: 0.5rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <strong style="font-size: 0.9rem;">Research Intern</strong>
    <span style="color: var(--global-text-color-light); font-size: 0.85rem;">Jan 2026 - Present</span>
  </div>
  <div style="color: var(--global-text-color-light); font-size: 0.9rem;">IISc Bengaluru</div>
</div>
-->

<div style="margin-bottom: 0.5rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <strong style="font-size: 0.9rem;">Research Intern</strong>
    <span style="color: var(--global-text-color-light); font-size: 0.85rem;">May — Oct 2025</span>
  </div>
  <div style="color: var(--global-text-color-light); font-size: 0.9rem;">IIIT Hyderabad</div>
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
  <strong>S. Venkatesh</strong>, A. M. Kurapath. "On the Non-Identifiability of Steering Vectors in Large Language Models." <em>Representational Alignment Workshop at ICLR 2026</em>. <a href="https://arxiv.org/abs/2602.06801" style="color: var(--global-theme-color);">[Paper]</a>
  <button type="button" onclick="openPdfModal('{{ '/assets/pdf/poster1.pdf' | relative_url }}', 'Poster: On the Non-Identifiability of Steering Vectors in Large Language Models')" style="border: none; background: transparent; color: var(--global-theme-color); padding: 0; cursor: pointer; font: inherit;">[Poster]</button>
</div>

<div style="margin-bottom: 0.8rem; font-size: 0.9rem;">
  <strong>S. Venkatesh</strong>. "Architecture, Not Scale: Circuit Localization in Large Language Models." <em>Mechanistic Interpretability Workshop at ICML 2026</em>. <a href="https://arxiv.org/abs/2605.08853" style="color: var(--global-theme-color);">[Paper]</a>
  <button type="button" onclick="openPdfModal('{{ '/assets/pdf/poster2.pdf' | relative_url }}', 'Poster: Architecture, Not Scale: Circuit Localization in Large Language Models')" style="border: none; background: transparent; color: var(--global-theme-color); padding: 0; cursor: pointer; font: inherit;">[Poster]</button>
</div>

<div style="margin-bottom: 0.8rem; font-size: 0.9rem;">
  <strong>S. Venkatesh</strong>. "Negative Before Positive: Asymmetric Valence Processing in Large Language Models." <em>Mechanistic Interpretability Workshop at ICML 2026</em>. <a href="https://arxiv.org/abs/2605.05653" style="color: var(--global-theme-color);">[Paper]</a>
  <button type="button" onclick="openPdfModal('{{ '/assets/pdf/poster3.pdf' | relative_url }}', 'Poster: Negative Before Positive: Asymmetric Valence Processing in Large Language Models')" style="border: none; background: transparent; color: var(--global-theme-color); padding: 0; cursor: pointer; font: inherit;">[Poster]</button>
</div>

<div style="margin-bottom: 0.8rem; font-size: 0.9rem;">
  <strong>S. Venkatesh</strong>. "Repeated-Token Counting Reveals a Dissociation Between Representations and Outputs." <em>Preprint</em>. <a href="https://arxiv.org/abs/2605.09239" style="color: var(--global-theme-color);">[Paper]</a>
</div>

<!--
<div style="margin-bottom: 0rem; font-size: 0.9rem;">
  <strong>S. Venkatesh</strong>, A. M. Kurapath, T. Melkote. "Large Language Models are Algorithmically Blind." <em>Preprint</em>. <a href="https://arxiv.org/abs/2602.21947" style="color: var(--global-theme-color);">[Paper]</a>
</div>
-->

</div>

</div>

<!-- Research -->
<div style="border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 0.8rem; margin-bottom: 1rem; background-color: rgba(0,0,0,0.03);" class="cv-section">
<h2 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.3rem;"><i class="fa-solid fa-microscope" style="margin-right: 0.5rem; color: var(--global-theme-color);"></i>Research</h2>

<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>Do LLMs Actually Feel Happy for You?</strong> — A mechanistic look at how LLMs process emotional context. <a href="https://sohanvenkatesh.substack.com/p/do-llms-actually-feel-happy-for-you" style="color: var(--global-theme-color);">[Blog]</a>
</div>

<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>Is Alignment Faking Generalizable?</strong> — Analyzed cross-architecture transfer of adversarial prompts in Transformer and MoE models. <a href="https://github.com/sohv/alignment-faking-transfers" style="color: var(--global-theme-color);">[Code]</a>
</div>

<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>Representational Asymmetry in LLMs</strong> — A systematic imbalance between a model’s capacity to describe processes and its capacity to actually simulate them. <a href="https://sohv.github.io/blog/representational-asymmetry/" style="color: var(--global-theme-color);">[Blog]</a>
</div>

<div style="margin-bottom: 0rem; font-size: 0.9rem;">
  <strong>Prisoner's Dilemma in LLMs</strong> — Ran experiments across three different LLMs with personality variations to study cooperation and behavioral divergence. <a href="#" style="color: var(--global-theme-color);">[Blog]</a>
</div>
</div>

<!-- Projects -->
<div style="border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 0.8rem; margin-bottom: 1rem; background-color: rgba(0,0,0,0.03);" class="cv-section">
<h2 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.3rem;"><i class="fa-solid fa-code" style="margin-right: 0.5rem; color: var(--global-theme-color);"></i>Projects</h2>

<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>nanoKimi</strong> — A minimzed implementation of Kimi-K2 with custom Muon optimizer and latent attention mechanism. <a href="https://github.com/sohv/nanokimi" style="color: var(--global-theme-color);">[Code]</a>
</div>


<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>anada</strong> — A lightweight, terminal-first note-taking tool with Markdown support and bi-directional linking. <a href="https://pypi.org/project/anada/" style="color: var(--global-theme-color);">[PyPI]</a>
</div>

<!--
<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>mlboardkit</strong> — A library for streamlining ML workflows through utilities for data analysis, model training and evaluation. <a href="https://pypi.org/project/mlboardkit/" style="color: var(--global-theme-color);">[PyPI]</a>
</div>
-->

<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>QueryMind</strong> — An AI agent for natural language to SQL query translation via MCP. <a href="https://github.com/sohv/QueryMind" style="color: var(--global-theme-color);">[Code]</a>
</div>
<div style="margin-bottom: 0.6rem; font-size: 0.9rem;">
  <strong>MCRAG</strong> — A multi-code review and generation system. <a href="https://github.com/sohv/mcrag" style="color: var(--global-theme-color);">[Code]</a> <a href="https://www.youtube.com/watch?v=KhGWROcu3xE" style="color: var(--global-theme-color);">[Video]</a>

</div>
</div>


<!-- Achievements -->
<div id="achievementsSection" style="border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 1.2rem; margin-bottom: 1rem; background-color: rgba(0,0,0,0.03);">
<h2 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.3rem;"><i class="fa-solid fa-trophy" style="margin-right: 0.5rem; color: var(--global-theme-color);"></i>Achievements</h2>

<div style="margin-bottom: 0; font-size: 0.9rem;">
  <ul style="padding-left: 1.2rem; margin-bottom: 0;">
    <li> $700 BlueDot Impact grant for CoT faithfulness research</li>
    <li>$1,500 Cohere Labs Catalyst Grant</li>
    <li>BlueDot Impact Technical AI Safety Course</li>
    <li>Amazon ML Summer School'26</li>
    <li>AWS AI&ML Scholarship 2026</li>

  </ul>
</div>
</div>

<!-- Rejections & Milestones -->
<div id="rejectionsSection" style="border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 0.8rem; margin-bottom: 1rem; background-color: rgba(0,0,0,0.03);" class="cv-section">
<h2 style="margin-top: 0; margin-bottom: 0.4rem; font-size: 1.3rem;"><i class="fa-solid fa-flag" style="margin-right: 0.5rem; color: var(--global-theme-color);"></i>Selected Rejections</h2>
<!--<p style="margin: 0 0 0.8rem 0; font-size: 0.8rem; color: var(--global-text-color-light); font-style: italic;">In highly selective environments, the evaluation process itself is an honor. I list these to maintain transparency regarding my research trajectory.</p>-->

<div style="font-size: 0.9rem;">
  <ul style="padding-left: 1.2rem; margin-bottom: 0;">
    <li style="margin-bottom: 0.5rem;"><strong>Anthropic Fellowship (2026):</strong> Final stage rejection; scored ≥500/600 on both coding and debugging assessments.</li>
    <li style="margin-bottom: 0.5rem;"><strong>MARS Fellowship (2026):</strong> Rejected at final selection interview.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Pivotal Fellowship (2026):</strong> Rejected at final selection interview.</li>
    <li style="margin-bottom: 0;"><strong>Center on Long-Term Risk (CLR) SRF (2026):</strong> Final stage rejection.</li>
  </ul>
</div>
</div>

<!-- Volunteering -->
<div style="border: 1px solid var(--global-divider-color); border-radius: 6px; padding: 0.8rem; margin-bottom: 1rem; background-color: rgba(0,0,0,0.03);" class="cv-section">
<h2 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.3rem;"><i class="fa-solid fa-hands-helping" style="margin-right: 0.5rem; color: var(--global-theme-color);"></i>Volunteering</h2>

<div style="margin-bottom: 0; font-size: 0.9rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; margin-bottom: 0.4rem;">
  <div>
    <strong>Reviewer</strong> — COLM 2026, ACL TrustNLP 2026, ICLR Re-Align and CAO Workshops 2026
  </div>
</div>
</div>

</div>