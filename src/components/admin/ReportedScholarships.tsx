import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle, Trash2, ExternalLink } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || '';

interface ReportedScholarshipsProps {
  adminEmail: string;
}

export const ReportedScholarships: React.FC<ReportedScholarshipsProps> = ({ adminEmail }) => {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now, since we don't have a backend endpoint for this yet
    setReports([
      { id: '1', scholarshipId: '123', scholarshipTitle: 'Fake Scholarship 2026', reason: 'Scam/Phishing', reportedBy: 'user@example.com', date: '2026-03-20', status: 'Pending' },
      { id: '2', scholarshipId: '456', scholarshipTitle: 'Expired Grant', reason: 'Deadline has passed', reportedBy: 'test@test.com', date: '2026-03-19', status: 'Resolved' },
    ]);
    setLoading(false);
  }, []);

  const handleResolve = (id: string) => {
    setReports(reports.map(r => r.id === id ? { ...r, status: 'Resolved' } : r));
  };

  const handleDelete = (id: string) => {
    setReports(reports.filter(r => r.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-4 text-xs font-black text-slate-500 uppercase tracking-wider">Scholarship</th>
                <th className="p-4 text-xs font-black text-slate-500 uppercase tracking-wider">Reason</th>
                <th className="p-4 text-xs font-black text-slate-500 uppercase tracking-wider">Reported By</th>
                <th className="p-4 text-xs font-black text-slate-500 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-black text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{report.scholarshipTitle}</span>
                      <a href={`#`} className="text-blue-500 hover:text-blue-700">
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">{report.reason}</td>
                  <td className="p-4 text-sm text-slate-500">{report.reportedBy}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                      report.status === 'Resolved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    {report.status === 'Pending' && (
                      <button 
                        onClick={() => handleResolve(report.id)}
                        className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                        title="Mark as Resolved"
                      >
                        <CheckCircle size={18} />
                      </button>
                    )}
                    <button 
                      onClick={() => handleDelete(report.id)}
                      className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Delete Report"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {reports.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500 font-medium">
                    No reported scholarships found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};
