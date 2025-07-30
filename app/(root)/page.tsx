import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

export default async function Home({ searchParams: {  } }: SearchParamProps) {
  const loggedIn = await getLoggedInUser()
  const accounts = await getAccounts({
    userId: loggedIn.$id
  })

  if (!accounts) return;

  const accountsData = accounts?.data;

  // console.log(accounts, loggedIn)

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transaction succesfully"
          />

          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
      </div>
    </section>
  );
}
