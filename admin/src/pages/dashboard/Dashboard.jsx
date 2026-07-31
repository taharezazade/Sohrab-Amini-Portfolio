/** @format */

import DashboardHero from "../../components/dashboard/DashboardHero";
import DashboardStats from "../../components/dashboard/DashboardStats";
import DashboardQuickActions from "../../components/dashboard/DashboardQuickActions";
import DashboardRecentPortfolio from "../../components/dashboard/DashboardRecentPortfolio";
import DashboardRecentServices from "../../components/dashboard/DashboardRecentServices";
import DashboardSystemStatus from "../../components/dashboard/DashboardSystemStatus";
import DashboardTimeline from "../../components/dashboard/DashboardTimeline";

const Dashboard = () => {
  return (
    <div className='space-y-8'>
      <DashboardHero />

      <DashboardStats />

      <DashboardQuickActions />

      <div className='grid gap-6 xl:grid-cols-2'>
        <DashboardRecentPortfolio />

        <DashboardRecentServices />
      </div>

      <div className='grid gap-6 xl:grid-cols-2'>
        <DashboardSystemStatus />

        <DashboardTimeline />
      </div>
    </div>
  );
};

export default Dashboard;
