import React from 'react';

const ROLE_CONTENT = {
  admin: {
    summary: [
      { label: 'Pending approvals', value: '12', trend: '+4 today' },
      { label: 'Active disputes', value: '3', trend: '2 escalated' },
      { label: 'New listings', value: '28', trend: '+7 this week' }
    ],
    sections: [
      {
        title: 'User governance',
        description: 'Verify new users, update roles, and flag suspicious activity.',
        items: ['Approve farmer and owner onboarding', 'Review role change requests', 'Suspend compromised accounts']
      },
      {
        title: 'Platform oversight',
        description: 'Keep operations smooth by reviewing demand and disputes.',
        items: ['Monitor booking volume by region', 'Resolve open disputes', 'Review SLA performance']
      },
      {
        title: 'Reports and insights',
        description: 'Export data and share weekly performance snapshots.',
        items: ['Generate weekly analytics report', 'Export revenue metrics', 'Track equipment utilization']
      }
    ]
  },
  farmer: {
    summary: [
      { label: 'Upcoming bookings', value: '4', trend: 'Next in 2 days' },
      { label: 'Saved equipment', value: '9', trend: '2 new matches' },
      { label: 'Active requests', value: '3', trend: '1 awaiting approval' }
    ],
    sections: [
      {
        title: 'Equipment discovery',
        description: 'Find and compare nearby equipment that fits your crop plan.',
        items: ['Search by availability window', 'Compare pricing and ratings', 'Save preferred owners']
      },
      {
        title: 'Booking management',
        description: 'Coordinate schedules and stay updated on confirmations.',
        items: ['Track booking approvals', 'Reschedule upcoming rentals', 'Message equipment owners']
      },
      {
        title: 'Field operations',
        description: 'Keep records for crop tasks and equipment usage history.',
        items: ['Log completed jobs', 'Track equipment usage hours', 'Leave feedback after completion']
      }
    ]
  },
  owner: {
    summary: [
      { label: 'Pending requests', value: '6', trend: '3 new today' },
      { label: 'Active rentals', value: '5', trend: '2 ending soon' },
      { label: 'Projected earnings', value: '$2.4k', trend: '+12% MoM' }
    ],
    sections: [
      {
        title: 'Listing management',
        description: 'Keep your fleet details updated and discoverable.',
        items: ['Update availability calendar', 'Upload maintenance records', 'Add new equipment photos']
      },
      {
        title: 'Booking workflow',
        description: 'Review requests quickly and communicate with farmers.',
        items: ['Approve or decline requests', 'Confirm delivery logistics', 'Set security deposits']
      },
      {
        title: 'Revenue tracking',
        description: 'Monitor payouts, invoices, and tax-ready summaries.',
        items: ['View weekly payout summary', 'Download invoices', 'Track utilization rates']
      }
    ]
  }
};

function Dashboard({ user, onLogout }) {
  const content = ROLE_CONTENT[user.role] || { summary: [], sections: [] };
  const roleLabel = user.role.charAt(0).toUpperCase() + user.role.slice(1);

  return (
    <div className="dashboard-shell">
      <nav className="dashboard-topbar">
        <div className="dashboard-brand">Farm OnDemand</div>
        <div className="dashboard-topbar-right">
          <span className={`role-badge role-${user.role}`}>{roleLabel}</span>
          <div className="user-chip">{user.username}</div>
          <button className="cta-btn dashboard-logout" onClick={onLogout}>
            Log out
          </button>
        </div>
      </nav>

      <div className="dashboard-page">
        <header className="dashboard-hero">
          <div>
            <h1>Welcome back, {user.username}</h1>
            <p className="dashboard-subtitle">
              Here is your {roleLabel.toLowerCase()} overview for today.
            </p>
          </div>
          <div className="dashboard-actions">
            <button className="cta-btn">Primary action</button>
            <button className="cta-btn cta-outline">View reports</button>
          </div>
        </header>

        <section className="dashboard-summary">
          {content.summary.map((item) => (
            <div className="summary-card" key={item.label}>
              <div className="summary-value">{item.value}</div>
              <div className="summary-label">{item.label}</div>
              <div className="summary-trend">{item.trend}</div>
            </div>
          ))}
        </section>

        <section className="dashboard-grid">
          {content.sections.map((section) => (
            <div className="dashboard-card" key={section.title}>
              <h3>{section.title}</h3>
              <p className="dashboard-card-text">{section.description}</p>
              <ul className="dashboard-list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
