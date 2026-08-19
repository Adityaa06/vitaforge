# Decisions for VitaForge

## 1. Why I chose this approach

For this challenge, I chose **React with Vite and Vanilla CSS**.

I wanted to keep the project focused on the frontend because the task was mainly about building a polished, responsive home page with a product demonstration and meaningful interactions. React helped me divide the page into smaller components such as the Navbar, Hero, Product Showcase, Features, and other sections, which made the code easier to manage and understand.

I used **Vite** because it provides a simple setup and fast development environment without adding unnecessary complexity.

For styling, I decided to use **Vanilla CSS instead of a UI framework**. This gave me more control over the layout, spacing, responsive behavior, animations, and overall look of the website. I also wanted the design to feel custom instead of relying heavily on pre-built components.

I chose a **dark theme with an indigo accent** to give VitaForge a modern SaaS-style appearance. The accent color also helps highlight important elements such as buttons, scores, progress indicators, and interactive states.

The page is divided into separate React components so that each section has a clear responsibility and the main `App.jsx` file stays simple.

---

## 2. Trade-off I made and what I would improve

Because of the time available, I focused on creating a strong interactive frontend prototype instead of building a complete resume-building application with a backend.

The current Product Showcase includes interactive tabs, skill selection, experience addition, score/progress animations, and a resume preview toggle. These interactions demonstrate how the product could work without requiring authentication, a database, or an actual AI service.

If I had a full week, I would extend this into a more complete prototype. I would allow users to enter and edit their own information and update the resume preview in real time. I would also add features such as resume templates, better content editing, drag-and-drop section ordering, and a real export flow.

Another area I would improve is testing across more devices and screen sizes to make sure the experience remains consistent beyond the required mobile and desktop layouts.

---

## 3. Use of AI Tools

I used AI tools during development mainly to speed up the initial development process and to explore different implementation ideas.

AI helped with the initial project structure, component organization, some CSS styling, animations, and refining parts of the UI.

However, I reviewed the generated code and adjusted it based on the requirements of the challenge. I checked the project for the assignment constraints, especially avoiding fake testimonials, user counts, company logos, or unsupported claims.

I also reviewed and tested the main interactions, including:

* Navigation and smooth scrolling
* Mobile menu behavior
* Product Showcase tab switching
* Resume score and progress animations
* Adding a sample experience
* Skill selection
* Resume preview view toggle
* CTA buttons that direct users to the interactive product demo

Finally, I checked the responsive behavior for the required mobile and desktop layouts and ran the production build to make sure the project builds successfully.
                                                                                    
    * I implemented the easter egg (clicking the logo 5 times to trigger an animation) and ensured the code remained beginner-friendly and explainable for the interview.
