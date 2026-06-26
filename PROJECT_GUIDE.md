# Kalles Clone - Training Guide & Learning Journal

> **Last Updated:** After completing Hero Section (Version 1)

---

# 1. Project Overview

## Goal

Clone the Kalles ecommerce website professionally using modern React practices.

This is a **learning project**, not a copy-paste project.

The objective is to learn **how professional React developers think**, not just how they write code.

---

# 2. Technology Stack

* React
* Vite
* React Router DOM
* Tailwind CSS
* React Icons
* Swiper
* Git & GitHub

Future additions:

* Context API
* React Hook Form
* Custom Hooks
* API Integration
* Performance Optimization

---

# 3. Teaching Rules

## Explain Before Coding

Before implementing a new concept:

* Why it exists
* Professional approach
* Trade-offs
* Common beginner mistakes

---

## UI First Workflow

For this project we now follow:

1. Build the UI.
2. Match the original design.
3. Review the implementation.
4. Learn the important concepts.
5. Refactor only when it provides real value.

This keeps the project moving while still focusing on learning.

---

## Preserve Working Code

Never refactor unrelated code.

Only modify the feature currently being built.

---

## Professional Review

After completing every feature we discuss:

* What is good.
* What could be improved.
* What professionals usually do.
* What should wait until later.

---

# 4. User Learning Profile

Current strengths:

* React Router
* Nested Layouts
* Outlet
* Link vs NavLink
* useState
* Conditional Rendering
* map()
* Tailwind Flexbox
* Absolute Positioning
* Swiper basics
* Responsive layouts
* Component organization

Currently learning:

* Component architecture
* Engineering judgement
* Reusability
* Project organization

Future topics:

* useEffect
* Context API
* Custom Hooks
* API calls
* Performance
* Testing

---

# 5. Project Architecture

Every page assembles sections only.

Example:

Home.jsx

* Hero
* Categories
* FeaturedProducts
* PromotionalBanner
* BlogSection

Each section owns its own JSX.

---

# 6. Current Progress

## Completed

### Routing

✓ React Router

✓ Nested Routes

✓ MainLayout

✓ Outlet

---

### Layout

✓ TopBar

✓ Navbar

Footer pending

---

### Hero

✓ Swiper integration

✓ Responsive layout

✓ Text overlays

✓ Flexbox overlays

✓ Responsive typography

✓ Hero buttons

Animation intentionally postponed.

---

# 7. Project Conventions

## Tailwind

Tailwind first.

Use reusable CSS only when it represents a project concept.

Examples:

* section-spacing
* container-custom

Avoid creating CSS classes that only wrap one Tailwind utility.

---

## Refactoring Philosophy

Not every duplicate should immediately become reusable.

Ask:

> Does abstraction improve this project today?

Instead of:

> Can I make this reusable?

Avoid over-engineering.

---

## Components

Extract reusable components when:

* Structure stays the same.
* Only data changes.
* The component appears many times.
* Future expansion is likely.
* Repetition begins creating maintenance problems.

Otherwise duplication is acceptable.

---

# 8. Home Page Roadmap

Current order:

✓ Hero

➡ Categories

⬜ Featured Products

⬜ Promotional Banner

⬜ Product Grid

⬜ Brand Section

⬜ Blog

⬜ Instagram

⬜ Newsletter

⬜ Footer

---

# 9. React Knowledge Journal

Mastered:

✓ Components

✓ JSX

✓ Props basics

✓ useState

✓ map()

✓ Conditional Rendering

✓ React Router

✓ Nested Layouts

✓ Link

✓ NavLink

✓ Outlet

✓ Swiper basics

Need more practice:

* useEffect
* lifting state
* Context API
* asynchronous code
* custom hooks

---

# 10. Engineering Lessons

## Hero Section

* Separate positioning from layout.
* `relative` creates the positioning context.
* `absolute inset-0` creates a full overlay.
* Flexbox should position the content inside the overlay.
* Build first. Refactor later.
* Avoid unnecessary abstraction.
* Structure and data are different concepts.
* Engineering decisions depend on project requirements, not rules.

---

# 11. Next Milestone

Categories Section

Goals:

* Responsive layout
* Card positioning
* Image handling
* Hover effects
* Professional spacing
* Reusable section utilities

After Categories is complete, perform another professional review.
