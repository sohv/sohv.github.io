---
layout: post
title: "Your AI Knows More Than It Can Do"
date: 2026-03-01
description: "Understanding the systematic gap between what language models can describe and what they can actually do"
categories: [AI, LLMs, reasoning]
---

There is something quietly strange about modern AI systems.

Ask one to explain how a sorting algorithm works. It will give you a textbook answer. Clear, accurate, well structured. Now ask it to predict which of two implementations will run faster on a specific input. The confidence stays. The answer falls apart.

The model did not suddenly become dumb. It was never doing what you thought it was doing.

## Two Kinds of Knowing

Philosophers have a useful distinction here. There is *knowing that* and *knowing how*.

Knowing that water boils at 100 degrees. Knowing that Dijkstra's algorithm finds shortest paths. Knowing that overconfidence is a cognitive bias. These are facts. Descriptions. Declarative knowledge.

Knowing *how* to boil water. Knowing how to actually run Dijkstra on a graph. Knowing how to reason without overconfidence. These are skills. Procedures. A different kind of knowledge entirely.

The philosopher Gilbert Ryle argued in 1949 that these two kinds of knowledge are genuinely separate.<sup>[1](#ref-1)</sup> You cannot get one by accumulating enough of the other. Reading every book ever written about swimming does not teach you to swim.

Language models are trained on text. Text is almost entirely made of the first kind of knowledge. Facts, explanations, descriptions of how things work. The training objective rewards the model for predicting the next word in a sentence. That is it. Nothing in that process requires the model to actually *do* what the text describes.<sup>[2](#ref-2)</sup>

So models become extraordinarily good at knowing that. And only partially good at knowing how.

I call this gap **Representational Asymmetry**: the systematic imbalance between a model's capacity to describe processes and its capacity to actually simulate them. The model builds rich declarative representations of the world from text. What it does not reliably build is the procedural machinery to act on them.

## What This Looks Like in Practice

Representational Asymmetry shows up in four consistent patterns.

**Explaining vs. executing.** A model explains an algorithm correctly and then fails to simulate what that algorithm actually produces. The explanation is perfect. The execution is not.<sup>[3](#ref-3)</sup>

**Citing vs. grounding.** A model produces a citation in flawless academic format with the right author style, journal name, and year. The paper does not exist. The model learned what citations look like. It never learned what a citation *is*.<sup>[4](#ref-4)</sup>

**Planning vs. tracking.** A model outlines a detailed multi-step plan. Ask it to execute that plan while staying within a budget or a time constraint and it quietly drifts. The steps sound coherent. The constraints are lost.<sup>[5](#ref-5)</sup>

**Defining vs. applying.** A model gives you a correct definition of statistical confidence. Ask it to produce a calibrated confidence interval on a novel problem and the numbers are wrong. The definition is intact. The underlying capacity is not.

In each case the model sounds like it knows what it is doing. That is the problem. I call these failures **Hidden Absences**: breakdowns that are invisible from the surface of the output, detectable only when you test whether the model can *do* what it just described.

## Why Scaling Does Not Fix This

The common assumption is that these failures will disappear as models get bigger. More parameters, more data, better answers.

This assumption may be wrong for a specific reason.

If the gap exists because text is the medium of declarative knowledge and not procedural knowledge, then training on more text gives you richer declarative knowledge. It does not give you more procedural capacity. The gap does not close. It may not even shrink. The model becomes more fluent in describing things it still cannot do.<sup>[2](#ref-2)</sup>

This is not a complaint about current models. It is a structural observation about what the training objective is actually optimizing for. A larger model trained the same way is a more capable version of the same thing. It is not a different thing.

## Why This Matters

Most AI failures are visible. The model refuses. It says something obviously wrong. It crashes.

Hidden Absences are different. The output looks right. The reasoning sounds sound. The confidence is high. The structural answer is wrong. And nothing in the surface form of the output tells you that.

This creates a specific kind of risk. People calibrate their trust based on how competent something sounds. If a system sounds competent in exactly the domains where it is structurally weak, trust outpaces capability. Quietly. Without obvious warning signs.<sup>[4](#ref-4)</sup>

A medical AI that explains drug mechanisms correctly but miscalculates interaction risk. A legal AI that produces perfect citation formatting but fabricates the ruling. A planning system that writes a convincing strategy but loses track of the constraints halfway through. These are not hypothetical edge cases. They are the predictable shape of Representational Asymmetry in deployment.

## What Comes Next

The research questions here are concrete. Can we measure the gap between declarative and procedural competence with a single score comparable across domains? Can we locate where in a transformer this asymmetry lives? Does it narrow as models scale, or does it persist regardless of size?<sup><a href="#ref-3">3</a>,<a href="#ref-5">5</a></sup>

These are answerable questions. The answers matter for how we build AI systems, how we evaluate them, and where we choose to trust them. The broader point is simpler. A model that has learned the language of a domain is not the same as a model that understands the domain. Representational Asymmetry is the name for that gap. We have been measuring the former while assuming the latter. That assumption is worth examining.


<hr style="margin: 3rem 0;">

<a id="ref-1"></a>
[1] Ryle, G. (1949). *The Concept of Mind*. Hutchinson. — Foundational philosophical distinction between declarative knowledge (knowing that) and procedural knowledge (knowing how).

<a id="ref-2"></a>
[2] Brown, T. B., et al. (2020). Language Models are Few-Shot Learners. *Advances in Neural Information Processing Systems*, 33, 1877–1901. — Original GPT-3 paper; basis for understanding what next-token prediction does and does not reward models to learn.

<a id="ref-3"></a>
[3] Valmeekam, K., Olmo, A., Sreedharan, S., & Kambhampati, S. (2022). Large Language Models Still Can't Plan. *NeurIPS 2022 Workshop on Foundation Models for Decision Making*. — Empirical demonstration that models fail structurally on planning tasks despite fluent descriptions of planning principles.

<a id="ref-4"></a>
[4] Ji, Z., et al. (2023). Survey of Hallucination in Natural Language Generation. *ACM Computing Surveys*, 55(12), 1–38. — Comprehensive review of referential grounding failures and the risk of misplaced trust in fluent AI outputs.

<a id="ref-5"></a>
[5] Dziri, N., et al. (2023). Faith and Fate: Limits of Transformers on Compositionality. *Advances in Neural Information Processing Systems*, 36. — Shows that transformer performance collapses monotonically on compositional tasks as structural complexity increases, while surface fluency holds.
