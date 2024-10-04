import { Header2, Paragraph } from '@/components/typography'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/dashboard')({
  component: () => <Dashboard />,
})


function Dashboard() {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="headerInfo">
          <Header2>Dashboard</Header2>
          <Paragraph>An overview on your site activity</Paragraph>
        </div>
      </div>
    </div>
  )
}