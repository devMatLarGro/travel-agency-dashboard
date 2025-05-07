import React from 'react'
import {Header} from "../../../components";

const Dashboard = () => {
    const user = {
        name: 'Adrian',
        email: ''
    }

    return (
        <main className='dashboard wrapper'>
            <Header
                title={`Welcome ${user.name ?? 'Guest'}`}
                description="Track activity and changes"
            />
        </main>
    )
}
export default Dashboard
