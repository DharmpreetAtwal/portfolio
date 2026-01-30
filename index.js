// Simple scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
    entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
    },
    { threshold: 0.05 }
);

reveals.forEach(section => observer.observe(section));

const tagEmojis = {
    // Frontend
    "React": "⚛️",
    "TypeScript": "🟦",
    "JavaScript": "🟨",
    "HTML": "🌐",
    "CSS": "🎨",
    "TailwindCSS": "💨",
    "JavaFX": "🖥️",
    "SVG": "🧩",
    "JQuery": "📜",

    // Backend / Data
    "Java": "☕",
    "Python": "🐍",
    "Pandas": "🐼",
    "NumPy": "📐",
    "PySpark": "🔥",
    "PyTorch": "🧠",
    "Neural Networks": "🧠",
    "Deep Learning": "🤖",
    "Machine Learning": "🤖",
    "SciKit-Learn": "📊",
    "Maven": "📦",
    "PHP": "🐘",

    // Cloud / DevOps
    "AWS EMR": "☁️",
    "Docker": "🐳",
    "Terraform": "🏗️",
    "Jenkins": "🔧",
    "JIRA": "📋",
    "JUnit": "⚙️",

    // Databases
    "MySQL": "🗄️",
    "PostgreSQL": "🐘",
    "NoSQL": "📂",

    // Data / Viz
    "Matplotlib": "📈",
    "Power BI": "📊",
    "Excel": "📑",
    "Exploratory Data Analysis": "🔍",

    // APIs / Misc
    "NASA API": "🚀",
    "Firebase": "🔥",
    "Random Forest": "🌲",
    "K-Means Clustering": "🧩"
};

document.querySelectorAll(".tag").forEach(tag => {
    const text = tag.textContent.trim();
    if (tagEmojis[text]) {
        tag.textContent = `${tagEmojis[text]} ${text}`;
    }
});

document.querySelectorAll(".show-more-btn").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isVisible = details.style.display === "block";

    details.style.display = isVisible ? "none" : "block";
    button.textContent = isVisible ? "Show more" : "Show less";
  });
});
