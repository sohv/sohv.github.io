---
layout: page
permalink: /research/
title: research
description: research projects and publications
nav: true
nav_order: 2
---

<!-- _pages/research.md -->

## Publications

<div class="publications">

<!-- Paper 1 -->
<div style="display: flex; gap: 2.3rem; margin-bottom: 1.5rem; align-items: flex-start;">
  <div style="background: #55b3d8; color: white; padding: 0.4rem 0.8rem; border-radius: 4px; font-weight: bold; white-space: nowrap; min-width: 120px; text-align: center; font-size: 0.85rem;">Re-Align@ICLR</div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 0.3rem 0; font-size: 1.1rem;">On the Non-Identifiability of Steering Vectors in Large Language Models</h3>
    <p style="margin: 0.15rem 0; font-size: 0.9rem;"><strong>Sohan Venkatesh</strong>, Ashish Mahendran Kurapath</p>
    <p style="margin: 0.3rem 0 0.8rem 0; color: var(--global-text-color-light); font-size: 0.85rem; font-style: italic;">Representational Alignment Workshop at ICLR 2026</p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
      <button onclick="var a=document.getElementById('abs1'),c=document.getElementById('cite1');a.style.display=a.style.display==='none'?'block':'none';c.style.display='none'" style="border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; cursor: pointer; font-weight: 500;">ABS</button>
      <button onclick="var a=document.getElementById('abs1'),c=document.getElementById('cite1');c.style.display=c.style.display==='none'?'block':'none';a.style.display='none'" style="border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; cursor: pointer; font-weight: 500;">CITE</button>
      <a href="https://arxiv.org/abs/2602.06801" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; text-decoration: none; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; font-weight: 500;">PDF</a>
      <!--<a href="https://github.com/sohv/non-identifiability" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; text-decoration: none; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; font-weight: 500;">CODE</a>
      <a href="https://www.youtube.com/watch?v=7_pk2iE5JLo" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; text-decoration: none; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; font-weight: 500;">▶ VIDEO</a>-->
    </div>
    <div id="abs1" style="display: none; padding: 1rem; background: transparent; border: 2px dashed var(--global-divider-color); border-radius: 3px; margin-bottom: 1rem;">
      <p style="margin: 0; font-size: 0.85rem; line-height: 1.6; text-align: justify;">Activation steering methods are widely used to control large language model (LLM) behavior and are often interpreted as revealing meaningful internal representations. This interpretation assumes that steering directions are identifiable and uniquely recoverable from input-output behavior. We show that, under white-box single-layer access, steering vectors are fundamentally non-identifiable due to large equivalence classes of behaviorally indistinguishable interventions. Empirically, we find that orthogonal perturbations achieve near-equivalent efficacy with negligible effect sizes across multiple models and traits. Critically, we show that non-identifiability is a robust geometric property that persists across diverse prompt distributions. These findings reveal fundamental interpretability limits and highlight the need for structural constraints beyond behavioral testing to enable reliable alignment interventions.</p>
    </div>
    <div id="cite1" style="display: none; padding: 1rem; background: transparent; border: none; border-radius: 3px; margin-bottom: 1rem;">
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




