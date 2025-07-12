---
layout: blog_post
title: "Isn't deactivating neurons so good?"
date: 2025-07-13
tags: [article]
---

When we talk about neural network interpretability, one of the most fascinating questions is: *what happens when we turn off specific neurons?*  It's like asking what happens when we remove a single instrument from an orchestra - sometimes the music barely changes, and sometimes the whole symphony falls apart.

<!--<figure style="text-align: center;">
  <img src="/assets/images/ablate.png" alt="ablation" style="width: 40%; height: auto; display: block; margin: 0 auto;">
  <figcaption><em>an oddly good AI generated image of neuron ablation</em></figcaption>
</figure>
-->

### The allure of the "off" switch

There's something deeply satisfying about the idea that we can just... turn things off. It feels like the ultimate form of control. In the context of neural networks, deactivating neurons (or "ablating" neurons) has become the go-to method for understanding what different parts of the network actually do.

The logic is plain and simple: we remove a neuron from the network and observe the changes in the model's ability to perform a specific task. If the change is significant, then that neuron must be important for that task. It's like detective work — remove the suspect and see if the crime still happens.

### But is it really that simple?
Here's where things get interesting (and complicated). Neural networks are incredibly distributed systems. A single neuron might contribute to dozens of different behaviors, and a single behavior might depend on hundreds of different neurons. When we deactivate a neuron, we're not just removing one *feature detector* — we're possibly disrupting an entire web of interconnected computations.

Think about it this way: if you remove a single person from a complex organization, the organization might still function, but it doesn't mean that person wasn't important. Maybe their colleagues compensate, maybe the work gets redistributed, or maybe the impact only shows up weeks later.

### Getting my hands dirty

Curious about how this works, I decided to experiment with neuron ablation myself. I built a simple neural network for MNIST digit classification - four fully connected layers with ReLU activations. The architecture was a straightforward setup to understand what happens when we systematically deactivate neurons.

The interesting part was implementing the ablation mechanism. I created a system to identify which neurons were most activated for the digit 7, then "turned off" those neurons using forward hooks that zero out their activations. My idea was simple: if certain neurons are important for recognizing 7, removing them should specifically hurt the model's ability to classify 7 while leaving other digits relatively unaffected.

After training the network to about 95% accuracy on MNIST, I identified the top 5 most important neurons in the second hidden layer for digit 7 recognition, then ablated them and measured the performance drop. While the overall accuracy dropped slightly, the digit 7 accuracy fell by around 6% - showing that the ablated network struggled specifically with recognizing the digit 7 compared to the original network. 

The results clearly show that ablating digit-specific neurons does have a targeted effect though the overall effect is very marginal. A clear visualization of the result is shown below.

<figure style="text-align: center;">
  <img src="/assets/images/ablation.png" alt="Neuron Ablation Results" style="width: 80%; height: auto; display: block; margin: 0 auto;">
  <figcaption><em>Comparison of model performance before and after ablation</em></figcaption>
</figure>

### The obvious challenges

Though neuron ablation is an effective way to study interpretability, it is far from perfect. The biggest challenge ? neural networks are really good at *compensation*. When you knock out one pathway, the network often finds alternative routes to achieve the same result. This is both a blessing and a curse - it makes networks robust, but it also makes them hard to interpret.

Another significant challenge in neuron ablation is the *polysemantic nature* of neurons. Most neurons in neural networks don't have a single, clear function - they're involved in multiple different computations simultaneously. When we ablate a neuron, we're not just removing one specific capability, but potentially disrupting several unrelated functions. This makes it incredibly difficult to attribute any observed changes to a specific cause, especially as the neural networks scale and their complexity increases.

## What's next?

I'm now interested in exploring how neuron ablation is affected as we scale up the neural networks. Furthermore, instead of just asking "what happens when we turn this off?", we can ask "how does this neuron interact with others?" or "what would happen if we modified this neuron in a more targeted way?"

The end goal isn't just to understand individual neurons, but to fully grasp the fundamental principles that make neural networks interpretable. I believe that understanding these broader patterns is imperative in building AI systems that are truly transparent and interpretable. You can find the code for my experiments [here](https://github.com/zeropropai/neuron-ablation-cnn).

---

written by [sohan](https://sohv.github.io/about) ;)
