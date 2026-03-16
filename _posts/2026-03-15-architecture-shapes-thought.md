---
layout: post
title: "Architecture Shapes Thought"
date: 2026-03-15
description: "Why the path to robust AI reasoning probably requires building cognition in, not scaling it up."
categories: [AI, LLMs, reasoning]
---

I have been thinking about this for a while and I'm going to try to write it out properly because I keep having versions of this conversation informally and I would rather just say it somewhere I can point to.

I work in AI interpretability. I spend most of my time trying to understand what is happening inside large language models: what their representations mean, how they are structured, whether they correspond to anything stable and meaningful. And the more time I spend doing that the more convinced I become that the current trajectory of LLM development is running into something real. Not a temporary wall. A structural one. This is my attempt to articulate why and what I think might actually help.

## The Marginal Improvement Problem

Let me start with something that I think a lot of people in the field feel but don't always say out loud: the jumps are getting smaller.

GPT-2 to GPT-3 was a genuine paradigm shift. The qualitative difference was obvious even to non-researchers. GPT-3 to GPT-4 was impressive but already the gains were harder to characterize cleanly, better at some things, worse at others, more reliable in ways that mattered practically but less transformative in any deep sense. And the stuff that's happened since then has largely been better training data, better RLHF, longer context windows, inference time tricks. These are real improvements and I don't want to dismiss them. But they're engineering improvements. They're not telling us something new about intelligence.

Now I want to be careful here because I have seen this argument made sloppily and I don't want to make the same mistake. The history of AI is full of people declaring a plateau right before a breakthrough. CNNs unlocked vision in a way nobody saw coming. Transformers unlocked language. So I'm not saying the transformer paradigm is finished or that nothing interesting will happen. What I'm saying is something more specific: scaling transformers on more data with better feedback is probably not the path to the kind of robust reasoning people are hoping for. The improvements are real but they're not compounding in the way they used to and I think that's telling us something about the architecture rather than about effort or resources.

## Alignment Is Ambiguous and I Think We Should Just Admit That

The alignment problem gets framed a lot as a technical problem. How do we make AI do what humans want? But I think the harder version of the problem is a conceptual one: what do humans want?

Human values are not a fixed target. They are culturally dependent, contextually dependent and internally inconsistent even within a single person. I have different values at work than I do with my family. My values now are different from my values five years ago. People in different countries have genuinely different moral intuitions about things that aren't obviously resolvable by appeal to some universal standard. And this isn't just a practical inconvenience. It is a deep feature of what values actually are.

So when alignment researchers talk about aligning AI to human values I always want to ask: which humans, in which contexts, weighted how? The current answers range from average human preferences to expert moral reasoning to constitutional rules and none of them are satisfying. Not because the researchers aren't smart, they're extraordinarily smart, but because the question is genuinely hard in a way that technical solutions cannot fully address.

This matters for the neurosymbolic angle because one of the things cognitive structure might give us is not a fixed value system but something more like a value reasoning system, the capacity to navigate moral ambiguity the way humans actually do, which is messily and contextually and with a lot of implicit weighing that we couldn't fully articulate if asked. Whether that's better than current approaches is an open question but I think it's at least the right frame.

## LLMs Don't Actually Reason and I Think That's the Crux

Here is where I want to be precise because this is the claim that people push back on most. LLMs produce outputs that look like reasoning. They can walk through problems step by step, catch errors in arguments, generate explanations that seem causally coherent. I'm not saying this isn't impressive. I work with these models every day and I'm regularly surprised by what they can do.

But there is a difference between outputs that have the structure of reasoning and a system that actually reasons. Human reasoning involves planning, mental simulation, working memory, causal modeling and goal-directed behavior that persists across time. It involves the ability to recognize when you don't know something and route around that gap rather than confabulating past it. LLMs do something fundamentally different: they predict what text should come next given a context. The outputs can look like reasoning because the training data contained a lot of reasoning and the model learned to reproduce its surface structure. That's not nothing but it's also not the same thing.

The evidence for this is actually sitting in interpretability research. When you look at what's happening inside these models the representations are strange. Concepts don't correspond to clean stable directions in activation space. Features are superposed, entangled and non-identifiable in ways that make it very hard to say what the model is actually representing as opposed to what it appears to be representing from the outside. I've spent time on exactly this problem and the more carefully you look the more the internal structure seems like a very sophisticated compression of statistical patterns rather than anything that maps cleanly onto the causal structure of the world.