<div style="display: flex; gap: 2.3rem; margin-bottom: 1.5rem; align-items: flex-start;">
  <div style="background: #888; color: white; padding: 0.4rem 0.8rem; border-radius: 4px; font-weight: bold; white-space: nowrap; min-width: 120px; text-align: center; font-size: 0.85rem;">MechInterp</div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 0.3rem 0; font-size: 1.1rem;">Architecture, Not Scale: Circuit Localization in Large Language Models</h3>
    <p style="margin: 0.15rem 0; font-size: 0.9rem;"><strong>Sohan Venkatesh</strong></p>
    <p style="margin: 0.3rem 0 0.8rem 0; color: var(--global-text-color-light); font-size: 0.85rem; font-style: italic;">Mechanistic Interpretability Workshop at ICML 2026</p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
      <button onclick="var a=document.getElementById('abs3'),c=document.getElementById('cite3');a.style.display=a.style.display==='none'?'block':'none';c.style.display='none'" style="border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; cursor: pointer; font-weight: 500;">ABS</button>
      <button onclick="var a=document.getElementById('abs3'),c=document.getElementById('cite3');c.style.display=c.style.display==='none'?'block':'none';a.style.display='none'" style="border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; cursor: pointer; font-weight: 500;">CITE</button>
      <a href="https://arxiv.org/abs/2605.08853" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; text-decoration: none; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; font-weight: 500;">PDF</a>
    </div>
    <div id="abs3" style="display: none; padding: 1rem; background: transparent; border: 2px dashed var(--global-divider-color); border-radius: 3px; margin-bottom: 1rem;">
      <p style="margin: 0; font-size: 0.85rem; line-height: 1.6; text-align: justify;">Mechanistic interpretability assumes that circuit analysis becomes harder as models scale. We challenge this assumption by showing that the attention architecture matters more than parameter count. Studying three circuit types across Pythia and Qwen2.5, we find that grouped query attention produces circuits that are far more concentrated and mechanistically stable than standard multi-head attention at comparable scales. The same concentration pattern holds across indirect object identification, induction heads, and factual recall. Within a single architecture family (Qwen2.5), factual recall circuits undergo a discrete phase transition above a critical scale, collapsing to a single bottleneck rather than degrading gradually. These findings suggest that some architectural choices make large models more tractable to study and that interpretability difficulty is not a fixed consequence of model size.</p>
    </div>
    <div id="cite3" style="display: none; padding: 1rem; background: transparent; border: none; border-radius: 3px; margin-bottom: 1rem;">
      <pre style="margin: 0; background: transparent; padding: 0; overflow-x: auto; font-size: 0.75rem; line-height: 1.4; color: var(--global-theme-color);">@misc{venkatesh2026architecturescalecircuitlocalization,
      title={Architecture, Not Scale: Circuit Localization in Large Language Models}, 
      author={Sohan Venkatesh},
      year={2026},
      eprint={2605.08853},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2605.08853},
}</pre>
    </div>
  </div>
</div>






<div style="display: flex; gap: 2.3rem; margin-bottom: 1.5rem; align-items: flex-start;">
  <div style="background: #888; color: white; padding: 0.4rem 0.8rem; border-radius: 4px; font-weight: bold; white-space: nowrap; min-width: 120px; text-align: center; font-size: 0.85rem;">MechInterp</div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 0.3rem 0; font-size: 1.1rem;">Negative Before Positive: Asymmetric Valence Processing in Large Language Models</h3>
    <p style="margin: 0.15rem 0; font-size: 0.9rem;"><strong>Sohan Venkatesh</strong></p>
    <p style="margin: 0.3rem 0 0.8rem 0; color: var(--global-text-color-light); font-size: 0.85rem; font-style: italic;">Mechanistic Interpretability Workshop at ICML 2026</p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
      <button onclick="var a=document.getElementById('abs4'),c=document.getElementById('cite4');a.style.display=a.style.display==='none'?'block':'none';c.style.display='none'" style="border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; cursor: pointer; font-weight: 500;">ABS</button>
      <button onclick="var a=document.getElementById('abs4'),c=document.getElementById('cite4');c.style.display=c.style.display==='none'?'block':'none';a.style.display='none'" style="border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; cursor: pointer; font-weight: 500;">CITE</button>
      <a href="https://arxiv.org/abs/2605.05653" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; text-decoration: none; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; font-weight: 500;">PDF</a>
    </div>
    <div id="abs4" style="display: none; padding: 1rem; background: transparent; border: 2px dashed var(--global-divider-color); border-radius: 3px; margin-bottom: 1rem;">
      <p style="margin: 0; font-size: 0.85rem; line-height: 1.6; text-align: justify;">Mechanistic interpretability has revealed how concepts are encoded in large language models (LLMs), but emotional content remains poorly understood at the mechanistic level. We study whether LLMs process emotional valence through dedicated internal structure or through surface token matching. Using activation patching and steering on open-source LLMs, we find that negative and positive valence are processed at different network depths. Negative outcomes localize to early layers while positive outcomes peak at mid-to-late layers. Holding topic fixed while flipping valence produces sign-opposite responses, ruling out topic detection. Steering with the good-news direction at the identified layers shifts neutral prompts toward positive valence, showing these layers encode valence as a manipulable direction. Emotional valence in LLMs is localized, causal and steerable, making it a concrete target for interpretability-based oversight.</p>
    </div>
    <div id="cite4" style="display: none; padding: 1rem; background: transparent; border: none; border-radius: 3px; margin-bottom: 1rem;">
      <pre style="margin: 0; background: transparent; padding: 0; overflow-x: auto; font-size: 0.75rem; line-height: 1.4; color: var(--global-theme-color);">@article{venkatesh2026negative,
  title={Negative Before Positive: Asymmetric Valence Processing in Large Language Models},
  author={Venkatesh, Sohan},
  journal={arXiv preprint arXiv:2605.05653},
  year={2026}
}</pre>
    </div>
  </div>
