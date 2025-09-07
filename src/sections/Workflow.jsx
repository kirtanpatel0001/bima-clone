import React from 'react';

export default function Workflow() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Workflow Automation</h2>
        <p className="text-gray-600 max-w-3xl">
          Streamline repetitive tasks and reduce manual effort with tailored workflow automation. We design
          reliable patterns that connect your tools, remove bottlenecks, and let your team focus on high-value work.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Data Sync</h3>
            <p className="text-sm text-gray-500 mt-2">Keep records consistent across systems automatically.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Notifications</h3>
            <p className="text-sm text-gray-500 mt-2">Trigger alerts and approvals based on business rules.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Reporting</h3>
            <p className="text-sm text-gray-500 mt-2">Automated reports delivered where your team already works.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
