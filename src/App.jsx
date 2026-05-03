import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Terminal, 
  GitHub, 
  Box, 
  Server, 
  Ship, 
  Users, 
  CheckCircle,
  Clock,
  Layers,
  Network,
  Activity
} from 'lucide-react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <Rocket size={28} color="#60a5fa" />
        <h1>CI/CD Dashboard</h1>
      </nav>

      <main className="main-content">
        {/* Project Overview */}
        <div className="card full-width">
          <div className="card-header">
            <Terminal className="card-icon" />
            <h2 className="card-title">Project Overview</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            This dashboard visualizes the continuous integration and continuous deployment (CI/CD) pipeline for our modern web application. 
            The workflow begins with code changes in <strong>GitHub</strong>, which triggers an automated build using <strong>Jenkins</strong>. 
            The application is then containerized into a <strong>Docker</strong> image, rigorously tested, and seamlessly orchestrated 
            and deployed across a highly available <strong>Kubernetes</strong> cluster.
          </p>
        </div>

        {/* Pipeline Stages */}
        <div className="card full-width">
          <div className="card-header">
            <Activity className="card-icon" />
            <h2 className="card-title">Pipeline Stages</h2>
          </div>
          
          <div className="pipeline-container">
            <div className="pipeline-stage">
              <div className="stage-icon-wrapper active">
                <Github size={28} />
              </div>
              <span className="stage-name">Code (GitHub)</span>
            </div>
            
            <div className="pipeline-connector"></div>
            
            <div className="pipeline-stage">
              <div className="stage-icon-wrapper active">
                <Box size={28} />
              </div>
              <span className="stage-name">Build (Docker)</span>
            </div>
            
            <div className="pipeline-connector"></div>
            
            <div className="pipeline-stage">
              <div className="stage-icon-wrapper active">
                <CheckCircle size={28} />
              </div>
              <span className="stage-name">Test (Automated)</span>
            </div>
            
            <div className="pipeline-connector"></div>
            
            <div className="pipeline-stage">
              <div className="stage-icon-wrapper active">
                <Ship size={28} />
              </div>
              <span className="stage-name">Deploy (Kubernetes)</span>
            </div>
          </div>
        </div>

        {/* Deployment Status Panel */}
        <div className="card">
          <div className="card-header">
            <Server className="card-icon" />
            <h2 className="card-title">Deployment Status</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="data-label">Current State</span>
              <div className="status-badge success">
                <div className="pulse"></div>
                SUCCESS
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="data-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={16} /> Last Deployment
              </span>
              <span className="data-value">Today at {currentTime}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="data-label">Environment</span>
              <span className="data-value" style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '4px' }}>Production</span>
            </div>
          </div>
        </div>

        {/* Docker Image Info */}
        <div className="card">
          <div className="card-header">
            <Layers className="card-icon" />
            <h2 className="card-title">Docker Image Info</h2>
          </div>
          <ul className="data-list">
            <li className="data-item">
              <span className="data-label">Image Name</span>
              <span className="data-value">frontend-dashboard-app</span>
            </li>
            <li className="data-item">
              <span className="data-label">Version Tag</span>
              <span className="data-value" style={{ fontFamily: 'monospace', color: 'var(--accent)' }}>v1.4.2-stable</span>
            </li>
            <li className="data-item">
              <span className="data-label">Size</span>
              <span className="data-value">128 MB</span>
            </li>
            <li className="data-item">
              <span className="data-label">Status</span>
              <span className="data-value" style={{ color: 'var(--success)' }}>Available in Registry</span>
            </li>
          </ul>
        </div>

        {/* Kubernetes Info */}
        <div className="card">
          <div className="card-header">
            <Network className="card-icon" />
            <h2 className="card-title">Kubernetes Info</h2>
          </div>
          <ul className="data-list">
            <li className="data-item">
              <span className="data-label">Deployment Name</span>
              <span className="data-value">cicd-dashboard-deployment</span>
            </li>
            <li className="data-item">
              <span className="data-label">Pods Running</span>
              <span className="data-value" style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--success)', display: 'inline-block' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--success)', display: 'inline-block' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--success)', display: 'inline-block' }}></span>
                <span style={{ marginLeft: '8px' }}>3 / 3</span>
              </span>
            </li>
            <li className="data-item">
              <span className="data-label">Service Type</span>
              <span className="data-value" style={{ fontFamily: 'monospace' }}>NodePort (3000:31250)</span>
            </li>
            <li className="data-item">
              <span className="data-label">Cluster IP</span>
              <span className="data-value" style={{ fontFamily: 'monospace' }}>10.96.0.55</span>
            </li>
          </ul>
        </div>

        {/* Team / Developer Section */}
        <div className="card">
          <div className="card-header">
            <Users className="card-icon" />
            <h2 className="card-title">Team / Developer</h2>
          </div>
          <div className="team-member">
            <div className="avatar">AK</div>
            <div className="member-info">
              <h3>Aditi Kukreti</h3>
              <p>DevOps Engineer</p>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              Responsible for maintaining the CI/CD pipelines, container orchestration, and ensuring high availability of deployments.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
