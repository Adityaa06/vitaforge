# Decisions for VitaForge (Frontend Challenge)

## 1. Why this approach was chosen instead of an alternative

For this frontend challenge, I chose a **React + Vite + Vanilla CSS** stack without heavy component libraries (like Tailwind or Material UI). 

* **Why React & Vite:** React allows for modular, reusable component architecture which keeps the code clean and easy to explain. Vite was chosen over Create React App (CRA) or Next.js because it provides an extremely fast development environment and optimized builds without the overhead of a full-stack framework (since no backend is required).
* **Why Vanilla CSS:** Writing custom CSS (with CSS variables in `index.css`) demonstrates a strong understanding of fundamental CSS layout (Flexbox/Grid), responsive design, and animations. Using a pre-built library would have masked these core skills and made it harder to showcase custom, premium design elements like the animated product dashboard or subtle glow effects.
* **Why the Dark Theme:** A dark theme with an indigo/purple accent (`#6366f1`) immediately conveys a "premium SaaS" feel. It helps the colorful UI elements (like the Resume Score and Progress bars in the mockups) stand out effectively, creating the requested "Wow" factor.
* **Component Architecture:** I split the page into logical sections (`Hero`, `ProductShowcase`, `Features`, etc.) to ensure the `App.jsx` remains a clean orchestrator. 

## 2. Trade-offs made due to the time limit

**Trade-off: Hardcoded State vs. Complex State Management**
* **Current Implementation:** In the `ProductShowcase` component, I used simple React `useState` to toggle between dashboard views (Overview, Content, Skills, Preview). The content inside these tabs is static/hardcoded for the demonstration.
* **What I would improve with one full week:** If I had more time, I would build a more complex state management system to allow the user to actually input data into a form on the left, and see the preview update on the right in real-time. I would also add more sophisticated micro-animations (e.g., using Framer Motion) during tab transitions to make the interactive demo feel even more lifelike, and implement a true drag-and-drop feature for the "How It Works" section.

## 3. Use of AI Tools

During the development of this project, AI was utilized as an advanced pair-programmer to accelerate development.

* **What the AI generated:** The initial project scaffolding (Vite setup), foundational CSS variables (color palettes, spacing tokens), and the base structure for standard sections. It also assisted in writing the CSS keyframe animations (e.g., the floating effect and pulse animations).
* **What I personally reviewed, verified, and modified:** 
    * I strictly reviewed the copy to ensure it adhered to the assessment constraints (no fake metrics, no fake testimonials).
    * I manually verified the `ProductShowcase` interactive tabs logic and the CSS for the dashboard mockup to ensure it felt like a real product.
    * I verified the responsive design, confirming media queries at the `768px` and `992px` breakpoints to guarantee there was no horizontal scrolling on the `390px` mobile requirement.
    * I implemented the easter egg (clicking the logo 5 times to trigger an animation) and ensured the code remained beginner-friendly and explainable for the interview.
