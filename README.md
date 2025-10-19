Profile Card Component
A modern, accessible, and responsive profile card built with semantic HTML, CSS, and vanilla JavaScript.
This component is ideal for web projects that require a concise user information display, and is ready for automated UI testing thanks to stable data-testid attributes.

Features
Accessible: Uses semantic HTML, proper alt text, and visible keyboard focus styles.

Responsive: Adapts seamlessly to mobile, tablet, and desktop using Flexbox with media queries.

Live time display: Shows and updates the current time in milliseconds.

Data-testid attributes: Every key element marked for reliable testing in CI environments.

Social links: Secure, keyboard-navigable, and open in new tabs.

Clear structure: Name, avatar, bio, hobbies, and dislikes separated and easy to customize.

Requirements
Modern web browser (Chrome, Firefox, Safari, Edge, etc.)

No frameworks or build tools required—works with just HTML, CSS, and JS.


Testing
All required elements include stable data-testid attributes for robust automated testing (e.g., with Jest, Testing Library, Cypress, etc.).

Element	Selector example
Card Root	[data-testid="test-profile-card"]
Name	[data-testid="test-user-name"]
Bio	[data-testid="test-user-bio"]
Time (ms)	[data-testid="test-user-time"]
Avatar	[data-testid="test-user-avatar"]
Social Links Block	[data-testid="test-user-social-links"]
Social Link (e.g. X)	[data-testid="test-user-social-x"]
Hobbies List	[data-testid="test-user-hobbies"]
Dislikes List	[data-testid="test-user-dislikes"]
Accessibility
Uses native semantic HTML elements (<article>, <header>, <section>, <nav>, etc.)

Avatar includes descriptive alt attribute.

All links are fully keyboard and screen reader accessible.

Focus indicators provided.

Mobile readers and touch devices are supported.

Customization
To use as a component in larger projects, place the HTML markup where you need a profile card.

Update text, URLs, or add new list items as needed.

Style overrides can be managed in your own CSS file if you wish.

Extend the component with file upload or bio truncation features by adding JavaScript to profile-card.js.
