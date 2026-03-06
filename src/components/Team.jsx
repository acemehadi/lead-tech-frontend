import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Team = () => {
    const team = [
        {
            name: 'Rafiq Ahmed',
            position: 'CEO & Founder',
            bio: '15+ years in software development',
            image: '👨‍💼'
        },
        {
            name: 'Fatema Begum',
            position: 'CTO',
            bio: 'Former Tech Lead at Google',
            image: '👩‍💻'
        },
        {
            name: 'Shahidul Islam',
            position: 'Lead Developer',
            bio: 'Full-stack expert',
            image: '👨‍💻'
        },
        {
            name: 'Nusrat Jahan',
            position: 'Project Manager',
            bio: 'PMP certified',
            image: '👩‍💼'
        }
    ];

    return (
        <section id="team" className="team">
            <div className="container">
                <div className="section-header">
                    <h2>Our Team</h2>
                    <p>Meet the experts behind our success</p>
                </div>
                <div className="team-grid">
                    {team.map((member, index) => (
                        <div className="team-card" key={index}>
                            <div className="member-image">
                                <span>{member.image}</span>
                            </div>
                            <h3>{member.name}</h3>
                            <p className="position">{member.position}</p>
                            <p className="bio">{member.bio}</p>
                            <div className="social-links">
                                <a href="#"><FaLinkedin /></a>
                                <a href="#"><FaGithub /></a>
                                <a href="#"><FaTwitter /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;