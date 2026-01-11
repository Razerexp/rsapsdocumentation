
import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ReleaseNotesTable from '@site/src/components/ReleaseNotesTable';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "ReleaseNotesTable" tag to our component
    ReleaseNotesTable,
};
