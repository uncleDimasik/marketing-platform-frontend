import { useWhoAmIQuery } from '@/services/user/useWhoAmIQuery.js';

export default function DashboardPage() {
  const { data } = useWhoAmIQuery();

  return (
    <>
      Dashboard
      {data && JSON.stringify(data)}
    </>
  );
}
