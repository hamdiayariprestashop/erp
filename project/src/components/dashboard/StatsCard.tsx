import React from 'react'
import { DivideIcon as LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  icon: LucideIcon
  gradient: string
}

export function StatsCard({ title, value, change, trend, icon: Icon, gradient }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm font-medium mt-2 ${
              trend === 'up' ? 'text-emerald-600' : 
              trend === 'down' ? 'text-red-600' : 
              'text-gray-600'
            }`}>
              {change}
            </p>
          )}
        </div>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${gradient}`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
      </div>
    </div>
  )
}