</div>

<!-- Paper 2 -->
<div style="display: flex; gap: 2.3rem; margin-bottom: 1.5rem; align-items: flex-start;">
  <div style="background: #888; color: white; padding: 0.4rem 0.8rem; border-radius: 4px; font-weight: bold; white-space: nowrap; min-width: 120px; text-align: center; font-size: 0.85rem;">Preprint</div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 0.3rem 0; font-size: 1.1rem;">Large Language Models are Algorithmically Blind</h3>
    <p style="margin: 0.15rem 0; font-size: 0.9rem;"><strong>Sohan Venkatesh</strong>, Ashish Mahendran Kurapath, Tejas Melkote</p>
    <p style="margin: 0.3rem 0 0.8rem 0; color: var(--global-text-color-light); font-size: 0.85rem; font-style: italic;">Preprint under review</p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
      <button onclick="var a=document.getElementById('abs2'),c=document.getElementById('cite2');a.style.display=a.style.display==='none'?'block':'none';c.style.display='none'" style="border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; cursor: pointer; font-weight: 500;">ABS</button>
      <button onclick="var a=document.getElementById('abs2'),c=document.getElementById('cite2');c.style.display=c.style.display==='none'?'block':'none';a.style.display='none'" style="border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; cursor: pointer; font-weight: 500;">CITE</button>
      <a href="https://arxiv.org/abs/2602.21947" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; text-decoration: none; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; font-weight: 500;">PDF</a>
      <!--<a href="https://github.com/sohv/algorithmic-blindness" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; text-decoration: none; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; font-weight: 500;">CODE</a>
      <a href="https://www.youtube.com/watch?v=OmJK0GK8_MI" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; text-decoration: none; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; font-weight: 500;">▶ VIDEO</a>-->
    </div>
    <div id="abs2" style="display: none; padding: 1rem; background: transparent; border: 2px dashed var(--global-divider-color); border-radius: 3px; margin-bottom: 1rem;">
      <p style="margin: 0; font-size: 0.85rem; line-height: 1.6; text-align: justify;">Large language models (LLMs) demonstrate remarkable breadth of knowledge, yet their ability to reason about computational processes remains poorly understood. Closing this gap matters for practitioners who rely on LLMs to guide algorithm selection and deployment. We address this limitation using causal discovery as a testbed and evaluate eight frontier LLMs against ground truth derived from large-scale algorithm executions and find systematic, near-total failure. Models produce ranges far wider than true confidence intervals yet still fail to contain the true algorithmic mean in the majority of instances; most perform worse than random guessing and the marginal above-random performance of the best model is most consistent with benchmark memorization rather than principled reasoning. We term this failure algorithmic blindness and argue it reflects a fundamental gap between declarative knowledge about algorithms and calibrated procedural prediction.</p>
    </div>
    <div id="cite2" style="display: none; padding: 1rem; background: transparent; border: none; border-radius: 3px; margin-bottom: 1rem;">
      <pre style="margin: 0; background: transparent; padding: 0; overflow-x: auto; font-size: 0.75rem; line-height: 1.4; color: var(--global-theme-color);">@article{venkatesh2026large,
  title={Large Language Models are Algorithmically Blind},
  author={Venkatesh, Sohan and Kurapath, Ashish Mahendran and Melkote, Tejas},
  journal={arXiv preprint arXiv:2602.21947},
  year={2026}
}</pre>
    </div>
  </div>
