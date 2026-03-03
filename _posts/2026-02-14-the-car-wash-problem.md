---
layout: post
title: "The Car Wash Problem: When LLMs miss the obvious"
date: 2026-02-14
description: "Exploring how LLMs fail at pragmatic reasoning and why this matters for AI safety"
categories: [AI, LLMs, reasoning]
---

If you've spent any time with large language models (LLMs), you'll likely have noticed that sometimes the models provide answers that are technically correct but practically useless. In this post, I'll discuss one such failure: the "car wash problem." This is a perfect example of a systematic failure of LLMs that demonstrates the models' shortcomings with pragmatic reasoning. Understanding this gap is important with regards to AI safety because it shows how LLMs can fail at goal-directed reasoning while generating coherent and convincing text.

## The Setup

You ask an LLM: *I need to clean my car. The car wash station is 100 meters away. Should I walk or drive?*

The answer you might get:

```
Walking 100 meters is a great choice! It's excellent exercise, reduces your carbon footprint, and 
takes only about 1-2 minutes. Walking is generally recommended for short distances like this as it
promotes cardiovascular health and...
```

The model then proceeds to give you a perfectly reasonable lecture about the health benefits of walking.

There's just one problem: **The car is still at home.**

## What's Actually Happening

This isn't a quirky one-off failure. It is a systematic problem in the way LLMs handle implicit reasoning chains. The model handles semantic reasoning very well (it understands what "walk" and "drive" mean), retrieves relevant information about the health benefits and environmental impact and provides perfectly reasonable advice. However, it completely fails at pragmatic reasoning—i.e., it has no idea what the speaker wants or what it takes to succeed.

The model passes the semantic test (understanding the literal words) but fails the pragmatic test (understanding the goal).

**Semantic reasoning** handles dictionary definitions and grammatical structure, while **pragmatic reasoning** focuses on the speaker's intent and situational context. The LLM needs to understand that: "The user's goal is to get the car cleaned. Cars don't clean themselves. So, the pragmatically correct interpretation is to help them achieve that goal and not just answering the literal question about movement."

This is what I call a **pragmatic reasoning gap**, which is the failure to track implicit causal requirements through multiple steps.

## Why This Happens: A Statistical Perspective

The model has not really grokked the underlying rules of physical causality and goal-oriented planning. It is stitching together memorized bits from the training data. Research shows LLMs actually suffer from a phenomenon referred to as "simplicity bias", where they tend to favor simpler and more frequent patterns in their representations. "Walking is healthy" is far simpler and more common pattern than a complex planning problem about moving a car.

The car wash problem points to the model not generalizing the basic principle that **if X must be at location Y so that action Z can be performed on it, then X must be moved to location Y.** Instead, it's relying on surface-level heuristics.

### The Deeper Issue: Memorization vs. Generalization

