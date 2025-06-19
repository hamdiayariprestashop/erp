import React from 'react'
import { StatsCard } from '../components/dashboard/StatsCard'
import { RecentProjects } from '../components/dashboard/RecentProjects'
import { RevenueChart } from '../components/dashboard/RevenueChart'
import { 
  FolderKanban, 
  Users, 
  DollarSign, 
  Clock,
  TrendingUp,
  Calendar
} from 'lucide-react'

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening at Nex-Build.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="h-4 w-4 mr-2 inline" />
            This Month
          </button>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Active Projects"
          value={24}
          change="+12% from last month"
          trend="up"
          icon={FolderKanban}
          gradient="bg-gradient-to-r from-blue-500 to-blue-600"
        />
        <StatsCard
          title="Total Clients"
          value={156}
          change="+8% from last month"
          trend="up"
          icon={Users}
          gradient="bg-gradient-to-r from-emerald-500 to-emerald-600"
        />
        <StatsCard
          title="Monthly Revenue"
          value="$125,000"
          change="+15% from last month"
          trend="up"
          icon={DollarSign}
          gradient="bg-gradient-to-r from-indigo-500 to-purple-600"
        />
        <StatsCard
          title="Hours Logged"
          value={1840}
          change="+5% from last month"
          trend="up"
          icon={Clock}
          gradient="bg-gradient-to-r from-amber-500 to-orange-600"
        />
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <RecentProjects />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white rounded-xl p-4 text-left hover:shadow-md transition-all duration-200 border border-white/50">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3">
              <FolderKanban className="h-5 w-5 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">New Project</h4>
            <p className="text-sm text-gray-600">Create a new project and assign team members</p>
          </button>
          
          <button className="bg-white rounded-xl p-4 text-left hover:shadow-md transition-all duration-200 border border-white/50">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3">
              <Users className="h-5 w-5 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Add Client</h4>
            <p className="text-sm text-gray-600">Register a new client to the system</p>
          </button>
          
          <button className="bg-white rounded-xl p-4 text-left hover:shadow-md transition-all duration-200 border border-white/50">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">View Analytics</h4>
            <p className="text-sm text-gray-600">Analyze performance and metrics</p>
          </button>
        </div>
      </div>
    </div>
  )
}