"use client";
import React, { useTransition, useState} from 'react';
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Electromechanical Enegineering</li>
                <li>Applications Engineering</li>
                <li>Engineering Management</li>
                <li>AWS</li>
                <li>Kubernetes</li>
                <li>Python</li>
                <li>React</li>
                <li>Next.js</li>
            </ul>
        )
    },

    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Penn State Univerity</li>
                <li>BS Mechanical Engineering</li>
                <li>GPA 3.3</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Lean Six Sigma Green Belt</li>
                <li>AWS Cloud Practitioner</li>
                <li>Certified Kubernetes Administrator (CKA)</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition (() => {
            setTab(id);
       });
    };
    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">I'm an engineer by day and working hard to improve my developer skills. I've been doing alot of work in my evenings to learn new skills and work on projects just like this website!
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")}
                            active={tab==="skills"}
                            >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")}
                            active={tab==="education"}
                            >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")}
                            active={tab==="certifications"}
                            >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content} </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;