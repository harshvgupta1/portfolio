#!/usr/bin/env python3
"""Generate Harsh Vardhan Gupta resume PDF."""

from pathlib import Path

from fpdf import FPDF

BLUE = (37, 99, 235)
INK = (15, 23, 42)
MUTED = (71, 85, 105)
LINE = (226, 232, 240)

OUT_PUBLIC = Path(__file__).resolve().parents[1] / "public" / "resume.pdf"
OUT_DOWNLOADS = Path.home() / "Downloads" / "Harsh_Vardhan_Gupta_Resume.pdf"
OUT_DOWNLOADS_ALT = Path.home() / "Downloads" / "Resume.pdf"
OUT_DOWNLOADS_ALT2 = Path.home() / "Downloads" / "resume (1).pdf"


class ResumePDF(FPDF):
    def __init__(self):
        super().__init__(format="A4", unit="mm")
        self.set_auto_page_break(auto=True, margin=10)
        self.set_margins(14, 10, 14)

    def section_title(self, title: str):
        self.ln(2.0)
        self.set_font("Helvetica", "B", 10.0)
        self.set_text_color(*BLUE)
        self.cell(0, 5.2, title.upper(), new_x="LMARGIN", new_y="NEXT")
        y = self.get_y()
        self.set_draw_color(*BLUE)
        self.set_line_width(0.4)
        self.line(14, y, 196, y)
        self.ln(1.8)
        self.set_text_color(*INK)

    def body_text(self, text: str, size=8.8):
        self.set_font("Helvetica", "", size)
        self.set_text_color(*MUTED)
        self.multi_cell(0, 3.8, text)
        self.set_text_color(*INK)

    def bullet(self, text: str):
        x = self.get_x()
        self.set_font("Helvetica", "", 8.5)
        self.set_text_color(*MUTED)
        self.cell(4, 3.6, chr(149))
        self.set_x(x + 4)
        self.multi_cell(0, 3.6, text)
        self.ln(0.4)


