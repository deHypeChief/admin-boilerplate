import { createFileRoute, Outlet } from '@tanstack/react-router'
import "../assets/style/routes/adminLayout.css"
import { Header4 } from '@/components/typography'
import { BadgeInfo, Database, LayoutDashboard, Settings, Users } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin')({
    component: () => <AdminLayout />,
})

function AdminLayout() {
    return (
        <section className="layoutSet">
            <div className="layoutLeft">
                <div className="listWrap">

                    <div className="listMain">
                        <div className="logoInfo">
                            <div className="logo">
                                <BadgeInfo size={28} />
                            </div>
                            <div className="logoText">
                                <Header4>Aecm Inc.</Header4>
                            </div>
                        </div>
                        <div className="list">
                            <Link to="/dashboard" className="active">
                                <LayoutDashboard strokeWidth={2} size={20} />
                                <p>Dashboard</p>
                            </Link>

                            <Link to="/" className="">
                                <Database strokeWidth={2} size={20} />
                                <p>CMS</p>
                            </Link>

                        </div>
                    </div>

                    <div className="listMain">
                        <div className="list">
                            <Link to="/" className="">
                                <Settings strokeWidth={2} size={20} />
                                <p>Settings</p>
                            </Link>

                            <Link to="/" className="">
                                <Users strokeWidth={2} size={20} />
                                <p>Teams</p>
                            </Link>
                        </div>

                        <div className="listProfile">
                            <div className="o"></div>
                            <div className="oContent">
                                <p>Jamen Bonf</p>
                                <p>jamesbu@mail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layoutRight">
                <Outlet />
            </div>
        </section>
    )
}