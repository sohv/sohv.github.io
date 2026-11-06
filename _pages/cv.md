---
layout: default
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
<div id="cvContent" class="rd-cv">

<header class="rd-cv-head">
  <h1>Curriculum Vitae</h1>
  <p class="rd-cv-contact">
    <a href="mailto:soh.venkatesh@gmail.com">email</a>
    <a href="https://github.com/sohv">github</a>
    <a href="https://www.linkedin.com/in/sohan-venkatesh/">linkedin</a>
  </p>
</header>

<section class="cv-section">
<h2 class="rd-h">Education</h2>
<ul class="rd-cv-rows">
  <li>
    <span class="rd-cv-date">2022 – 2026</span>
    <div><b>Bachelor of Technology, Computer Science</b><span class="rd-cv-org">Manipal Institute of Technology, Bengaluru</span></div>
  </li>
</ul>
</section>

<section class="cv-section">
<h2 class="rd-h">Experience</h2>
<ul class="rd-cv-rows">
<!--
  <li>
    <span class="rd-cv-date">Jan 2026 – Present</span>
    <div><b>Research Intern</b><span class="rd-cv-org">IISc Bengaluru</span></div>
  </li>
-->
  <li>
    <span class="rd-cv-date">Sep 2026 – Present</span>
    <div><b>Research Mentor</b><span class="rd-cv-org">SPAR Research</span></div>
  </li>
  <li>
    <span class="rd-cv-date">Sep – Oct 2026</span>
    <div><b>Research Scholar</b><span class="rd-cv-org">MATS Research (Neel Nanda's MATS 12 Exploration Phase)</span></div>
  </li>
  <li>
    <span class="rd-cv-date">Jul 2026 – Present</span>
    <div><b>Research Fellow</b><span class="rd-cv-org">LASR Labs</span></div>
  </li>
  <li>
    <span class="rd-cv-date">May – Oct 2025</span>
    <div><b>Research Intern</b><span class="rd-cv-org">IIIT Hyderabad</span></div>
  </li>
  <li>
    <span class="rd-cv-date">Jul – Sep 2024</span>
    <div><b>AI Fellow</b><span class="rd-cv-org">Fellowship.ai</span></div>
  </li>
  <li>
    <span class="rd-cv-date">May – Jul 2024</span>
    <div><b>Project Intern</b><span class="rd-cv-org">Infosys</span></div>
  </li>
</ul>
</section>

<section class="cv-section">
<h2 class="rd-h">Publications</h2>
{% include selected_publications.liquid posters=true %}
</section>

<section class="cv-section">
<h2 class="rd-h">Projects</h2>
<ul class="rd-cv-list">
  <li><b>Sandbagging Evaluation in LLMs</b> — Inspect-based evaluation testing whether frontier LLMs sandbag after discovering a hidden threshold under different framings. <a class="rd-cv-link" href="https://github.com/sohv/model-sandbagging">code</a></li>
  <li><b>Diffing for Model Spec Midtraining</b> — Studied whether model diffing recovers a value installed during model spec midtraining in Llama 3.1 8B. <a class="rd-cv-link" href="https://github.com/sohv/diffing-recovers-midtraining">code</a></li>
  <li><b>Inverse Scaling in CoT faithfulness</b> — Showed unfaithfulness in larger LLMs is a capability artifact after controlling for accuracy. <a class="rd-cv-link" href="https://github.com/sohv/inverse-scaling-cot">code</a></li>
  <li><b>nanoKimi</b> — An implementation of Kimi-K2 with Muon optimizer and latent attention mechanism. <a class="rd-cv-link" href="https://github.com/sohv/nanokimi">code</a></li>
  <li><b>MCRAG</b> — A multi-LLM code generation and review system with a generator and two critics. <a class="rd-cv-link" href="https://github.com/sohv/mcrag">code</a></li>
</ul>
</section>

<section id="achievementsSection" class="cv-section">
<h2 class="rd-h">Achievements</h2>
<ul class="rd-cv-list">
  <li>$13,500 Manifund grant for AI control research</li>
  <li>$5,000 Tinker grant for model persona research</li>
  <li>$3,700 BlueDot grant for CoT faithfulness research</li>
  <li>Amazon ML Summer School'26</li>
  <li>AWS AI&amp;ML Scholarship 2026</li>
</ul>
</section>

<!-- Rejections & Milestones
<section id="rejectionsSection" class="cv-section">
<h2 class="rd-h">Selected Rejections</h2>
<ul class="rd-cv-list">
  <li><b>Anthropic Fellowship (2026):</b> Final stage rejection; scored ≥500/600 on both coding and debugging assessments.</li>
  <li><b>MARS Fellowship (2026):</b> Rejected at final selection interview.</li>
  <li><b>Pivotal Fellowship (2026):</b> Rejected at final selection interview.</li>
  <li><b>Center on Long-Term Risk (CLR) SRF (2026):</b> Final stage rejection.</li>
</ul>
</section>
-->

<section class="cv-section">
<h2 class="rd-h">Volunteering</h2>
<ul class="rd-cv-list">
  <li><b>Reviewer</b> — COLM 2026, ACL TrustNLP 2026, ICLR Re-Align and CAO Workshops 2026</li>
</ul>
</section>

</div>