def build():
    pdf = ResumePDF()
    pdf.add_page()

    # Header
    pdf.set_font("Helvetica", "B", 18)
    pdf.set_text_color(*INK)
    pdf.cell(0, 7.0, "Harsh Vardhan Gupta", new_x="LMARGIN", new_y="NEXT")

    pdf.set_font("Helvetica", "B", 10.0)
    pdf.set_text_color(*BLUE)
    pdf.cell(0, 4.8, "Full Stack Developer (MERN)", new_x="LMARGIN", new_y="NEXT")

    pdf.set_font("Helvetica", "", 8.2)
    pdf.set_text_color(*MUTED)
    contact = (
        "Noida, Uttar Pradesh, India  |  "
        "harsh872000@gmail.com  |  "
        "+91 7905775453"
    )
    pdf.cell(0, 3.8, contact, new_x="LMARGIN", new_y="NEXT")
    links = (
        "linkedin.com/in/harsh-vardhan-g-684701134  |  "
        "github.com/harshvgupta1  |  "
        "portfolio-fy9a.onrender.com"
    )
    pdf.cell(0, 3.8, links, new_x="LMARGIN", new_y="NEXT")

    # Summary
    pdf.section_title("Professional Summary")
    pdf.body_text(
        "Full Stack Developer with 2+ years of experience building and scaling production web "
        "applications across the MERN stack (MongoDB, Express.js, React.js, Node.js). Expert in "
        "AI-assisted development - leveraging Prompt Engineering, Cursor, and ChatGPT to accelerate "
        "full-stack feature delivery, code quality, and prototyping. Currently building Reelax across "
        "brands web, core APIs, microservices, and LLM-powered discovery."
    )

    # Experience
    pdf.section_title("Work Experience")
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.set_text_color(*INK)
    pdf.cell(120, 4.5, "Full Stack Developer", new_x="RIGHT")
    pdf.set_font("Helvetica", "", 8.5)
    pdf.set_text_color(*MUTED)
    pdf.cell(0, 4.5, "Jan 2024 - Present", align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "B", 8.5)
    pdf.set_text_color(*BLUE)
    pdf.cell(0, 4.0, "Bridgeness Technologies Pvt. Ltd.  -  Reelax (getreelax.com)", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.5)

    bullets = [
        "Build and maintain responsive full-stack applications with React.js, Node.js, Express.js, and MongoDB for the Reelax platform.",
        "Built Reelax AI Search / AI Chat using Prompt Engineering and conversational LLM workflows to convert natural-language queries into real-time creator filters, tags, and discovery results.",
        "Championed AI-assisted development across the team using Cursor and ChatGPT for rapid prototyping, complex refactoring, test case generation, and API schema design.",
        "Engineered structured prompt templates and AI automation to generate dynamic scripts and task-specific workflows.",
        "Integrated Giddh Accounting API and Zoho APIs for invoicing, purchase orders, CRM, and financial record automation.",
        "Built Instagram Graph API Comment-to-DM automation to improve influencer engagement.",
        "Integrated payments (Razorpay/Cashfree), JWT auth, Redis queues (BullMQ), and Elasticsearch-powered search.",
        "Optimized frontend/API performance and collaborated on pixel-perfect responsive UI and scalable Git workflows.",
    ]
    for b in bullets:
        pdf.bullet(b)

    # Projects
    pdf.section_title("Key Projects")
    projects = [
        (
            "Reelax AI Search",
            "React, Node.js, Prompt Engineering, AI Chat, Elasticsearch",
            "Conversational AI chat for influencer discovery - NL queries update filters, tags, and a live Instagram/YouTube creator table in real time. Live: brands.getreelax.com",
        ),
        (
            "Reelax Brands Platform",
            "React, Redux, JavaScript",
            "Brand-facing SPA for influencer discovery, campaigns, marketplace, analytics, contracts, and subscriptions.",
        ),
        (
            "Reelax Core API",
            "Node.js, Express, MongoDB, MySQL, Redis, JWT",
            "Backend for campaigns, payments, messaging, KYC, credits, Zoho API integrations, and AI features.",
        ),
        (
            "Reelax Microservices & Admin",
            "Node.js, BullMQ, React, MUI",
            "Async IG/YT sync workers plus internal ops console for KYC, payouts, contracts, and campaign admin.",
        ),
    ]
    for title, tech, desc in projects:
        pdf.set_font("Helvetica", "B", 9.0)
        pdf.set_text_color(*INK)
        pdf.cell(0, 4.0, title, new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "I", 7.8)
        pdf.set_text_color(*BLUE)
        pdf.cell(0, 3.2, tech, new_x="LMARGIN", new_y="NEXT")
        pdf.body_text(desc, size=8.2)
        pdf.ln(0.5)

    # Skills
    pdf.section_title("Technical Skills")
    skills = [
        ("Frontend", "HTML, CSS, JavaScript, React.js, Redux, Responsive Design"),
        ("Backend", "Node.js, Express.js, REST APIs, JWT, BullMQ, Docker"),
        ("Databases", "MongoDB, MySQL, Redis, Elasticsearch"),
        ("Integrations", "Giddh API, Zoho API, Instagram Graph API, Razorpay, Cashfree, OpenAI / LLM APIs"),
        ("AI & Tooling", "Prompt Engineering, Cursor, ChatGPT, LLM Integrations, AI-Assisted Coding"),
        ("Tools", "Cursor, VS Code, GitHub, Postman, Figma, Agile / Git workflows"),
    ]
    for label, value in skills:
        pdf.set_x(14)
        pdf.set_font("Helvetica", "B", 8.5)
        pdf.set_text_color(*INK)
        pdf.write(3.8, f"{label}: ")
        pdf.set_font("Helvetica", "", 8.5)
        pdf.set_text_color(*MUTED)
        pdf.write(3.8, value)
        pdf.ln(4.2)

    # Education
    pdf.section_title("Education")
    pdf.set_font("Helvetica", "B", 8.8)
    pdf.set_text_color(*INK)
    pdf.cell(130, 4.0, "B.Tech, Electronics & Communication Engineering", new_x="RIGHT")
    pdf.set_font("Helvetica", "", 8.5)
    pdf.set_text_color(*MUTED)
    pdf.cell(0, 4.0, "2019 - 2023", align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 8.5)
    pdf.cell(0, 3.6, "Lakshmi Narain College of Technology & Science, Bhopal  -  8.33 CGPA", new_x="LMARGIN", new_y="NEXT")

    pdf.ln(0.8)
    pdf.set_font("Helvetica", "", 7.8)
    pdf.set_text_color(*MUTED)
    pdf.cell(
        0,
        3.5,
        "Languages: English (Full Professional)  -  Hindi (Full Professional)  |  Interests: Coding, Cricket, Stock Market",
        new_x="LMARGIN",
        new_y="NEXT",
    )

    OUT_PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT_PUBLIC))
    pdf.output(str(OUT_DOWNLOADS))
    pdf.output(str(OUT_DOWNLOADS_ALT))
    pdf.output(str(OUT_DOWNLOADS_ALT2))
    print(f"Total pages: {pdf.page_no()}")
    print(f"Wrote {OUT_PUBLIC}")
    print(f"Wrote {OUT_DOWNLOADS}")
    print(f"Wrote {OUT_DOWNLOADS_ALT}")
    print(f"Wrote {OUT_DOWNLOADS_ALT2}")


if __name__ == "__main__":
    build()
