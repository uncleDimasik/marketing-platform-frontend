import { useWhoAmIQuery } from '@/services/user/useWhoAmIQuery.js';
import { CampaignFormView } from '@/views/CampaignFormView.jsx';

export default function DashboardPage() {
  const { data } = useWhoAmIQuery();

  return (
    <>
      Dashboard
      {data && JSON.stringify(data)}
      <CampaignFormView />
    </>
  );
}
