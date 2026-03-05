---
layout: page
permalink: /selected-publications/
title: selected publications
nav: false
---

<div class="publications">

<!-- Paper 1 -->
<div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; align-items: flex-start;">
  <div style="background: #55b3d8; color: white; padding: 0.4rem 0.8rem; border-radius: 4px; font-weight: bold; white-space: nowrap; min-width: 120px; text-align: center; font-size: 0.85rem;">CAO@ICLR</div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 0.3rem 0; font-size: 1.1rem;">On the Non-Identifiability of Steering Vectors in Large Language Models</h3>
    <p style="margin: 0.15rem 0; font-size: 0.9rem;"><strong>Sohan Venkatesh</strong>, Ashish Mahendran Kurapath</p>
    <p style="margin: 0.3rem 0 0.8rem 0; color: var(--global-text-color-light); font-size: 0.85rem; font-style: italic;">Accepted in ICLR CAO Workshop, 2026</p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
      <button onclick="var a=document.getElementById('abs-selected'),c=document.getElementById('cite-selected');a.style.display=a.style.display==='none'?'block':'none';c.style.display='none'" style="border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; cursor: pointer; font-weight: 500;">ABS</button>
      <button onclick="var a=document.getElementById('abs-selected'),c=document.getElementById('cite-selected');c.style.display=c.style.display==='none'?'block':'none';a.style.display='none'" style="border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; cursor: pointer; font-weight: 500;">CITE</button>
      <a href="https://arxiv.org/abs/2602.06801" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; text-decoration: none; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; font-weight: 500;">PDF</a>
      <a href="https://github.com/sohv/non-identifiability" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; text-decoration: none; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; font-weight: 500;">CODE</a>
      <a href="https://www.youtube.com/watch?v=7_pk2iE5JLo" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; text-decoration: none; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; font-weight: 500;">▶ VIDEO</a>
    </div>
    <div id="abs-selected" style="display: none; padding: 1rem; background: transparent; border: 2px dashed var(--global-divider-color); border-radius: 3px; margin-bottom: 1rem;">
      <p style="margin: 0; font-size: 0.85rem; line-height: 1.6; text-align: justify;">Activation steering methods are widely used to control large language model (LLM) behavior and are often interpreted as revealing meaningful internal representations. This interpretation assumes steering directions are identifiable and uniquely recoverable from input-output behavior. We show that, under white-box single-layer access, steering vectors are fundamentally non-identifiable due to large equivalence classes of behaviorally indistinguishable interventions. Empirically, we show that orthogonal perturbations achieve near-equivalent efficacy with negligible effect sizes across multiple models and traits. Critically, we show that the non-identifiability is a robust geometric property that persists across diverse prompt distributions. These findings reveal fundamental interpretability limits and highlight the need for structural constraints beyond behavioral testing to enable reliable alignment interventions.</p>
    </div>
    <div id="cite-selected" style="display: none; padding: 1rem; background: transparent; border: none; border-radius: 3px; margin-bottom: 1rem;">
      <pre style="margin: 0; background: transparent; padding: 0; overflow-x: auto; font-size: 0.75rem; line-height: 1.4; color: var(--global-theme-color);">@article{venkatesh2026non,
  title={On the Non-Identifiability of Steering Vectors in Large Language Models},
  author={Venkatesh, Sohan and Mahendran Kurapath, Ashish},
  journal={arXiv e-prints},
  pages={arXiv--2602},
  year={2026}
}</pre>
    </div>
  </div>
</div>

</div>
