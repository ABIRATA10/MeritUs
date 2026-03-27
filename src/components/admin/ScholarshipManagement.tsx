import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit2, Trash2, Search, X, Upload, Download } from 'lucide-react';
import { Scholarship } from '../../types';

const API_URL = import.meta.env.VITE_API_URL || '';

interface ScholarshipManagementProps {
  adminEmail: string;
}

export const ScholarshipManagement: React.FC<ScholarshipManagementProps> = ({ adminEmail }) => {
  const [scholarships, setScholarships] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState<any | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  useEffect(() => {
    fetchScholarships();
  }, []);

  const fetchScholarships = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/admin/scholarships`, {
        headers: { 'x-user-email': adminEmail }
      });
      if (res.ok) {
        const data = await res.json();
        setScholarships(data);
      }
    } catch (error) {
      console.error('Failed to fetch scholarships:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this scholarship?')) return;
    try {
      const res = await fetch(`${API_URL}/api/admin/scholarships/${id}`, {
        method: 'DELETE',
        headers: { 'x-user-email': adminEmail }
      });
      if (res.ok) {
        setScholarships(scholarships.filter(s => s.id !== id));
        showMessage('success', 'Scholarship deleted successfully');
      } else {
        showMessage('error', 'Failed to delete scholarship');
      }
    } catch (error) {
      console.error('Failed to delete scholarship:', error);
      showMessage('error', 'Failed to delete scholarship');
    }
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const scholarshipData: any = Object.fromEntries(formData.entries());
    
    // Parse JSON fields
    ['eligible_categories', 'eligible_states', 'eligible_courses'].forEach(field => {
      if (typeof scholarshipData[field] === 'string') {
        try {
          scholarshipData[field] = JSON.parse(scholarshipData[field] as string);
        } catch {
          scholarshipData[field] = [scholarshipData[field]];
        }
      }
    });

    try {
      const url = isEditing 
        ? `${API_URL}/api/admin/scholarships/${isEditing.id}`
        : `${API_URL}/api/admin/scholarships`;
      
      const res = await fetch(url, {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-user-email': adminEmail 
        },
        body: JSON.stringify(scholarshipData)
      });

      if (res.ok) {
        fetchScholarships();
        setIsEditing(null);
        setIsCreating(false);
        showMessage('success', isEditing ? 'Scholarship updated successfully' : 'Scholarship added successfully');
      } else {
        showMessage('error', 'Failed to save scholarship');
      }
    } catch (error) {
      console.error('Failed to save scholarship:', error);
      showMessage('error', 'Failed to save scholarship');
    }
  };

  const filteredScholarships = scholarships.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isEditing || isCreating) {
    const defaultValues = isEditing || {} as any;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
      >
        {message && (
          <div className={`mb-6 p-4 rounded-xl font-bold ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
            {message.text}
          </div>
        )}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-black text-slate-900">
            {isEditing ? 'Edit Scholarship' : 'Add New Scholarship'}
          </h3>
          <button 
            onClick={() => { setIsEditing(null); setIsCreating(false); }}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
              <input 
                name="name" 
                defaultValue={defaultValues.name} 
                required 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Provider</label>
              <input 
                name="provider" 
                defaultValue={defaultValues.provider} 
                required 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Amount Per Year</label>
              <input 
                name="amount_per_year" 
                type="number"
                defaultValue={defaultValues.amount_per_year} 
                required 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Deadline</label>
              <input 
                name="deadline" 
                type="date"
                defaultValue={defaultValues.deadline} 
                required 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Eligible Categories (JSON array)</label>
              <input 
                name="eligible_categories" 
                defaultValue={JSON.stringify(defaultValues.eligible_categories || [])} 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Eligible States (JSON array)</label>
              <input 
                name="eligible_states" 
                defaultValue={JSON.stringify(defaultValues.eligible_states || [])} 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Eligible Courses (JSON array)</label>
              <input 
                name="eligible_courses" 
                defaultValue={JSON.stringify(defaultValues.eligible_courses || [])} 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Max Family Income</label>
              <input 
                name="max_family_income" 
                type="number"
                defaultValue={defaultValues.max_family_income} 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Gender</label>
              <select 
                name="gender" 
                defaultValue={defaultValues.gender || 'All'} 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="All">All</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Min Percentage</label>
              <input 
                name="min_percentage" 
                type="number"
                step="0.1"
                defaultValue={defaultValues.min_percentage} 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2 mt-8">
              <input 
                name="disability_required" 
                type="checkbox"
                id="disability_required"
                defaultChecked={defaultValues.disability_required} 
                className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
              />
              <label htmlFor="disability_required" className="text-sm font-bold text-slate-700">Disability Required</label>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
            <textarea 
              name="description" 
              defaultValue={defaultValues.description} 
              required 
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button 
              type="button"
              onClick={() => { setIsEditing(null); setIsCreating(false); }}
              className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-6 py-3 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Save Scholarship
            </button>
          </div>
        </form>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {message && (
        <div className={`p-4 rounded-xl font-bold ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
          {message.text}
        </div>
      )}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder="Search scholarships..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button 
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
            onClick={() => alert('Bulk upload feature coming soon!')}
          >
            <Upload size={18} /> Bulk Upload
          </button>
          <button 
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
            onClick={() => alert('Export feature coming soon!')}
          >
            <Download size={18} /> Export
          </button>
          <button 
            onClick={() => setIsCreating(true)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            <Plus size={18} /> Add Scholarship
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-4 font-bold text-slate-600 text-sm uppercase tracking-wider">Name</th>
                <th className="p-4 font-bold text-slate-600 text-sm uppercase tracking-wider">Category</th>
                <th className="p-4 font-bold text-slate-600 text-sm uppercase tracking-wider">Deadline</th>
                <th className="p-4 font-bold text-slate-600 text-sm uppercase tracking-wider">State</th>
                <th className="p-4 font-bold text-slate-600 text-sm uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">Loading scholarships...</td>
                </tr>
              ) : filteredScholarships.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">No scholarships found.</td>
                </tr>
              ) : (
                filteredScholarships.map((scholarship) => (
                  <tr key={scholarship.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{scholarship.name}</td>
                    <td className="p-4 text-slate-600">
                      {(() => {
                        try {
                          return scholarship.eligible_categories ? JSON.parse(scholarship.eligible_categories).join(', ') : 'All';
                        } catch (e) {
                          return scholarship.eligible_categories || 'All';
                        }
                      })()}
                    </td>
                    <td className="p-4 text-slate-600">{new Date(scholarship.deadline).toLocaleDateString()}</td>
                    <td className="p-4 text-slate-600">
                      {(() => {
                        try {
                          return scholarship.eligible_states ? JSON.parse(scholarship.eligible_states).join(', ') : 'All';
                        } catch (e) {
                          return scholarship.eligible_states || 'All';
                        }
                      })()}
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button 
                        onClick={() => setIsEditing(scholarship)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(scholarship.id)}
                        className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};
