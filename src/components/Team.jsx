import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

import mehadi from "../assets/formal_mehadi.png"
import siam from "../assets/siam3.jpg"

const Team = () => {

    const navigate = useNavigate();

    const team = [
        {
            name: 'Mehadi Hasan',
            position: 'CEO & Founder',
            bio: '1+ years in software development',
            image: mehadi,
            portfolio: "/portfolio/mehadi"
        },
        {
            name: 'Siam Hossen',
            position: ' Co-founder & COO',
            bio: 'Expert on Marketing',
            image: siam,
            portfolio: "/portfolio/Siam"
        },

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
                        <div className="team-card" key={index} onClick={() => navigate(member.portfolio)}>

                            <div className="member-image">
                                <img src={member.image} alt={member.name} />
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