</div>


<div style="display: flex; gap: 2.3rem; margin-bottom: 1.5rem; align-items: flex-start;">
  <div style="background: #888; color: white; padding: 0.4rem 0.8rem; border-radius: 4px; font-weight: bold; white-space: nowrap; min-width: 120px; text-align: center; font-size: 0.85rem;">Preprint</div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 0.3rem 0; font-size: 1.1rem;">Repeated-Token Counting Reveals a Dissociation Between Representations and Outputs</h3>
    <p style="margin: 0.15rem 0; font-size: 0.9rem;"><strong>Sohan Venkatesh</strong></p>
    <p style="margin: 0.3rem 0 0.8rem 0; color: var(--global-text-color-light); font-size: 0.85rem; font-style: italic;">Preprint under review</p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
      <button onclick="var a=document.getElementById('abs5'),c=document.getElementById('cite5');a.style.display=a.style.display==='none'?'block':'none';c.style.display='none'" style="border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; cursor: pointer; font-weight: 500;">ABS</button>
      <button onclick="var a=document.getElementById('abs5'),c=document.getElementById('cite5');c.style.display=c.style.display==='none'?'block':'none';a.style.display='none'" style="border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; background: transparent; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; cursor: pointer; font-weight: 500;">CITE</button>
      <a href="https://arxiv.org/abs/2605.09239" style="display: inline-block; border: 1px solid var(--global-text-color); padding: 0.35rem 0.7rem; text-decoration: none; color: var(--global-text-color); font-size: 0.8rem; border-radius: 3px; font-weight: 500;">PDF</a>
    </div>
    <div id="abs5" style="display: none; padding: 1rem; background: transparent; border: 2px dashed var(--global-divider-color); border-radius: 3px; margin-bottom: 1rem;">
      <p style="margin: 0; font-size: 0.85rem; line-height: 1.6; text-align: justify;">Large language models fail at counting repeated tokens despite strong performance on broader reasoning benchmarks. These failures are commonly attributed to limitations in internal count tracking. We show this attribution is wrong. Linear probes on the residual stream decode the correct count with near-perfect accuracy at every post-embedding layer, across all model depths. This holds even at the exact layers where the wrong answer crystallizes while the model simultaneously outputs an incorrect count. Attention patterns show no evidence of collapse over repeated tokens and tokenization artifacts account for none of the failure. Instead, a format-triggered multi-layer perceptron (MLP) block overwrites the correctly-encoded count with a fixed wrong answer at roughly 88--93,% network depth. This prior fires for repeated word-tokens in space-separated list format and is absent for repeated digit-tokens. It is suppressed by comma-separated delimiters in larger models but persists in smaller ones. The finding holds across Llama-3.2 (1B and 3B) and Qwen2.5 (1.5B, 3B and 7B) at consistent relative depth. Counting failure is a failure of routing not of representation and the two require different interventions.</p>
    </div>
    <div id="cite5" style="display: none; padding: 1rem; background: transparent; border: none; border-radius: 3px; margin-bottom: 1rem;">
      <pre style="margin: 0; background: transparent; padding: 0; overflow-x: auto; font-size: 0.75rem; line-height: 1.4; color: var(--global-theme-color);">@misc{venkatesh2026repeatedtokencountingrevealsdissociation,
      title={Repeated-Token Counting Reveals a Dissociation Between Representations and Outputs}, 
      author={Sohan Venkatesh},
      year={2026},
      eprint={2605.09239},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2605.09239}, 
}</pre>
    </div>
  </div>
</div>

</div>

---

## Research Projects

<div class="publications">

{% assign sorted_research = site.research | sort: "importance" %}

{% for entry in sorted_research %}
  {% include research_project.liquid %}
{% endfor %}

</div>
