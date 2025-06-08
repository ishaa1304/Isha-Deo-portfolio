import { useEffect, useState } from "react";

// ExperienceSection.jsx

// ExperienceSection.jsx

const experiences = [
  {
    role: "Research Fellow",
    company: "Hyperverge",
    location: "Chennai",
    duration: "Feb 2024 - Jun 2024",
    responsibilities: [
      "Engineered a Deepfake Detection System focusing on analyzing lip-sync discrepancies using Python.",
      "Curated realistic datasets using Wave2Lip, generating lifelike lip-sync movements to mimic real-world scenarios.",
      "Integrated Generative Adversarial Networks (GANs) to identify subtle and complex deepfake alterations.",
    ],
  },
  {
    role: "AI Intern",
    company: "Cloud Scale Inc",
    location: "Chennai",
    duration: "Jun 2024 - Aug 2024",
    responsibilities: [
      "Worked on machine learning models for cloud-based AI projects, optimizing workflows and improving model performance.",
      "Designed High-Level and Low-Level Design diagrams, enhancing problem-solving and quantitative analysis skills.",
      "Leveraged Azure cloud services to streamline deployment and improve model efficiency.",
      "Utilized tools like Azure Service, Jira, and deployed models on the cloud platform.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "eNoahiSolutions",
    location: "Pune",
    duration: "Present",
    responsibilities: [
      "Gaining deep understanding of ERP systems, focusing on SAP and QAD modules relevant to the automotive domain.",
      "Performing detailed data analysis on Seeburger MFT transaction data to extract business insights.",
      "Preparing comprehensive reports to support decision-making and operational improvements.",
      "Collaborating with cross-functional teams to understand data flows and identify key performance metrics.",
    ],
  },
  
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-primary font-medium">
                {exp.company} &mdash; {exp.location}
              </p>
              <p className="text-muted-foreground mb-4">{exp.duration}</p>

              <ul className="list-disc list-inside space-y-2 text-foreground">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
