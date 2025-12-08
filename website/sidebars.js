// sidebars.js

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    'server-info',

    {
      type: 'category',
      label: 'Mastercontroller',
      collapsed: false,
      items: [
        'mastercontroller-initial',
        'mastercontroller-install',
        'mastercontroller-config',
      ],
    },

    {
      type: 'category',
      label: 'Remote Agent Configuration',
      collapsed: false,
      items: [
        'remote-oracle',
        'remote-linux',
        'remote-mssql',
        'remote-oracle11',
      ],
    },

    'agent-deployment',
    'host-file-management',
  ],
};

module.exports = sidebars;
