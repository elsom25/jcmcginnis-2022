---
layout: post

title:     Organizational Changelog
permalink: /blog/org-changelog/

categories:  ["Leadership"]
description: Change is coming; I hope you're ready.

image:     "/assets/img/org-changelog.webp"
---

Leaders must build teams and organizations that thrive on change, not just survive it. Yet change is hard. It's uncomfortable. It's often surprising. It's hard to understand, hard to manage, and surprisingly hard to track. But it doesn't have to be.

An **organizational changelog** can help: the simple practice of explicitly tracking evolutions, helping you understand and manage change in your organization. And by remembering your past, you'll come to understand your present and shape your future.

## What goes into a great changelog?

I see the changelog and each of its releases as the story of an organization, told through its change and evolution. Practically you want to track the changes that many notice, mixed with important subtle changes that only a few see; always with the context and perspective to remember _why_. Think strategy and your big bets, but also the tactics that underly them. Think of your large structural shifts and your inner-team refinements. Think of defaults that impact everyone and those leadership depends on. And like any good autobiography, don't shy away from the uncomfortable (yet real!) truths; lean into each and every moment you live through.

And while that's a lot of space to cover, we don't shift our organizations dramatically all that often. So **keep it simple**: A bullet-point list in a shared document. You'll be surprised how quickly this comes together by simply tracking change across 3 buckets:

1. Aims and strategy
2. Structure and teams
3. Defaults and programs

By keeping this simple it ends up being easy to maintain for you, but also easy to consume for your org! There's enough richness here to grow your collective memory and make better bets. Let's dive in.

### 1. Aims and strategy

**The why and what**. The reason this organization exists:
- Your **clear and succinct vision** captures why you exist. 1–2 sentences at most. Stable, but that makes all changes meaningful.
- Your **motivating metrics** bring cold reality to your vision. Think star guides over Google Maps; you won't see your movement immediately, but you'll know you're going in the right direction.
- Your **short-term roadmap** highlights the real work ahead (often linked out). What your teams do day-in and day-out and is how you make the vision and metrics _real_.

### 2. Structure and teams

**The who**. How we assemble ourselves to get things done.

Reporting lines are what everyone cares about, so track that while also thinking wider. Your other structures, from cross-functional teams to working groups, are often the drivers of progress. So give them the power they deserve by naming and tracking them with the same rigor as your reporting structures.

### 3. Defaults and programs

**The how**. Your defaults on how teams work day-to-day.

Capture the defaults you've adopted. And remember: **we are what we do** ultimately — so think about your culture here too. The systems and programs that keep your systems up, tech debt down, and people energized. The socials to _how you work_ and everything in between. All of those end up describing _who you collectively are_ far more than many realize.

## Packaging this all together

Everything we just covered, when brought together, forms an excellent "release" for your organization. But beyond the changes themself, we can signal intent through the use of **versioning** too. Let's build off [Semantic Versioning](https://semver.org/): It's simple, clear, and easy to understand. And it easily _communicates magnitude_, which is a powerful tool in itself.

The frameworks `MAJOR.MINOR.PATCH` works surprisingly well as-is, but when translating it from APIs to organizations I find:

- MAJOR signals **fundamental change**. These are the big shifts that change the way you work with a wide-reaching impact. Think of significant reorgs, pivots in purpose, or overhauls in operations.
- MINOR signals **non-disruptive additions**. These are meaningful additions to how you work, but don't dramatically change what already exists. Think new teams, a new product bet, or an emergent operating default.
- PATCH is for **tune-ups**. These are simply the little refinements that happen pretty regularly. Practically, I don't find these are often worth tracking, but it's available when it helps.

Major versions are rare, but they're the big moments that define your organization. Minor versions are more common, but they're the steady drumbeat of progress. Patches are the small tweaks that keep everything running smoothly, often made with no commentary.

Now, given we're using this on an organization full of humans, don't feel beholden to "the spec." Sometimes a major version is not much on paper, but is instead a clear message about the moment. And sometimes a minor version involves wide-reaching changes, but we're still charting the same course. Your choice of version can have almost as much impact as the changes themselves — broadcasting intent and magnitude. So be intentional, and use this as the tool it is.

And all together, these versions tell the story of your organization. They're the chapters in your autobiography, each building on the last and setting the stage for the next.

### Let's ground all of this with an example

There's a lot here, but it's all quite simple. Let's review the fictional _CodeCraft Inc._ changelog.

Even this short snippet shares surprising insight into the company. You get a sense of culture from the changelog simply existing, but also in how it's written. You see what they care about, from what is tracked through where changes happen. And more! The story of this company is reacting and evolving as it goes…