*Which is why I keep coming back to cognitive architecture*.

## The Neurosymbolic Argument

This argument is straightforward: if you want representations that correspond to meaningful cognitive variables then you probably need architectural constraints that push the model toward learning those variables rather than just whatever statistical structure minimizes prediction error on a large corpus.

Neurosymbolic AI tries to do something in this direction, combining the pattern recognition capacity of neural networks with the structured reasoning capacity of symbolic systems. The basic intuition is that human cognition isn't purely one or the other. We do something that looks neural when we recognize a face or read a sentence and something that looks symbolic when we follow a logical argument or plan a sequence of actions. And crucially the two interact, perceptual representations feed into symbolic reasoning and symbolic structure constrains how we interpret perceptions.

Current LLMs are almost entirely on the neural end of that spectrum. They have enormous pattern recognition capacity and almost no structured reasoning machinery. What neurosymbolic approaches try to do is reintroduce some of that structure, world models, causal graphs, modular reasoning components that can be composed rather than just patterns that get activated in response to inputs.

I find this direction genuinely promising but it is still not a solved problem. Integrating symbolic and neural components in ways that actually work at scale is hard. The history of classical AI is littered with symbolic systems that worked beautifully in constrained domains and failed badly when the domain got messy. The reason neural approaches won the last decade is that they handle messiness well. Any neurosymbolic approach that loses that property in exchange for cleaner reasoning is probably not going to work in practice. The challenge is getting both.

## Humans Are Smart and That Actually Matters

Everything about current AI, from the architectures and the math to the training procedures and the number systems the math is built on, was designed by humans. Not just inspired by humans. Actually designed by human minds working through problems using human cognitive tools.

This is sometimes raised as a limit: AI is just doing what humans put into it. But I think the more interesting reading is different. It means that human cognitive structure is already deeply embedded in these systems in ways we haven't fully mapped. The way we've framed the problems, the inductive biases we've built into the architectures, the kinds of patterns that get rewarded during training, all of it reflects human ways of carving up the world. And yet somehow we have ended up with systems whose internal representations are quite alien to human cognition.

That is a weird situation when you think about it. We built something using human tools and human concepts and human math and ended up with something that doesn't seem to think the way we do internally even when it produces outputs that look superficially similar. That gap between the human inputs and the alien internals is, I think, exactly where the interesting work is. Neurosymbolic approaches are partly an attempt to close that gap, to build systems whose internal structure reflects more of the cognitive architecture that generated the tools used to build them. Whether that is possible without sacrificing the properties that make neural approaches powerful is the open question. But I think it's the right question.

## What This Means for Interpretability

This connects to interpretability work in a way I find both interesting and frustrating. One of the recurring problems is that the representations we find inside LLMs are deeply underdetermined. There are many different ways to carve up activation space that are consistent with the model's behavior and no principled way to say which carving corresponds to what the model is really representing. This is a fundamental obstacle to understanding what these systems are doing at a level that would let you trust or predict them reliably.

Cognitive structure might help with this. If you constrain the architecture so that certain kinds of variables have to be represented in certain ways, causal variables, object representations, agent models, you reduce the degree of freedom in how the model can internally organize information. The representations become more identifiable not because you've solved the math but because you've reduced the space of possible solutions by building in prior structure. That's a more interpretable system almost by construction and I think it's one of the underappreciated arguments for neurosymbolic approaches from an interpretability perspective specifically.

## Where I Actually Land

LLMs are not useless and progress has not stopped. That's not what I think and it's not what the evidence shows. What I think is more specific: scaling transformers will continue to produce improvements but those improvements are increasingly marginal in the dimensions that matter most for robust reasoning and reliable alignment. The path to systems that actually reason, that model the world causally, that handle uncertainty honestly, that navigate value conflicts the way humans do, probably requires architectural changes rather than more of what we're currently doing.

Neurosymbolic AI is not a fully formed answer to that. It's more like a direction that seems right given what interpretability research keeps running into. The representations are too unconstrained, the reasoning is too surface-level and the alignment target is too ambiguous for the current approach to get us all the way there.

I might be wrong about this. The history of the field suggests some humility is warranted. But this is where the evidence I work with every day keeps pointing and I think it is worth saying out loud.