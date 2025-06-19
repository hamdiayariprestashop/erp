import React from 'react'
import { Calendar, User, DollarSign } from 'lucide-react'

const recentProjects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    client: 'TechCorp Ltd.',
    type: 'Web Development',
    status: 'In Progress',
    budget: '$45,000',
    dueDate: '2024-02-15',
    progress: 75,
  },
  {
    id: 2,
    name: 'Mobile Banking App',
    client: 'FinanceBank',
    type: 'Mobile Development',
    status: 'Planning',
    budget: '$82,000',
    dueDate: '2024-03-20',
    progress: 25,
  },
  {
    id: 3,
    name: 'AI Chatbot Integration',
    client: 'SupportDesk Inc.',
    type: 'AI Development',
    status: 'Completed',
    budget: '$28,000',
    dueDate: '2024-01-10',
    progress: 100,
  },
]

const statusColors = {
  'In Progress': 'bg-blue-100 text-blue-800',
  'Planning': 'bg-yellow-100 text-yellow-800',
  'Completed': 'bg-emerald-100 text-emerald-800',
  'On Hold': 'bg-red-100 text-red-800',
}

export function RecentProjects() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Projects</h3>
        <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {recentProjects.map((project) => (
          <div key={project.id} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{project.name}</h4>
                <p className="text-sm text-gray-600">{project.type}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status as keyof typeof statusColors]}`}>
                {project.status}
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {project.client}
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                {project.budget}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {project.dueDate}
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}