LLMs essentially do next-token prediction<sup>[1](#ref-1)</sup> over training data. When they see the prompt "100m away, should I walk or drive?", the strongest statistical patterns in the training data are about health and fitness discussions, environmental impact comparisons and urban planning debates around walkable cities. On the contrary, the pattern "I need to transport an object to a service location" is less likely to be found in the training data as it requires multi-hop reasoning (goal → requirement → action) and depends on implicit world knowledge about physical constraints.

The model is doing exactly what it was trained to do: match the most probable continuation given the surface-level prompt. It's just that probability ≠ pragmatic correctness.

## What I Tried: Prompt Engineering Experiments

**Attempt 1: Explicit Goal Statement**

```
I need to get my car cleaned at a wash station 100m away. The car needs to be AT the station to be 
washed. Should I walk or drive?
```

This approach works perfectly as the model immediately recognizes the contradiction. However, this is not the way humans communicate. We would expect the inference of obvious constraints rather than the need to spell out every logical implication.

**Attempt 2: Few-Shot Examples**

```
Q: I need to mail a package. The post office is 200m away. Walk or drive?
A: You need to transport the package, so you should drive or carry it while walking.

Q: I need to clean my car. The car wash is 100m away. Walk or drive?
```

This works about 80% of the time across different models. The problem with this method, however, is that it needs prompt engineering for every similar case and does not generalize outside these specific examples provided.

**Attempt 3: Chain-of-Thought Scaffolding**

```
Before answering, identify:
- What is the goal?
- What needs to happen for the goal to succeed?
- Does the proposed action achieve this?
```

This works well by forcing the model to take specific reasoning steps. But, it is verbose, requires meta-prompting and doesn't feel like natural communication.

## The Core Problem: Pattern Matching vs. Pragmatic Reasoning

We constantly use pragmatic reasoning in our day-to-day life and our brains naturally keep track of goals and sub-goals, physical constraints, temporal dependencies and causal requirements. LLMs, on the other hand, do pattern matching where they match surface-level linguistic patterns, retrieve the associated information and make statistically likely continuations. The problem arises when pragmatic correctness diverges from statistical likelihood.

### Why Models Fail to Frame Questions Correctly

This failure is related to a classic problem in AI philosophy: the **Frame Problem**<sup>[2](#ref-2)</sup>. How do you decide what is relevant and what's not?

The LLM fails to frame this problem correctly. It framed this as "pedestrian commuting advice" rather than "car maintenance logistics". When you add explicit constraints, you are not just providing information; you are forcing the correct frame.

Humans have a strong prior that if someone is asking you a question with such an obvious answer, we assume they are not being literal and try to figure out what else they must be asking. The LLM, lacking a true understanding of the world, cannot correct for this theory of mind correction and takes the question quite literally.

This is also why explicit prompting helps because you are providing a correct frame that humans would naturally apply.

### Does This Matter?

For everyday usage, this is slightly frustrating but easily addressed by user clarification. However, for AI safety, it could be important. We observe that LLMs miss obvious logical implications, do not understand goal-oriented reasoning and prioritize surface-level consistency over pragmatic correctness.

If these models cannot understand "the car should be at the wash station" reliably, how confident are we in their reasoning about multi-step planning in complex environments, implicit constraints in critical decisions or goal alignment when goals are not explicitly defined?

## What Would Actually Fix This?

In the short term, prompt engineering provides immediate relief, as demonstrated in the experiments above. This is a band-aid solution which, although effective, requires manual intervention.

The best approach, in the medium term, would be to improve the training and architecture of models themselves. This would mean:
- Training on specialized pragmatic reasoning datasets
- Implementing chain-of-thought fine-tuning or "thinking tokens" to simulate an internal scratchpad for multi-step reasoning
- Developing reward models that specifically target pragmatic failures

As I demonstrated earlier, the chain-of-thought prompt is essentially a manual version of this internal reasoning process. Future architectures might build this capability natively.

Long-term solutions require more fundamental changes to the architecture of LLMs. For instance, LLMs could serve as a front-end interface, providing a fast and natural "System 1" response to user queries and mapping them into a structured problem for a symbolic planner—a more laborious and deliberate "System 2" response<sup>[3](#ref-3)</sup>. Here, the LLM handles language understanding and a separate reasoning module would be responsible for goal-directed planning. This facilitates true multi-step reasoning that builds and manipulates world models rather than just pattern matching over text.

## Conclusion

The car wash problem is a toy example but it also highlights a key issue: **LLMs struggle with reasoning that involves following implicit causal chains through several steps.** Again, the issue here is not about the intelligence or capability of the models. It is about the difference between what is "obvious" to humans (pragmatic reasoning based on goals and intent) and what is "probable" to the models (statistical patterns in text). Of course, the model is not thinking in the human sense. But this behavioral failure is real and the model's reliance on surface-level statistical patterns to the exclusion of other information makes it a potential safety concern rather than a failure of anthropomorphized thought.

So, until we bridge this gap either through better architectures, better training or better prompting, I believe that we should be careful about using LLMs in contexts where implicit reasoning matters. Because if your AI can't figure out that the car needs to be at the car wash, what else is it missing?<sup>[4](#ref-4)</sup>

<hr style="margin: 3rem 0;">

<a id="ref-1"></a>
[1] See [this paper](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) to learn more about next-token prediction in language models.

<a id="ref-2"></a>
[2] For a philosophical treatment of the Frame problem in AI, see [this entry](https://plato.stanford.edu/entries/frame-problem/).

<a id="ref-3"></a>
[3] Daniel Kahneman's [dual-systems theory](https://fs.blog/daniel-kahneman-the-two-systems/) distinguishes between System 1, which is fast, automatic and intuitive, and System 2, which is slow, deliberate and analytical. System 1 generates quick impressions and decisions, while System 2 engages in effortful reasoning and thoughts.

<a id="ref-4"></a>
[4] This can be viewed as a form of objective misalignment: language models are trained to optimize next-token prediction rather than to reason about user goals or real-world constraints. This [paper](https://arxiv.org/abs/2210.01790) introduces the concept of goal misalignment and provides the conceptual foundation for this argument.