<details>
  <summary class="cursor-pointer">Expand to review a changelog for "CodeCraft Inc."</summary>
{{ "

```markdown
# CodeCraft Changelog

_Living document capturing key organizational changes of CodeCraft. Helps us remember where we came from and how we got to where we are today. Part of _treating our human organization more like_ a product itself._

## v3.0.0 - 2023-10-17

Announced at the company-wide Town Hall ([slides](#), [recording](#)). Pivoting our aim to AI-driven education for the next generation. We're flattening our structure, but keeping many of our practices the same. Adding our first written 'Who we are' document as well.

**_Key docs: [v3.0 Org chart](#), [v3.0 Roadmap](#), [v2.1 Operational defaults](#), [v1.0 Who we are](#)_**

1. **Aims & strategy**
  - **[MAJOR]** Mandate got extended: **AI-driven** education for the next generation.
    - Even with this, our motivating metrics remain the same: increase the total of college-equivalent expertise; while decreasing total education spend.
  - **[MAJOR]** [v3.0 Roadmap](#) (from [v2.2 Roadmap](#)): With the focus on AI now, we've dropped our VR projects (that bet didn't pan out).
2. **Structure and teams**
  - **[MAJOR]** [v3.0 Org chart](#) (from [v2.2 Org chart](#)): Our biggest structural change so far! A lot of folks are in new teams with new managers. We've been hearing everyone's feedback and have finally rebalanced skills and tenure. We also made sure teams line-up to the new roadmaps.
  - We've also adjusted titles to match the new formalized company title system (Tech Lead → Staff Engineer OR Manager).
3. **Defaults and programs**
  - **[MINOR]** [v2.1 Operational defaults](#) (from [v2.0 Operational defaults](#)): Mostly the same, but clarified some of the emergent norms around remote work and Fantastic Fridays.
  - **[NEW]** [v1.0 Who we are](#): Finally capturing a more detailed take on _who we are_, and what will help you be successful here. This is a place for high-agency actors through and through.

## v2.2.0 - 2023-04-08

Shared as a video recording ([link](#)) in Slack. The team and product have been crushing it! We're codifying the dynamic structure we've been using for a while now, and we're adding a new VR team to double down on the tailwinds.

**_Key docs: [v2.2 Org chart](#), [v2.0 Operational defaults](#)_**

1. **Aims & strategy**: N/A
2. **Structure and teams**
  - **[MINOR]** [v2.2 Org chart](#) (from [v2.1 Org chart](#)): We've added a new VR team to double down on the tailwinds we're seeing in the market. We've also added a new 'floating' team to help with cross-team coordination.
3. **Defaults and programs**
  - **[MAJOR]** [v2.0 Operational defaults](#) (from [v1.5 How to scrum](#)): We do a whole lot more than 'scrum' (and we're so far from scrum at this point why keep calling it that). So introducing the revamped _Operational defaults_, spanning the full suite of how we operate. Give it a read if you're new or want a refresher.

## v2.1.3 - 2023-01-23

... and so on ...
```
" | markdownify }}
</details>

## The power of an organizational changelog

But there's more to it than simply "tracking changes." While it's an incredibly powerful way to communicate change, an organizational changelog is so much more than that.

### Shaping what comes next

It's too easy to forget the past. Our memory is selective and overly influenced by our current moment and mood. And even worse, our memories change every time we remember them. Without safekeeping, we lose key insights and lessons learned through our experiences. We forget "the why" behind our decisions. We forget the context that drove our choices, left only with the outcomes that followed. And that's a dangerous place to be. As the saying goes:

> “Those who cannot remember the past are condemned to repeat it.”
>
> — George Santayana, The Life of Reason.

A changelog protects our past from our unreliable memory. It lets us learn from our mistakes and build on our wins. It clearly shows the bets we've made, so we can judge their success. It shows the story of our growth; the incredible progress we've made. Critically, the past gives us the context to understand the present and the foresight to shape the future. This is the most obvious upside of a changelog outside communication, but there's another important one.

### Your organization as a product

It might feel weird at first, but your organization is truly a product in its own right. It has an incredibly rich history full of change and reaction. It has a deep personality, coming from both the people but also what they do together every day. It exists to _do something_ in this world. And if you plan to be successful, it will be dynamic and ever-evolving, growing, changing, and constantly adapting.

There are many ways to think about your organization as a product, but a changelog is a powerful starting place. As your ~~product~~ organization goes through changes, updates, and improvements, you are packaging these together to tell a powerful story. And in tracking those stories — collective bets across strategy, structure, and defaults — you'll get better at each future bet you have to make; equipped with knowledge and clear-eyed insights. You'll also start seeing more and more and more of the organization as a product, and that's where the real magic happens.

## Thriving on change, with an organizational changelog

Building an organizational changelog is more than just a record of changes.

It's a strategic approach that equips every team member with a deep understanding of our collective progress. It's a practical way to be experimental and adaptive, instilling an ethos of constant growth and change. It's a pathway towards resilience and proactive adaptation, by making change itself a part of your organization's DNA.

It's being ready for change because change always comes. And when it does, **you'll be ready to thrive**.
