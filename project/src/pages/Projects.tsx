import React, { useState } from 'react'
import { Plus, Search, Filter, Calendar, DollarSign, User, MoreHorizontal } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'E-commerce Platform Redesign',
    client: 'TechCorp Ltd.',
    type: 'Web Development',
    status: 'In Progress',
    budget: 45000,
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    progress: 75,
    team: ['John Doe', 'Jane Smith', 'Mike Johnson'],
    priority: 'High'
  },
  {
    id: 2,
    name: 'Mobile Banking Application',
    client: 'FinanceBank International',
    type: 'Mobile Development',
    status: 'Planning',
    budget: 82000,
    startDate: '2024-02-01',
    endDate: '2024-05-20',
    progress: 25,
    team: ['Sarah Wilson', 'Tom Brown'],
    priority: 'High'
  },
  {
    id: 3,
    name: 'AI Customer Support Bot',
    client: 'SupportDesk Inc.',
    type: 'AI Development',
    status: 'Completed',
    budget: 28000,
    startDate: '2023-11-10',
    endDate: '2024-01-10',
    progress: 100,
    team: ['Alex Chen', 'Lisa Garcia'],
    priority: 'Medium'
  },
  {
    id: 4,
    name: 'Corporate Website Rebuild',
    client: 'GlobalCorp Solutions',
    type: 'Web Development',
    status: 'On Hold',
    budget: 35000,
    startDate: '2024-01-20',
    endDate: '2024-03-15',
    progress: 40,
    team: ['David Lee', 'Emma Taylor'],
    priority: 'Low'
  }
]

const statusColors = {
  'In Progress': 'bg-blue-100 text-blue-800',
  'Planning': 'bg-yellow-100 text-yellow-800',
  'Completed': 'bg-emerald-100 text-emerald-800',
  'On Hold': 'bg-red-100 text-red-800',
}

const priorityColors = {
  'High': 'bg-red-100 text-red-800',
  'Medium': 'bg-yellow-100 text-yellow-800',
  'Low': 'bg-green-100 text-green-800',
}

const typeColors = {
  'Web Development': 'bg-blue-100 text-blue-800',
  'Mobile Development': 'bg-purple-100 text-purple-800',
  'AI Development': 'bg-indigo-100 text-indigo-800',
}

export function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All' || project.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">Manage and track all your development projects</p>
        </div>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center gap-2">
          <Plus className="h-5 w-5" />
          New Project
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects or clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="All">All Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Planning">Planning</option>
            <option value="Completed">Completed</option>
            <option value="On Hold">On Hold</option>
          </select>
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Filter className="h-4 w-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-3">{project.client}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status as keyof typeof statusColors]}`}>
                    {project.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[project.type as keyof typeof typeColors]}`}>
                    {project.type}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[project.priority as keyof typeof priorityColors]}`}>
                    {project.priority} Priority
                  </span>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreHorizontal className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  <span>${project.budget.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{project.startDate} - {project.endDate}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                <span>Team: {project.team.join(', ')}</span>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                View Details
              </button>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  Edit
                </button>
                <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-lg transition-colors">
                  Update Status
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}