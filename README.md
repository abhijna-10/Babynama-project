# Babynama - Frontend Developer Intern Assignment

Welcome to the Babynama internship assignment! This short project is designed to simulate a real-world task and help us understand your skills and thought process.

**Objective:** Build a small, self-contained feature in Next.js.  
**Time Allotment:** 2-4 hours.

---

### **Part 1: Getting Started & The Task**

1.  **Repository Setup:** You have already created a repository from this template. Now, install the dependencies:
    ```bash
    npm install
    ```
2.  **The User Story:** Your goal is to implement the following feature:
    > "As a busy parent exploring Babynama's resources, I want to see a simple, clear list of upcoming live webinars on a dedicated page so I can quickly see what's available."

3.  **Your Implementation Tasks:**
    * **Create a Page:** Build a new page at the `/webinars` route.
    * **Display Data:** You don't need an API. Create a mock data array directly in your page file. The array should contain at least three webinar objects, each with an `id`, `title`, `speaker` (e.g., "Dr. Sumitra Meena"), and `date`. Render this data as a list of styled cards on the `/webinars` page.
    * **Add Interactivity:** Add a "View Details" button to each card. When clicked, it should log the `id` of that webinar to the browser's console (e.g., `console.log("Viewing details for webinar ID: 3")`).

---

### **Part 2: Submission**

After you've finished coding, please complete the following two steps.

1.  **Deploy Your Work:** Deploy your project to Vercel (it's free).
2.  **Complete this README:** **This is the most important step.** Edit this `README.md` file in your repository to include:
    * **Live URL:** (https://babynama-project-ab3i.vercel.app)
    * **Choices Made:** I chose to implement the webinar cards using React functional components with hooks (useState) for simplicity and easy state management.Used inline styles for quick styling without the need for external CSS, keeping everything in one file.Decided on a toggle button to show/hide details for better user experience without navigating away or cluttering the UI.
    * **Roadblock & Learning:** I initially struggled with typing the webinar prop in the WebinarCard component using TypeScript. I solved this by leveraging TypeScript’s typeof operator on the webinars array to infer the correct type (typeof webinars[0]), ensuring proper type safety without duplicating the interface.
    * **Screenshot:**
        ![Your Screenshot Here](https://via.placeholder.com/600x400.png?text=Paste+Screenshot+of+Your+App+Here)

To submit, please share the link to your finished GitHub repository with us. Good luck!
