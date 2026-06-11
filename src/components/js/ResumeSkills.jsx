import "../css/ResumeSkills.css";

function ResumeSkills() {
    return (
        <>
            <section id="rskill" className="contact">
                <div className="container">
                    <div className="skill-content">
                        <div className="skill-header">
                            <p>Technical & Professional Skills</p>
                        </div>
                        <div className="row">
                            {/* Column 1: Core & General Competencies */}
                            <div className="col-md-4 mt-5">
                                <h2>Core & General 🔎</h2>
                                <h4>Networking Core</h4>
                                <ul>
                                    <li><p>Layer 1-3 Topology</p></li>
                                    <li><p>VLAN Configuration</p></li>
                                    <li><p>IPAM & Subnetting</p></li>
                                    <li><p>Fiber/Copper Topology</p></li>
                                    <li><p>CLI Configuration</p></li>
                                </ul>
                                <h4>Soft Skills</h4>
                                <ul>
                                    <li><p>Analytical Troubleshooting</p></li>
                                    <li><p>SLA Compliance</p></li>
                                    <li><p>Technical Documentation</p></li>
                                    <li><p>Cross-functional Collaboration</p></li>
                                    <li><p>Critical Alert Monitoring</p></li>
                                </ul>
                                <h4>Spoken Languages</h4>
                                <ul>
                                    <li><p>English (Native)</p></li>
                                    <li><p>Spanish (Fluent)</p></li>
                                </ul>
                            </div>

                            {/* Column 2: Infrastructure & Automation */}
                            <div className="col-md-4 mt-5">
                                <h2>Infrastructure & Code 🌐</h2>
                                <h4>Hardware & Platforms</h4>
                                <ul>
                                    <li><p>Arista Hardware (EOS)</p></li>
                                    <li><p>Proxmox VE (LXC/VMs)</p></li>
                                    <li><p>Docker Containerization</p></li>
                                    <li><p>Amazon Web Services (AWS)</p></li>
                                    <li><p>Server Rack Architectures</p></li>
                                </ul>
                                <h4>Programming & Automation</h4>
                                <ul>
                                    <li><p>Python</p></li>
                                    <li><p>Ansible (IaC Basics)</p></li>
                                    <li><p>Bash Scripting</p></li>
                                    <li><p>JavaScript</p></li>
                                    <li><p>SQL</p></li>
                                </ul>
                                <h4>Web Infrastructure & APIs</h4>
                                <ul>
                                    <li><p>NGINX Reverse Proxy</p></li>
                                    <li><p>Cloudflare</p></li>
                                    <li><p>RESTful API Integration</p></li>
                                    <li><p>Django Framework</p></li>
                                </ul>
                            </div>

                            {/* Column 3: Auxiliary & Enterprise Software */}
                            <div className="col-md-4 mt-5">
                                <h2>Systems & Tools 🔧</h2>
                                <h4>Home-Lab & Routing Labs</h4>
                                <ul>
                                    <li><p>pfSense / Firewall Routing</p></li>
                                    <li><p>Pi-hole (Local DNS)</p></li>
                                    <li><p>TrueNAS (Network Storage)</p></li>
                                    <li><p>Tailscale & WireGuard VPN</p></li>
                                    <li><p>OpenDCIM (Asset Management)</p></li>
                                </ul>
                                <h4>Monitoring & Data Systems</h4>
                                <ul>
                                    <li><p>Grafana Telemetry</p></li>
                                    <li><p>MySQL / MongoDB Databases</p></li>
                                    <li><p>GitLab</p></li>
                                    <li><p>Git / GitHub</p></li>
                                </ul>
                                <h4>Terminal & Operations Tools</h4>
                                <ul>
                                    <li><p>ServiceNow (ITIL / Ticketing)</p></li>
                                    <li><p>PuTTY & SSH Terminals</p></li>
                                    <li><p>WinSCP & VS Code</p></li>
                                    <li><p>Jira & Confluence</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default ResumeSkills;