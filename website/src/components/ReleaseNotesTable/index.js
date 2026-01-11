import React from 'react';
import styles from './styles.module.css';
import ReactMarkdown from 'react-markdown';

/**
 * ReleaseNotesTable Component
 * 
 * Renders a standardized table for release notes fixed issues.
 * 
 * @param {Object[]} data - Array of issue objects
 * @param {string} data[].id - Issue ID (Fixed Issues only)
 * @param {string} data[].feature - Feature Name (New Features only)
 * @param {string} data[].reference - Reference ID (Fixed Issues only)
 * @param {string} data[].description - Description content
 * @param {string} tableType - 'fixed-issues' (default) or 'new-features'
 */
export default function ReleaseNotesTable({ data, tableType = 'fixed-issues' }) {
    if (!data || !Array.isArray(data)) {
        return <p>No data provided for Release Notes Table.</p>;
    }

    return (
        <div className={styles.tableContainer}>
            <table className={styles.releaseTable}>
                {/* Header Logic */}
                <thead>
                    <tr>
                        {tableType === 'fixed-issues' && <th className={styles.colIssueId}>Issue ID</th>}
                        <th className={styles.colReference}>
                            {tableType === 'new-features' ? 'Feature' : 'Reference'}
                        </th>
                        <th className={styles.colDescription}>
                            {tableType === 'new-features' ? "What's New" : 'Description'}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {tableType === 'fixed-issues' && (
                                <td className={styles.colIssueId}>
                                    <ReactMarkdown children={row.id || ''} components={{ p: React.Fragment }} />
                                </td>
                            )}
                            <td className={styles.colReference}>
                                <ReactMarkdown children={row.reference || row.feature || ''} components={{ p: React.Fragment }} />
                            </td>
                            <td className={styles.colDescription}>
                                <ReactMarkdown children={row.description || ''} components={{ p: React.Fragment }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
