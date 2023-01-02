import React, { useState } from 'react';
import AnalyticCardOne from '../../components/cards/AnalyticCardOne'
import RecentCard from '../../components/cards/RecentCard'

const Dashboard = () => {
    // const [loading, setLoading] = useState(false)
    // const 
    return (
        <div className='px-8 py-4'>
            <AnalyticCardOne />
            <RecentCard />
        </div>
    );
}

export default Dashboard;
