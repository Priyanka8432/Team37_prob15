import React from 'react';
import DragDropUpload from './DragDropUpload'; // Make sure the path is correct

// Beta Testing Page
export const BetaTestingPage = () => (
  <div className="min-h-screen bg-blue-50 p-10">
    <h1 className="text-3xl font-bold text-blue-700 mb-4">Beta Testing</h1>
    <p className="text-blue-800 mb-6">
      This page is used to gather early feedback from internal or trusted users
      before wider release.
    </p>
    <DragDropUpload
      onFileUpload={(file) => console.log('Beta testing image uploaded:', file)}
    />
  </div>
);

// Internal Demo Page
export const InternalDemoPage = () => (
  <div className="min-h-screen bg-green-50 p-10">
    <h1 className="text-3xl font-bold text-green-700 mb-4">Internal Demo</h1>
    <p className="text-green-800 mb-6">
      Showcase this feature internally for team alignment and early input.
    </p>
    <DragDropUpload
      onFileUpload={(file) => console.log('Internal demo image uploaded:', file)}
    />
  </div>
);

// Stakeholder Update Page
export const StakeholderUpdatePage = () => (
  <div className="min-h-screen bg-yellow-50 p-10">
    <h1 className="text-3xl font-bold text-yellow-700 mb-4">
      Stakeholder Update
    </h1>
    <p className="text-yellow-800 mb-6">
      Communicate progress, milestones, or roadmap updates to stakeholders.
    </p>
    <DragDropUpload
      onFileUpload={(file) => console.log('Stakeholder update image uploaded:', file)}
    />
  </div>
);

// Feature Release Page
export const FeatureReleasePage = () => (
  <div className="min-h-screen bg-indigo-50 p-10">
    <h1 className="text-3xl font-bold text-indigo-700 mb-4">Feature Release</h1>
    <p className="text-indigo-800 mb-6">
      Announce a new feature or product update to internal teams or specific
      audiences.
    </p>
    <DragDropUpload
      onFileUpload={(file) => console.log('Feature release image uploaded:', file)}
    />
  </div>
);

// Maintenance Update Page
export const MaintenancePage = () => (
  <div className="min-h-screen bg-red-50 p-10">
    <h1 className="text-3xl font-bold text-red-700 mb-4">Maintenance Update</h1>
    <p className="text-red-800 mb-6">
      Inform users of upcoming maintenance windows or completed infrastructure
      work.
    </p>
    <DragDropUpload
      onFileUpload={(file) => console.log('Maintenance image uploaded:', file)}
    />
  </div>
);

// Blank Builder Page
export const BlankBuilder = () => (
  <div className="min-h-screen bg-gray-100 p-10">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Blank Template</h1>
    <p className="text-gray-700 mb-6">
      Start from scratch and build your own internal launch page.
    </p>
    <DragDropUpload
      onFileUpload={(file) => console.log('Blank template image uploaded:', file)}
    />
  </div>
);

// Alpha Launch Page
export const AlphaLaunchPage = () => (
  <div className="min-h-screen bg-purple-50 p-10">
    <h1 className="text-3xl font-bold text-purple-700 mb-4">Alpha Launch</h1>
    <p className="text-purple-800 mb-6">
      A soft launch to test core functionality with minimal users.
    </p>
    <DragDropUpload
      onFileUpload={(file) => console.log('Alpha launch image uploaded:', file)}
    />
  </div>
);