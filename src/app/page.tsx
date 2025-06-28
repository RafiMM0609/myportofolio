"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// SEO optimized component
export default function Home() {
  // SEO optimization - set page title and meta description
  useEffect(() => {
    document.title = "Rafi Mahrus - Software Developer Portfolio | Full Stack Engineer";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Rafi Mahrus - Professional Software Developer specializing in full-stack development, AI, and cloud architecture. Based in Yogyakarta, Indonesia.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Rafi Mahrus - Professional Software Developer specializing in full-stack development, AI, and cloud architecture. Based in Yogyakarta, Indonesia.';
      document.head.appendChild(meta);
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'software developer, full stack developer, AI engineer, React, Node.js, Python, Yogyakarta developer, web development');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'software developer, full stack developer, AI engineer, React, Node.js, Python, Yogyakarta developer, web development';
      document.head.appendChild(meta);
    }
  }, []);

  const scrollToAbout = () => {
    const helloTarget = document.getElementById('hello-target');
    if (helloTarget) {
      helloTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Static Background - Better for SEO */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-indigo-900/10"></div>
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Minimal decorative elements - static for SEO */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-600/5 rounded-full blur-3xl opacity-40"></div>
        </div>

        {/* Portfolio Header */}
        <div className="text-center relative z-10">
          <div className="glass-effect-enhanced text-white px-8 py-4 rounded-xl inline-block mb-12">
            <span className="text-xl font-bold tracking-wider">2025</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
            PORTFOLIO
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90">
            <span className="font-bold text-2xl md:text-3xl">Rafi Mahrus</span>
            <span className="hidden md:block text-2xl text-slate-400">|</span>
            <span className="glass-effect-enhanced px-6 py-3 rounded-lg text-lg font-semibold tracking-wide hover:bg-white/10 transition-all duration-300">
              Software Developer
            </span>
          </div>
        </div>

        {/* Scroll Indicator - Static */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-12 group cursor-pointer focus:outline-none"
          aria-label="Scroll to about section"
        >
          <div className="flex flex-col items-center space-y-3">
            <span className="text-slate-300 text-sm font-medium tracking-wider opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              SCROLL DOWN
            </span>
            <div className="w-8 h-8 border-b-2 border-r-2 border-slate-300 transform rotate-45 group-hover:border-blue-400 transition-colors duration-300"></div>
          </div>
        </button>

        {/* Static Decorative Elements */}
        <div className="absolute top-16 left-16 w-3 h-3 bg-blue-500/60 rounded-full"></div>
        <div className="absolute top-32 right-32 w-4 h-4 bg-indigo-500/50 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-slate-500/40 rounded-full"></div>
        <div className="absolute top-24 right-16 w-1 h-1 bg-gray-500/50 rounded-full"></div>
      </section>

      {/* About Section */}
      <section id="about-section" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Enhanced Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-500/10 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-400/15 to-blue-500/20 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-100/30 to-blue-100/20 rounded-full blur-3xl opacity-40"></div>
          
          {/* Geometric decorations */}
          <div className="absolute top-32 left-16 w-8 h-8 bg-blue-500/30 transform rotate-45 rounded-lg"></div>
          <div className="absolute bottom-40 right-32 w-6 h-6 bg-indigo-500/40 transform rotate-12 rounded-lg"></div>
          <div className="absolute top-64 right-48 w-4 h-4 bg-purple-500/35 transform -rotate-45 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hidden scroll target for precise positioning */}
          <div id="hello-target" className="absolute -top-20"></div>
          
          {/* Hero Card - Centered Professional Layout */}
          <div className="relative mb-16">
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-purple-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/90 backdrop-blur-lg p-8 lg:p-12 rounded-3xl border border-white/20 shadow-2xl">
              
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                
                {/* Profile Image - Clean & Professional */}
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative group">
                    {/* Subtle glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Image container */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50/50 p-2 rounded-2xl shadow-xl">
                      <div className="relative overflow-hidden rounded-xl">
                        <Image
                          src="/myphoto.jpg"
                          alt="Rafi Mahrus - Software Developer"
                          width={280}
                          height={350}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority
                        />
                        {/* Professional overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent"></div>
                      </div>
                    </div>
                    
                    {/* Status indicator */}
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Available
                    </div>
                  </div>
                </div>

                {/* Content Section - Clean Typography */}
                <div className="lg:col-span-3 space-y-8">
                  
                  {/* Greeting & Name */}
                  <div className="text-center lg:text-left">
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-2xl font-bold mb-4">
                      Hello, I'm
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
                      Rafi Mahrus
                    </h1>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                      <span className="professional-badge bg-blue-500">
                        <span className="badge-icon">💻</span>
                        Software Developer
                      </span>
                      <span className="professional-badge bg-indigo-500">
                        <span className="badge-icon">🎂</span>
                        24 years
                      </span>
                      <span className="professional-badge bg-slate-600">
                        <span className="badge-icon">📍</span>
                        Yogyakarta, ID
                      </span>
                    </div>
                  </div>

                  {/* Professional Description */}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-6 rounded-xl border border-gray-100">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      I'm a passionate <span className="font-semibold text-blue-600">Software Developer</span> and{' '}
                      <span className="font-semibold text-indigo-600">AI Enthusiast</span> who transforms complex challenges into elegant solutions. 
                      I specialize in building scalable applications that create meaningful impact.
                    </p>
                    
                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                          🤝
                        </div>
                        <div>
                          <span className="font-semibold block">Let's collaborate!</span>
                          <span className="text-sm text-gray-500">Available for projects</span>
                        </div>
                      </div>
                      
                      <a 
                        href="https://www.linkedin.com/in/rafi-mahrus-44b528231/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="professional-linkedin-button"
                        aria-label="Connect with Rafi Mahrus on LinkedIn"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills & Experience Grid */}

          {/* Skills & Experience Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-6 h-6 bg-blue-500 rounded-lg mr-3"></span>
                Skills & Technologies
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Technical Skills */}
                <div className="clean-skill-card">
                  <div className="skill-header">
                    <span className="skill-emoji">⚡</span>
                    <h4 className="skill-title">Technical Skills</h4>
                  </div>
                  <ul className="skill-list-clean">
                    <li>Full-Stack Development</li>
                    <li>Cloud Architecture</li>
                    <li>DevOps & CI/CD</li>
                  </ul>
                </div>

                {/* Languages */}
                <div className="clean-skill-card">
                  <div className="skill-header">
                    <span className="skill-emoji">🌍</span>
                    <h4 className="skill-title">Languages</h4>
                  </div>
                  <ul className="skill-list-clean">
                    <li>Indonesian (Native)</li>
                    <li>English (Advanced)</li>
                  </ul>
                </div>

                {/* Technologies */}
                <div className="clean-skill-card">
                  <div className="skill-header">
                    <span className="skill-emoji">🛠️</span>
                    <h4 className="skill-title">Technologies</h4>
                  </div>
                  <ul className="skill-list-clean">
                    <li>React/Next.js</li>
                    <li>Node.js/Express</li>
                    <li>Python/Django</li>
                    <li>PostgreSQL/MongoDB</li>
                    <li>Docker/Kubernetes</li>
                  </ul>
                </div>

                {/* Focus Areas */}
                <div className="clean-skill-card">
                  <div className="skill-header">
                    <span className="skill-emoji">🎯</span>
                    <h4 className="skill-title">Focus Areas</h4>
                  </div>
                  <ul className="skill-list-clean">
                    <li>AI/Machine Learning</li>
                    <li>System Architecture</li>
                    <li>Performance Optimization</li>
                    <li>API Development</li>
                    <li>Data Analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience & Education */}
            <div className="space-y-8">
              
              {/* Experience */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-6 h-6 bg-indigo-500 rounded-lg mr-3"></span>
                  Experience
                </h3>
                
                <div className="space-y-6">
                  <div className="clean-timeline-item">
                    <div className="timeline-date current">2024 - Present</div>
                    <h4 className="timeline-position">Senior Software Developer</h4>
                    <p className="timeline-company">Tech Solutions Inc.</p>
                    <p className="timeline-desc">Full-stack development and system architecture for enterprise applications.</p>
                    <div className="timeline-skills">
                      <span className="skill-tag">Leadership</span>
                      <span className="skill-tag">Architecture</span>
                      <span className="skill-tag">Mentoring</span>
                    </div>
                  </div>
                  
                  <div className="clean-timeline-item">
                    <div className="timeline-date">2023 - 2024</div>
                    <h4 className="timeline-position">Full Stack Developer</h4>
                    <p className="timeline-company">Digital Innovation Labs</p>
                    <p className="timeline-desc">Web application development and API integration.</p>
                    <div className="timeline-skills">
                      <span className="skill-tag">React</span>
                      <span className="skill-tag">Node.js</span>
                      <span className="skill-tag">APIs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded-lg mr-3"></span>
                  Education
                </h3>
                
                <div className="clean-timeline-item">
                  <div className="timeline-date">2020 - 2024</div>
                  <h4 className="timeline-position">Computer Science Degree</h4>
                  <p className="timeline-company">Yogyakarta Technology Institute</p>
                  <p className="timeline-desc">Bachelor of Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigate to Projects Button */}
        <div className="text-center mt-16">
          <div className="projects-button-section interactive-glow">
            <div className="floating-particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                Ready to see my work?
              </h3>
              <p className="text-gray-300 mb-8 text-lg max-w-md mx-auto">
                Discover the projects that showcase my skills and passion for development
              </p>
              
              <div className="projects-button-container">
                <button 
                  onClick={scrollToProjects}
                  className="projects-button"
                  aria-label="Navigate to projects section"
                >
                  <span className="projects-button-text">View My Projects</span>
                  <span className="projects-button-icon">🚀</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="min-h-screen flex flex-col items-center justify-center text-white px-8 py-16 relative overflow-hidden">
        {/* Static Background - SEO Optimized */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-indigo-900/10"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Static decorative elements */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl opacity-25"></div>
        </div>

        <div className="text-center max-w-6xl mx-auto relative z-10">
          <div className="glass-effect-enhanced text-white px-8 py-4 rounded-xl inline-block mb-12">
            <span className="text-lg font-bold tracking-wider">PROJECTS</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight drop-shadow-2xl text-white">
            MY WORK
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-16 font-medium">
            Building solutions that matter
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { id: 1, title: "E-Commerce Platform", description: "Full-stack web application with payment integration", tags: ["React", "Node.js", "PostgreSQL"] },
              { id: 2, title: "AI Analytics Dashboard", description: "Real-time data visualization with machine learning insights", tags: ["Python", "TensorFlow", "D3.js"] },
              { id: 3, title: "Mobile Banking App", description: "Secure financial application with biometric authentication", tags: ["React Native", "Blockchain"] },
              { id: 4, title: "Cloud Infrastructure", description: "Scalable microservices architecture on AWS", tags: ["Docker", "Kubernetes", "AWS"] },
              { id: 5, title: "API Gateway", description: "High-performance REST API with authentication", tags: ["Express", "JWT", "Redis"] },
              { id: 6, title: "DevOps Pipeline", description: "Automated CI/CD pipeline with monitoring", tags: ["Jenkins", "Prometheus", "Grafana"] }
            ].map((project, index) => (
              <div 
                key={project.id} 
                className="glass-effect-enhanced rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="aspect-square bg-gradient-to-br from-slate-700/30 to-gray-800/20 rounded-lg mb-6 flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-indigo-700/20 transition-all duration-300">
                  <span className="text-3xl font-bold text-white/80 group-hover:text-white transition-colors duration-300">{String(project.id).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-slate-800/60 px-3 py-1 rounded-md text-xs font-medium text-slate-300 group-hover:bg-blue-800/70 group-hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16">
            <p className="text-lg text-slate-300 mb-6">Interested in working together?</p>
            <a 
              href="https://www.linkedin.com/in/rafi-mahrus/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass-effect-enhanced px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-white"
            >
              <span>Connect on LinkedIn</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
